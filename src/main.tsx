import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./tailwind.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Layout } from "@/components/Layout.tsx";

const router = createBrowserRouter([
  {
    Component: Layout,
    children: [{ index: true, Component: App }],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>
);
