import mark from '../assets/techvedhabees-mark.png';

export default function Logo({ compact = false }) {
  return (
    <a href="#home" className={`flex min-w-0 items-center ${compact ? 'gap-2' : 'gap-3'}`} aria-label="TechVedhaBees home">
      <span
        className={`grid shrink-0 place-items-center overflow-hidden border border-honey/25 bg-white p-1 shadow-glow ${
          compact ? 'size-12 rounded-xl' : 'size-16 rounded-2xl'
        }`}
      >
        <img src={mark} alt="" className="h-full w-full object-contain" />
      </span>
      <span className={`min-w-0 leading-none ${compact ? '' : 'sm:w-[16.5rem]'}`}>
        <span className={`block font-extrabold tracking-normal text-white ${compact ? 'text-lg' : 'text-xl sm:text-[1.55rem]'}`}>
          TechVedhaBees
        </span>
        <span
          className={`mt-1 block whitespace-nowrap font-bold uppercase tracking-[0.095em] text-amberGlow ${
            compact ? 'text-[0.48rem]' : 'text-[0.53rem] sm:text-[0.64rem] sm:tracking-[0.105em]'
          }`}
        >
          Intelligence in Every Solution.
        </span>
      </span>
    </a>
  );
}
