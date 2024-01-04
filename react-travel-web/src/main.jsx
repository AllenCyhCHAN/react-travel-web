import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import Home from './components/pages/Home.jsx';
import Services from './components/pages/Services.jsx';
import Products from './components/pages/Products.jsx';
import SignUp from './components/pages/SignUp.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
        <Footer />
      </>
    ),
    errorElement: <div>Error</div>
  },
  {
    path: "/services",
    element: (
      <>
        <Navbar />
        <Services />
        <Footer />
      </>),
    errorElement: <div>Error</div>
  },
  {
    path: "/products",
    element:
      <>
        <Navbar />
        <Products />
        <Footer />
      </>,
    errorElement: <div>Error</div>
  },
  {
    path: "/sign-up",
    element: (
      <>
      <Navbar />
        <SignUp />
        <Footer />
        </>
    ),
    errorElement: <div>Error</div>
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  
)
