class SoundEngine {
  private ctx: AudioContext | null = null;
  private muted: boolean = false;

  constructor() {
    try {
      const saved = localStorage.getItem('quiz_africa_muted');
      this.muted = saved === 'true';
    } catch {
      this.muted = false;
    }
  }

  private getContext(): AudioContext | null {
    if (this.muted || typeof window === 'undefined') return null;
    try {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (AudioCtx) {
          this.ctx = new AudioCtx();
        }
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume().catch(() => {});
      }
      return this.ctx;
    } catch {
      return null;
    }
  }

  public isMuted(): boolean {
    return this.muted;
  }

  public toggleMute(): boolean {
    this.muted = !this.muted;
    try {
      localStorage.setItem('quiz_africa_muted', String(this.muted));
    } catch {
      // ignore storage errors
    }
    return this.muted;
  }

  private playTone(
    freq: number,
    duration: number,
    type: OscillatorType = 'sine',
    delay = 0,
    volume = 0.14
  ) {
    const ctx = this.getContext();
    if (!ctx) return;
    const now = ctx.currentTime + delay;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, now);
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.exponentialRampToValueAtTime(volume, now + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + duration + 0.02);
  }

  public playClick() {
    this.playTone(540, 0.06, 'triangle', 0, 0.07);
  }

  public playCorrect() {
    // Bright celebratory ascending triad (C5 - E5 - G5 - C6)
    this.playTone(523.25, 0.12, 'triangle', 0, 0.14);
    this.playTone(659.25, 0.12, 'triangle', 0.07, 0.14);
    this.playTone(783.99, 0.14, 'triangle', 0.14, 0.14);
    this.playTone(1046.5, 0.25, 'sine', 0.21, 0.16);
  }

  public playWrong() {
    // Gentle low two-tone buzz
    this.playTone(220, 0.16, 'sawtooth', 0, 0.09);
    this.playTone(165, 0.24, 'sawtooth', 0.12, 0.09);
  }

  public playTick() {
    this.playTone(880, 0.04, 'sine', 0, 0.04);
  }

  public playVictoryFanfare() {
    const notes = [523.25, 659.25, 783.99, 1046.5, 783.99, 1046.5];
    const delays = [0, 0.1, 0.2, 0.32, 0.48, 0.6];
    const durs = [0.12, 0.12, 0.12, 0.18, 0.12, 0.45];
    notes.forEach((freq, i) => {
      this.playTone(freq, durs[i], 'triangle', delays[i], 0.16);
    });
  }

  public playNewRecord() {
    const notes = [587.33, 739.99, 880, 1174.66, 1479.98];
    notes.forEach((freq, i) => {
      this.playTone(freq, 0.24, 'sine', i * 0.09, 0.15);
    });
  }
}

export const soundEngine = new SoundEngine();
