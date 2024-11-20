import { useEffect, useState } from "react";
import BrandDetails from "./DisplayBrands";
import CommonHeading from "../CommonHeading/CommonHeading";

const Brands = () => {
    const [brandLogo, setBrandLogo] = useState([])
    const [search, setSearch] = useState("")
    const [noFound,setNoFound] = useState('')
    useEffect(() => {
        fetch('/shopsData.json')
            .then(res => res.json())
            .then(data => {
                if (search.length > 0) {
                    const filter = data.filter(f => f?.brand_name?.toLowerCase().includes(search.toLowerCase()))
             
                    if (!filter.length) {
                        setNoFound('Sorry!! No data is Founded. Please search with correct brand name')
                    }
                    else {
                        setNoFound('')
                    }
                 return  setBrandLogo(filter)
                }
                // else {
                     
                // }
                setBrandLogo(data)
            })
    }, [search])
    const handleSearch = (e) => {
        setSearch(e.target.value)
    }
    const header = <header className="relative">
        <img src="/assets/Colored Shapes.svg" alt="" className="w-full  h-40 md:h-full xl:rounded-xl " />
        <div className="text-center absolute top-[30%] xl:top-[25%] text-white left-[10%] lg:left-[20%] xl:left-[25%] space-y-2 md:space-y-5">
            <h1 className="text-2xl md:text-5xl font-semibold">Choose your Favorite Brand</h1>
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
                    {/* serarch section */}
                    <section className="flex justify-center mb-5">
                        <input
                            type="text"
                            placeholder="Search by Brand Name"
                            // value={search}
                            onChange={handleSearch}
                            className="w-1/2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </section>
                    <article className="mx-5 max-w-4xl xl:max-w-7xl  lg:mx-auto">

                    <h1 className="text-xl font-semibold font-family ">All Brand Details :</h1>
                    {
                        noFound.length > 1 ?
                            <div className="text-center text-xl font-semibold font-family my-10">
                                {noFound}
                            </div>
                            :
                    <div className=" md:grid gap-5 mt-2 ">
                        {brandLogo?.map(brand => <BrandDetails key={brand?._id} brand={brand} />)}
                        {/* {brand?.brand_name} */}
                    </div>
                    }
                    </article>
                </div>

            </div>
        </div>
    );
};

export default Brands;