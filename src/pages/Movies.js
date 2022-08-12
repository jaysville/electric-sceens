import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Landing from "../components/Landing/Landing";
import MovieReels from "../components/UI/MovieReels/MovieReels";
import {
  getSectionOne,
  getSectionTwo,
  getSectionThree,
} from "../store/slices/MoviePageSlice";

const Movies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSectionOne());
    dispatch(getSectionTwo());
    dispatch(getSectionThree());
  }, [dispatch]);

  const { sectionOne, sectionTwo, sectionThree } = useSelector(
    (state) => state.movies
  );

  const data = [
    { mainData: sectionOne, title: "Top Rated" },
    { mainData: sectionTwo, title: "Now Playing" },
    { mainData: sectionThree, title: "Popular" },
  ];

  const genres = ["Action", "Superhero", "Science Fiction"];
  const description =
    "Captain Marvel is an extraterrestrial Kree warrior who finds herself caught in the middle of an intergalactic battle between her people and the Skrulls. Living on Earth in 1995, she keeps having recurring memories of another life as U.S. Air Force pilot Carol Danvers. With help from Nick Fury, Captain Marvel tries to uncover the secrets of her past while harnessing her special superpowers to end the war with the evil Skrulls.";
  const rating = 6.8;

  return (
    <>
      <Landing
        id="movielanding"
        url="https://cdn.wallpapersafari.com/12/0/4SAjUM.jpg"
        title="Captain Marvel"
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
export default Movies;
