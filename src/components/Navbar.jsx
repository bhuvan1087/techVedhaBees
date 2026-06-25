import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Button from './Button.jsx';
import Logo from './Logo.jsx';
import { scrollToSection } from '../utils/scrollToSection.js';

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Technologies', href: '#technologies' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  function handleNavClick(event, href) {
    scrollToSection(event, href);
    setOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/75 backdrop-blur-xl">
      <nav className="container-shell flex h-20 items-center justify-between" aria-label="Primary navigation">
        <Logo />
        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(event) => handleNavClick(event, item.href)}
              className="text-sm font-semibold text-slate-300 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="hidden lg:block">
          <Button href="#appointments" icon={false}>
            Book Appointment
          </Button>
        </div>
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="grid size-11 place-items-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {open ? (
        <div className="container-shell pb-5 lg:hidden">
          <div className="glass-panel rounded-2xl p-4">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(event) => handleNavClick(event, item.href)}
                  className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/[0.08] hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="mt-4">
              <Button href="#appointments" icon={false}>
                Book Appointment
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
