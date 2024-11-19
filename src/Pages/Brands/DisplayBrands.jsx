import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const BrandDetails = ({ brand }) => {
    const { _id, brand_name, rating, description, brand_logo, isSaleOn } = brand
    return (
       
        <div className="relative flex items-center bg-white rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg text-left p-5 mb-6 border font-family">
            <div className="flex-shrink-0 w-1/4 flex items-center">
                <img
                    src={brand_logo}
                    alt={`brand Logo`}
                    className="w-16 h-16 rounded-full border-4 border-blue-500 mr-4"
                />
                <div>
                    <h2 className="text-lg font-bold text-gray-800">{brand_name}</h2>
                    <div className="flex items-center text-gray-800">
                        <span className="flex items-center  text-lg mr-2">
                            {
                                Array.from({ length: 5 }, (_, i) => i + 1).map(ele => <FaStar
                                    key={ele}
                                    className={`${rating >= ele && "text-yellow-500"}`} />)
                            }
                        </span>
                        <span className="font-bold">{rating}</span>
                    </div>
                </div>
            </div>

            {/* Middle Section: Description */}
            <div className="w-1/2 px-4">
                <p className="text-gray-600">{description}</p>
            </div>

            {/* Right Section: Button and Bouncing Text */}
            <div className="flex-shrink-0 w-1/4 text-right">
                <NavLink to={`/brands/${_id}`}>
                    <button
                    className="bg-blue-800 text-white font-medium py-2 px-4 rounded-md transition duration-300 hover:bg-blue-900"
                >
                    View Coupons
                </button></NavLink>
               
                {isSaleOn && (
                    <div className="text-red-500 text-sm font-bold animate-bounce mt-2">
                        Sale is On!
                    </div>
                )}
            </div>
        </div>

    );
};
BrandDetails.propTypes = {
    brand: PropTypes.object
}
export default BrandDetails;