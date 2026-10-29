import { createBrowserRouter } from "react-router-dom";
import TrendingPage from "../pages/TrendingPage";
import App from "../App.jsx";

// default path ("/") leads to <App/> witch have trending page as it default child, we will use outlet to show trending page
export const movieRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ index: true, element: <TrendingPage /> }],
  },
]);
