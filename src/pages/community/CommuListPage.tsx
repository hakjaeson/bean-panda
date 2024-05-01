import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { getCommuList } from "../../api/commuApi";
import CommonBtn from "../../components/common/CommonBtn";
import useNav from "../../hooks/useNav";
import { CommuList } from "../../interface/CommuInterface";
import { TableWrap } from "../../styles/community/CommuStyles";
import { PageTitle } from "../../styles/common/CommonStyles";

const CommuListPage = () => {
  const { data } = useQuery({
    queryKey: [],
    queryFn: () => getCommuList(),
  });
  const ServerData = useMemo(() => data, [data]);
  console.log("data", ServerData);
  const { moveToCommuCreate } = useNav();
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
      <div
        style={{
          // width: "100%",
          display: "flex",
          padding: "3rem 0",
          alignContent: "center",
          justifyContent: "flex-end",
          gap: "1rem",
          // float: "right",
        }}
      >
        {/* <SearchForm onClick={} onChange={} /> */}
        <CommonBtn btnName="글쓰기" onClick={moveToCommuCreate} />
      </div>
    </div>
  );
};

export default CommuListPage;
