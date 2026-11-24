import { useState } from 'react';
import { getAvatarOption } from '../data/avatars';
import { AvatarId } from '../types/quiz';

interface AvatarBadgeProps {
  avatarId: AvatarId;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  ringColor?: string;
}

const SIZE_CLASSES: Record<NonNullable<AvatarBadgeProps['size']>, string> = {
  xs: 'w-8 h-8 text-base',
  sm: 'w-10 h-10 text-lg',
  md: 'w-12 h-12 text-2xl',
  lg: 'w-16 h-16 text-3xl',
  xl: 'w-20 h-20 text-4xl',
};

export function AvatarBadge({
  avatarId,
  size = 'md',
  className = '',
  ringColor,
}: AvatarBadgeProps) {
  const [imgError, setImgError] = useState(false);
  const option = getAvatarOption(avatarId);

  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-full bg-[#16241C] border-2 flex items-center justify-center select-none ${SIZE_CLASSES[size]} ${className}`}
      style={{ borderColor: ringColor || option.accentColor }}
    >
      {!imgError ? (
        <img
          src={option.image}
          alt={option.label.en}
          referrerPolicy="no-referrer"
          onError={() => setImgError(true)}
          className="w-full h-full object-cover"
        />
      ) : (
        <span aria-hidden="true">{option.emojiFallback}</span>
      )}
    </div>
  );
}
