import Home from './pages/Home';
import { createBrowserRouter,RouterProvider,Route, } from "react-router-dom";
import Detail from './pages/Detail';
import ErrorPage from './pages/ErrorPage';

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/detail",
      element: <Detail />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
