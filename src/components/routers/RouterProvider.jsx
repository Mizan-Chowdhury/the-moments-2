import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainRoot from "../root/MainRoot";
import ServiceDetails from "../pages/services/ServiceDetails";
import Blogs from "../pages/blogs/Blogs";
import Couple from "../pages/Couple";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";

const MyRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainRoot></MainRoot>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/details/:id',
                element: <PrivateRouter><ServiceDetails></ServiceDetails></PrivateRouter>,
                loader : () => fetch('/data.json')
            },
            {
                path: '/blogs',
                element: <PrivateRouter><Blogs></Blogs></PrivateRouter>
            },
            {
                path: '/couple',
                element: <PrivateRouter><Couple></Couple></PrivateRouter>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default MyRouter;