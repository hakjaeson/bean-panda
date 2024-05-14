import { ChangeEvent, useState } from "react";
import { PageTitle } from "../../styles/community/CommuStyles";

interface commuPost {
  title: string;
  content: string;
  author: string;
}
const initState: commuPost = {
  title: "",
  content: "",
  author: "",
};
const CommuCreatePage = () => {
  const [postData, setPostData] = useState(initState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <PageTitle>커뮤니티 글쓰기</PageTitle>
      <input
        name="title"
        value={postData.title}
        onChange={(e) => handleChange(e)}
      />
      <input
        name="author"
        value={postData.author}
        onChange={(e) => handleChange(e)}
      />
      <input
        name="content"
        value={postData.content}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default CommuCreatePage;
