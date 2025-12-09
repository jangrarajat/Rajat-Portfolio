// src/components/Contact.jsx
import "../styles/add.css";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h2 className="section-title">📬 Contact Me</h2>
      <p className="contact-intro">
        Want a modern, responsive, premium website? Let’s talk!
      </p>

      <form
        className="contact-form"
        action="https://formspree.io/f/xovlqqjg"
        method="POST"
      >
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message..." rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
