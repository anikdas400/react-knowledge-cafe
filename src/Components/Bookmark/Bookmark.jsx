import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} =bookmark
    return (
        <div className="border-2 p-4 mt-3 bg-gray-300 rounded-xl">
            <h3>{title}</h3>
        </div>
    );
};
Bookmark.propTypes ={
    bookmark: PropTypes.object.isRequired
}
export default Bookmark;