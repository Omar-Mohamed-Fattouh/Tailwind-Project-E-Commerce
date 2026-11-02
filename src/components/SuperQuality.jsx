import Button from "./Button";
import { shoe8 } from "../assets/images";

function SuperQuality() {
  return (
    <section
      id="about-us"
      className="flex w-full min-w-0 items-center justify-between gap-10 max-container max-lg:flex-col"
    >
      <div className="flex flex-1 flex-col">
        <p className="font-body text-sm font-bold uppercase tracking-[0.28em] text-volt">
          The house
        </p>
        <h2 className="mt-4 font-display text-4xl font-bold uppercase lg:max-w-lg">
          A shoe shop
          <span className="text-volt"> first.</span>
          <span className="block">A brand second.</span>
        </h2>
        <p className="mt-6 lg:max-w-lg info-text">
          VELT buys, tests, and stocks shoes the way a specialty shop should:
          by last shape, cushioning, and the ground you use them on — not by a
          single logo on the sidewall.
        </p>
        <p className="mt-4 lg:max-w-lg info-text">
          If a pair does not survive our wear desk, it does not hit the floor.
        </p>
        <div className="mt-11">
          <Button href="#shop" label="Read the fit notes" />
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center border border-white/10 bg-forest p-8">
        <img
          src={shoe8}
          alt="VELT house pair on a dark studio background"
          width={570}
          height={428}
          loading="lazy"
          decoding="async"
          className="w-full object-cover"
        />
      </div>
    </section>
  );
}

export default SuperQuality;
