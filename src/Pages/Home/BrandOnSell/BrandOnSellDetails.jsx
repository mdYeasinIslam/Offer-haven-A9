import PropTypes from 'prop-types';

const BrandDetails = ({ brand }) => {
    const { _id, brand_name,  brand_logo, coupons, category } = brand
    //  const { _id, brand_name, rating, description, brand_logo, coupons, shop_Link, category, isSaleOn } = brand
    
    return (
        <div className="card bg-base-100  shadow-xl p-3  transform transition-transform duration-300 hover:scale-110 hover:shadow-lg">
            <figure>
                <img
                    src={brand_logo}
                    alt="brands logo"
                    className='w-full rounded-xl h-56' />
            </figure>
            <div className="mt-2">

                <h2 className="card-title">
                    {brand_name}

                </h2>
                <div>
                    <p className='font-semibold text-[1.2rem]'><span>Deals</span></p>
                    <p>{coupons[0].description}</p>
                    <p>{coupons[1].description}</p>
                </div>

                <p><span className='font-medium'>Category : </span><span className='badge badge-ghost'>{category}</span></p>
                <div className="card-actions ">

                </div>
            </div>
        </div>
    );
};
BrandDetails.propTypes = {
    brand: PropTypes.object
}
export default BrandDetails;