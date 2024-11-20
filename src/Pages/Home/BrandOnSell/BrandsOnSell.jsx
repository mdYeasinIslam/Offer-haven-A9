import { useEffect, useState } from "react";
import BrandDetails from "./BrandOnSellDetails";
import CommonHeading from "../../CommonHeading/CommonHeading";
import CategoryName from "../CategoryName/CategoryName";

const BrandsOnSell = () => {
    const [brandLogo, setBrandLogo] = useState([])
    const [categoryName, setCategoryName] = useState([])
    const [getCategory, setGetCategory] = useState({})
    const [noFound,setNoFound]= useState('')
    useEffect(() => {
        fetch('/shopsData.json')
            .then(res => res.json())
            .then(data => {
                const filterData = data?.filter(f => f.isSaleOn == true)
                if (getCategory?._id == '1') {
                    setNoFound('')
                  return  setBrandLogo(filterData)
                }
               else if (getCategory?.category) {
                    const filterByCategory = filterData?.filter(f => f.category == getCategory.category)
                    console.log(filterByCategory)
                    if (filterByCategory?.length) {
                        setNoFound('')
                        return setBrandLogo(filterByCategory)
                    }
                    else if (filterByCategory?.length < 1) {
                        setBrandLogo([])
                        return setNoFound('Sorry! No data found. May be this is not able for sell')
                    }
                }
                else {
                    setBrandLogo(filterData)
                }

            })
        fetch('/categoryName.json')
            .then(res => res.json())
            .then(data => {
                setCategoryName(data)
            })
    }, [getCategory])

    console.log(getCategory)
    const header = <header className="text-center">
        <h1 className="text-4xl font-semibold">Latest Coupon Codes & Deals</h1>
        <p className="text-gray-600">Search your favourite store & get many deals
        </p>
    </header>
    return (
        <div className="my-10 relative">
            <section className=" md:mt-16">
                <CommonHeading header={header} />
            </section>
            <article className="flex flex-col-reverse md:grid md:grid-cols-3 lg:grid-cols-4  gap-4 px-3 lg:px-0  max-w-7xl mx-auto space-y-4 mt-5">
                <aside className="col-span-2 lg:col-span-3">

                    <h1 className="text-2xl font-semibold font-family ">Brand Sell On :</h1>
                    
                    {
                        !noFound.length ? 
                <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-10  md:mt-10">
                     {brandLogo?.map(brand => <BrandDetails key={brand?._id} brand={brand} />)}
                </div>
                            :
                            <div className="text-3xl text-black font-medium font-family mt-5">{noFound}</div>
                    }
                </aside>
                <aside className="md:col-span-1 flex flex-col gap-4 w-full sticky">
                    <header>
                        <h1 className="text-2xl font-medium font-family">Category Name: </h1>
                    </header>
                    {
                        categoryName?.map(names => <CategoryName key={names._id} names={names} setGetCategory={setGetCategory} />)
                    }
                   
                </aside>
            </article>
        </div>
    );
};

export default BrandsOnSell;