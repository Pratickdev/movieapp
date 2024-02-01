import { createBrowserRouter } from "react-router-dom";
import Cart from "../../Cart";
import App from "../../App";
import Web from "../../Web";
import Movie from "../../Movie";
const router= createBrowserRouter([
    {path: '/' , element:<App/>},
    {path: '/cart' , element:<Cart/>},
    {path: '/web' , element:<Web/>},
    {path: '/movie' , element:<Movie/>}
]);
export default router;