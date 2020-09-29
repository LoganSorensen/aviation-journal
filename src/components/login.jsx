import React, { useState } from "react";

const Login = (props) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    remember: true,
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const login = (e) => {
    e.preventDefault();
    console.log(credentials);
    props.history.push("/");
  };

  const toggleChecked = (e) => {
    setCredentials({ ...credentials, remember: e.target.checked });
  };

  return (
    <div className="login">
      <form onSubmit={login}>
        <div className="input-cont">
          <i className="fas fa-user"></i>
          <input
            type="text"
            name="username"
            placeholder="Username"
            required
            onChange={handleChange}
          />
        </div>
        <div className="input-cont">
          <i className="fas fa-lock"></i>
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={handleChange}
          />
        </div>
        <div className="remember">
          <input
            type="checkbox"
            id="remember"
            name="remember"
            defaultChecked
            onClick={toggleChecked}
          />
          <label htmlFor="remember">Remember me</label>
        </div>
        <button>Log In</button>
      </form>
    </div>
  );
};

export default Login;
