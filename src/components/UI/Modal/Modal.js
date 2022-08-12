import classes from "./Modal.module.css";
import { createPortal } from "react-dom";
import PlayBtn from "../Button/PlayBtn";
import Fade from "../MovieReels/Fade/Fade";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../../store/slices/FavoritesSlice";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useEffect, useState } from "react";

const FavoriteTogglerBtn = styled.button`
  margin: 5px;
  border-radius: 6px;
  width: 50px;
  height: 40px;
  border: none;
  color: aliceblue;
  background-color: #00000092;
  @media (max-width: 900px) {
    width: 40px;
  }
`;
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick}></div>;
};
const ModalOverlay = (props) => {
  const movie = props.data;
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useDispatch();

  const { favoritesList } = useSelector((state) => state.favorites);

  useEffect(() => {
    const favoritesArray = favoritesList.map((movie) => movie.id);
    if (favoritesArray.includes(movie.id)) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [favoritesList, movie.id]);

  const toggleFavoriteStatus = () => {
    if (!isFavorite) {
      dispatch(addToFavorites(movie));
    } else {
      dispatch(removeFromFavorites(movie.id));
    }
  };

  return (
    <div className={classes.modal}>
      <div className={classes.main}>
        <img
          src={movie.img}
          className={`img-fluid ${classes.img}`}
          alt="movie poster"
        />
        <Fade />
        <button className={classes.closeBtn} onClick={props.onClick}>
          <i className={`fa fa-times ${classes.icon}`} aria-hidden="true" />
        </button>
        <div className={classes.info}>
          <h2>{movie.title}</h2>
          <PlayBtn />
          <FavoriteTogglerBtn onClick={toggleFavoriteStatus}>
            {!isFavorite ? (
              <i className="fa fa-plus" aria-hidden="true" />
            ) : (
              <i className="fa fa-check" aria-hidden="true" />
            )}
          </FavoriteTogglerBtn>
        </div>
      </div>
      <div className={classes.content}>
        <p>{movie.rating}/10</p>
        <article>{movie.description}</article>
      </div>
    </div>
  );
};

const portalElement = document.getElementById("modal");
const Modal = (props) => {
  return (
    <>
      {createPortal(<Backdrop onClick={props.onClose} />, portalElement)}
      {createPortal(
        <ModalOverlay data={props.movieInfo} onClick={props.onClose} />,
        portalElement
      )}
    </>
  );
};
export default Modal;
