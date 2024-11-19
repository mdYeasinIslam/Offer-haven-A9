import { Outlet } from "react-router-dom";
import Navbar from "../SharedPages/Navbar";
import Footer from "../SharedPages/Footer";
import { AuthProvider } from "../Context/AuthContext";
import { useContext } from "react";

const Main = () => {
    const {userInfo} = useContext(AuthProvider)
    return (
        <div>
            <div className="text-center mt-2">

            {userInfo?.displayName && <span className="  font-semibold text-black bg-gray-400 px-4 py-2 rounded-xl" > {userInfo?.displayName}</span>}
            </div>
            <Navbar />
            <Outlet />
            <Footer/>    
        </div>
    );
};

export default Main;