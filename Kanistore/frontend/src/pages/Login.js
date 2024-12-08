import React, { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Submitted", data);
  };

  return (
    <div style={styles.container}>
      <div style={styles.leftSection}>
        <h1 style={styles.welcomeText}>Welcome to...</h1>
        <p style={styles.description}>
        </p>
      </div>
      <div style={styles.rightSection}>
        <h2 style={styles.loginHeading}>Login</h2>
        <p style={styles.subText}>
          Welcome! 
        </p>
        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.label}>User Name</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={data.email}
            onChange={handleOnChange}
            style={styles.input}
            required
          />

          <label style={styles.label}>Password</label>
          <div style={styles.passwordContainer}>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              value={data.password}
              onChange={handleOnChange}
              style={{ ...styles.input, borderRight: "none" }}
              required
            />
            <span
              style={styles.showPasswordToggle}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>

          <div style={styles.checkboxContainer}>
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe" style={styles.rememberText}>
              Remember me
            </label>
          </div>

          <button type="submit" style={styles.button}>
            LOGIN
          </button>
        </form>
        <div style={styles.linkContainer}>
          <span>New User? <a href="/sign-up" style={styles.link}>Signup</a></span>
          <a href="/forgot-password" style={styles.link}>
            Forgot your password?
          </a>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    fontFamily: "Arial, sans-serif",
  },
  leftSection: {
    flex: 1,
    backgroundColor: "#0088cc",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    textAlign: "center",
  },
  rightSection: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px",
  },
  welcomeText: {
    fontSize: "2rem",
    fontWeight: "bold",
  },
  description: {
    fontSize: "1rem",
    marginTop: "10px",
    lineHeight: "1.6",
  },
  loginHeading: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  subText: {
    fontSize: "0.9rem",
    marginBottom: "20px",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "350px",
  },
  label: {
    marginBottom: "5px",
    fontSize: "0.9rem",
    color: "#333",
  },
  input: {
    padding: "10px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    outline: "none",
    fontSize: "1rem",
  },
  passwordContainer: {
    position: "relative",
    display: "flex",
    alignItems: "center",
  },
  showPasswordToggle: {
    position: "absolute",
    right: "10px",
    cursor: "pointer",
    color: "#007BFF",
  },
  checkboxContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
  },
  rememberText: {
    marginLeft: "8px",
    fontSize: "0.9rem",
    color: "#555",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "4px",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
  linkContainer: {
    marginTop: "20px",
    fontSize: "0.9rem",
    textAlign: "center",
  },
  link: {
    color: "#007BFF",
    textDecoration: "none",
    marginLeft: "5px",
  },
};

export default Login;
