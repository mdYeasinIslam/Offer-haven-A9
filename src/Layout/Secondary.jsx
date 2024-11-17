import { Outlet } from "react-router-dom";
import Navbar from "../SharedPages/Navbar";

const Secondary = () => {
    return (
        <div>
            <Navbar />
            <Outlet/>
        </div>
    );
};

export default Secondary;