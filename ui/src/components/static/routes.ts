import { RouteObject } from "react-router-dom";
import Home from "../pages/home";
import Maths from "../pages/maths/maths";

export enum PATHS {
  ENGLISH = "/english",
  HINDI = "/hindi",
  HOME = "/",
  MATHS = "/maths"
}

export const ROUTES: RouteObject[] = [
  {
    index: true,
    path: PATHS.MATHS,
    Component: Maths
  },
  {
    index: true,
    path: PATHS.MATHS,
    Component: Maths
  },
  {
    index: true,
    path: PATHS.HOME,
    Component: Home
  }
];
