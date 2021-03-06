import React from 'react';
import twitterIcon from "./../../assets/svg/twitter.svg";
import facebookIcon from "./../../assets/svg/facebook.svg";
import googleIcon from "./../../assets/svg/google.svg";
import './ExtraLogin.css';

function ExtraLogin() {
  return (
      <div className="extra-login-container">
        <p> Or Login with</p>
        <div className="login-links-container">
           {/* eslint-disable-next-line */}
          <a href="#" className="twitter-logo"><img src={twitterIcon} alt='twitter-logo'></img></a>
          {/* eslint-disable-next-line */}
          <a href="#" className="facebook-logo"><img src={facebookIcon} alt='facebook-logo'></img></a>
          {/* eslint-disable-next-line */}
          <a href="#" className="google-logo"><img src={googleIcon} alt='google-logo'></img></a>
        </div>
      </div>
    );
}

export default ExtraLogin;
