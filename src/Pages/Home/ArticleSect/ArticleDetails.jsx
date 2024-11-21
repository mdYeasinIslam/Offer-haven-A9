import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
const ArticleDetails = ({ article }) => {
    console.log(article)
    return (
        <section>
            <div className="card   bg-base-100 shadow-xl p-3">
                <figure className='w-full h-[20rem] rounded-xl'>
                    <img
                        src={article?.image}
                        className='w-full h-full'
                        alt="Movie" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{ article?.title}</h2>
                    <p>{ article?.description}</p>
                    <div className="card-actions justify-end">
                        <NavLink to={'/brands'}>
                            <button className="btn btn-primary">Go to the Shop </button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>
    );
};
ArticleDetails.propTypes = {
    article: PropTypes.object
}
export default ArticleDetails;