import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Router.jsx";
import "swiper/css";
import AuthProvider from "./components/Provider/AuthProvider";
import{ Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>

        <RouterProvider router={router}></RouterProvider>
        <Toaster />

    </AuthProvider>
  </React.StrictMode>
);
