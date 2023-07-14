import HomePage from "../pages/Home";
import Camera from "../pages/Camera";
import Web from "../pages/WebCam";

export const ROUTE = {
  HOME: {
    path: "/",
    link: "/",
    element: HomePage,
  },
  CAMERA: {
    path: "/camera",
    link: "/camera",
    element: Camera,
  },
  WEB: {
    path: "/webcam",
    link: "/webcam",
    element: Web,
  },
};

export const ROUTE_ARR = Object.values(ROUTE);
