import styled from "styled-components";

const TopNavStyle = styled.div`
  width: 100%;
  align-self: center;
  position: fixed;
  top: 0;
  background-color: #2b2b2b;
  z-index: 2000000000;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
    0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
  button {
    margin-left: 4%;
    border: none;
    background-color: transparent;
    color: aliceblue;
    font-size: 30px;
  }
  @media (min-width: 800px) {
    display: none;
  }
`;

const TopNav = () => {
  return (
    <TopNavStyle>
      <button>
        <i className="fa fa-bars " aria-hidden="true" />
      </button>
    </TopNavStyle>
  );
};

export default TopNav;
