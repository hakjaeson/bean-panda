import { HeaderWrap } from "../styles/LayoutStyles";

const Header = () => {
  return (
    <HeaderWrap>
      <div className="header-info">
        <span>로그인</span>
        <span>회원가입</span>
        <span>마이페이지</span>
        <span>FAQ</span>
      </div>
      <div className="header-menu-wrap">
        <div className="header-logo">
          <img src="/images/logo.svg" alt="" />
        </div>
        <div className="header-category">
          <span>COFFEE BEAN</span>
          <span>COFFEE</span>
          <span>PRE-ORDER</span>
          <span>SHOP</span>
          <span>NOTICE</span>
        </div>
      </div>
    </HeaderWrap>
  );
};

export default Header;
