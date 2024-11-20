import PropTypes from 'prop-types'
const CategoryName = ({ names }) => {
    
    return (
        <section>
            <div>
                <button className='btn w-full'>
                    {names.category}
                </button>
          </div>
        </section>
    );
};
CategoryName.propTypes = {
    names:PropTypes.object
}
export default CategoryName;