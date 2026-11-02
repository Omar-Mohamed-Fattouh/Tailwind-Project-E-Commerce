const ServiceCrad = ({ imgURL, label, subtext }) => {
  return (
    <div className="w-full rounded-none border border-white/10 bg-forest px-6 py-10 sm:px-10 sm:py-14">
      <div className="flex h-11 w-11 items-center justify-center bg-volt">
        <img src={imgURL} alt="" height={24} width={24} />
      </div>
      <h3 className="mt-6 font-display text-xl font-bold uppercase leading-snug sm:text-2xl">
        {label}
      </h3>
      <p className="mt-3 font-body text-base leading-relaxed text-moss sm:text-lg">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCrad;
