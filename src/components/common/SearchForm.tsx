import SubBtn from "./SubBtn";

type InputProps = {
  onClick: () => void;
  onChange: () => void;
};
const SearchForm = (props: InputProps) => {
  const { onChange, onClick } = props;
  const inputStyle = {};
  return (
    <form style={{ display: "flex", gap: "1rem" }}>
      <input
        type="text"
        placeholder="검색어를 입력해주세요."
        onChange={onChange}
        style={inputStyle}
      />
      <SubBtn btnName="검색" onClick={onClick} />
    </form>
  );
};

export default SearchForm;
