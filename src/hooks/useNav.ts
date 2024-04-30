// Navigate CustomHook
import { useNavigate } from "react-router-dom";

const useNav = () => {
  const navigate = useNavigate();

  const moveToCommunity = () => {
    navigate("/community");
  };
  const moveToBean = () => {
    navigate("/bean");
  };
  const moveToCoffee = () => {
    navigate("/coffee");
  };
  const moveToOrder = () => {
    navigate("/order");
  };
  const moveToShop = () => {
    navigate("/shop");
  };
  const moveToSignin = () => {
    navigate("/signin");
  };
  const moveToSignup = () => {
    navigate("/signup");
  };
  const moveToMypage = () => {
    navigate("/my");
  };
  const moveToFaq = () => {
    navigate("/faq");
  };
  const moveToCommuCreate = () => {
    navigate("/community/create");
  };

  return {
    // Header
    moveToBean,
    moveToCoffee,
    moveToOrder,
    moveToShop,
    moveToCommunity,
    moveToSignin,
    moveToSignup,
    moveToMypage,
    moveToFaq,
    // Another
    moveToCommuCreate,
  };
};

export default useNav;
