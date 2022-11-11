import Registration from './pages/Registration';
import { createBrowserRouter,RouterProvider,Route, } from "react-router-dom";
import Detail from './pages/Detail';
import ErrorPage from './pages/ErrorPage';
import SearchResult from './pages/SearchResult';

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Detail />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/registration",
      element: <Registration />,
    },
    {
      path: "/search",
      element: <SearchResult />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
