
import Gest from "../pages/Gest";
import Home from "../../../pages/Home/Home";
import PageJobLogin from "../../../pages/PageJobLogin/PageJobLogin";
import Register from "../../../pages/Register/Register";

export const Gestroutes = [
  {
    path: "",
    element: <Gest />,
    children: [
      {
      path: "",
      element: <Home />,
    },
    {
      path: "/login",
      element: <PageJobLogin />,
      
    },
    {
      path: "/register",
      element: <Register />,
      
    },
     
     ],
  },
];
