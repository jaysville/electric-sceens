import styled from "styled-components";

const FooterStyle = styled.footer`
  text-align: center;
  padding: 5px;
  margin-top: auto;
`;

const Footer = () => {
  return (
    <FooterStyle>
      <hr />
      <span>Olaotan Abarowei &copy; 2022</span>
    </FooterStyle>
  );
};
export default Footer;
