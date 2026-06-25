import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function ServiceCard({ icon: Icon, title, copy, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay: index * 0.06 }}
      className="group glass-panel rounded-3xl p-6 transition duration-300 hover:-translate-y-2 hover:border-honey/35 hover:bg-white/[0.075]"
    >
      <div className="mb-6 flex items-center justify-between">
        <div className="grid size-[3.25rem] place-items-center rounded-2xl bg-enterprise-gradient text-honey ring-1 ring-white/10">
          <Icon size={25} />
        </div>
        <ArrowUpRight className="text-slate-500 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-honey" size={20} />
      </div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-400">{copy}</p>
    </motion.article>
  );
}
