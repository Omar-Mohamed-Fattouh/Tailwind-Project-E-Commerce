import { useState } from "react";
import Button from "./Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../contants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "./ShoeCard";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  const activeShoe = shoes.find((shoe) => shoe.bigShoe === bigShoeImg) || shoes[0];

  return (
    <section
      id="home"
      className="flex min-h-screen w-full flex-col justify-center gap-10 max-container xl:flex-row"
      aria-labelledby="hero-heading"
    >
      <div className="relative flex w-full min-w-0 flex-col items-start justify-center pt-16 max-xl:padding-x xl:w-2/5">
        <p className="max-w-full font-body text-sm font-bold uppercase tracking-[0.18em] text-volt sm:tracking-[0.32em]">
          Independent shoehouse / Drop 04
        </p>

        <h1
          id="hero-heading"
          className="relative z-10 mt-8 w-full max-w-full font-display text-[clamp(2.35rem,9.4vw,5.125rem)] font-extrabold uppercase leading-[0.9]"
        >
          Shoes
          <br />
          for
          <br />
          every
          <br />
          <span className="text-volt">surface.</span>
        </h1>
        <p className="mb-12 mt-8 max-w-md font-body text-lg leading-8 text-moss">
          VELT is a shoe shop, not a logo farm. Running, court, trail, and daily
          pairs — chosen for fit, not hype.
        </p>

        <div className="flex flex-wrap gap-4">
          <Button href="#shop" label="Shop the drop" iconURL={arrowRight} />
          <Button
            href="#about-us"
            label="Fit guide"
            backgroundColor="bg-transparent"
            borderColor="border-fog/30"
            textColor="text-fog"
          />
        </div>

        <div className="mt-16 grid w-full grid-cols-3 gap-4 border-t border-white/10 pt-8">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-4xl font-bold text-fog max-sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 font-body text-sm uppercase tracking-[0.16em] text-moss">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex w-full min-w-0 flex-1 items-center justify-center overflow-hidden bg-hero pb-28 max-xl:py-24 xl:min-h-screen">
        <p className="absolute left-8 top-10 hidden font-display text-[120px] font-extrabold leading-none text-volt/10 xl:block" aria-hidden="true">
          VELT
        </p>
        <img
          src={bigShoeImg}
          alt={`${activeShoe.name} featured pair`}
          width={610}
          height={458}
          fetchPriority="high"
          decoding="async"
          className="relative z-10 w-[92%] max-w-2xl object-contain mix-blend-lighten"
        />

        <div className="absolute bottom-8 left-1/2 z-10 flex w-[calc(100%-1.5rem)] max-w-md -translate-x-1/2 justify-center gap-3 max-sm:px-2 sm:left-[10%] sm:w-auto sm:max-w-none sm:translate-x-0 sm:gap-6">
          {shoes.map((image) => (
            <ShoeCard
              key={image.name}
              imgURL={image}
              changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
              bigShoeImg={bigShoeImg}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
