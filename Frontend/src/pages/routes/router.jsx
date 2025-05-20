import {createBrowserRouter} from "react-router-dom";
import UserRoot from "../UserRoot";
import Home from "../Home/Home";
import Add from "../Add/Add";
import Basket from "../Basket/Basket";
import Wishlist from "../Wishlist/Wishlist";
import Detail from "../Detail/Detail";
import NotFound from "../NotFound/NotFound";

export let router=createBrowserRouter([
    {
        path:"/",
        element:<UserRoot/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:"add",
                element:<Add/>
            },
            {
                path:"basket",
                element:<Basket/>
            },
            {
                path:"wishlist",
                element:<Wishlist/>
            },
            {
                path:"detail/:id",
                element:<Detail/>
            },
            {
                path:"*",
                element:<NotFound/>
            },

        ]
    }
])