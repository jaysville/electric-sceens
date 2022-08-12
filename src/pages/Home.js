import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "swiper/css/bundle";
import MovieReels from "../components/UI/MovieReels/MovieReels";

import Landing from "../components/Landing/Landing";
import {
  getSectionOne,
  getSectionTwo,
  getSectionThree,
  getSectionFour,
} from "../store/slices/HomePageSlice";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSectionOne());
    dispatch(getSectionTwo());
    dispatch(getSectionThree());
    dispatch(getSectionFour());
  }, [dispatch]);

  const { sectionOne, sectionTwo, sectionThree, sectionFour } = useSelector(
    (state) => state.home
  );
  const data = [
    { mainData: sectionOne, title: "Now Playing" },
    { mainData: sectionTwo, title: "Popular Movies" },
    { mainData: sectionThree, title: "On Air" },
    { mainData: sectionFour, title: "Popular Tv Shows" },
  ];

  const genres = ["Crime", "Thriller", "Neo-Western", "Tragedy"];
  const description =
    "Breaking Bad follows protagonist Walter White, a chemistry teacher who lives in New Mexico with his wife and teenage son who has cerebral palsy. White is diagnosed with Stage III cancer and given a prognosis of two years left to live. With a new sense of fearlessness based on his medical prognosis, and a desire to secure his family's financial security, White chooses to enter a dangerous world of drugs and crime and ascends to power in this world. The series explores how a fatal diagnosis such as White's releases a typical man from the daily concerns and constraints of normal society and follows his transformation from mild family man to a kingpin of the drug trade.";
  const rating = 9.2;

  return (
    <>
      <Landing
        id="homelanding"
        url="https://cdn.wallpapersafari.com/28/62/LaYtox.jpg"
        title="Breaking Bad"
        genres={genres}
        description={description}
        rating={rating}
      />
      {data.map(({ mainData, title }, i) => {
        return <MovieReels movies={mainData} key={i} title={title} />;
      })}
    </>
  );
};
export default Home;
