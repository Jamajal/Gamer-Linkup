import './LoginPage.scss';

const LoginPage = () => {
  return (
    <div className="app__loginPage">
      <h1>GAMER LINKUP</h1>
      <section className="app__loginPage-loginBox">
        <div className="app__loginPage-loginBox-welcome">
          <h1>SIGN IN</h1>
          <h2>FIND PARTNERS FOR YOUR GAMEPLAYS</h2>
        </div>
        <form className="app__loginPage-loginBox-credentials">
          <div className="app__loginPage-loginBox-credentials-field">
            <label>Email</label>
            <input type="email" placeholder="john.wick@gmail.com" />
            <span className="error">Error</span>
          </div>
          <div>
            <label>Password</label>
            <input type="password" />
            <span className="error">Error</span>
          </div>
          <button>Login</button>
        </form>
        <div className="app__loginPage-loginBox-footer"></div>
      </section>
    </div>
  );
};

export default LoginPage;
