import { ColorStyle, FontSize } from "../../layout/ColorScale";

type CommonBtnProps = {
  btnName: string;
  onClick: () => void;
};

const CommonBtn = (props: CommonBtnProps) => {
  const { btnName, onClick } = props;
  const btnStyle = {
    cursor: "pointer",
    background: `${ColorStyle.g900}`,
    fontSize: `${FontSize.xl}`,
    color: `${ColorStyle.grayScale}`,
    border: "none",
    borderRadius: "0.5rem",
    padding: "1rem",
    fontWeight: "700",
  };
  return (
    <button style={btnStyle} onClick={onClick}>
      {btnName}
    </button>
  );
};

export default CommonBtn;
