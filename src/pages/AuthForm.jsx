import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "../cssPages/AuthForm.module.css";

const AuthForm = () => {
  const { mode } = useParams();
  const navigate = useNavigate();

  // Initialize isLogin based on mode param
  const [isLogin, setIsLogin] = useState(mode === "login");

  // Sync state if URL param changes
  useEffect(() => {
    setIsLogin(mode === "login");
  }, [mode]);

  const toggleForm = () => {
    // toggle URL between login/signup
    navigate(isLogin ? "/auth/signup" : "/auth/login");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${isLogin ? "Logged in" : "Signed up"} successfully!`);
  };

  return (
    <div className={styles.container}>
      
      <h2 className={styles.title}>{isLogin ? "Login" : "Sign Up"}</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        {!isLogin && (
          <input
            type="text"
            placeholder="Name"
            className={styles.input}
            required
          />
        )}
        <input
          type="email"
          placeholder="Email"
          className={styles.input}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className={styles.input}
          required
        />
        {!isLogin && (
          <input
            type="password"
            placeholder="Confirm Password"
            className={styles.input}
            required
          />
        )}
        <button type="submit" className={styles.button}>
          {isLogin ? "Login" : "Sign Up"}
        </button>
      </form>

      <p className={styles.toggle}>
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <span className={styles.link} onClick={toggleForm}>
          {isLogin ? "Sign Up" : "Login"}
        </span>
      </p>
      <button onClick={() => navigate("/")} className={styles.button}>
        ← Back to Home
      </button>
    </div>
  );
};

export default AuthForm;
