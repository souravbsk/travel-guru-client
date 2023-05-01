import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../components/pages/Home/Home";
import Booking from "../components/pages/Booking/Booking";
import AccountCreate from "../layouts/AccountCreate";
import Login from "../components/pages/Login/Login";
import Register from "../components/pages/Register/Register";
import Blogs from "../components/pages/Blogs/Blogs";
import Destination from "../components/pages/Destination/Destination";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader:() => fetch("https://travel-guru-server-souravbsk.vercel.app/allDestinations")
            },
            {
                path:"/booked/:id",
                element:<PrivateRoute><Booking></Booking></PrivateRoute>,
                loader:({params}) => fetch(`https://travel-guru-server-souravbsk.vercel.app/destination/${params.id}`)
            },
            {
                path:"/destination",
                element:<Destination></Destination>,
                loader:() => fetch("https://travel-guru-server-souravbsk.vercel.app/allDestinations")

            }
        ]

    },
    {
        path:"/",
        element:<AccountCreate></AccountCreate>,
        children:[
            {
               path: "/login",
               element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:"/blogs",
                element:<Blogs></Blogs>,
                loader:() => fetch('https://travel-guru-server-souravbsk.vercel.app/rooms')
            }
        ]
    }
])

export default router;