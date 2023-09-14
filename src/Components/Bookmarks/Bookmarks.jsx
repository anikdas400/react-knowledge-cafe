import Bookmark from "../Bookmark/Bookmark";
import PropTypes from 'prop-types';

const Bookmarks = ({bookMarks,readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-500 ml-4 p-2 mt-6">
            <h1 className="text-center text-2xl font-semibold border-b-2">spend time to read:{readingTime}</h1>
            <h2 className="text-center text-2xl">Bookmarks-Blog: {bookMarks.length}</h2>
            
            {
                bookMarks.map((bookmark,idx)=> <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
           
            
        </div>
    );
};
Bookmarks.propTypes ={
    bookMarks: PropTypes.array,
    readingTime:PropTypes.number
}

export default Bookmarks;