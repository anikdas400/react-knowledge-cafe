import Bookmark from "../Bookmark/Bookmark";
import PropTypes from 'prop-types';

const Bookmarks = ({bookMarks}) => {
    return (
        <div className="md:w-1/3 bg-gray-500 ml-4 p-2 mt-6">
            <h2 className="text-center text-2xl">Bookmarks-Blog: {bookMarks.length}</h2>
            
            {
                bookMarks.map(bookmark=> <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
           
            
        </div>
    );
};
Bookmarks.propTypes ={
    bookMarks: PropTypes.array
}

export default Bookmarks;