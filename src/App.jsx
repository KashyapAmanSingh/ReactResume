 
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.min.js';


import About from "./Page/About";
import Home from "./Page/Home";
 
import NotFound from "./Page/NotFound";
import Preview from "./Page/Preview";
 import ResumeDetailFillForm from "./Component/DetailForm/ResumeDetail";
 
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
