import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import commuRouter from "./commuRouter";

const AboutPage = lazy(() => import("../pages/main/AboutPage"));
const CommunityPage = lazy(() => import("../pages/community/CommuPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading</div>}>
        <AboutPage />
      </Suspense>
    ),
  },
  {
    path: "/community/",
    element: (
      <Suspense fallback={<div>Loading</div>}>
        <CommunityPage />
      </Suspense>
    ),
    children: commuRouter(),
  },
]);
export default router;
