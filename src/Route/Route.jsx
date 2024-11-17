import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Secondary from "../Layout/Secondary";
import SignIn from "../Pages/Authentication/SignIn";
import SignUp from "../Pages/Authentication/SignUp";
import Brands from "../Pages/Brands/Brands";
import About from "../Pages/About/About";

const Route = () => {
    const routes = createBrowserRouter([
        {
            path: "/",
            element: <Main />,
            children: [
                {
                    path: '/',
                    element:<Home/>
                },
                {
                    path: '/brands',
                    element:<Brands/>
                },
                {
                    path: '/about',
                    element:<About/>
                },
                
            ]
        },
        {
            path: '/',
            element: <Secondary />,
            children: [
                {
                    path: '/signIn',
                    element:<SignIn/>
                },
                {
                    path: 'signUp',
                    element:<SignUp/>
                }
            ]
        }
    ])
    return (
       <RouterProvider router={routes}/>
    );
};

export default Route;