import BasicLayout from "../../layout/BasicLayout";
import { Outlet } from "react-router-dom";

const CommuPage = () => {
  return (
    <BasicLayout>
      <Outlet />
    </BasicLayout>
  );
};

export default CommuPage;
