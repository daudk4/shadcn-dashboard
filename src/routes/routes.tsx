import App from "@/App";
import { Layout } from "@/components/Layout";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    Component: Layout,
    children: [{ index: true, Component: App }],
  },
]);
