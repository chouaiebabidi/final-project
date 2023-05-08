import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { userLogin, userRegister } from '../JS/userSlice/userSlice';
import "./style/login.css"



const Login = ({ ping, setping }) => {
  const [login, setlogin] = useState({
    email: "",
    password: "",
  });
  const [register, setregister] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  })
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="row" style={{ display: "flex", justifyContent: "center" }}>
      <div className="col-md-6 mx-auto p-0">
        <div className="card" style={{ marginLeft: "-433px", width: "197%" }}>
          <div className="login-box">
            <div className="login-snip">
              <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked /><label htmlFor="tab-1" className="tab">Login</label>
              <input id="tab-2" type="radio" name="tab" className="sign-up" /><label htmlFor="tab-2" className="tab">Sign Up</label>
              <div className="login-space">
                <div className="login">
                  <div className="group">
                    <label htmlFor="email" className="label">email</label>
                    <input id="email" type="text" className="input" placeholder="Enter your email" onChange={(e) => { setlogin({ ...login, email: e.target.value }) }} />
                  </div>
                  <div className="group">
                    <label htmlFor="pass" className="label">Password</label>
                    <input id="pass" type="password" className="input" data-type="password" placeholder="Enter your password" onChange={(e) => { setlogin({ ...login, password: e.target.value }) }} />
                  </div>
                  <div className="group">
                    <input id="check" type="checkbox" className="check" defaultChecked />
                    <label htmlFor="check"><span className="icon" /> Keep me Signed in</label>
                  </div>
                  <div className="group">
                    <input type="submit" className="button" Value="Sign In" onClick={() => { dispatch(userLogin(login)); setping(!ping) }} />
                  </div>
                  <div className="hr" />
                  <div className="foot">
                    <a href="#">Forgot Password?</a>
                  </div>
                </div>
                <div className="sign-up-form">
                  <div className="group">
                    <label htmlFor="user" className="label">Username</label>
                    <input id="user" type="text" className="input" placeholder="Create your Username" onChange={(e) => setregister({ ...register, name: e.target.value })} />
                  </div>
                  <div className="group">
                    <label htmlFor="pass" className="label">LastName</label>
                    <input id="pass" type="text" className="input" placeholder="Create your Lastname" onChange={(e) => setregister({ ...register, lastName: e.target.value })} />
                  </div>
                  <div className="group">
                    <label htmlFor="pass" className="label">Password</label>
                    <input id="pass" type="password" className="input" data-type="password" placeholder="Type your password" onChange={(e) => setregister({ ...register, password: e.target.value })} />
                  </div>
                  <div className="group">
                    <label htmlFor="pass" className="label">Email Address</label>
                    <input id="pass" type="email" className="input" placeholder="Enter your email address" onChange={(e) => setregister({ ...register, email: e.target.value })} />
                  </div>
                  <div className="group">
                    <input type="submit" className="button" Value="Sign Up" onClick={() => { dispatch(userRegister(register)); setping(!ping) }} />
                  </div>
                  <div className="hr" />
                  <div className="foot">
                    <label htmlFor="tab-1">Already Member?</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login