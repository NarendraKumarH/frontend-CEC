const Contact = () => (
 <section className="contact-section">
   <h2>Contact Us</h2>


   <div className="contact-container">
     {/* Left: Form */}
    <form className="contact-form">
  <input type="text" placeholder="Your Name" required />
  <input type="email" placeholder="Your Email" required />
  <input type="tel" placeholder="Your Number" required />

  {/* Dropdown for selected items */}
  <select required>
    <option value="">Select Product</option>
    <option value="turmeric">Turmeric</option>
    <option value="chili">Chili Powder</option>
    <option value="coriander">Coriander</option>
    <option value="garam-masala">Garam Masala</option>
  </select>

  <textarea placeholder="Message" rows="4" required></textarea>
  <button type="submit">Send Message</button>
</form>

     {/* Right: Map */}
     <div className="contact-map">
       <iframe
         title="SouthSpice Location"
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123514.82817499449!2d77.51180403013036!3d14.665111716128948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb14ac2e6404f37%3A0xb810d064e2ce70e8!2sAnantapur%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1760681458492!5m2!1sen!2sin"
         width="100%"
         height="100%"
         style={{ border: 0 }}
         allowFullScreen=""
         loading="lazy"
       ></iframe>
     </div>
   </div>


   <p className="contact-info">📍 Address: No. 45, Spice Market Road, kurnool, Andra Pardesh </p>
   <p className="contact-info">📞 Phone: +91 98765 43210</p>
 </section>
);


export default Contact;