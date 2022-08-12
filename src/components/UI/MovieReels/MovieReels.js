import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import classes from "./MovieReels.module.css";
import { useState } from "react";

import { A11y, Navigation, Pagination, Scrollbar } from "swiper";

import styled from "styled-components";
import Modal from "../Modal/Modal";

const WrapperStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 5px;
  text-align: center;
`;
const Wrapper = (props) => {
  return <WrapperStyle>{props.children}</WrapperStyle>;
};
const MovieReels = (props) => {
  const { movies, title } = props;
  const [modalData, setModalData] = useState({});

  const [modalOpen, setModalOpen] = useState(false);
  return (
    <Wrapper>
      <h4 className={classes.title}>{title}</h4>
      <Swiper
        slidesPerGroup={5}
        slidesPerView={5}
        slidesPerGroupSkip={1}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        grabCursor={true}
        navigation={true}
        pagination={{ clickable: true }}
        a11y={true}
        loop={true}
        speed={1000}
      >
        {movies &&
          movies.map(
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
                <SwiperSlide key={i}>
                  <img
                    src={
                      (backdrop_path &&
                        `https://image.tmdb.org/t/p/w500/${backdrop_path}`) ||
                      "https://image.tmdb.org/t/p/w500//boPsYdMOZQj6FJy9xXmAkrEK7ry.jpg"
                    }
                    className={`img-fluid ${classes.img}`}
                    alt="poster"
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
                        description:
                          overview || "Overview currently unavailable",
                        rating: vote_average,
                        genres: genre_ids,
                      });
                    }}
                  />
                </SwiperSlide>
              );
            }
          )}
      </Swiper>
      {modalOpen && (
        <Modal
          movieInfo={modalData}
          onClose={() => {
            setModalOpen(false);
          }}
        />
      )}
    </Wrapper>
  );
};

export default MovieReels;
