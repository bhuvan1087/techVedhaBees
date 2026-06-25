import { ArrowRight } from 'lucide-react';

const styles = {
  primary:
    'bg-gradient-to-r from-honey to-amberGlow text-ink shadow-glow hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(245,184,46,0.28)]',
  secondary:
    'border border-white/15 bg-white/[0.08] text-white hover:-translate-y-0.5 hover:border-cyanEdge/45 hover:bg-white/[0.12]',
};

export default function Button({ children, href = '#contact', variant = 'primary', icon = true }) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-bold transition duration-300 ${styles[variant]}`}
    >
      <span>{children}</span>
      {icon ? <ArrowRight aria-hidden="true" size={18} /> : null}
    </a>
  );
}
