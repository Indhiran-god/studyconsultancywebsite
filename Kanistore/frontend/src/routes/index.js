import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import Home from '../pages/Home'; 
import Login from '../pages/Login'; 
import ForgotPassword from '../pages/ForgotPassword'; 
import SignUP from '../pages/SignUP';  
import Userdetails from '../pages/Persondetails';
// Define the router with corrected dynamic routing
const router = createBrowserRouter([
    {
        path: "*", // This will match all paths
        element: <App />, // Main app component
        children: [
            {
                path: "", // Root path
                element: <Home /> // Home component
            },
            {
                path: "login", // Login path
                element: <Login />
            },
            {
                path: "forgot-password", // Forgot password path
                element: <ForgotPassword />
            },
            {
                path: "user-details", // User details path
                element: <Userdetails />
            },
            {
                path: "sign-up", // Sign up path
                element: <SignUP />
            },
        ]
    }
]);

export default router;
