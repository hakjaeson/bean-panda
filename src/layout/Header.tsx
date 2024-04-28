import { HeaderWrap } from "../styles/LayoutStyles";

const Header = () => {
  return (
    <HeaderWrap>
      <div className="header-inner">
        <ul className="header-info">
          <li>
            <span>Sign In</span>
          </li>
          <li>
            <span>Sign Up</span>
          </li>
          <li>
            <span>My Page</span>
          </li>
          <li>
            <span>FAQ</span>
          </li>
        </ul>

        <div className="header-menu-wrap">
          <div className="header-logo">
            <img src="/images/logo.svg" alt="" />
          </div>
          <ul className="header-category">
            <li>
              <span>COFFEE BEAN</span>
            </li>
            <li>
              <span>COFFEE</span>
            </li>
            <li>
              <span>PRE-ORDER</span>
            </li>
            <li>
              <span>SHOP</span>
            </li>
            <li>
              <span>NOTICE</span>
            </li>
          </ul>
        </div>
      </div>
    </HeaderWrap>
  );
};

export default Header;
