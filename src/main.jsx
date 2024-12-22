import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import AppliedJobs from './Components/appliedJobs/AppliedJobs';
import Statistics from './Components/Statistics/Statistics';
import Blog from './Components/Blog/Blog';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import JobDetails from './Components/JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'/appliedJobs',
        element:<AppliedJobs></AppliedJobs>,
        loader: () => fetch('jobs.json')
      },
      {
        path:'/statistics',
        element: <Statistics></Statistics>
      },
      {
        path:'/blog',
        element: <Blog></Blog>
      },
      {
        path:'/job/:id',
        element:<JobDetails></JobDetails>,
        loader: () => fetch('jobs.json')
      }

    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='md:max-w-screen-2xl mx-auto'>
      <RouterProvider router={router} />
    </div>
  </StrictMode>,
)
