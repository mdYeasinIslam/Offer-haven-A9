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
        <div className="max-w-5xl mx-auto my-10 space-y-5">
            <h1 className="text-3xl font-semibold ">Top Brands</h1>
            <Marquee pauseOnHover className="h-[15rem]">
                <div className="flex gap-10">
                    {brandLogo?.map(brand => <BrandLogoDetails key={brand?._id} brand={brand} />)}
                   
                    {/* {brand?.brand_name} */}
                </div>
            </Marquee>
        </div>
    );
};

export default BrandLogo;