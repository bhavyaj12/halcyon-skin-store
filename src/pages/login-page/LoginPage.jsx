import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../../contexts";
import { loginFunc } from "../../utilities/loginFunc";
import "./login.css";

export default function LoginPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");

  const testLogin = {
    email: "adarshbalika@gmail.com",
    password: "adarshbalika",
  };

  const loginSubmitHandler = async (user) => {
    try {
      const { encodedToken, foundUser } = await loginFunc(user);
      if (encodedToken) {
        localStorage.setItem("AUTH_TOKEN", JSON.stringify(encodedToken));
        localStorage.setItem("username", JSON.stringify(foundUser.firstName));
        setAuth(() => ({
          isAuth: true,
          token: encodedToken,
          user: foundUser.firstName,
        }));    
        navigate("/");
      } else {
        throw new Error("Login failed! Check your filled details.");
      }
    } catch (error) {
      setLoginError(error.message);
    }
  };

  const testLoginHandler = async (user) => {
    setUser(testLogin);
    loginSubmitHandler(user);
  };

  return (
    <main className="form-container">
      <h4 className="h4">LOGIN</h4>
      <form
        className="flex-col"
        onSubmit={(e) => {
          e.preventDefault();
          loginSubmitHandler(user);
        }}
      >
        <input
          type="email"
          className="input-field my-5"
          placeholder="Enter your email here"
          required
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <div className="my-5 hide-pswrd">
          <input
            type="password"
            className="input-field"
            placeholder="Enter password"
            required
            maxLength="20"
            minLength="6"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <span>
            <i className="fa fa-eye-slash"></i>
          </span>
        </div>
        <div className="forgot-pwd-row my-5">
          <div className="remember-chkbox">
            <input type="checkbox" name="remember-me" id="remember-me" />
            <label htmlFor="remember-me" className="mx-2">
              Remember Me
            </label>
          </div>
          <button className="button button-primary button-link">
            Forgot Password?
          </button>
        </div>
        <button
          type="submit"
          className="button button-primary btn-solid login-btn"
        >
          Login
        </button>
        <button
          type="button"
          className="button button-primary btn-solid login-btn"
          onClick={(e) => {
            e.preventDefault();
            testLoginHandler(testLogin);
          }}
        >
          Login as Guest
        </button>
        {loginError !== "" && <p className="pswrd-match">{loginError}</p>}
        <div className="signup-msg my-5">
          Not a user yet?{" "}
          <Link
            to="/signup"
            href=""
            className="button button-primary button-link create-acc-btn"
          >
            Create an account here
          </Link>
          .
        </div>
      </form>
    </main>
  );
};

