import Button from "./Button";

const Subscribe = () => {
  return (
    <section
      id="contact-us"
      className="flex w-full min-w-0 items-center justify-between gap-10 max-container max-lg:flex-col"
      aria-labelledby="subscribe-heading"
    >
      <h2
        id="subscribe-heading"
        className="font-display text-4xl font-bold uppercase leading-[1.15] lg:max-w-md"
      >
        Get drop alerts
        <span className="text-volt"> in your inbox.</span>
      </h2>
      <form
        className="flex w-full items-center gap-4 border border-white/15 p-2.5 max-sm:flex-col lg:max-w-[42%]"
        onSubmit={(event) => event.preventDefault()}
      >
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="you@veltshoes.com"
          className="input min-h-12"
        />
        <div className="flex items-center max-sm:w-full max-sm:justify-end">
          <Button type="submit" label="Join" fullWidth />
        </div>
      </form>
    </section>
  );
};

export default Subscribe;
