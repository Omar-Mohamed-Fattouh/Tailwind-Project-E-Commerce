import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price, tag }) => {
  return (
    <div className="flex w-full flex-1 flex-col border border-white/10 bg-forest p-5">
      <p className="mb-4 font-body text-[11px] uppercase tracking-[0.24em] text-volt">
        {tag}
      </p>
      <img
        src={imgURL}
        alt={`${name} shoe`}
        width={280}
        height={220}
        loading="lazy"
        decoding="async"
        className="h-[220px] w-full object-cover"
      />
      <div className="mt-8 flex items-center gap-2.5">
        <img src={star} alt="" width={20} height={20} />
        <p className="font-body text-base text-moss">(4.8)</p>
      </div>
      <h3 className="mt-3 font-display text-2xl font-bold uppercase">{name}</h3>
      <p className="mt-2 font-body text-xl font-bold text-volt">{price}</p>
    </div>
  );
};

export default PopularProductCard;
