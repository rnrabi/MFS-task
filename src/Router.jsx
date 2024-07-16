import {
    createBrowserRouter
} from "react-router-dom";
import MainLayout from "./MainLayout";
import Register from "./page/Register";
import Login from "./page/Login";
import Home from "./page/Home";
import UserDashboardHome from "./component/UserDashboardHome";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                // element:<Home></Home>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/login',
                element:<Login></Login>
            }
        ]
    },
    {
        path:'/dashboard',
        element:<Home></Home>,
        children:[
            {
                path:'/dashboard',
                element:<UserDashboardHome></UserDashboardHome>
            }
        ]
    }
]);