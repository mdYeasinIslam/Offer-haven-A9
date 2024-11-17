import { Outlet } from "react-router-dom";
import Navbar from "../SharedPages/Navbar";
import Footer from "../SharedPages/Footer";

const Main = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer/>    
        </div>
    );
};

export default Main;