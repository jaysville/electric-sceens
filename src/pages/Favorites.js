import { useSelector } from "react-redux";
import styled from "styled-components";
import { useState } from "react";
import Modal from "../components/UI/Modal/Modal";

export const MovieBox = styled.div`
  width: 200px;
  margin: 5px 10px;
  display: inline-block;
  padding: 0;
  :hover {
    transform: scale(1.1);
  }
  @media (max-width: 600px) {
    width: 120px;
    margin: 5px 10px;
  }
  img {
    border-radius: 6px;
    width: 100%;
  }

  transition: all 300ms ease-in-out;
`;

export const Wrapper = styled.div`
  height: ${(props) => (props.className === "search" ? "auto" : "100vh")};
  margin-top: 5%;
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
