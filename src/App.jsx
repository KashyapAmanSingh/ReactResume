 
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.min.js';
 

import About from "./Page/About";
import Home from "./Page/Home/Home";
 
import NotFound from "./Page/NotFound";
import Preview from "./Page/Preview";
 import ResumeDetailFillForm from "./Component/DetailForm/ResumeDetail";
import ResumeTemplateFirst from "./Component/Templates/template1/resumeTemplate1";
import ResumeTemplateSecond from "./Component/Templates/template2/resumeTemplate2";
import ResumeTemplateThird from "./Component/Templates/template3/resumeTemplate";
 
function App() {
  return (
  
    <RouterProvider router={createBrowserRouter([
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/DetailFill",
        element: <ResumeDetailFillForm />,
      },
      {
        path: "/About",
        element: <About/>,
      },
      {
        path: "/temp1",
        element: <ResumeTemplateFirst/>,
      },
      {
        path: "/temp2",
        element: <ResumeTemplateSecond/>,
      },
      {
        path: "/temp3",
        element: <ResumeTemplateThird/>,
      },
      {
        path: "DetailFill",
        children: [
          {
            path: "Preview",
            element: <Preview />,
          },
        ],
      },
      
       {
        path: "*",
        element: < NotFound />,
      },
    ])}>
      <div>
        <Outlet />
      
      </div>
    </RouterProvider>
  );
}

export default App;
