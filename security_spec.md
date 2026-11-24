# Security Specification — QUIZ AFRICA (Firebase Firestore)

## 1. Data Invariants
1. **Authenticated & Verified Identity**: All Firestore writes and duel-chat operations require `request.auth != null && request.auth.token.email_verified == true`.
2. **PII Isolation**: `/players/{uid}` contains strictly game profile metadata (`name`, `countryCode`, `avatar`, `language`, scores, streak) and never stores emails, phone numbers, or addresses.
3. **Strict Duel Participant Isolation**:
   - A duel room `/duels/{roomCode}` can have at most two participants (`hostUid` and `guestUid`).
   - Only `hostUid` or `guestUid` (checked relationally via `exists(/databases/$(database)/documents/duels/$(roomCode)/participants/$(request.auth.uid))` / parent `get()`) can read or write messages in `/duels/{roomCode}/messages/{messageId}`.
   - Outsiders cannot read, list, create, update, or delete duel chat messages.
4. **Immutability & Anti-Tampering**:
   - `createdAt`, `hostUid`, and `roomCode` are immutable after creation.
   - `createdAt` and `updatedAt` must equal `request.time`.
   - Once `duels/{roomCode}.status == 'finished'`, the duel room is terminally locked (`allow update: if false` for terminal state).
   - Chat messages in `/duels/{roomCode}/messages/{messageId}` are append-only (`update` and `delete` denied).

## 2. The "Dirty Dozen" Adversarial Payloads (Must Return `PERMISSION_DENIED`)
1. **Unauthenticated read of duel chat**: `GET /duels/GA492X/messages/m1` with `auth = null`.
2. **Outsider reading duel chat**: `GET /duels/GA492X/messages/m1` or `LIST /duels/GA492X/messages` with `auth.uid = "outsider_uid"` (not in `/duels/GA492X/participants`).
3. **Outsider sending duel chat message**: `CREATE /duels/GA492X/messages/m2` with `auth.uid = "outsider_uid"`.
4. **Sender UID spoofing in chat**: `CREATE /duels/GA492X/messages/m2` by `guestUid` claiming `senderUid: hostUid`.
5. **Shadow / ghost field injection on chat**: `CREATE /duels/GA492X/messages/m2` adding `isAdmin: true` or `systemBadge: true`.
6. **Oversized message / DoS payload**: `CREATE /duels/GA492X/messages/m2` with `text` > 280 chars or invalid `roomCode` ID > 128 chars.
7. **Mutating/deleting chat history**: `UPDATE` or `DELETE /duels/GA492X/messages/m1` even by the message author.
8. **Hijacking an already-full duel**: `UPDATE /duels/GA492X` setting `guestUid = "attacker_uid"` when `existing().guestUid != ""`.
9. **Tampering with a finished duel**: `UPDATE /duels/GA492X` changing `winnerUid` or `hostScore` when `existing().status == "finished"`.
10. **Forging client timestamp**: `CREATE /duels/GA492X/messages/m2` with `createdAt: "2020-01-01T00:00:00Z"` instead of `request.time`.
11. **Writing another player's cloud profile**: `UPDATE /players/victim_uid` with `auth.uid = "attacker_uid"`.
12. **Blanket unverified email bypass / unindexed private query**: `CREATE /players/my_uid` with `email_verified: false` or `totalScore: -500`.
