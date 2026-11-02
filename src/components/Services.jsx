import { services } from "../contants";
import ServiceCrad from "./ServiceCrad";

function Services() {
  return (
    <section className="grid w-full grid-cols-1 gap-6 max-container sm:grid-cols-2 lg:grid-cols-3" aria-labelledby="services-heading">
      <h2 id="services-heading" className="sr-only">
        Why shop VELT
      </h2>
      {services.map((service) => (
        <ServiceCrad key={service.label} {...service} />
      ))}
    </section>
  );
}

export default Services;
