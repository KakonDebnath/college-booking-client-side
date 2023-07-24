import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Login/SignUp";
import Profile from "../pages/Profile/Profile";
import AllCollege from "../pages/colleges/Colleges";
import CollegeDetails from "../pages/colleges/CollegeDetails";
import Admission from "../pages/Admission/Admission";
import BookCollege from "../pages/Admission/BookCollege";
import MyCollege from "../pages/MyCollege/MyCollege";
import Review from "../pages/MyCollege/Review";
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "../pages/Profile/UpdateProfile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/colleges", element: <AllCollege /> },
            { path: "/admission", element: <Admission /> },
            { path: "/my-college", element: <MyCollege /> },
            { path: "/collegeDetails/:id", element: <PrivateRoute><CollegeDetails /></PrivateRoute> },
            { path: "/bookCollege/:id", element: <PrivateRoute><BookCollege /></PrivateRoute> },
            { path: "/review/:id", element: <PrivateRoute><Review /></PrivateRoute> },
            { path: "/login", element: <Login /> },
            { path: "/signUp", element: <SignUp /> },
            { path: "/profile", element: <PrivateRoute><Profile /></PrivateRoute> },
            { path: "/updateProfile/:email", element: <PrivateRoute><UpdateProfile /></PrivateRoute> },
        ],
    },
  ]);

export default router;