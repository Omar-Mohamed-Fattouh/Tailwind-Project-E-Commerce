const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <span className="relative flex h-10 w-10 items-center justify-center bg-volt font-display text-xl font-extrabold text-ink" aria-hidden="true">
        V
        <span className="absolute bottom-0 right-0 h-2 w-2 bg-ink" />
      </span>
      <div className="leading-none">
        <p className="font-display text-2xl font-bold tracking-[0.24em] text-fog">
          VELT
        </p>
        <p className="mt-1 font-body text-[10px] tracking-[0.42em] text-volt">
          SHOES
        </p>
      </div>
    </div>
  );
};

export default Logo;
