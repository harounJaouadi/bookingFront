import "./NavBar.css";

const NavBar = function () {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">imabooking</span>
        <div className="navItems">
          <button className="navButton">register</button>
          <button className="navButton">login</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
