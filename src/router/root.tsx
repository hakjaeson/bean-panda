import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const AboutPage = lazy(() => import("../pages/main/AboutPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading</div>}>
        <AboutPage />
      </Suspense>
    ),
  },
]);
export default router;
