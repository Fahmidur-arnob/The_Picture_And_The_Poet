import Main from "../../Layout/Main";
import Appointment from "../../Pages/Appointment/Appointment";
import Home from "../../Pages/Home/Home/Home";
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
            }
        ]
    }
]);

export default router;