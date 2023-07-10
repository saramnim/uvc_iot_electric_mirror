import HomePage from "../pages/Home";
import Camera from "../pages/Camera";

export const ROUTE = {
  HOME: {
    path: "/",
    link: "/",
    element: HomePage,
  },
  Camera: {
    path: "/camera",
    link: "/camera",
    element: Camera,
  },
};

export const ROUTE_ARR = Object.values(ROUTE);
