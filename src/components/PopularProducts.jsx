import { products } from "../contants";
import PopularProductCard from "./PopularProductCard";

function PopularProducts() {
  return (
    <section id="shop" className="max-container">
      <div className="flex flex-col justify-start gap-5">
        <p className="font-body text-sm font-bold uppercase tracking-[0.28em] text-volt">
          In rotation
        </p>
        <h2 className="font-display text-4xl font-bold uppercase">
          This week&apos;s <span className="text-volt">pairs</span>
        </h2>
        <p className="lg:max-w-lg font-body text-moss">
          Current stock from the house: road, court, trail, and a daily shoe you
          can actually wear to work.
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
}

export default PopularProducts;
