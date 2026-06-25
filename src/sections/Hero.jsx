import { motion } from 'framer-motion';
import { Cloud, Code2, Database, Layers3, ShieldCheck, Smartphone } from 'lucide-react';
import Button from '../components/Button.jsx';

const nodes = [
  { icon: Code2, label: 'Web Apps', className: 'left-4 top-8' },
  { icon: Smartphone, label: 'Mobile', className: 'right-5 top-20' },
  { icon: Cloud, label: 'Cloud', className: 'left-8 bottom-16' },
  { icon: ShieldCheck, label: 'Secure', className: 'right-10 bottom-10' },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] pt-[12.5svh]">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-honey/16 blur-[120px]" />
        <div className="absolute right-0 top-40 h-[360px] w-[360px] rounded-full bg-cyanEdge/12 blur-[110px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30" />
      </div>

      <div className="container-shell grid min-h-[calc(100svh-12.5svh)] items-center gap-[3vh] pb-[3vh] lg:grid-cols-[0.96fr_1.04fr]">
        <motion.div initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }}>
          <span className="section-kicker">Enterprise software. Product velocity.</span>
          <h1 className="max-w-4xl text-[clamp(2.35rem,4.45vw,4.95rem)] font-extrabold leading-[1.04] tracking-normal text-white">
            Transforming Ideas into Powerful Digital Products
          </h1>
          <p className="mt-[2.5vh] max-w-2xl text-[clamp(0.98rem,1.2vw,1.12rem)] leading-[1.55] text-slate-300">
            TechVedhaBees partners with teams to design, engineer, and scale web applications, mobile apps,
            cloud platforms, and enterprise software with speed, clarity, and innovation.
          </p>
          <div className="mt-[3vh] flex flex-col gap-4 sm:flex-row">
            <Button href="#contact">Start a Project</Button>
            <Button href="#services" variant="secondary">
              Explore Services
            </Button>
          </div>
          <div className="mt-[3vh] grid max-w-xl grid-cols-3 gap-4 text-sm text-slate-400">
            {['Scalable', 'Secure', 'Cloud-ready'].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center font-semibold">
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Abstract product-system visual keeps the first screen polished without relying on stock imagery. */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto aspect-square w-[min(100%,66svh)] lg:w-[min(108%,76svh)] lg:translate-x-[4%] xl:w-[min(112%,80svh)] xl:translate-x-[6%]"
        >
          <div className="absolute inset-5 rounded-[2rem] border border-white/10 bg-enterprise-gradient shadow-premium backdrop-blur-xl" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 34, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-12 rounded-full border border-dashed border-honey/30"
          />
          <div className="absolute inset-16 grid place-items-center rounded-full border border-white/10 bg-ink/80 shadow-glow">
            <div className="text-center">
              <div className="mx-auto mb-4 grid size-16 place-items-center rounded-3xl bg-gradient-to-br from-honey to-cyanEdge text-ink sm:size-18 xl:size-20">
                <Layers3 size={32} />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-honey sm:text-sm">TechVedhaBees</p>
              <p className="mt-2 text-xl font-extrabold text-white xl:text-2xl">Build. Scale. Evolve.</p>
            </div>
          </div>
          <div className="absolute inset-0">
            {nodes.map(({ icon: Icon, label, className }) => (
              <motion.div
                key={label}
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className={`absolute ${className} glass-panel flex items-center gap-3 rounded-2xl px-4 py-3`}
              >
                <Icon className="text-honey" size={20} />
                <span className="text-sm font-bold text-white">{label}</span>
              </motion.div>
            ))}
          </div>
          <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-5 py-4 backdrop-blur-xl">
            <Database className="text-cyanEdge" size={21} />
            <span className="text-sm font-semibold text-slate-200">API-first digital ecosystems</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
