import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import MainLayout from "../Components/Header/Navber/Layout/MainLayout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Service from "../Components/Services/Service";



const myCreatRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children : [
            {
                path : '/',
                element : <Home></Home>,
               //loader : ()=> fetch('./services.json')
                
            },
            {
                path : '/donation',
                element : <Donation></Donation>
            },
            {
                path : '/statistics',
                element : <Statistics></Statistics>
            },
            {
                path : '/services/:id',
                element : <Service></Service>,
                loader : ()=> fetch('../../services.json')
                
            }
        ]
    },
]);

export default myCreatRoute;