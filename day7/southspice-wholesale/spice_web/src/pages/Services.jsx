import React from "react";
import "./Services.css";
import images from "../assets/wholesale.jpg";
import images1 from "../assets/pansouth.jpg";
import images2 from "../assets/Market.jpg";

// Sample services with images
const services = [
  {
    title: "Wholesale Supply",
    desc: "We provide bulk orders for retailers, restaurants, and distributors.",
    img: images,
  },
  {
    title: "Pan-South Delivery",
    desc: "Efficient logistics team ensuring timely deliveries.",
    img: images1,
  },
  {
    title: "Marketing & Branding",
    desc: "Support for promoting local and regional spice brands.",
    img: images2,
  },
];

const Services = () => (
  <section className="services-section">
    <h2>Our Services</h2>
    <div className="services-grid">
      {services.map((s) => (
        <div key={s.title} className="service-card">
          <img src={s.img} alt={s.title} />
          <h3>{s.title}</h3>
          <p>{s.desc}</p>
        </div>
      ))}
    </div>

    {/* Video iframe below the services grid */}
    <div className="services-video">
      <h3 className="services-head">Watch Our Services in Action</h3>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/4U0kT213xJI?si=x5R0minACjmuJVWC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </section>
);

export default Services;
