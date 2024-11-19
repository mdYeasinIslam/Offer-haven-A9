import { useEffect, useState } from "react";
import BrandDetails from "./DisplayBrands";
import CommonHeading from "../CommonHeading/CommonHeading";

const Brands = () => {
    const [brandLogo, setBrandLogo] = useState([])
    useEffect(() => {
        fetch('/couponCollection.json')
            .then(res => res.json())
            .then(data => {
                setBrandLogo(data)
            })
    }, [])

    const header = <header className="relative">
        <img src="/assets/Colored Shapes.svg" alt="" className="w-full  h-40 md:h-full rounded-xl " />
        <div className="text-center absolute top-[25%] text-white left-[25%] space-y-5">
            <h1 className="text-5xl font-semibold">Choose your Favorite Brand</h1>
            <p className="text-gray-300">Search your favourite store & get many deals
            </p>
        </div>
    </header>
    return (
        <div>
            <div className=" container mx-auto">
                <div className="">
                    <CommonHeading header={header} />
                </div>
                <div className="mt-10">

                    <h1 className="text-xl font-semibold font-family ">All Brand Details :</h1>
                    <div className=" grid gap-5 mt-2 max-w-6xl mx-auto">
                        {brandLogo?.map(brand => <BrandDetails key={brand?._id} brand={brand} />)}

                        {/* {brand?.brand_name} */}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Brands;