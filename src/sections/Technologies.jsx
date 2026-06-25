import { Boxes, Cloud, CodeXml, Container, Database, Github, Hexagon, Server } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection.jsx';
import SectionHeader from '../components/SectionHeader.jsx';

const technologies = [
  { icon: CodeXml, name: 'React' },
  { icon: Hexagon, name: 'Java' },
  { icon: Server, name: 'Spring Boot' },
  { icon: Boxes, name: 'Node.js' },
  { icon: Database, name: 'MySQL' },
  { icon: Container, name: 'Docker' },
  { icon: Cloud, name: 'AWS' },
  { icon: Github, name: 'GitHub' },
];

export default function Technologies() {
  return (
    <section id="technologies" className="section-panel">
      <div className="container-shell">
        <SectionHeader
          kicker="Technologies"
          title="Modern stacks for dependable product delivery"
          copy="We use proven frameworks, cloud platforms, and engineering tools to build software that stays fast, secure, and maintainable."
        />
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {technologies.map(({ icon: Icon, name }, index) => (
            <AnimatedSection key={name} delay={index * 0.04}>
              <div className="group glass-panel flex min-h-32 flex-col items-center justify-center gap-4 rounded-3xl p-5 transition duration-300 hover:-translate-y-1 hover:border-cyanEdge/35">
                <div className="grid size-12 place-items-center rounded-2xl bg-white/[0.08] text-honey transition group-hover:bg-honey/15">
                  <Icon size={24} />
                </div>
                <span className="text-base font-bold text-white">{name}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
