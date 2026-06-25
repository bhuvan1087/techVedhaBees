import { Clock3, Layers3, SmilePlus, Trophy } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection.jsx';

const stats = [
  { icon: Trophy, value: '50+', label: 'Projects Completed' },
  { icon: Layers3, value: '25+', label: 'Technologies Used' },
  { icon: SmilePlus, value: '98%', label: 'Client Satisfaction' },
  { icon: Clock3, value: '24/7', label: 'Support Availability' },
];

export default function Stats() {
  return (
    <section className="py-20">
      <div className="container-shell">
        <div className="glass-panel grid gap-4 rounded-[2rem] p-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ icon: Icon, value, label }, index) => (
            <AnimatedSection key={label} delay={index * 0.05}>
              <div className="rounded-3xl bg-white/[0.045] p-6 text-center">
                <Icon className="mx-auto text-honey" size={30} />
                <div className="mt-5 text-4xl font-extrabold text-white">{value}</div>
                <p className="mt-2 text-sm font-semibold text-slate-400">{label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
