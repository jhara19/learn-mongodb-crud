import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import CheckOut from "./CheckOut/CheckOut";


const router = createBrowserRouter([
   {
     path: '/',
     element: <Main></Main>,
     children: [
        {
            path:'/',
            element: <Home></Home>
        },
        {
    
            path:'/home',
            element: <Home></Home>
        },
        {
            path:'/login',
            element: <Login></Login>
        },
        {
    
            path:'/signup',
            element: <Signup></Signup>
        },
        {
    
            path:'/checkout/:id',
            element: <CheckOut></CheckOut>,
            loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
     ]
}

]);
export default router;