import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="auth-form">
      <h2>Log In</h2>
      <form>
        <label>Username:</label>
        <input type="text" required />
        <label>Password:</label>
        <input type="password" required />
        <button type="submit">Login</button>
      </form>
      <p>
        Don’t have an account? <Link to="/register">Sign Up</Link>
      </p>
    </div>
  );
}

export default Login;
