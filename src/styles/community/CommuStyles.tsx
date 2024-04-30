import styled from "@emotion/styled";
import { ColorStyle, FontSize } from "../../layout/ColorScale";

export const TableWrap = styled.div`
  /* background-color: blue; */
  padding: 3rem 0;
  width: 100%;
  .table-th {
    text-align: center;
    border-top: 0.2rem solid ${ColorStyle.g1000};
    border-bottom: 0.2rem solid ${ColorStyle.g1000};
    font-size: ${FontSize.xxl};
    font-weight: 700;
    padding: 1rem 0;
  }
  .table-no {
    width: 5%;
    text-align: center;
  }
  .table-title {
    width: 55%;
  }
  .table-author {
    width: 20%;
    text-align: center;
  }
  .table-date {
    width: 20%;
    text-align: center;
  }
  .table-td {
    padding: 1.5rem 0;
    border-bottom: 0.1rem solid ${ColorStyle.g300};
    font-size: ${FontSize.xl};
  }
`;

export const PageTitle = styled.div`
  padding: 3rem 0;
  font-size: ${FontSize.sub_title};
  font-weight: 700;
`;
