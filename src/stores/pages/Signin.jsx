import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Welcome back! 👋");
      navigate("/"); // Redirect to home after login
    } catch (err) {
      setError("Invalid email or password ❌");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Sign In</h2>
        <form onSubmit={handleSignin} style={styles.form}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Login
          </button>
          {error && <p style={styles.error}>{error}</p>}
          <p style={{ marginTop: "10px" }}>
            Don’t have an account?{" "}
            <span
              onClick={() => navigate("/signup")}
              style={{ color: "#007bff", cursor: "pointer" }}
            >
              Sign up here
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f8f9fa",
  },
  card: {
    padding: "2rem",
    borderRadius: "12px",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
    width: "320px",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  button: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "10px",
    borderRadius: "8px",
    cursor: "pointer",
  },
  error: {
    color: "red",
    marginTop: "10px",
  },
};

export default Signin;
