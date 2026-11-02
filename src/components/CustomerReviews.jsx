import { reviews } from "../contants";
import ReviewCard from "./ReviewCard";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <p className="text-center font-body text-sm font-bold uppercase tracking-[0.28em] text-volt">
        Wear reports
      </p>
      <h2 className="mt-4 text-center font-display text-4xl font-bold uppercase">
        From the <span className="text-volt">desk</span>
      </h2>
      <p className="m-auto mt-4 max-w-lg text-center info-text">
        Notes from people who bought a pair, ran them, and came back — not
        caption copy.
      </p>

      <div className="mt-20 flex flex-1 items-stretch justify-evenly gap-8 max-lg:flex-col">
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
