import { useState } from "react";
import "./login.css";
import { toast } from "react-toastify";

const Login = () => {
  document.documentElement.style.setProperty(
    "--background-image",  "url('moon.png')"
  )
  document.documentElement.style.setProperty(
    "--theme-color", "rgba(19.6, 20.4, 28.2, 0.7)"
  )
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });

  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handelLogin = (e) =>{
    e.preventDefault()
    toast.success("Hello")
  } 

  return (
    <div className="main">
      <div className="login">
        <h1>Welcome back!</h1>
        <div className="fields">
          <span>Sign in</span>
          <div className="inner">
            <form onSubmit={handelLogin}>
              <input
                type="text"
                placeholder="Enter your email"
                name="email"
              ></input>
              <input
                type="password"
                placeholder="Enter your passowrd"
                name="password"
              ></input>
              <button>Sign in</button>
            </form>
          </div>
        </div>
      </div>
      <div className="register">
        <h1>First time?</h1>
        <h1>Don&apos;t be a stranger</h1>
        <div className="fields">
          <span>Sign up</span>
          <div className="inner">
            <form onSubmit={handelLogin}>
              <label htmlFor="image">
                <img src={avatar.url || "/avatar.png"} />
              </label>
              <input
                type="file"
                id="image"
                style={{ display: "none" }}
                onChange={handleAvatar}
              ></input>
              <input
                type="text"
                placeholder="Enter your username"
                name="username"
              ></input>
              <input
                type="text"
                placeholder="Enter your email"
                name="email"
              ></input>
              <input
                type="password"
                placeholder="Enter your passowrd"
                name="pasword"
              ></input>
              <button>Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
