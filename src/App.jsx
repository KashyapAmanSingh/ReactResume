 
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.min.js';


import About from "./Page/About";
import Home from "./Page/Home";
import ResumeDetailFillForm from "./Component/UserHookForm/ResumeDetail";
import ResumeTemplateFirst from "./Page/template1/resumeTemplate1";
import ResumeTemplateSecond from "./Page/template2/resumeTemplate2";
import NotFound from "./Page/NotFound";
import Preview from "./Page/Preview";
   

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
        path: "/template1",
        element: <ResumeTemplateFirst />,
      },
      {
        path: "/template2",
        element: <ResumeTemplateSecond />,
      },
      {
        path: "/About",
        element: <About/>,
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
