import styled from "styled-components";

const InfoBtnStyle = styled.button`
  width: fit-content;
  border-radius: 10px;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.4);
  color: aliceblue;
  border: none;
  margin: 0 10px;
  :hover {
    background-color: #1c1d8669;
  }
  @media (max-width: 425px) {
    height: 50px;
  }
  transition: all 300ms ease-in-out;
`;
const InfoBtn = (props) => {
  return (
    <InfoBtnStyle onClick={props.onClick}>
      Info
      <span className="ms-2">
        <i className="fa fa-info-circle" aria-hidden="true"></i>
      </span>
    </InfoBtnStyle>
  );
};

export default InfoBtn;
