import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-4" style={{ maxWidth: '400px', width: '100%' }}>
        <div className="text-center mb-4">
          <h2>Login</h2>
        </div>
        <form>
          {/* Email input */}
          <div className="form-group mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              required
            />
          </div>

          {/* Password input */}
          <div className="form-group mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              required
            />
          </div>

          {/* Remember Me checkbox */}
          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="rememberMe"
            />
            <label className="form-check-label" htmlFor="rememberMe">
              Remember me
            </label>
          </div>

          {/* Login button */}
          <button type="submit" className="btn btn-success w-100 mb-3">
            Login
          </button>

          {/* Additional links */}
          <div className="d-flex justify-content-between">
            {/* <Link to="/forgot-password" className="text-muted small">Forgot password?</Link> */}
            <Link to="/signupForm" className="text-muted small">Sign up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};
//asas
export default Login;
