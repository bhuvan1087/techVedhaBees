import { Mail, MapPin, Send } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection.jsx';
import SectionHeader from '../components/SectionHeader.jsx';

export default function Contact() {
  return (
    <section id="contact" className="section-panel">
      <div className="container-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <SectionHeader
            kicker="Contact"
            title="Ready to build your next digital product?"
            copy="Tell us what you are planning. We will help map the right technical path and turn the idea into a production-ready solution."
          />
          <AnimatedSection className="mt-8 grid gap-4">
            <div className="flex items-center gap-4 text-slate-300">
              <Mail className="text-honey" size={21} />
              <span>hello@techvedhabees.com</span>
            </div>
            <div className="flex items-center gap-4 text-slate-300">
              <MapPin className="text-honey" size={21} />
              <span>Building digital products for global teams</span>
            </div>
          </AnimatedSection>
        </div>
        <AnimatedSection>
          {/* Form markup is ready to connect to an API, CRM, or serverless email handler. */}
          <form className="glass-panel rounded-[2rem] p-6 sm:p-8" aria-label="Contact form">
            <div className="grid gap-5">
              <label className="grid gap-2">
                <span className="text-sm font-semibold text-slate-300">Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="min-h-[3.25rem] rounded-2xl border border-white/10 bg-white/[0.07] px-4 text-white outline-none transition placeholder:text-slate-500 focus:border-honey/55"
                />
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-semibold text-slate-300">Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  className="min-h-[3.25rem] rounded-2xl border border-white/10 bg-white/[0.07] px-4 text-white outline-none transition placeholder:text-slate-500 focus:border-honey/55"
                />
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-semibold text-slate-300">Message</span>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tell us about your project"
                  className="rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-honey/55"
                />
              </label>
              <button
                type="submit"
                className="inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-honey to-amberGlow px-6 text-sm font-extrabold text-ink shadow-glow transition hover:-translate-y-0.5"
              >
                Send Message
                <Send size={18} />
              </button>
            </div>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
}
