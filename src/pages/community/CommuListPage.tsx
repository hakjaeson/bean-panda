import { useQuery } from "@tanstack/react-query";
import { getCommuList } from "../../api/commuApi";
import { CommuList } from "../../interface/CommuInterface";
import { useMemo } from "react";
import { PageTitle, TableWrap } from "../../styles/community/CommuStyles";
import CommonBtn from "../../components/common/CommonBtn";

const CommuListPage = () => {
  const { data } = useQuery({
    queryKey: [],
    queryFn: () => getCommuList(),
  });
  const ServerData = useMemo(() => data, [data]);
  console.log("data", ServerData);

  return (
    <div style={{ padding: "0 3rem 0 3rem" }}>
      <PageTitle>커뮤니티</PageTitle>
      {/* List-Table */}
      <TableWrap>
        <div style={{ display: "flex" }}>
          <div className="table-th table-no">NO</div>
          <div className="table-th table-title">제목</div>
          <div className="table-th table-author">작성자</div>
          <div className="table-th table-date">작성일자</div>
        </div>
        <div>
          {ServerData?.map((item: CommuList) => (
            <div key={item.pk} style={{ display: "flex" }}>
              <div className="table-td table-no">{item.id}</div>
              <div className="table-td table-title">{item.title}</div>
              <div className="table-td table-author">{item.author}</div>
              <div className="table-td table-date">{item.date}</div>
            </div>
          ))}
        </div>
      </TableWrap>
      {/* ETC */}
      <div style={{ display: "flex", padding: "3rem 0" }}>
        <form>
          <input type="text" placeholder="검색어를 입력해주세요." />
          <button>검색</button>
        </form>
        <CommonBtn btnName="글쓰기" />
      </div>
    </div>
  );
};

export default CommuListPage;
