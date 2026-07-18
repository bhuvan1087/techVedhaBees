import { Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection.jsx';
import SectionHeader from '../components/SectionHeader.jsx';

const countries = [
  { code: 'IN', label: 'India', dialCode: '+91', pattern: /^[6-9]\d{9}$/, example: '9876543210' },
  { code: 'US', label: 'United States', dialCode: '+1', pattern: /^\d{10}$/, example: '2025550145' },
  { code: 'GB', label: 'United Kingdom', dialCode: '+44', pattern: /^7\d{9}$/, example: '7123456789' },
  { code: 'AE', label: 'United Arab Emirates', dialCode: '+971', pattern: /^5\d{8}$/, example: '501234567' },
];

const initialForm = {
  name: '',
  email: '',
  country: 'IN',
  mobile: '',
  message: '',
};

const fieldClass =
  'min-h-[3.25rem] rounded-2xl border border-white/10 bg-white/[0.07] px-4 text-white outline-none transition placeholder:text-slate-500 focus:border-honey/55';

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: 'idle', message: '' });

  const selectedCountry = countries.find((country) => country.code === form.country) ?? countries[0];

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setStatus({ type: 'idle', message: '' });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const mobile = form.mobile.replace(/\D/g, '');

    if (!selectedCountry.pattern.test(mobile)) {
      setStatus({
        type: 'error',
        message: `Enter a valid ${selectedCountry.label} mobile number. Example: ${selectedCountry.example}`,
      });
      return;
    }

    setForm(initialForm);
    setStatus({
      type: 'success',
      message: 'Message validated successfully. Connect this form to email or Google Sheets to store enquiries.',
    });
  }

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
          <form onSubmit={handleSubmit} className="glass-panel rounded-[2rem] p-6 sm:p-8" aria-label="Contact form">
            <div className="grid gap-5">
              <label className="grid gap-2">
                <span className="text-sm font-semibold text-slate-300">Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={updateField}
                  placeholder="Your name"
                  className={fieldClass}
                  required
                />
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-semibold text-slate-300">Email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={updateField}
                  placeholder="you@company.com"
                  className={fieldClass}
                  required
                />
              </label>
              <div className="grid gap-5 sm:grid-cols-[0.9fr_1.1fr]">
                <label className="grid gap-2">
                  <span className="text-sm font-semibold text-slate-300">Country</span>
                  <select name="country" value={form.country} onChange={updateField} className={fieldClass}>
                    {countries.map((country) => (
                      <option key={country.code} value={country.code} className="bg-midnight text-white">
                        {country.label} ({country.dialCode})
                      </option>
                    ))}
                  </select>
                </label>
                <label className="grid gap-2">
                  <span className="text-sm font-semibold text-slate-300">Mobile Number</span>
                  <div className="flex min-h-[3.25rem] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.07] transition focus-within:border-honey/55">
                    <span className="grid min-w-16 place-items-center border-r border-white/10 px-4 text-sm font-bold text-amberGlow">
                      {selectedCountry.dialCode}
                    </span>
                    <input
                      type="tel"
                      name="mobile"
                      value={form.mobile}
                      onChange={updateField}
                      placeholder={selectedCountry.example}
                      className="min-w-0 flex-1 bg-transparent px-4 text-white outline-none placeholder:text-slate-500"
                      required
                    />
                  </div>
                </label>
              </div>
              <label className="grid gap-2">
                <span className="text-sm font-semibold text-slate-300">Message</span>
                <textarea
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={updateField}
                  placeholder="Tell us about your project"
                  className="rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-honey/55"
                  required
                />
              </label>
              {status.message ? (
                <div
                  className={`rounded-2xl border px-4 py-3 text-sm font-semibold ${
                    status.type === 'error'
                      ? 'border-red-400/25 bg-red-500/10 text-red-200'
                      : 'border-honey/25 bg-honey/10 text-amberGlow'
                  }`}
                >
                  {status.message}
                </div>
              ) : null}
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
