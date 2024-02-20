import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WelcomePage from "./page/WelcomePage.jsx";
import ChallengePage from "./page/ChallengePage.jsx";
import { SpeedInsights } from "@vercel/speed-insights/next";

const router = createBrowserRouter([
  { path: "/", element: <WelcomePage /> },
  { path: "/challenges", element: <ChallengePage /> },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <SpeedInsights />
    </>
  );
};

export default App;
