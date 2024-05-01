import { ChangeEvent, useState } from "react";
import { PageTitle } from "../../styles/common/CommonStyles";
import { FormWrap } from "../../styles/community/CommuStyles";
import CommonBtn from "../../components/common/CommonBtn";
import { useMutation } from "@tanstack/react-query";
import { postCommu } from "../../api/commuApi";
import dayjs from "dayjs";

interface CommuPost {
  title: string;
  content: string;
  author: string;
  date: string;
}
const initState = {
  title: "",
  content: "",
  author: "",
  date: "",
};
const CommuCreatePage = () => {
  // Input
  const [postData, setPostData] = useState<CommuPost>(initState);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
    console.log("데이터 :", postData);
  };
  const PostMutation = useMutation({
    mutationFn: () => postCommu(),
    onSuccess: () => {
      console.log("success");
    },
    onError: () => {
      console.log("error");
    },
  });
  const handleClickPost = () => {
    // 현재 시간을 담기
    const now = dayjs();
    const nowDate = now.format("YY-MM-DD HH:MM");
    setPostData({ ...postData, date: nowDate });
    console.log("총 입력값 ", postData);

    // console.log("총 입력값 ", nowDate);
    // 시간에 대한 로직

    PostMutation.mutate();
  };
  const handleClickCancel = () => {};
  return (
    <div>
      <PageTitle>글쓰기</PageTitle>
      <FormWrap>
        <input
          className="form-title"
          type="text"
          name="title"
          value={postData.title}
          placeholder="제목을 입력해주세요."
          onChange={e => handleChange(e)}
        />
        <textarea
          className="form-content"
          name="content"
          value={postData.content}
          placeholder="내용을 입력해주세요."
          onChange={e => handleChange(e)}
        />
      </FormWrap>
      <CommonBtn btnName="작성완료" onClick={handleClickPost} />
    </div>
  );
};

export default CommuCreatePage;
