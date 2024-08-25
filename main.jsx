import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MidSection from "./components/Midsection.jsx";
import Women from "./components/Womens.jsx";
import { Provider } from "react-redux";
import routerReact from "./store/index.js";
import Cart from "./components/Cart.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <MidSection /> },
      {
        path: "/Shop_Women",
        element: <Women />,
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={routerReact}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
