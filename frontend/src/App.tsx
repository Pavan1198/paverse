import { createHashRouter, RouterProvider } from "react-router-dom";

import { Shell } from "./components/Shell";
import { HomePage } from "./pages/HomePage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ResumePage } from "./pages/ResumePage";

const router = createHashRouter([
  {
    path: "/",
    element: <Shell />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "resume", element: <ResumePage /> },
      { path: "projects", element: <ProjectsPage /> }
    ]
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
