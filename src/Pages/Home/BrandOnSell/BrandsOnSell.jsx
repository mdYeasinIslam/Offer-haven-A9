import { useEffect, useState } from "react";
import BrandDetails from "./BrandOnSellDetails";
import CommonHeading from "../../CommonHeading/CommonHeading";

const BrandsOnSell = () => {
    const [brandLogo, setBrandLogo] = useState([])
    useEffect(() => {
        fetch('/couponCollection.json')
            .then(res => res.json())
            .then(data => {
                const filter = data?.filter(f =>f.isSaleOn ==true)
                // console.log(filter)
                setBrandLogo(filter)

            })
    }, [])
    const header = <header className="text-center">
        <h1 className="text-4xl font-semibold">Latest Coupon Codes & Deals</h1>
        <p className="text-gray-600">Search your favourite store & get many deals
        </p>
    </header>
    return (
        <div className="my-10">
            <div className=" mt-16">
                <CommonHeading header={header} />
            </div>
            <div className=" ">
                <h1 className="text-xl font-semibold font-family ">Brand Sell On :</h1>
                <div className=" col-span-3 grid grid-cols-3 gap-10 mt-10">
                     {brandLogo?.map(brand => <BrandDetails key={brand?._id} brand={brand} />)}
                </div>
                
            </div>
        </div>
    );
};

export default BrandsOnSell;