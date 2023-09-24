import { NavLink } from "react-router-dom";
import logo from '../../images/Logo.png'

const Navber = () => {
    return (
        <div className=" flex justify-between">
            <img src={logo} alt="" />

            <nav className=" flex gap-8 text-xl font-bold">
                <ul>
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-green-500 underline" : ""
                        }
                    >
                        Home
                    </NavLink>
                </ul>
                
                <ul>
                    <NavLink
                        to="/donation"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-green-500 underline" : ""
                        }
                    >
                        Donation
                    </NavLink>
                </ul>
                <ul>
                    <NavLink
                        to="/statistics"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-green-500 underline" : ""
                        }
                    >
                        Statistics
                    </NavLink>
                </ul>
            </nav>
        </div>
    );
};

export default Navber;