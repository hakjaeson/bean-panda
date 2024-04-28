import { MainWrap } from "../styles/LayoutStyles";
import Footer from "./Footer";
import Header from "./Header";

const BasicLayout = ({ children }) => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <MainWrap>{children}</MainWrap>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default BasicLayout;
