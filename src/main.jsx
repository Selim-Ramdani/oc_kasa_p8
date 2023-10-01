import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Style import
import "./assets/style/main.scss";

// Pages import
import Accommodations from './pages/Accommodations.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Header from './components/Header';
import App from './App';
import NotFound from './pages/NotFound.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/logements/:id",
        element: <Accommodations />,
      },
      {
        path: "/a-propos",
        element: <About />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
