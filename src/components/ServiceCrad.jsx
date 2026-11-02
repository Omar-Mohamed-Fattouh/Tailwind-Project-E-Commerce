const ServiceCrad = ({ imgURL, label, subtext }) => {
  return (
    <div className="w-full min-w-0 flex-1 rounded-none border border-white/10 bg-forest px-8 py-14 sm:w-[350px] sm:min-w-[350px] sm:px-10">
      <div className="flex h-11 w-11 items-center justify-center bg-volt">
        <img src={imgURL} alt="" height={24} width={24} />
      </div>
      <h3 className="mt-6 break-words font-display text-xl font-bold uppercase leading-normal sm:text-2xl">
        {label}
      </h3>
      <p className="mt-3 break-words font-body text-lg leading-normal text-moss">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCrad;
