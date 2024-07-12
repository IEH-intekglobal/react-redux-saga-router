import { createBrowserRouter } from "react-router-dom";
import Dashboard  from "../components/dashboard";
import Login from "../components/login";

export default createBrowserRouter([
    {
        path: '/',
        element: <Dashboard />
    },
    {
        path: "/login",
        element: <Login/>
    }
])