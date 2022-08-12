import Featured from "../components/featured/Featured.jsx";
import NavBar from "../components/navbar/NavBar.jsx";
import List from "../components/list/List.jsx";

import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <Featured />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
};

export default Home;
