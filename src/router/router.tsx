
import { Loading } from "@/components/Loading";
import { ROUTER } from "@/constants/routes";
import BaseLayout from "@/layouts/BaseLayout";

import type { ComponentType } from "react";
import { Suspense, lazy } from "react";
import { Navigate } from "react-router-dom";

const Loader =
  <P extends object>(Component: ComponentType<P>) =>
    (props: P) => (
      <Suspense fallback={<Loading />}>
        <Component {...props} />
      </Suspense>
    );

// Lazy-loaded page components
const Home = Loader(lazy(() => import("../pages/Home/index")));
const HomeTable= Loader(lazy(() => import("../pages/HomeTable/index")));
const NoData = Loader(lazy(() => import("../../src/components/NoData/index")));
// Define routes
const routes = [
  {
    path: "/",
    element: (
        <BaseLayout />
    ),
    children: [
      {
        path: "/",
        element: <Navigate to={ROUTER.HOME} replace />,
      },
      {
        path: ROUTER.HOME,
        element: <Home />,
      },
       {
        path: ROUTER.HOMETABLE,
        element: <HomeTable />,
      },
      {
        path: "*",
        element: <NoData />,
      },
    ]
  },
];

export default routes;
