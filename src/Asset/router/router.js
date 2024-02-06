import { createBrowserRouter } from "react-router-dom";
import Cart from "../../Cart";
import App from "../../App";
import Web from "../../Web";
import Movie from "../../Movie";
import Login from "../../Login";
import Logout from "../../Logout";
import MovieDetails from "../../MovieDetails";
const router= createBrowserRouter([
    {path: '/' , element:<App/>},
    {path: '/cart' , element:<Cart/>},
    {path: '/web' , element:<Web/>},
    {path: '/movie' , element:<Movie/>},
    {path: '/login' , element:<Login/>},
    {path: '/logout' , element:<Logout/>},
    {path:'details/:id/:type',element:<MovieDetails/>}
]);
export default router;