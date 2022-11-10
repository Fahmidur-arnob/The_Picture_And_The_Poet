import Main from "../../Layout/Main";
import Appointment from "../../Pages/Appointment/Appointment";
import Details from "../../Pages/Details/Details";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import Register from "../../Pages/Register/Register";
import ReviewRow from "../../Pages/Reviews/ReviewRow";
import Reviews from "../../Pages/Reviews/Reviews";
import Services from "../../Pages/Services/Services";

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
                loader: ({params}) =>fetch(`http://localhost:5000/services/${params.id}`) 
            },
            {
                path:'/reviews/:id',
                element:<Reviews></Reviews>,
                loader: ({params}) =>fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path:'/myreviews',
                element:<MyReviews></MyReviews>
            }
        ]
    }
]);

export default router;