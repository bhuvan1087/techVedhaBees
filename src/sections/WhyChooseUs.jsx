import { CheckCircle2, Code, Gauge, LockKeyhole, Scale3d, Sparkles } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection.jsx';
import SectionHeader from '../components/SectionHeader.jsx';

const reasons = [
  { icon: Scale3d, title: 'Scalable Solutions' },
  { icon: LockKeyhole, title: 'Secure Architecture' },
  { icon: Gauge, title: 'Fast Delivery' },
  { icon: Code, title: 'Clean Code' },
  { icon: Sparkles, title: 'Customer Focus' },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-panel">
      <div className="container-shell grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
        <AnimatedSection className="glass-panel relative overflow-hidden rounded-[2rem] p-8 sm:p-10">
          <div className="absolute right-0 top-0 h-44 w-44 translate-x-12 -translate-y-12 rounded-full bg-honey/18 blur-3xl" />
          <div className="relative">
            <CheckCircle2 className="mb-8 text-honey" size={42} />
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
              Built for teams that need clarity, confidence, and momentum.
            </h2>
            <p className="mt-5 leading-8 text-slate-300">
              Our delivery approach blends senior engineering judgment, transparent communication, and a practical
              focus on outcomes, so your product keeps moving without sacrificing quality.
            </p>
          </div>
        </AnimatedSection>
        <div>
          <SectionHeader kicker="Why Choose Us" title="Technology partnership with execution discipline" />
          <div className="mt-8 grid gap-4">
            {reasons.map(({ icon: Icon, title }, index) => (
              <AnimatedSection key={title} delay={index * 0.05}>
                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.045] p-4 transition hover:border-honey/35 hover:bg-white/[0.07]">
                  <div className="grid size-12 place-items-center rounded-2xl bg-cyanEdge/10 text-cyanEdge">
                    <Icon size={22} />
                  </div>
                  <span className="text-lg font-bold text-white">{title}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
