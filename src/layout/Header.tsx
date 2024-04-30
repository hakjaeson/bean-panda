import useNav from "../hooks/useNav";
import { HeaderWrap } from "../styles/LayoutStyles";

const Header = () => {
  const {
    moveToBean,
    moveToCoffee,
    moveToOrder,
    moveToShop,
    moveToCommunity,
    moveToSignin,
    moveToSignup,
    moveToMypage,
    moveToFaq,
  } = useNav();
  return (
    <HeaderWrap>
      <div className="header-inner">
        <ul className="header-info">
          <li>
            <span onClick={moveToSignin}>Sign In</span>
          </li>
          <li>
            <span onClick={moveToSignup}>Sign Up</span>
          </li>
          <li>
            <span onClick={moveToMypage}>My Page</span>
          </li>
          <li>
            <span onClick={moveToFaq}>FAQ</span>
          </li>
        </ul>

        <div className="header-menu-wrap">
          <div className="header-logo">
            <img src="/images/logo.svg" alt="" />
          </div>
          <ul className="header-category">
            <li>
              <span onClick={moveToBean}>COFFEE BEAN</span>
            </li>
            <li>
              <span onClick={moveToCoffee}>COFFEE</span>
            </li>
            <li>
              <span onClick={moveToOrder}>PRE-ORDER</span>
            </li>
            <li>
              <span onClick={moveToShop}>SHOP</span>
            </li>
            <li>
              <span onClick={moveToCommunity}>COMMUNITY</span>
            </li>
          </ul>
        </div>
      </div>
    </HeaderWrap>
  );
};

export default Header;
