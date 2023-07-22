import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Login/SignUp";
import Profile from "../pages/Profile/Profile";
import AllCollege from "../pages/colleges/Colleges";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/colleges", element: <AllCollege /> },
            { path: "/admission", element: <Home /> },
            { path: "/my-college", element: <Home /> },
            { path: "/login", element: <Login /> },
            { path: "/signUp", element: <SignUp /> },
            { path: "/profile", element: <Profile /> },
        ],
    },
  ]);

export default router;