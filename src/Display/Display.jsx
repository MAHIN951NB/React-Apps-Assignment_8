import Banner from '../Banner/Banner';
import Cart from '../Cart/Cart';
import { NavLink } from 'react-router';
import './Btn.css';

const Display = ({ data }) => {
    return (
        <>
            <Banner />
            <div className='max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8'>
                <div className='grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4 md:gap-6'>
                    {data.map((list, index) => index < 10 && (
                        <Cart key={list.id || index} list={list} />
                    ))}
                </div>
            </div>
            <div className='text-center select-none cursor-pointer my-10 sm:my-14'>
                <NavLink to='/apps'>
                    <button className='load-btn text-sm sm:text-base'>Load All</button>
                </NavLink>
            </div>
        </>
    );
};

export default Display;
