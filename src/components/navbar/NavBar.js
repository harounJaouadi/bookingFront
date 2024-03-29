import { useContext } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
const NavBar = function () {
  const {user}=useContext(AuthContext) ; 

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{
          color:"inherit" , 
          textDecoration: "none"
        }}>
          <span className="logo">imabooking</span>
        </Link>
        {user ? user.username : (<div className="navItems">
          <button className="navButton">register</button>
          <button className="navButton">login</button>
        </div>)}
      </div>
    </div>
  );
};

export default NavBar;
