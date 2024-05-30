import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import ResetLocation from "../../helpers/ResetLocation";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [formError, setFormError] = useState({});
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: ""
  });

  useEffect(() => {
    document.title = "Feedback | Pizza Time";
  }, []);

  const validateForm = () => {
    const errors = {};
    if (!formData.fullname) errors.fullname = "Full Name is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid";
    }
    if (!formData.message) errors.message = "Message is required";
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const errors = validateForm();
    setFormError(errors);

    if (Object.keys(errors).length === 0) {
      try {
        await axios.post('http://localhost:4000/api/feedback', {
          name: formData.fullname,
          email: formData.email,
          message: formData.message
        });
        setSubmit(true);
        toast.success('Feedback submitted successfully!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        ResetLocation();
      } catch (error) {
        setFormError({ apiError: 'Failed to submit feedback. Please try again.' });
        toast.error('Failed to submit feedback. Please try again.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
    setLoading(false);
  };

  return (
    <motion.main
      className="contact"
      initial={{ opacity: 0, translateX: -300 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      exit={{ opacity: 0, translateX: -300 }}
      transition={{ duration: 1 }}>
      <ToastContainer />
      {loading ? (
        <section className="contact-loader">
          <p>Almost there...</p>
          <img alt="Processing request" src="https://media0.giphy.com/media/L05HgB2h6qICDs5Sms/giphy.gif?cid=ecf05e472hf2wk1f2jou3s5fcnx1vek6ggnfcvhsjbeh7v5u&ep=v1_stickers_search&rid=giphy.gif&ct=s" />
        </section>
      ) : submit && Object.keys(formError).length === 0 ? (
        <section className="contact-success">
          <p>We have received your message and we will get back to you shortly! 🍕</p>
          <section>
            <Link className="active-button-style" to="/menu">Go to menu</Link>
            <button className="passive-button-style" type="button" onClick={() => { setSubmit(false); setFormData({ fullname: '', email: '', message: '' }); }}>Send again</button>
          </section>
        </section>
      ) : (
        <form onSubmit={handleSubmit} className="flex-container flex-column">
          <div className="webflow-style-input">
            <input
              name="fullname"
              className="pop-font"
              type="text"
              placeholder="Full Name"
              value={formData.fullname}
              onChange={handleChange}
            />
          </div>
          <span className="input-validation-error">{formError.fullname}</span>
          <div className="webflow-style-input">
            <input
              name="email"
              className="pop-font"
              type="text"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <span className="input-validation-error">{formError.email}</span>
          <div className="webflow-style-input">
            <textarea
              name="message"
              className="pop-font"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <span className="input-validation-error">{formError.message}</span>
          {formError.apiError && <span className="input-validation-error">{formError.apiError}</span>}
          <button type="submit" className="active-button-style">
            Send
          </button>
        </form>
      )}
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
};

export default Contact;
