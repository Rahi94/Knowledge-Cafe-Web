import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {blog_title} = bookmark;
    return (
        <div className='bg-slate-200 p-4 m-4 rounded-xl'>
            <h2 className='text-xl'>{blog_title}</h2>
        </div>
    );
    };

Bookmark.propTypes = {
    bookmark: PropTypes.object
};

export default Bookmark;
