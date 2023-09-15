import { useContext } from 'react';
import './Header.scss';
import userIcon from '../../assets/user-icon.png';
import { AuthContext } from '../../contexts/authContext';

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="app__header">
      <div className="app__header-logo">
        <h1>GAMER LINKUP</h1>
      </div>
      <ul className="app__header-navbar">
        <li className="app__header-navbar-selected">FEED</li>
        <li>BUDDIES</li>
      </ul>
      <div className="app__header-profile">
        <img src={userIcon}></img>
        <div className="app__header-profile-status">
          <h3>{user.username}</h3>
          <span>
            Ausente <span>▾</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
