import PropTypes from 'prop-types';
import { BsBookmarkPlus } from "react-icons/bs";
const Blog = ({blog, handleAddToBookmarks}) => {
   const {blog_title,hashtags, Cover, author_img, author, reading_time,posted_date} = blog;
    return (
        <div className='mb-20'>
            <img className='w-full mb-8 rounded-xl' src={blog.Cover} alt={` cover picture of the title ${blog_title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex items-center gap-4'>
                    <img className='w-16 h-16 rounded-full' src={blog.author_img} alt="" />
                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <span>{blog.reading_time} min read</span>
                    <button onClick={handleAddToBookmarks} className='ml-3 text-2xl text-green-600'><BsBookmarkPlus></BsBookmarkPlus></button>
                </div>
            </div>
            <h2 className='text-4xl mb-4'>{blog_title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a className='text-blue-700 mr-2' href="">#{hash}</a></span>)
                }
            </p>

        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;