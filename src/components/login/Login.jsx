import { useState } from "react"
import "./login.css"

const Login = () => {
  document.documentElement.style.setProperty(
    "--theme-color", "transparent"
  )
  const [avatar, setAvatar] = useState({
    file: null,
    url: ""
  })

  const handleAvatar = (e) =>{
    if(e.target.files[0]){
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0])
      })
    }
  }

  return (
    <div className='main'>
      <div className="login"> 
        <h1>Welcome back!</h1>
        <div className="fields">
          <span>Sign in</span>
          <div className="inner">
          <form>
            <input type="text" placeholder="Enter your email" name="email"></input>
            <input type="password" placeholder="Enter your passowrd" name="password"></input>
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
            <form>
              <label htmlFor="image">
                <img src={avatar.url || "/avatar.png"}/>
              </label>
              <input type="file" id = "image" style={{display:"none"}} onChange={handleAvatar}></input>
              <input type="text" placeholder="Enter your username" name="username"></input>
              <input type="text" placeholder="Enter your email" name="email"></input>
              <input type="password" placeholder="Enter your passowrd" name="pasword"></input>
              <button>Register</button>
            </form>
          </div>
        </div></div>
    </div>
  )
}

export default Login