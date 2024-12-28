import { useState } from "react";
import "./login.css";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../library/firebase";
import { doc, setDoc } from "firebase/firestore";


const Login = () => {
  document.documentElement.style.setProperty(
    "--background-image",
    "url('moon.png')"
  );
  document.documentElement.style.setProperty(
    "--theme-color",
    "rgba(19.6, 20.4, 28.2, 0.7)"
  );
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });

  const [loading, setLoading] = useState(false)

  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handelLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData);
    try{
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Welcome back!")
    }catch(err){
      console.log(err)
      toast.error(err.message)
    }finally{
      setLoading(false);
    }
  };

  const handleRegister = async (e) => {
    setLoading(true)
    e.preventDefault();
    const formData = new FormData(e.target);
    const { username, email, password } = Object.fromEntries(formData);

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(username);
      await setDoc(
        doc(db, "users", res.user.uid),{
          username,
          email,
          password,
          id: res.user.uid
        }
      );
      await setDoc(doc(db, "userChats", res.user.uid), { chats: [] });
      toast.success(`Hellooo ${username}!`);
      setLoading(true);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }finally{
      setLoading(false)
    }
  };

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
              <button disabled={loading}>{loading? "Loading" :"Sign in"}</button>
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
            <form onSubmit={handleRegister}>
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
                name="password"
              ></input>
              <button disabled={loading}>{loading? "Loading" :"Register"}</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
