import styled from "styled-components";
import Footer from "./Footer";

const FooterCustom = styled(Footer)`
display: flex;
justify-content: center;
align-items: center;
grid-area: footer;
  h4{
    font-weight: 300;
    font-size: small;
    color: rgba(255,255,255);
  }
`;

export default FooterCustom;