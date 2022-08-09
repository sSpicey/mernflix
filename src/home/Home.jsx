import Featured from "../components/featured/Featured.jsx";
import NavBar from "../components/navbar/NavBar.jsx";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <Featured />
    </div>
  );
};

export default Home;
