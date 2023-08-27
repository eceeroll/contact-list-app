// import { Form } from "react-router-dom";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

function Auth() {
  const [isSignupClicked, setIsSignupClicked] = useState(false);
  const [isLoginClicked, setIsLoginClicked] = useState(true);
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const navigate = useNavigate();

  const submitSignUpHandler = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, emailValue, passwordValue)
      .then((userCredentials) => console.log(userCredentials))
      .catch((err) => console.log(err));

    navigate("/");
  };

  const submitLoginHandler = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, emailValue, passwordValue)
      .then((userCredentials) => console.log("Logged in!", userCredentials))
      .catch((err) => console.log(err));

    navigate("/");
  };

  const handleSignupClick = () => {
    setIsLoginClicked(false);
    setIsSignupClicked(true);
    navigate("?mode=signup");
  };

  const handleLoginClick = () => {
    setIsLoginClicked(true);
    setIsSignupClicked(false);
    navigate("?mode=login");
  };

  return (
    <>
      <div className="button-container">
        <button
          className={isSignupClicked ? "active" : ""}
          onClick={handleSignupClick}
        >
          Signup
        </button>
        <button
          className={isLoginClicked ? "active" : ""}
          onClick={handleLoginClick}
        >
          Login
        </button>
      </div>

      {isLoginClicked && (
        <div className="form-container">
          <form onSubmit={submitLoginHandler} className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      )}

      {isSignupClicked && (
        <div className="form-container">
          <form onSubmit={submitSignUpHandler} className="form">
            {/* <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" />
            </div> */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                onChange={(e) => setEmailValue(e.target.value)}
                type="email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                onChange={(e) => setPasswordValue(e.target.value)}
                type="password"
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </>
  );
}

export default Auth;
