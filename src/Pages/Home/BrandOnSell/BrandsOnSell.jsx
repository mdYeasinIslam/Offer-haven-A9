import { useEffect, useState } from "react";
import BrandDetails from "./BrandOnSellDetails";
import CommonHeading from "../../CommonHeading/CommonHeading";
import CategoryName from "../CategoryName/CategoryName";

const BrandsOnSell = () => {
    const [brandLogo, setBrandLogo] = useState([])
    const [categoryName,setCategoryName] = useState([])
    useEffect(() => {
        fetch('/shopsData.json')
            .then(res => res.json())
            .then(data => {
                const filter = data?.filter(f =>f.isSaleOn ==true)
                // console.log(filter)
                setBrandLogo(filter)

            })
        fetch('/categoryName.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCategoryName(data)
            })
    }, [])
    const header = <header className="text-center">
        <h1 className="text-4xl font-semibold">Latest Coupon Codes & Deals</h1>
        <p className="text-gray-600">Search your favourite store & get many deals
        </p>
    </header>
    return (
        <div className="my-10 relative">
            <div className=" md:mt-16">
                <CommonHeading header={header} />
            </div>
            <div className="flex flex-col-reverse md:grid md:grid-cols-3 lg:grid-cols-4  gap-4 px-3 lg:px-0  max-w-7xl mx-auto space-y-4 mt-5">
                <div className="col-span-2 lg:col-span-3">

                <h1 className="text-2xl font-semibold font-family ">Brand Sell On :</h1>
                <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-10  md:mt-10">
                     {brandLogo?.map(brand => <BrandDetails key={brand?._id} brand={brand} />)}
                </div>
                </div>
                <div className="md:col-span-1 flex flex-col gap-4 w-full sticky">
                    {
                        categoryName?.map(names=> <CategoryName key={names._id} names={names} />)
                    }
                   
                </div>
            </div>
        </div>
    );
};

export default BrandsOnSell;