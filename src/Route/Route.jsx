import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Secondary from "../Layout/Secondary";
import SignIn from "../Pages/Authentication/SignIn";
import SignUp from "../Pages/Authentication/SignUp";
import Brands from "../Pages/Brands/Brands";
import About from "../Pages/About/About";
import PrivateRoute from "./PrivateRoute";
import MyProfile from "../Pages/My_profile/MyProfile";
import UpdateUser from "../Pages/My_profile/UpdateUser";
import ForgetPassword from "../Pages/Authentication/ForgetPassword";
import CouponDetails from "../Pages/Brands/CouponDetails/CouponDetails";
import ErrorPage from "../ErrorPage/ErrorPage";
import BrandsOnSell from "../Pages/Home/BrandOnSell/BrandsOnSell";

const Route = () => {
    const routes = createBrowserRouter([
        {
            path: "/",
            element: <Main />,
            errorElement:<ErrorPage/>,
            children: [
                {
                    path: '',
                    element:<Navigate to={`/category/1`}/>
                },
                {
                    path: '/',
                    element: <Home />,
                    children: [
                        {
                            path: '/category/:_id',
                            element: <BrandsOnSell />
                        }
                    ]
                },
                {
                    path: '/brands',
                    element:<Brands/>
                },
                {
                    path: '/brands/:_id',
                    element: <PrivateRoute><CouponDetails /></PrivateRoute>
                },
                {
                    path: '/about',
                    element: <PrivateRoute><About /></PrivateRoute>
                },
                {
                    path: '/myProfile',
                    element: <PrivateRoute><MyProfile /></PrivateRoute>
                },
                {
                    path: '/myProfile/updateUser',
                    element: <PrivateRoute><UpdateUser /></PrivateRoute>
                }
                
            ]
        },
        {
            path: '/',
            element: <Secondary />,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: '/signIn',
                    element:<SignIn/>
                },
                {
                    path: 'signUp',
                    element:<SignUp/>
                }, 
                 {
                     path: '/signIn/:email',
                    element:<ForgetPassword/>
                },
                
            ]
        }
    ])
    return (
       <RouterProvider router={routes}/>
    );
};

export default Route;