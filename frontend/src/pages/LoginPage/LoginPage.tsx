import { ChangeEvent, MouseEvent, useState, useContext } from 'react';
import './LoginPage.scss';

import GoogleButton from '../../assets/google-button.png';
import Button from '../../components/Button/Button';
import VisibilityToggle from '../../assets/visibility-toggle.png';
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/authContext';


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate()
  const { login } = useContext(AuthContext)

  const inputPassword = document.querySelector('#input-password');

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!email || !password) {
      setError('All credentials must be provided!');
      return;
    }
    
    login(email, password)
    navigate('/')

  };

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setError('');
    setEmail(e.target.value);
  };

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setError('');
    setPassword(e.target.value);
  };

  const handleVisibilityToggle = () => {
    if (inputPassword?.getAttribute('type') == 'password') {
      inputPassword?.setAttribute('type', 'text');
    } else {
      inputPassword?.setAttribute('type', 'password');
    }
  };

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
            <input
              type="email"
              placeholder="john.wick@gmail.com"
              value={email}
              onChange={(e) => handleEmail(e)}
            />
          </div>
          <div className="app__loginPage-loginBox-credentials-field">
            <label>Password</label>
            <div className="app__loginPage-loginBox-credentials-field-customizedPassword">
              <input
                id="input-password"
                type="password"
                placeholder="Password here..."
                value={password}
                onChange={(e) => handlePassword(e)}
              />
              <img
                src={VisibilityToggle}
                alt="Visibility Toggle"
                onClick={handleVisibilityToggle}
              />
            </div>
          </div>
          <span className="error">{error}</span>
          <Button onClick={handleSubmit} content="Login" />
        </form>
        <div className="app__loginPage-loginBox-separator">
          <div className="customHr" />
          <span>OR</span>
          <div className="customHr" />
        </div>
        <div className="app__loginPage-loginBox-footer">
          <img src={GoogleButton} alt="Google" />
          <div className="app__loginPage-loginBox-footer-otherOptions">
            <p>
              Don't Have An Account? <a href="#">Sign Up!</a>
            </p>
            <p>
              Forgot Your Password? <a href="#">Click Here!</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
