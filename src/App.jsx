import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import HomePage, { loader as newsLoader } from "./pages/Home";
import NewsPage from "./pages/News/News";
import TopNewsPage from "./pages/News/TopNews";
import LatestNewsPage from "./pages/News/LatestNews";
import AskPage from "./pages/Ask/Ask";
import LatestAskedPage from "./pages/Ask/LatestAsked";
import ShowPage from "./pages/Show/Show";
import RecentShowPage from "./pages/Show/RecentShow";
import JobPage from "./pages/Job/Job";
import LatestJob from "./pages/Job/LatestJob";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage />, loader: newsLoader },
      {
        path: "/news",
        element: <NewsPage />,
        children: [
          {
            path: "/news/topnews",
            element: <TopNewsPage />,
          },
          { path: "/news/latestnews", element: <LatestNewsPage /> },
        ],
      },
      {
        path: "/asks",
        element: <AskPage />,
        children: [{ path: "/asks/latestasked", element: <LatestAskedPage /> }],
      },
      {
        path: "/shows",
        element: <ShowPage />,
        children: [{ path: "/shows/recentshow", element: <RecentShowPage /> }],
      },
      {
        path: "/jobs",
        element: <JobPage />,
        children: [{ path: "/jobs/latestjob", element: <LatestJob /> }],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
