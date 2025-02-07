import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const BrandLogoDetails = ({ brand }) => {
   
    return (
        <div className="border-2 w-32 md:w-40 ml-5 bg-white rounded-lg shadow-md transform transition-transform duration-300 hover:scale-125 hover:shadow-lg ">
            <NavLink to={`/brands/${brand._id}`} className="">
            <img className=" w-full h-full" src={brand?.brand_logo} alt="" />
            </NavLink>
        </div>
    );
};
BrandLogoDetails.propTypes = {
    brand: PropTypes.object
}
export default BrandLogoDetails;