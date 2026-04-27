import { useLanguage } from '../context/LanguageContext';

const companies = [
  { name: 'InfoAmazonia', icon: '/assets/sq-infoamazonia.jpeg', roleKey: 'r4' as const },
  { name: 'Tupi Mobilidade', icon: '/assets/sq-tupi.png', roleKey: 'r3' as const },
  { name: 'Tesorio Inc.', icon: '/assets/sq-tesorio.jpeg', roleKey: 'r2' as const },
  { name: 'ChefsClub', icon: '/assets/sq-chefsclub.png', roleKey: 'r1b' as const },
  { name: 'Grubster', icon: '/assets/sq-grubster.jpeg', roleKey: 'r1' as const },
  { name: 'Interlegis', icon: '/assets/sq-interlegis.png', roleKey: 'r5' as const },
];

function LogoCell({ name, icon, role }: { name: string; icon: string; role: string }) {
  return (
    <div className="group flex items-center gap-3 py-1 flex-shrink-0 transition-transform duration-200 hover:-translate-y-px" title={name}>
      <div className="w-10 h-10 rounded-[9px] overflow-hidden flex-shrink-0 grid place-items-center">
        <img
          src={icon}
          alt={name}
          className="w-full h-full object-cover grayscale contrast-[0.95] opacity-[0.82] transition-all duration-250 group-hover:grayscale-0 group-hover:opacity-100"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col gap-px min-w-0">
        <div className="font-semibold text-[13.5px] -tracking-[0.01em] text-ink whitespace-nowrap overflow-hidden text-ellipsis">
          {name}
        </div>
        <div className="font-mono text-[10px] text-muted tracking-[0.04em] whitespace-nowrap overflow-hidden text-ellipsis">
          {role}
        </div>
      </div>
    </div>
  );
}

export default function TrustWall() {
  const { t } = useLanguage();

  const cells = companies.map((c) => (
    <LogoCell key={c.name} name={c.name} icon={c.icon} role={t.trust[c.roleKey]} />
  ));

  return (
    <div
      className="mt-16 pt-7 relative overflow-hidden group"
      style={{
        maskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
        WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
      }}
    >
      <div
        className="trust-logos flex flex-nowrap gap-14 w-max group-hover:[animation-play-state:paused]"
        style={{ animation: 'trustScroll 60s linear infinite', willChange: 'transform' }}
      >
        {cells}
        {/* Duplicate for seamless loop */}
        {cells}
      </div>
    </div>
  );
}
