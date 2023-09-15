import { useState, useContext, ChangeEvent, MouseEvent } from 'react';

import Button from '../../components/Button/Button';
import VisibilityToggle from '../../assets/visibility-toggle.png';
import './SignupPage.scss';
import { AuthContext } from '../../contexts/authContext';
import { useNavigate } from 'react-router-dom';

// Criar erros para repetição de senha, username, colocar botão de voltar para download e integrar com backend
const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [error, setError] = useState('');

  //const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const inputPassword = document.querySelector('#input-password');
  const inputRetypePassword = document.querySelector('#input-retype-password');

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!email || !password) {
      setError('All credentials must be provided!');
      return;
    }

    navigate('/login');
  };

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setError('');
    setEmail(e.target.value);
  };

  const handleUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setError('');
    setUsername(e.target.value);
  };

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setError('');
    setPassword(e.target.value);
  };

  const handleRetypePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setError('');
    setRetypePassword(e.target.value);
  };

  const handleVisibilityTogglePassword = () => {
    if (inputPassword?.getAttribute('type') == 'password') {
      inputPassword?.setAttribute('type', 'text');
    } else {
      inputPassword?.setAttribute('type', 'password');
    }
  };

  const handleVisibilityToggleRetypePassword = () => {
    if (inputRetypePassword?.getAttribute('type') == 'password') {
      inputRetypePassword?.setAttribute('type', 'text');
    } else {
      inputRetypePassword?.setAttribute('type', 'password');
    }
  };

  return (
    <div className="app__signupPage">
      <h1>Gamer Linkup</h1>
      <section className="app__signupPage-signupBox">
        <div className="app__signupPage-signupBox-welcome">
          <h1>SIGN UP</h1>
          <h2>START THE YOUR JORNEY AND MAKE NEW FRIENDS</h2>
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
            <label>Username</label>
            <input
              type="text"
              placeholder="John Wick"
              value={username}
              onChange={(e) => handleUsername(e)}
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
                onClick={handleVisibilityTogglePassword}
              />
            </div>
          </div>
          <div className="app__loginPage-loginBox-credentials-field">
            <label>Password</label>
            <div className="app__loginPage-loginBox-credentials-field-customizedPassword">
              <input
                id="input-retype-password"
                type="password"
                placeholder="Retype password here..."
                value={retypePassword}
                onChange={(e) => handleRetypePassword(e)}
              />
              <img
                src={VisibilityToggle}
                alt="Visibility Toggle"
                onClick={handleVisibilityToggleRetypePassword}
              />
            </div>
          </div>
          <span className="error">{error}</span>
          <Button onClick={handleSubmit} content="Sign up" />
        </form>
      </section>
    </div>
  );
};

export default SignupPage;
