import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";
import About from "../Pages/Home/About/About";
import Services from "../Pages/Home/Services/Services";
import Skill from "../Pages/Home/Skill/Skill";
import Project from "../Pages/Home/Project/Project";
import Contact from "../Pages/Home/Contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/service",
        element: <Services></Services>,
      },
      {
        path: "/skill",
        element: <Skill></Skill>,
      },
      {
        path: "/project",
        element: <Project></Project>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);
