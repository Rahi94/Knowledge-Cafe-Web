
import Profile from '../../assets/images/profile.png'
const header = () => {
    return (
        <header className='flex justify-between items-center p-2 mb-8  border-b-2 max-w-6xl mx-auto'>
            <h1 className='text-4xl font-bold'>Knowledge cafe</h1>
            <img src={Profile} alt="" />
        </header>
    );
};

export default header;