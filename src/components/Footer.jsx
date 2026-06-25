import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import Logo from './Logo.jsx';
import { scrollToSection } from '../utils/scrollToSection.js';

const links = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Technologies', href: '#technologies' },
  { label: 'Contact', href: '#contact' },
];
const socials = [Github, Linkedin, Twitter, Mail];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-midnight/90 py-4">
      <div className="container-shell flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <Logo compact />
        <p className="text-xs text-slate-500">
          Copyright &copy; {new Date().getFullYear()} TechVedhaBees. All rights reserved.
        </p>
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-4 text-sm text-slate-300">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(event) => scrollToSection(event, link.href)}
              className="transition hover:text-honey"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex gap-3">
          {socials.map((Icon, index) => (
            <span
              key={index}
              aria-label="Social profile placeholder"
              className="grid size-8 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-500"
            >
              <Icon size={16} />
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
