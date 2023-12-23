
import MainProfile1 from "../pages/mainProfile/MainProfile1";
import InformationForm from "../components/InformationForm/InformationForm";
import Boos from "../components/BOOS/Boss";
import AllComponets from "../components/AllComponets/AllComponets";
import Blog1 from "../components/Myblog/Blog1/Blog1";
import Blog2 from "../components/Myblog/Blog2/Blog2";
import Login from "../pages/Login/Login";

export const jopSeekerRoutes = [
  {
    path: "/jopseekerprofile",
    element: <MainProfile1 />,
    children: [
      {
      path: "/jopseekerprofile/information",
      element: <InformationForm />,
    },
    {
      path: "/jopseekerprofile/resum",
      element: <AllComponets />,
      
    },
    {
      path: "/jopseekerprofile/blog",
      element: <Boos />,
      children:[
        
            {
                path: "/jopseekerprofile/blog",
                element: <Blog1 />,
              },  
            {
                path: "/jopseekerprofile/blog/mublog",
                element: <Blog2 />,
              },  
        
      ]
      
    },
     
     ],
  },
  {
    path :"/jopseeker/login",
    element: <Login />,
  }
];
