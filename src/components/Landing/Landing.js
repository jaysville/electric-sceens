import classes from "./Landing.module.css";
import PlayBtn from "../UI/Button/PlayBtn";
import InfoBtn from "../UI/Button/InfoBtn";
import Modal from "../UI/Modal/Modal";
import { useState } from "react";
import Fade from "../UI/Fade/Fade";

const Landing = (props) => {
  const Genre = props.genres.map((genre, i) => {
    return <li key={i}>{genre}</li>;
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState("");

  const { url, description, rating, id, title } = props;

  const landingMovieInfo = { img: url, description, rating, id, title };
  return (
    <div className={classes.container}>
      {modalOpen && (
        <Modal
          movieInfo={modalData}
          onClose={() => {
            setModalOpen(false);
          }}
        />
      )}
      <div className={classes.wrapper}>
        <img src={url} className={`img-fluid ${classes.img}`} alt="" />
        <Fade />
        <div
          className={`animate__animated animate__fadeInUp ${classes.actions}`}
        >
          <h2>{title}</h2>
          <div className={classes.genres}>
            <ul>{Genre}</ul>
          </div>
          <PlayBtn className="landing" />
          <InfoBtn
            onClick={() => {
              setModalData(landingMovieInfo);
              setModalOpen(true);
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default Landing;
