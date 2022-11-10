import Main from "../../Layout/Main";
import Appointment from "../../Pages/Appointment/Appointment";
import Blog from "../../Pages/Blog/Blog";
import Details from "../../Pages/Details/Details";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import Register from "../../Pages/Register/Register";
import ReviewRow from "../../Pages/Reviews/ReviewRow";
import Reviews from "../../Pages/Reviews/Reviews";
import Services from "../../Pages/Services/Services";
import PrivateRoute from "./PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
            },
            {
                path:'/appointment',
                element:<Appointment></Appointment>
            },
            {
                path:'/services',
                element:<Services></Services>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/services/:id',
                element: <Details></Details>,
                loader: ({params}) =>fetch(`https://the-picture-and-the-poet.vercel.app/services/${params.id}`) 
            },
            {
                path:'/reviews/:id',
                element:<Reviews></Reviews>,
                loader: ({params}) =>fetch(`https://the-picture-and-the-poet.vercel.app/services/${params.id}`)
            },
            {
                path:'/myreviews',
                element:<PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            }
        ]
    }
]);

export default router;