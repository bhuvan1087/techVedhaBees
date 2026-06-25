import { BrainCircuit, Cpu, UsersRound } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection.jsx';
import SectionHeader from '../components/SectionHeader.jsx';

const meanings = [
  { icon: Cpu, label: 'Tech', copy: 'Technology that solves real business problems with modern engineering.' },
  { icon: BrainCircuit, label: 'Vedha', copy: 'Knowledge, insight, and thoughtful decision-making behind every solution.' },
  { icon: UsersRound, label: 'Bees', copy: 'Collaboration and productivity, where skilled teams build together with purpose.' },
];

export default function About() {
  return (
    <section id="about" className="section-panel relative">
      <div className="absolute inset-x-0 top-1/2 -z-10 h-72 bg-gradient-to-r from-honey/8 via-cyanEdge/8 to-transparent blur-3xl" />
      <div className="container-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionHeader
          kicker="About TechVedhaBees"
          title="A name built around technology, knowledge, and collaborative execution"
          copy="TechVedhaBees combines strategic thinking with disciplined engineering, helping companies turn ambitious ideas into reliable digital products."
        />
        <AnimatedSection className="grid gap-5">
          {meanings.map(({ icon: Icon, label, copy }) => (
            <article key={label} className="glass-panel flex gap-5 rounded-3xl p-6">
              <div className="grid size-[3.25rem] shrink-0 place-items-center rounded-2xl bg-honey/[0.12] text-honey">
                <Icon size={25} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{label}</h3>
                <p className="mt-2 leading-7 text-slate-400">{copy}</p>
              </div>
            </article>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
