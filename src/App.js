import Sidebar from "./components/layout/sidebar/Sidebar";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TvShows from "./pages/TvShows";
import Favorites from "./pages/Favorites";
import Container from "./components/layout/view/Container";
import Search from "./pages/Search";
import Footer from "./components/layout/footer/Footer";

function App() {
  return (
    <div className="App">
      <Container>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tvshows" element={<TvShows />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
