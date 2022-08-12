import Landing from "../components/Landing/Landing";
import { useSelector, useDispatch } from "react-redux";
import MovieReels from "../components/UI/MovieReels/MovieReels";
import {
  getSectionOne,
  getSectionTwo,
  getSectionThree,
} from "../store/slices/TvShowPageSlice";
import { useEffect } from "react";

const TvShows = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSectionOne());
    dispatch(getSectionTwo());
    dispatch(getSectionThree());
  }, [dispatch]);

  const { sectionOne, sectionTwo, sectionThree } = useSelector(
    (state) => state.tvShows
  );

  const data = [
    {
      mainData: sectionOne,
      title: "Top Rated",
    },
    {
      mainData: sectionTwo,
      title: "On Air",
    },
    {
      mainData: sectionThree,
      title: "Popular",
    },
  ];

  const genres = ["Historical fiction", "Crime Drama"];
  const description =
    "Peaky Blinders is a British crime drama television series created by Steven Knight. Set in Birmingham, England, it follows the exploits of the Peaky Blinders crime gang in the direct aftermath of the First World War. The fictional gang is loosely based on a real urban youth gang of the same name who were active in the city from the 1880s to the 1910s.";
  const rating = 8.8;
  return (
    <>
      <Landing
        id="tvlanding"
        url="https://cdn.wallpapersafari.com/35/42/c4EyMj.jpg"
        title="Peaky Blinders"
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
export default TvShows;
