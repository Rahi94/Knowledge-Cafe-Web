import PropTypes from 'prop-types';
const Blog = ({blog}) => {
   const {blog_title,hashtags, Cover, author_img, author, reading_time,posted_date} = blog;
    return (
        <div>
            <img src={blog.Cover} alt={` cover picture of the title ${blog_title}`} />
            <div className='flex justify-between'>
                <div className='flex items-center gap-4'>
                    <img className='w-16 h-16 rounded-full' src={blog.author_img} alt="" />
                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{blog.reading_time} min read</span>
                </div>
            </div>
            <h2 className='text-4xl'>{blog_title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a className='text-blue-700' href="">#{hash}</a></span>)
                }
            </p>

        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;