import { FooterWrap } from "../styles/LayoutStyles";

const Footer = () => {
  return (
    <FooterWrap>
      <div className="footer-inner">
        <div className="footer-logo">
          <img src="/images/logo_text.png" alt="" />
        </div>
        <div className="footer-info">
          <span>CONTACT ME</span>
          <span>NAME : 손재학</span>
          <span>EMAIL : hakjae.son@gmail.com</span>
          <span>
            <strong>PROJECT COMMUNITY</strong>
          </span>
          <div className="footer-commu-link">
            <img src="/images/github.png" alt="direct-link github" />
            <img src="/images/notion.png" alt="direct-link notion" />
            <img src="/images/youtube.png" alt="direct-link youtube" />
          </div>
        </div>
      </div>
    </FooterWrap>
  );
};

export default Footer;
