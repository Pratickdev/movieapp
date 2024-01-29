import { createBrowserRouter } from "react-router-dom";
import Cart from "../../Cart";
import App from "../../App";
const router= createBrowserRouter([
    {path: '/' , element:<App/>},
    {path: '/cart' , element:<Cart/>},
]);
export default router;