import { services } from "../contants";
import ServiceCrad from "./ServiceCrad";

function Services() {
  return (
    <section className="flex flex-wrap justify-center gap-9 max-container" aria-labelledby="services-heading">
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
