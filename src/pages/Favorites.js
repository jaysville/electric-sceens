import { useSelector } from "react-redux";
import styled from "styled-components";
import { useState } from "react";
import Modal from "../components/UI/Modal/Modal";

export const MovieBox = styled.div`
  width: 200px;
  display: block;
  padding: 0;
  :hover {
    transform: scale(1.1);
  }
  @media (max-width: 700px) {
    width: 110px;
  }
  img {
    border-radius: 6px;
    width: 100%;
  }

  transition: all 300ms ease-in-out;
`;

export const Wrapper = styled.div`
  margin-top: 10px;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 8px;
  @media (max-width: 425px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1000px) {
    grid-template-columns: repeat(5, 1fr);
    margin-left: 150px;
  }
`;
export const P = styled.p`
  position: fixed;
  top: 50vh;
  left: 52%;
  transform: translate(-50%, -50%);
`;
const Favorites = () => {
  const { favoritesList } = useSelector((state) => state.favorites);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  let content;

  if (favoritesList.length === 0) {
    content = <P>No movie added yet!</P>;
  } else {
    content = (
      <>
        {modalOpen && (
          <Modal
            movieInfo={modalData}
            onClose={() => {
              setModalOpen(false);
            }}
          />
        )}

        {favoritesList.map((movie, i) => {
          return (
            <MovieBox
              key={i}
              onClick={() => {
                setModalOpen(true);
                setModalData(movie);
              }}
            >
              <img src={movie.img} alt="movie poster" />
            </MovieBox>
          );
        })}
      </>
    );
  }

  return <Wrapper>{content}</Wrapper>;
};
export default Favorites;
