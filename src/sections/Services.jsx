import { CloudCog, Code2, Figma, Network, ServerCog, Smartphone } from 'lucide-react';
import SectionHeader from '../components/SectionHeader.jsx';
import ServiceCard from '../components/ServiceCard.jsx';

const services = [
  { icon: Code2, title: 'Web Development', copy: 'High-performance web apps, portals, dashboards, and SaaS platforms built for maintainability.' },
  { icon: Smartphone, title: 'Mobile App Development', copy: 'Responsive, intuitive mobile experiences for customer, workforce, and enterprise use cases.' },
  { icon: CloudCog, title: 'Cloud Solutions', copy: 'Cloud-native architecture, deployment pipelines, modernization, and infrastructure strategy.' },
  { icon: ServerCog, title: 'Enterprise Software', copy: 'Reliable business systems that connect operations, data, teams, and customer workflows.' },
  { icon: Figma, title: 'UI/UX Design', copy: 'Clean product interfaces with research-led flows, polished visuals, and conversion-focused details.' },
  { icon: Network, title: 'API Development', copy: 'Secure, documented APIs and integrations that make your digital ecosystem work together.' },
];

export default function Services() {
  return (
    <section id="services" className="section-panel">
      <div className="container-shell">
        <SectionHeader
          kicker="Services"
          title="End-to-end technology solutions for modern businesses"
          copy="From the first product sketch to production-grade software, our teams build systems that are elegant, resilient, and ready to grow."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
