import Button from "./Button";
import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";

function SpecialOffer() {
  return (
    <section className="flex w-full min-w-0 items-center justify-between gap-10 max-container max-xl:flex-col-reverse">
      <div className="flex-1 overflow-hidden border border-white/10 bg-forest">
        <img
          src={offer}
          alt="Two people wearing VELT sneakers"
          width={773}
          height={580}
          loading="lazy"
          decoding="async"
          className="h-full min-h-[420px] w-full object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <p className="font-body text-sm font-bold uppercase tracking-[0.28em] text-volt">
          Members only
        </p>
        <h2 className="mt-4 font-display text-4xl font-bold uppercase">
          First look
          <span className="text-volt"> drops.</span>
        </h2>
        <p className="mt-6 info-text">
          Join the house list and see new pairs 48 hours before they hit the
          floor. No recycled “summer collection” dump — small drops, real
          sizes, gone when they are gone.
        </p>
        <p className="mt-4 info-text">
          Members also get fit notes, restock alerts, and a once-a-season
          warehouse pair at cost.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button href="#contact-us" label="Join the list" iconURL={arrowRight} />
          <Button
            href="#drops"
            label="See past drops"
            backgroundColor="bg-transparent"
            borderColor="border-fog/30"
            textColor="text-fog"
          />
        </div>
      </div>
    </section>
  );
}

export default SpecialOffer;
