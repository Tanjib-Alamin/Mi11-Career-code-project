import { createBrowserRouter } from "react-router";
import Rootlayout from "../layouts/Rootlayout";
import Home from "../pages/Home/Home";
import Register from "../pages/register/Register";
import Signin from "../pages/Signin/Signin";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivateRoute from "../routes/PrivateRoute";
import Jobapply from "../pages/JobApply/Jobapply";
import Myapplications from "../pages/myapplications/Myapplications";
import Addjob from "../pages/AddJob/Addjob";
import Mypostedjobs from "../pages/MypostedJobs/Mypostedjobs";
import Viewapplications from "../pages/vielapplications/Viewapplications";
import { param } from "motion/react-client";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Rootlayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/jobs/:id",
        Component: JobDetails,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/jobs/${params.id}`),
      },
      {
        path: "jobapply/:id",
        element: (
          <PrivateRoute>
            <Jobapply></Jobapply>
          </PrivateRoute>
        ),
      },
      {
        path: "/myapplications",
        element: (
          <PrivateRoute>
            <Myapplications></Myapplications>
          </PrivateRoute>
        ),
      },
      {
        path: "/addjob",
        element: (
          <PrivateRoute>
            <Addjob></Addjob>
          </PrivateRoute>
        ),
      },
      {
        path: "/mypostedjobs",
        element: (
          <PrivateRoute>
            <Mypostedjobs></Mypostedjobs>
          </PrivateRoute>
        ),
      },
      {
        path: "/applications/:job_id",
        element: (
          <PrivateRoute>
            <Viewapplications></Viewapplications>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `http://localhost:3000/applications/job/${params.job_id}`
          ),
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/signin",
        Component: Signin,
      },
    ],
  },
]);

export default router;
