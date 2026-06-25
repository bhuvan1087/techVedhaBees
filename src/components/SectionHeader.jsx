import AnimatedSection from './AnimatedSection.jsx';

export default function SectionHeader({ kicker, title, copy, centered = false }) {
  return (
    <AnimatedSection className={centered ? 'mx-auto text-center' : ''}>
      <span className="section-kicker">{kicker}</span>
      <h2 className={`section-title ${centered ? 'mx-auto' : ''}`}>{title}</h2>
      {copy ? <p className={`section-copy ${centered ? 'mx-auto' : ''}`}>{copy}</p> : null}
    </AnimatedSection>
  );
}
