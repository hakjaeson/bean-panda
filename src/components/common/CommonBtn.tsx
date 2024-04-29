import { ColorStyle, FontSize } from "../../layout/ColorScale";

type CommonBtnProps = {
  btnName: string;
};

const CommonBtn = (props: CommonBtnProps) => {
  const { btnName } = props;
  const btnStyle = {
    background: `${ColorStyle.g900}`,
    fontSize: `${FontSize.xl}`,
    color: `${ColorStyle.grayScale}`,
    border: "none",
    borderRadius: "0.5rem",
    padding: "1rem",
    fontWeight: "700",
  };
  return <button style={btnStyle}>{btnName}</button>;
};

export default CommonBtn;
