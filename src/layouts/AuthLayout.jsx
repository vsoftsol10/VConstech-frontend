import React, { useState } from 'react';
import LoginBg from '../assets/loginbackground2.jpeg';

const Login = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);
  const [signInData, setSignInData] = useState({
    email: '',
    password: ''
  });
  const [signUpData, setSignUpData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleSignUpClick = () => {
    setIsRightPanelActive(true);
  };

  const handleSignInClick = () => {
    setIsRightPanelActive(false);
  };

  const handleSignInChange = (e) => {
    setSignInData({
      ...signInData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignUpChange = (e) => {
    setSignUpData({
      ...signUpData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    console.log('Sign In Data:', signInData);
    // Add your sign in logic here
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    console.log('Sign Up Data:', signUpData);
    // Add your sign up logic here
  };

  return (
    <div style={{ 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      fontFamily: "'Montserrat', sans-serif",
      height: '100vh',
      margin: '-20px 0 50px'
    }}>
      <style>{`
       
        * {
          box-sizing: border-box;
        }

        .login-container {
          background-image: url(${LoginBg});
          background-size: cover;
          border-radius: 10px;
          box-shadow: 0 14px 28px rgba(0,0,0,0.25), 
                      0 10px 10px rgba(0,0,0,0.22);
          position: relative;
          overflow: hidden;
          width: 768px;
          max-width: 100%;
          min-height: 480px;
        }

        .form-container {
          position: absolute;
          top: 0;
          height: 100%;
          transition: all 0.6s ease-in-out;
        }

        .sign-in-container {
          left: 0;
          width: 50%;
          z-index: 2;
        }

        .login-container.right-panel-active .sign-in-container {
          transform: translateX(100%);
        }

        .sign-up-container {
          left: 0;
          width: 50%;
          opacity: 0;
          z-index: 1;
        }

        .login-container.right-panel-active .sign-up-container {
          transform: translateX(100%);
          opacity: 1;
          z-index: 5;
          animation: show 0.6s;
        }

        @keyframes show {
          0%, 49.99% {
            opacity: 0;
            z-index: 1;
          }
          
          50%, 100% {
            opacity: 1;
            z-index: 5;
          }
        }

        .login-form {
          background-color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          padding: 0 50px;
          height: 100%;
          text-align: center;
        }

        .login-form h1 {
          font-weight: bold;
          margin: 0;
        }

        .login-form h2 {
          text-align: center;
        }

        .login-form p {
          font-size: 14px;
          font-weight: 100;
          line-height: 20px;
          letter-spacing: 0.5px;
          margin: 20px 0 30px;
        }

        .login-form span {
          font-size: 12px;
        }

        .login-form a {
          color: #333;
          font-size: 14px;
          text-decoration: none;
          margin: 15px 0;
        }

        .login-form input {
          background-color: #eee;
          border: none;
          padding: 12px 15px;
          margin: 8px 0;
          width: 100%;
          border-radius: 4px;
        }

        .login-form input:focus {
          outline: none;
          background-color: #e0e0e0;
        }

        .login-btn {
          border-radius: 20px;
          border: 1px solid #FF4B2B;
          background-color: #FF4B2B;
          color: #FFFFFF;
          font-size: 12px;
          font-weight: bold;
          padding: 12px 45px;
          letter-spacing: 1px;
          text-transform: uppercase;
          transition: transform 80ms ease-in;
          cursor: pointer;
          margin-top: 10px;
        }

        .login-btn:active {
          transform: scale(0.95);
        }

        .login-btn:focus {
          outline: none;
        }

        .login-btn.ghost {
          background-color: transparent;
          border-color: #FFFFFF;
        }

        .login-btn:hover {
          opacity: 0.9;
        }

        .overlay-container {
          position: absolute;
          top: 0;
          left: 50%;
          width: 50%;
          height: 100%;
          overflow: hidden;
          transition: transform 0.6s ease-in-out;
          z-index: 100;
        }

        .login-container.right-panel-active .overlay-container{
          transform: translateX(-100%);
        }

        .overlay {
          background: #FF416C;
          background: -webkit-linear-gradient(to right, #FF4B2B, #FF416C);
          background: linear-gradient(to right, #FF4B2B, #FF416C);
          background-repeat: no-repeat;
          background-size: cover;
          background-position: 0 0;
          color: #FFFFFF;
          position: relative;
          left: -100%;
          height: 100%;
          width: 200%;
          transform: translateX(0);
          transition: transform 0.6s ease-in-out;
        }

        .login-container.right-panel-active .overlay {
          transform: translateX(50%);
        }

        .overlay-panel {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          padding: 0 40px;
          text-align: center;
          top: 0;
          height: 100%;
          width: 50%;
          transform: translateX(0);
          transition: transform 0.6s ease-in-out;
        }

        .overlay-left {
          transform: translateX(-20%);
        }

        .login-container.right-panel-active .overlay-left {
          transform: translateX(0);
        }

        .overlay-right {
          right: 0;
          transform: translateX(0);
        }

        .login-container.right-panel-active .overlay-right {
          transform: translateX(20%);
        }

        .social-container {
          margin: 20px 0;
        }

        .social-container a {
          border: 1px solid #DDDDDD;
          border-radius: 50%;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          margin: 0 5px;
          height: 40px;
          width: 40px;
          color: #333;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-container a:hover {
          background-color: #f0f0f0;
          transform: scale(1.1);
        }

        .footer {
          background-color: #222;
          color: #fff;
          font-size: 14px;
          bottom: 0;
          position: fixed;
          left: 0;
          right: 0;
          text-align: center;
          z-index: 999;
          padding: 10px 0;
        }

        .footer p {
          margin: 10px 0;
        }

        .footer i {
          color: red;
        }

        .footer a {
          color: #3c97bf;
          text-decoration: none;
        }
      `}</style>

      <h2 style={{ 
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: '20px',
        color: '#333'
      }}>
        VConstech
      </h2>

      <div className={`login-container ${isRightPanelActive ? 'right-panel-active' : ''}`}>
        <div className="form-container sign-in-container">
          <form className="login-form" onSubmit={handleSignInSubmit}>
            <h1>Sign in</h1>
            <input 
              type="email" 
              name="email"
              placeholder="Email" 
              value={signInData.email}
              onChange={handleSignInChange}
              required
            />
            <input 
              type="password" 
              name="password"
              placeholder="Password" 
              value={signInData.password}
              onChange={handleSignInChange}
              required
            />
            <a href="#">Forgot your password?</a>
            <button type="submit" className="login-btn">Sign In</button>
          </form>
        </div>

        <div className="form-container sign-in-container">
          <form className="login-form" onSubmit={handleSignInSubmit}>
            <h1>Sign in</h1>
            <input 
              type="email" 
              name="email"
              placeholder="Email" 
              value={signInData.email}
              onChange={handleSignInChange}
              required
            />
            <input 
              type="password" 
              name="password"
              placeholder="Password" 
              value={signInData.password}
              onChange={handleSignInChange}
              required
            />
            <a href="#">Forgot your password?</a>
            <button type="submit" className="login-btn">Sign In</button>
          </form>
        </div>

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <h2>Contractor Nesamani</h2>
              <p>Shall we start our work.</p>
              <button className="login-btn ghost" onClick={handleSignInClick}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Site Engineer!</h1>
              <p>It's time to work.</p>
              <button className="login-btn ghost" onClick={handleSignUpClick}>
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <p>
         Created by <a target="_blank" href="https://vsoftsolutions.com">VSoft Solutions</a> | Powered by <a target="_blank" href="https://vsoftsolutions.com/vconstech">VConstech</a></p>
      </footer>
    </div>
  );
};

export default Login;