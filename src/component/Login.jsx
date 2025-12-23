const Login = () => {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <input type="text" placeholder="Enter Username" className="input-box" />
        <input type="password" placeholder="Enter Password" className="input-box" />
        <button className="login-btn">Login</button>
      </form>
    </div>
  );
};

export default Login;
