import "./navbar.scss";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />

          <span>Homepage</span>

          <span className="navbarmainLinks">Series</span>
          <span className="navbarmainLinks">Movies</span>

          <span>New and Popular</span>
          <span>My List</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
