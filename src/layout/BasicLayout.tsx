import Footer from "./Footer";
import Header from "./Header";

const BasicLayout = ({ children }) => {
  return (
    <div>
      <div>
        <Header />
      </div>
      {children}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default BasicLayout;
