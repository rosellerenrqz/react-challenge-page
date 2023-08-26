import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WelcomePage from "./page/WelcomePage.jsx";
import ChallengePage from "./page/ChallengePage.jsx";

const router = createBrowserRouter([
  { path: "/", element: <WelcomePage /> },
  { path: "/challenges", element: <ChallengePage /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
