interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export default function Logo({ variant = 'dark', className = '' }: LogoProps) {
  const isLight = variant === 'light';

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="relative flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11">
        <img
          src="/assets/images/aqua-blue-logo-transparent.png"
          alt="Aqua Blue water-drop logo"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex flex-col leading-none">
        <span
          className={`font-display font-bold text-lg sm:text-xl tracking-tight ${
            isLight ? 'text-white' : 'text-navy-900'
          }`}
        >
          AQUA<span className="text-aqua-500"> BLUE</span>
        </span>
        <span
          className={`text-[10px] sm:text-xs font-medium tracking-wider ${
            isLight ? 'text-aqua-200' : 'text-aqua-600'
          }`}
        >
          PURE DRINKING WATER
        </span>
      </div>
    </div>
  );
}
