import styled from "@emotion/styled";
import { ColorStyle, FontSize } from "../layout/ColorScale";
// Header Layout

export const HeaderWrap = styled.div`
  width: 100%;
  height: 12rem;
  background-color: ${ColorStyle.background};
  padding: 1rem 3rem;
  align-items: center;

  .header-menu-wrap {
    display: flex;
    align-items: center;
    .header-logo {
      width: 7.5rem;
      height: auto;
      img {
        cursor: pointer;
        width: 7.5rem;
        height: 7.5rem;
      }
    }
    .header-category {
      width: 100rem;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10rem;
      span {
        cursor: pointer;
        font-size: ${FontSize.xxl};
      }
    }
  }

  .header-info {
    float: right;
    display: flex;
    gap: 1rem;
    span {
      cursor: pointer;
    }
  }
`;
