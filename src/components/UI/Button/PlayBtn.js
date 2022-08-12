import styled from "styled-components";

const PlayBtnStyle = styled.button`
  width: ${(props) => (props.className === "landing" ? "120px" : "100px")};
  height: ${(props) => (props.className === "landing" ? "50px" : "40px")};
  border-radius: 10px;
  padding: 5px;
  background-color: #4143bac5;
  color: aliceblue;
  border: none;
  @media (max-width: 1000px) {
    width: 100px;
  }
  @media (max-width: 425px) {
    width: 70px;
    height: 50px;
  }
  :hover {
    background-color: #1c1d8669;
  }
  transition: all 300ms ease-in-out;
`;

const PlayBtn = (props) => {
  return (
    <PlayBtnStyle
      onClick={() => {
        alert("Relax");
      }}
      className={props.className}
    >
      Play <i className="fa fa-play-circle" aria-hidden="true" />
    </PlayBtnStyle>
  );
};
export default PlayBtn;
