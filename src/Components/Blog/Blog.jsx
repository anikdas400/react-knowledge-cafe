import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog,handleAddBookmark,handleReadingTime}) => {
    const{id,title,cover,author,author_img,posted_date,reading_time,hashtags} =blog
    return (
        <div className='mb-20 space-y-3'>
            <img src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between items-center mt-5'>
                <div className='flex'>
                    <img className='w-14 h-14 rounded-full' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h2 className='text-2xl font-bold'>{author}</h2>
                        <h3 className='text-sm font-medium text-slate-500'>{posted_date}</h3>
                    </div>
                </div>
                <div>
                    <span className='text-xl font-medium text-slate-500'>{reading_time} min read</span>
                    <button onClick={() => handleAddBookmark(blog)}
                     className='ml-2 text-indigo-700'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl font-bold mt-4'>{title}</h2>
            <p className='text-xl font-medium text-slate-500 mt-3 mb-3'>
                {hashtags.map((hash,idx) => <span key={idx}><a href="">{hash}</a></span>)}
            </p>

            <button className='text-purple-500 bg-slate-300 p-3 rounded-lg font-semibold' onClick={()=>handleReadingTime(id,reading_time)}>Make read time</button>
        </div>
    );
};
Blog.propTypes ={
    blog: PropTypes.object.isRequired,
    handleAddBookmark: PropTypes.func,
    handleReadingTime:PropTypes.func
}

export default Blog;