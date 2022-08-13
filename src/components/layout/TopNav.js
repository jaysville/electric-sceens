import styled from "styled-components";

const TopNavStyle = styled.div`
  width: 100%;
  align-self: center;
  position: fixed;
  padding: 3px;
  top: 0;
  background-color: #2b2b2b;
  z-index: 2000000000;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
    0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
  display: flex;

  button {
    border: none;
    background-color: transparent;
    color: aliceblue;
    font-size: 30px;
  }
  h3 {
    margin-left: auto;
    align-self: center;
    padding: 0 5px;
    font-family: josefin-sans, sans-serif;
  }
  @media (min-width: 800px) {
    display: none;
  }
`;

const TopNav = (props) => {
  return (
    <TopNavStyle onClick={props.onShowNav}>
      <button>
        <i className="fa fa-bars " aria-hidden="true" />
      </button>

      <h3>Electric Screens</h3>
    </TopNavStyle>
  );
};

export default TopNav;
