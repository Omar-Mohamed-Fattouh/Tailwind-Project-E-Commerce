import Categories from "./components/Categories";
import CustomerReviews from "./components/CustomerReviews";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import PopularProducts from "./components/PopularProducts";
import Services from "./components/Services";
import SpecialOffer from "./components/SpecialOffer";
import Subscribe from "./components/Subscribe";
import SuperQuality from "./components/SuperQuality";
import Nav from "./Section/Nav";
import "./index.css";

const App = () => {
  return (
    <div className="relative w-full max-w-full overflow-x-hidden bg-ink text-fog">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-volt focus:px-4 focus:py-3 focus:font-body focus:font-bold focus:uppercase focus:text-ink"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <section className="xl:padding-l wide:padding-r padding-b">
          <Hero />
        </section>
        <section className="border-y border-white/10 bg-forest padding">
          <Categories />
        </section>
        <section className="padding">
          <PopularProducts />
        </section>
        <section className="padding">
          <SuperQuality />
        </section>
        <section className="padding-x py-10">
          <Services />
        </section>
        <section className="padding">
          <SpecialOffer />
        </section>
        <section className="border-y border-white/10 bg-forest padding">
          <CustomerReviews />
        </section>
        <section className="padding-x w-full py-16 sm:py-32">
          <Subscribe />
        </section>
      </main>
      <div className="bg-black padding-x padding-t pb-8">
        <Footer />
      </div>
    </div>
  );
};

export default App;
