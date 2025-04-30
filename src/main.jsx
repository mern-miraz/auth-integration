import { createContext, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./Layout/Root.jsx";
import Home from "./Pages/Home/Home.jsx";
import Register from "./Pages/Register/Register.jsx";
import Login from "./Pages/Login/Login.jsx";
import AuthProvider from "./Context/AuthProvider.jsx";
import Order from "./Pages/Order/Order.jsx";
import Profile from "./Pages/Profile/Profile.jsx";
import PrivateRouter from "./Router/PrivateRouter.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "login", Component: Login },
      { path: "register", Component: Register },
      {
        path: "orders",
        element: (
          <PrivateRouter>
            <Order />
          </PrivateRouter>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRouter>
            <Profile />
          </PrivateRouter>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
