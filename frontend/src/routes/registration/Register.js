import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const validateEmail = (email) => {
    // Regular expression for email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateNumber = (number) => {
    // Check if number has 10 characters
    return number.length === 10;
  };

  const collectData = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !repeatPassword || !address || !number) {
      toast.error("All fields are required");
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Invalid email address");
      return;
    }

    if (!validateNumber(number)) {
      toast.error("Number must have 10 characters");
      return;
    }

    if (password.length < 8) {
      toast.error("Password must have at least 8 characters");
      return;
    }

    if (password !== repeatPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const response = await fetch('http://localhost:4000/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password, address, number })
      });

      if (!response.ok) {
        throw new Error('Failed to send data');
      }

      const data = await response.json();
      localStorage.setItem('users', JSON.stringify(data));
      toast.success("Data sent successfully!");
    } catch (error) {
      toast.error("Failed to send data");
    }
  }

  return (
    <main className="register-main">
      <form className="registration-form" onSubmit={collectData}>
        <br />
        <center><h1 className="text-light">Register Form</h1></center>
        <section className="name-section">
          <input
            type="text"
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </section>
        <section className="email-section">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </section>
        <section className="password-section">
          <input
            type="password"
            placeholder="Create password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm password"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
        </section>
        <section className="birthday">
          <input
            type="text"
            placeholder="Address (optional)"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </section>
        <section className="birthday">
          <input
            type="text"
            placeholder="Number (optional)"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </section>
        <p className="terms-warning">
          By clicking Sign Up, you agree to our Terms, Data Policy and Cookies
          Policy. You may receive an email notification from us and can opt
          out any time.
        </p>
        <button className="register-btn" type="submit">
          Sign up
        </button>
        <ToastContainer />
      </form>
    </main>
  );
};

export default Register;
