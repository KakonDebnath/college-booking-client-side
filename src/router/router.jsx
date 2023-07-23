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
            { path: "/collegeDetails/:id", element: <CollegeDetails /> },
            { path: "/bookCollege/:id", element: <BookCollege /> },
            { path: "/review/:id", element: <Review /> },
            { path: "/login", element: <Login /> },
            { path: "/signUp", element: <SignUp /> },
            { path: "/profile", element: <Profile /> },
        ],
    },
  ]);

export default router;