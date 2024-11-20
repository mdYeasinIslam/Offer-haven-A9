import { Outlet } from "react-router-dom";
import CommonHeading from "../CommonHeading/CommonHeading";
import Banner from "./Banner/Banner";
import BrandLogo from "./BrandLogo/BrandLogo";

const Home = () => {

    const header = <header className="text-center">
        <h1 className="text-4xl font-semibold">Available Brands List</h1>
        <p className="text-gray-600">Search your favourite store & get many deals
        </p>
    </header>
    return (
        <div> 
           
            <Banner />
            <div className=" mt-16">
                <CommonHeading header={header} />
            </div>
            <BrandLogo />
            <Outlet/>
            
        </div>
    );
};

export default Home;