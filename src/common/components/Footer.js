import styled from "styled-components";

export const FooterContainer = styled.footer `
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 150rem;
  height: 5rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
 
    .footer-wrapper {
      position: relative;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    p {
      color: #888;
      font-size: 16px;
    }
`

const Footer = () => {
  return (
  <FooterContainer>
  <div className="footer-wrapper">
    <p> 개인정보 처리방침 | 이용약관 </p>
    <p>All rights reserved @ Codestates </p>
  </div>
  </FooterContainer>
)};

export default Footer;