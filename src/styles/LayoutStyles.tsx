import styled from "@emotion/styled";
import { ColorStyle, FontSize } from "../layout/ColorScale";

// @AREA Header Layout
export const HeaderWrap = styled.div`
  width: 100%;
  height: 12rem;
  background-color: ${ColorStyle.background};
  padding: 1rem 3rem;
  display: flex;
  align-items: center;

  .header-inner {
    position: relative;
    margin: 0 auto;
    width: 118rem;
  }

  .header-menu-wrap {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10rem;

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
      position: absolute;
      /* width: 100rem; */
      top: 50%;
      left: 25%;
      /* margin: 0 auto; */
      display: flex;
      gap: 3rem;
      span {
        cursor: pointer;
        font-size: ${FontSize.xl};
      }
    }
  }

  .header-info {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    gap: 2rem;
    span {
      color: ${ColorStyle.g800};
      font-size: ${FontSize.xl};
      cursor: pointer;
    }
  }
`;

// @AREA Footer Layout

export const FooterWrap = styled.div`
  display: flex;
  align-items: center;
  height: 30rem;
  background-color: ${ColorStyle.secondary};
  gap: 3rem;

  .footer-inner {
    position: relative;
    width: 118rem;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5rem;
  }

  .footer-logo {
    img {
      width: 25rem;
      height: 16rem;
    }
  }
  .footer-info {
    display: flex;

    flex-direction: column;
    gap: 1rem;
    span {
      font-size: ${FontSize.xxl};
      color: ${ColorStyle.background};
    }
    .footer-commu-link {
      display: flex;
      gap: 2rem;
      img {
        width: 3rem;
        height: 3rem;
      }
    }
  }
`;

export const MainWrap = styled.main`
  width: 118rem;
  margin: 0 auto;
  /* border: 0.1rem solid black; */
`;
