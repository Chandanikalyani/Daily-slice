import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios";

import ResetLocation from "../../helpers/ResetLocation";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [formError, setFormError] = useState({});

  useEffect(() => {
    document.title = "Feedback | Pizza Time";
  }, []);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    // Your form submission logic here
    setLoading(false);
    setSubmit(true);
    ResetLocation();
  };

  return (
    <motion.main
      className="contact"
      initial={{ opacity: 0, translateX: -300 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      exit={{ opacity: 0, translateX: -300 }}
      transition={{ duration: 1 }}>
      {loading ?
        <section className="contact-loader">
          <p>Almost there...</p>
          <img alt="Processing request" src="https://media0.giphy.com/media/L05HgB2h6qICDs5Sms/giphy.gif?cid=ecf05e472hf2wk1f2jou3s5fcnx1vek6ggnfcvhsjbeh7v5u&ep=v1_stickers_search&rid=giphy.gif&ct=s" />
        </section>
        :
        submit && Object.keys(formError).length === 0 ?
          <section className="contact-success">
            <p>We have received your message and we will get back to you shortly! 🍕</p>
            <section>
              <Link className="active-button-style" to="/menu">Go to menu</Link>
              <button className="passive-button-style" type="button" onClick={() => { setSubmit(false); }}>Send again</button>
            </section>
          </section>
          :
          <form onSubmit={handleSubmit} className="flex-container flex-column">
            <div className="webflow-style-input">
              <input
                name="fullname"
                className="pop-font"
                type="text"
                placeholder="Full Name"
              />
            </div>
            <span className="input-validation-error">{formError.fullname}</span>
            <div className="webflow-style-input">
              <input
                name="email"
                className="pop-font"
                type="text"
                placeholder="Email"
              />
            </div>
            <span className="input-validation-error">{formError.email}</span>
            <div className="webflow-style-input">
              <textarea
                name="message"
                className="pop-font"
                placeholder="Message"
              />
            </div>
            <span className="input-validation-error">{formError.message}</span>
            <button type="submit" className="active-button-style" >
              Send
            </button>
          </form>
      }
      <section className="contact-us-img"></section>
      <section className="contact-us-content pop-font">
        <section className="contact-us-content-txt">
          <h2>Contact us</h2>
          <p>
            We greatly anticipate your response and are eager to receive any inquiries you might have. Please do not hesitate to reach out to us should you require any further clarification or assistance. Your feedback and questions are of utmost importance to us, and we are here to provide the support you need. Looking forward to hearing from you!
          </p>
        </section>
      </section>
    </motion.main>
  );
}

export default Contact;
