import { ReactNode } from "react";
import { MainWrap } from "../styles/LayoutStyles";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

const BasicLayout = ({ children }: LayoutProps) => {
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
