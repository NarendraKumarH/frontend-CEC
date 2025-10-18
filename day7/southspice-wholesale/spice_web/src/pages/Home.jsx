import React from "react";
import "./Home.css";

// Sample Data
const sections = [
  {
    title: "About Us",
    text: "We bring you premium-quality Indian spices directly from trusted farms, ensuring authentic taste and freshness in every blend.",
  },
  {
    title: "Our Products",
    text: "We offer a wide range of wholesale spices including Turmeric, Chili Powder, Coriander, and Garam Masala — all 100% pure.",
  },
  {
    title: "Our Services",
    text: "We provide bulk supply, custom packaging, and export-ready spice delivery to meet your business and retail needs.",
  },
];

const testimonials = [
  {
    name: "Rohan Kumar",
    feedback: "Amazing spices! The quality is top-notch and delivery is always on time.",
  },
  {
    name: "Priya Sharma",
    feedback: "Their bulk packaging and export-ready spices helped grow my business tremendously!",
  },
  {
    name: "Anil Verma",
    feedback: "Fresh and authentic flavors. Highly recommend Spice World!",
  },
];

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="info-section advanced-bg">
        <div className="overlay"></div>
        <div className="heading-wrapper">
          <h2 className="main-heading">
            Welcome to <span>Spice World</span>
          </h2>
          <p className="sub-text">
            Explore our rich collection of natural and organic spices sourced from across India.
          </p>
        </div>
        <div className="info-cards">
          {sections.map((item, index) => (
            <div key={index} className="info-card advanced-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-container">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              <p>"{t.feedback}"</p>
              <h4>- {t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Carousel Section */}
      <section className="carousel-section">
        <h2>Featured Products</h2>
        <div className="carousel">
          <div className="carousel-track">
            <div className="carousel-item">Turmeric</div>
            <div className="carousel-item">Chili Powder</div>
            <div className="carousel-item">Coriander</div>
            <div className="carousel-item">Garam Masala</div>
          </div>
        </div>
      </section>

      {/* Table Section */}
      <section className="table-section">
        <h2>Product Pricing</h2>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price (₹)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Turmeric</td>
              <td>1 kg</td>
              <td>350</td>
            </tr>
            <tr>
              <td>Chili Powder</td>
              <td>1 kg</td>
              <td>200</td>
            </tr>
            <tr>
              <td>Coriander</td>
              <td>1 kg</td>
              <td>250</td>
            </tr>
            <tr>
              <td>Garam Masala</td>
              <td>500 g</td>
              <td>300</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Contact Form */}
      <section className="form-section">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Email Address" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Home;
