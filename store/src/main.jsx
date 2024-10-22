import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/product.id",
    element: <Product />
  }

])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);