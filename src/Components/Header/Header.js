import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import './header.css';

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <div>
     <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/home"><strong>Dhaka Wheel</strong></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/destination">Destination</Link>
        </li>
        <li className="nav-item">
          <Link class="nav-link" to="/login">Log in</Link>
        </li>
        <li className="nav-item">
        <p>{loggedInUser.name}</p>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  );
};

export default Header;
