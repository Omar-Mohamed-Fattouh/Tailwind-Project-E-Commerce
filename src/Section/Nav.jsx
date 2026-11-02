import { useState } from "react";
import { hamburger } from "../assets/icons";
import { navLinks } from "../contants";
import Logo from "../components/Logo";

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 w-full border-b border-white/10 bg-ink/90 backdrop-blur-md">
      <p className="bg-volt px-3 py-2 text-center font-body text-[11px] font-extrabold tracking-[0.28em] text-ink max-sm:text-[10px] max-sm:tracking-[0.14em]">
        FREE 3-DAY SHIPPING ON EVERY PAIR
      </p>
      <nav
        className="padding-x flex items-center justify-between py-5 max-container"
        aria-label="Primary"
      >
        <a href="/" aria-label="VELT Shoes home" onClick={() => setOpen(false)}>
          <Logo />
        </a>
        <ul className="flex flex-1 items-center justify-center gap-10 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="inline-flex min-h-12 items-center font-body text-sm tracking-[0.18em] uppercase text-fog/80 transition-colors hover:text-volt"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#shop"
          className="hidden min-h-12 items-center font-body text-sm font-bold tracking-[0.16em] uppercase text-volt lg:flex"
        >
          Account
        </a>
        <button
          type="button"
          className="hidden min-h-12 min-w-12 max-lg:block"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <img
            src={hamburger}
            alt=""
            width={25}
            height={25}
            className="brightness-0 invert"
          />
        </button>
      </nav>
      {open && (
        <ul className="border-t border-white/10 bg-ink px-8 py-6 lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label} className="border-b border-white/10 py-4">
              <a
                href={item.href}
                className="font-display text-2xl font-bold uppercase text-fog"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

export default Nav;
