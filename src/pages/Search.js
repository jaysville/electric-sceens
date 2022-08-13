import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { MovieBox, Wrapper } from "./Favorites";
import Modal from "../components/UI/Modal/Modal";
import { P } from "./Favorites";
import styled from "styled-components";
import Loader from "../components/UI/Loader/Loader";

const Form = styled.form`
  display: flex;
  justify-content: center;
  input {
    background-color: transparent;
    border: 2px solid #6c23c0;
    border-radius: 15px;
    text-align: center;
    color: aliceblue;
    outline: none;
    padding: 5px;
    font-weight: small;
  }
`;

const Search = () => {
  const [input, setInput] = useState("");
  const [startSearch, setStartSearch] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const search = useCallback(async () => {
    setIsLoading(true);
    if (input.trim().length === 0) {
      setIsLoading(false);
      return;
    }
    setStartSearch(true);
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${input}`
    );
    const result = response.data.results;
    console.log(result);
    setSearchedMovies(result);
    setIsLoading(false);
  }, [input]);
  let content;

  useEffect(() => {
    search();
  }, [input, search]);

  if (searchedMovies.length === 0) {
    content = <P>{!startSearch ? "Type to search!" : "No movies found :("}</P>;
  } else {
    content = (
      <>
        {searchedMovies.map(
          (
            {
              id,
              title,
              backdrop_path,
              name,
              overview,
              vote_average,
              genre_ids,
            },
            i
          ) => {
            return (
              <MovieBox
                key={i}
                onClick={() => {
                  const titleText = title || name;
                  setModalOpen(true);
                  setModalData({
                    id,
                    img:
                      (backdrop_path &&
                        `https://image.tmdb.org/t/p/w500/${backdrop_path}`) ||
                      "https://image.tmdb.org/t/p/w500//boPsYdMOZQj6FJy9xXmAkrEK7ry.jpg",
                    title: titleText,
                    description: overview || "Overview currently unavailable",
                    rating: vote_average,
                    genres: genre_ids,
                  });
                }}
              >
                <img
                  src={
                    (backdrop_path &&
                      `https://image.tmdb.org/t/p/w500/${backdrop_path}`) ||
                    "https://image.tmdb.org/t/p/w500//boPsYdMOZQj6FJy9xXmAkrEK7ry.jpg"
                  }
                  alt="movie poster"
                  className="img-fluid"
                />
              </MovieBox>
            );
          }
        )}
      </>
    );
  }

  return (
    <>
      <Form>
        <input
          type="text"
          onChange={handleInputChange}
          placeholder="Search movies"
        />
      </Form>
      <hr />
      {modalOpen && (
        <Modal
          movieInfo={modalData}
          onClose={() => {
            setModalOpen(false);
          }}
        />
      )}
      <Wrapper>{isLoading ? <Loader /> : content}</Wrapper>
    </>
  );
};
export default Search;
