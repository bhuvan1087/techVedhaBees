import { CalendarCheck, Clock, Send, ShieldCheck } from 'lucide-react';
import { useMemo, useState } from 'react';
import AnimatedSection from '../components/AnimatedSection.jsx';
import SectionHeader from '../components/SectionHeader.jsx';

const createInitialForm = (today) => ({
  name: '',
  phone: '',
  email: '',
  preferredDate: today,
  preferredTime: '10:00 - 11:00',
  department: 'General Consultation',
  message: '',
});

const inputClass =
  'min-h-[3.25rem] rounded-2xl border border-white/10 bg-white/[0.07] px-4 text-white outline-none transition placeholder:text-slate-500 focus:border-honey/55';

const departments = ['General Consultation', 'Dental', 'Cardiology', 'Dermatology', 'Pediatrics', 'Orthopedics'];
const timeSlots = [
  '10:00 - 11:00',
  '11:00 - 12:00',
  '12:00 - 13:00',
  '14:00 - 15:00',
  '15:00 - 16:00',
  '16:00 - 17:00',
  '17:00 - 18:00',
];

export default function Appointments() {
  const today = useMemo(() => new Date().toISOString().split('T')[0], []);
  const [form, setForm] = useState(() => createInitialForm(today));
  const [status, setStatus] = useState({ type: 'idle', message: '' });
  const [recentBookings, setRecentBookings] = useState([]);
  const [timePickerOpen, setTimePickerOpen] = useState(false);

  const endpoint = import.meta.env.VITE_APPOINTMENT_SCRIPT_URL;

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function selectTimeSlot(slot) {
    setForm((current) => ({ ...current, preferredTime: slot }));
    setTimePickerOpen(false);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus({ type: 'loading', message: 'Saving appointment request...' });

    const appointment = {
      ...form,
      status: 'NEW',
      source: 'TechVedhaBees Website',
      submittedAt: new Date().toISOString(),
    };

    try {
      if (endpoint) {
        await fetch(endpoint, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify(appointment),
        });
      }

      setRecentBookings((current) => [appointment, ...current].slice(0, 3));
      setForm(createInitialForm(today));
      setStatus({
        type: 'success',
        message: endpoint
          ? 'Appointment request sent successfully.'
          : 'Demo saved locally. Add a Google Apps Script URL to send it to Sheets.',
      });
    } catch (error) {
      setStatus({ type: 'error', message: 'Unable to save appointment. Please try again.' });
    }
  }

  return (
    <section id="appointments" className="section-panel">
      <div className="container-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <SectionHeader
            kicker="Appointments"
            title="Book appointments from the website and sync them into your clinic workflow"
            copy="Capture patient appointment requests online, then connect the form to Google Sheets while your local clinic application reads and processes the saved bookings."
          />
          <AnimatedSection className="mt-8 grid gap-4">
            {[
              { icon: CalendarCheck, text: 'Collect patient details and preferred visit slot' },
              { icon: Clock, text: 'Keep requests ready for local app sync' },
              { icon: ShieldCheck, text: 'Store only appointment request details at this stage' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.045] p-4 text-slate-300">
                <div className="grid size-11 place-items-center rounded-2xl bg-cyanEdge/10 text-cyanEdge">
                  <Icon size={21} />
                </div>
                <span className="text-sm font-semibold">{text}</span>
              </div>
            ))}
          </AnimatedSection>
        </div>

        <AnimatedSection>
          <form onSubmit={handleSubmit} className="glass-panel rounded-[2rem] p-6 sm:p-8" aria-label="Book appointment form">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-sm font-semibold text-slate-300">Patient Name</span>
                <input className={inputClass} type="text" name="name" value={form.name} onChange={updateField} placeholder="Full name" required />
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-semibold text-slate-300">Phone</span>
                <input className={inputClass} type="tel" name="phone" value={form.phone} onChange={updateField} placeholder="Mobile number" required />
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-semibold text-slate-300">Email</span>
                <input className={inputClass} type="email" name="email" value={form.email} onChange={updateField} placeholder="patient@email.com" />
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-semibold text-slate-300">Department</span>
                <select className={inputClass} name="department" value={form.department} onChange={updateField}>
                  {departments.map((department) => (
                    <option key={department} value={department} className="bg-midnight text-white">
                      {department}
                    </option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-semibold text-slate-300">Preferred Date</span>
                <input className={inputClass} type="date" name="preferredDate" min={today} value={form.preferredDate} onChange={updateField} required />
              </label>
              <fieldset className="relative grid gap-2 sm:col-span-2">
                <span className="text-sm font-semibold text-slate-300">Preferred Time</span>
                <button
                  type="button"
                  onClick={() => setTimePickerOpen((open) => !open)}
                  className={`${inputClass} flex w-full items-center justify-between text-left`}
                  aria-expanded={timePickerOpen}
                >
                  <span>{form.preferredTime}</span>
                  <Clock size={18} className="text-honey" />
                </button>
                <input type="hidden" name="preferredTime" value={form.preferredTime} required />

                {timePickerOpen ? (
                  <div className="absolute left-0 right-0 top-full z-20 mt-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-800 shadow-premium">
                    <p className="mb-3 text-sm font-semibold text-slate-700">
                      {new Date(`${form.preferredDate}T00:00:00`).toLocaleDateString('en-IN', {
                        weekday: 'long',
                        day: '2-digit',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </p>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => selectTimeSlot(slot)}
                          className={`min-h-[3.1rem] rounded-md border px-4 text-sm font-semibold transition ${
                            form.preferredTime === slot
                              ? 'border-honey bg-amberGlow/30 text-ink'
                              : 'border-slate-300 bg-white text-slate-700 hover:border-honey hover:bg-amberGlow/10'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                    <p className="mt-4 text-xs text-slate-500">
                      The time slots are displayed in your local time zone.
                    </p>
                  </div>
                ) : null}
              </fieldset>
              <label className="grid gap-2 sm:col-span-2">
                <span className="text-sm font-semibold text-slate-300">Message</span>
                <textarea
                  name="message"
                  rows="4"
                  value={form.message}
                  onChange={updateField}
                  placeholder="Brief reason for visit"
                  className="rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-honey/55"
                />
              </label>
            </div>

            {status.message ? (
              <div
                className={`mt-5 rounded-2xl border px-4 py-3 text-sm font-semibold ${
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
              disabled={status.type === 'loading'}
              className="mt-6 inline-flex min-h-[3.25rem] w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-honey to-amberGlow px-6 text-sm font-extrabold text-ink shadow-glow transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status.type === 'loading' ? 'Saving...' : 'Book Appointment'}
              <Send size={18} />
            </button>

            {recentBookings.length ? (
              <div className="mt-6 grid gap-3">
                {recentBookings.map((booking) => (
                  <div key={booking.submittedAt} className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-bold text-white">{booking.name}</span>
                      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-amberGlow">{booking.status}</span>
                    </div>
                    <p className="mt-2 text-sm text-slate-400">
                      {booking.department} / {booking.preferredDate} / {booking.preferredTime}
                    </p>
                  </div>
                ))}
              </div>
            ) : null}
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
}
