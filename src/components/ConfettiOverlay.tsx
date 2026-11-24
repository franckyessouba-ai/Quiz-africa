import { useEffect, useRef } from 'react';

interface ConfettiOverlayProps {
  active: boolean;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  rotation: number;
  vr: number;
  alpha: number;
}

const COLORS = ['#009E49', '#F5B700', '#D92B2B', '#FFFFFF', '#22C55E'];

export function ConfettiOverlay({ active }: ConfettiOverlayProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!active) return;
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles: Particle[] = Array.from({ length: 110 }, (_, i) => ({
      x: (window.innerWidth * (i + 0.5)) / 110 + (Math.random() - 0.5) * 40,
      y: -20 - Math.random() * 240,
      vx: (Math.random() - 0.5) * 4.2,
      vy: 2.8 + Math.random() * 4.2,
      size: 6 + Math.random() * 7,
      color: COLORS[i % COLORS.length],
      rotation: Math.random() * Math.PI * 2,
      vr: (Math.random() - 0.5) * 0.16,
      alpha: 1,
    }));

    let rafId = 0;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      let alive = false;
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.05;
        p.rotation += p.vr;
        if (elapsed > 2600) {
          p.alpha = Math.max(0, p.alpha - 0.025);
        }
        if (p.alpha > 0 && p.y < canvas.height + 40) {
          alive = true;
          ctx.save();
          ctx.globalAlpha = p.alpha;
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rotation);
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size * 0.55);
          ctx.restore();
        }
      }

      if (alive && elapsed < 4500) {
        rafId = requestAnimationFrame(tick);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
    };
  }, [active]);

  if (!active) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      aria-hidden="true"
    />
  );
}
