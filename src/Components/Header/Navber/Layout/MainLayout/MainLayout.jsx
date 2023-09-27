import { Outlet } from "react-router-dom";
import Navber from "../../Navber";



const MainLayout = () => {
    return (
        <div className="">
            <div className="py-6 shadow-md px-3"><Navber></Navber></div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;