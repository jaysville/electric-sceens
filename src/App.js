// import Sidebar from "./components/layout/sidebar/Sidebar";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TvShows from "./pages/TvShows";
import Favorites from "./pages/Favorites";
import Container from "./components/layout/view/Container";
import Search from "./pages/Search";
import Sidebar from "./components/layout/sidebar/Sidebar";
import TopNav from "./components/layout/TopNav";
import { useState } from "react";

function App() {
  const [showNav, setShowNav] = useState(false);

  const showNavHandler = () => {
    setShowNav(true);
  };

  const hideNavHandler = () => {
    setShowNav(false);
  };
  return (
    <div className="App">
      <Sidebar showNav={showNav} onHideNav={hideNavHandler} />
      <Container>
        <TopNav onShowNav={showNavHandler} showNav={showNav} />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tvshows" element={<TvShows />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
