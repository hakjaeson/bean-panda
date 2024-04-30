import { Suspense, lazy } from "react";
import { Navigate } from "react-router-dom";

const ListPage = lazy(() => import("../pages/community/CommuListPage"));

// @COMMENT @AREA community router

const commuRouter = () => {
  return [
    { path: "", element: <Navigate to="list" /> },
    {
      path: "list",
      element: (
        <Suspense fallback={<div>로딩 중..</div>}>
          <ListPage />
        </Suspense>
      ),
    },
    {
      path: "create",
      element: (
        <Suspense fallback={<div>로딩 중..</div>}>
          <ListPage />
        </Suspense>
      ),
    },
    {
      path: "detail",
      element: (
        <Suspense fallback={<div>로딩 중..</div>}>
          <ListPage />
        </Suspense>
      ),
    },
  ];
};

export default commuRouter;
