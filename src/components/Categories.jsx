import { categories } from "../contants";

function Categories() {
  return (
    <section id="drops" className="max-container">
      <div className="mb-10 flex items-end justify-between gap-6 max-sm:flex-col max-sm:items-start">
        <h2 className="font-display text-4xl font-bold uppercase max-sm:text-3xl">
          Shop by <span className="text-volt">surface</span>
        </h2>
        <p className="max-w-md font-body text-moss">
          Four lasts. One house. Pick the ground you actually walk on.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <a
            href="#shop"
            key={category.name}
            className="group border border-white/10 bg-forest p-8 transition-colors hover:border-volt hover:bg-volt"
          >
            <p className="font-body text-xs uppercase tracking-[0.28em] text-moss group-hover:text-ink">
              {category.detail}
            </p>
            <h3 className="mt-6 font-display text-3xl font-bold uppercase text-fog group-hover:text-ink">
              {category.name}
            </h3>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Categories;
