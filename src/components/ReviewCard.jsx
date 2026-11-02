import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex w-full max-w-xl flex-col items-start border border-white/10 bg-ink p-10">
      <img
        src={imgURL}
        alt={`${customerName} portrait`}
        width={88}
        height={88}
        loading="lazy"
        decoding="async"
        className="h-[88px] w-[88px] rounded-none object-cover grayscale"
      />
      <p className="mt-6 info-text">{feedback}</p>
      <div className="mt-6 flex items-center gap-2.5">
        <img
          src={star}
          width={22}
          height={22}
          alt=""
          className="object-contain"
        />
        <p className="font-body text-xl text-moss">({rating})</p>
      </div>
      <h3 className="mt-3 font-display text-2xl font-bold uppercase">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
