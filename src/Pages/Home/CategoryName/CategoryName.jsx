import PropTypes from 'prop-types'
import { NavLink, useParams } from 'react-router-dom';
const CategoryName = ({ names, setGetCategory }) => {
    const { _id } = useParams()

    
    return (
        <div>
            <NavLink onClick={()=>setGetCategory(names)} to={`/category/${names._id}`}>
                <button className={`btn w-full ${_id == names._id && 'btn-success'}`}>
                    {names.category}
                </button>
            </NavLink>
          </div>
    );
};
CategoryName.propTypes = {
    names: PropTypes.object,
    setGetCategory:PropTypes.func
}
export default CategoryName;