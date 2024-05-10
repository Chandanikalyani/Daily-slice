import React, { useState } from "react";
import "./loginModal.css";
import LinkButton from "../Button";
import axios from "axios";
import { toast } from "react-toastify";

const LoginModal = ({ setLoginModalWindow, loginModalWindow, hideMenu }) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(null);

  const hideLoginModal = () => {
    setLoginModalWindow(false);
  };

  const handleLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("http://localhost:4000/user/signin", { email, password });
      setLoading(false);
      const user = response.data;

      // Check if user has admin role
      if (user.role === 1) {
        localStorage.setItem('userInfo', JSON.stringify(user));
        window.location.href = '/admin/dashboard';
      } else {
        localStorage.setItem('userInfo', JSON.stringify(user));
        window.location.href = '/user/dashboard';
      }
      
      hideLoginModal();
    } catch (error) {
      setLoading(false);
      toast.error("Sign In Unsuccessful!");
      setLoginError("Invalid email or password. Please try again.");
    }
  };

  return (
    <article className={`modal ${loginModalWindow ? "active-modal" : ""}`}>
      <section className="modal-main">
        <button
          className="close-modal-btn"
          type="button"
          onClick={() => {
            hideLoginModal();
          }}
        >
          X
        </button>
        <section className="modal-content">
          <h2>Log in</h2>
          {loading ? (
            <div role="status" className="loader">
              <p>Almost there...</p>
              <img
                alt="Processing request"
                src="https://media0.giphy.com/media/L05HgB2h6qICDs5Sms/giphy.gif?cid=ecf05e472hf2wk1f2jou3s5fcnx1vek6ggnfcvhsjbeh7v5u&ep=v1_stickers_search&rid=giphy.gif&ct=s"
              />
            </div>
          ) : (
            <form>
              <input
                name="email"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                name="password"
                type="password"
                autoComplete="true"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <section className="login-and-signup">
                <LinkButton
                  onClick={() => {
                    hideLoginModal();
                    hideMenu();
                  }}
                  to="/register"
                  className="modal-signup-btn"
                >
                  Sign up
                </LinkButton>
                <button
                  type="button"
                  className="modal-login-btn"
                  onClick={handleLogin}
                >
                  Log in
                </button>
              </section>
              {loginError && <p className="login-error">{loginError}</p>}
            </form>
          )}
        </section>
      </section>
    </article>
  );
};

export default LoginModal;
