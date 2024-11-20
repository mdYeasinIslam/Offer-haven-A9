import { useEffect, useState } from "react";
import BrandLogoDetails from "./BrandLogoDetails";
import Marquee from "react-fast-marquee";

const BrandLogo = () => {
    const [brandLogo, setBrandLogo] = useState([])
    useEffect(() => {
        fetch('/couponCollection.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setBrandLogo(data)
            })

    }, [])

    return (
        <div className="lg:max-w-4xl xl:max-w-5xl mx-auto my-10 md:space-y-5">
            <h1 className="text-3xl ml-2 md:ml-5 lg:ml-0 font-semibold ">Top Brands : </h1>
            <Marquee pauseOnHover className="h-[15rem] ">
                <div className="flex lg:gap-10">
                    {brandLogo?.map(brand => <BrandLogoDetails key={brand?._id} brand={brand} />)}
                   
                    {/* {brand?.brand_name} */}
                </div>
            </Marquee>
        </div>
    );
};

export default BrandLogo;