import Downloads from '../assets/icon-downloads.png';
import Ratings from '../assets/icon-ratings.png';
import { NavLink } from 'react-router';

const Cart = ({ list }) => {
    const { title, image, downloads, ratingAvg } = list;
    return (
        <NavLink
            to='/apps'
            className='bg-white text-gray-800 shadow-sm hover:shadow-lg transition-all duration-300 rounded-xl sm:rounded-2xl p-1.5 sm:p-2.5 md:p-3 flex flex-col justify-between hover:-translate-y-1 border border-gray-100 group'
        >
            <div className='select-none cursor-pointer'>
                <div className='overflow-hidden rounded-lg sm:rounded-xl bg-amber-100 aspect-square w-full'>
                    <img
                        className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                        src={image}
                        alt={title}
                        loading="lazy"
                    />
                </div>
                <div
                    className='font-bold text-[11px] sm:text-xs md:text-sm lg:text-base mt-1.5 sm:mt-2 truncate text-gray-800'
                    title={title}
                >
                    {title}
                </div>
                <div className='flex items-center justify-between mt-1 sm:mt-2 text-[9px] sm:text-[11px] md:text-xs text-gray-600 gap-1'>
                    <div className='flex items-center gap-0.5 sm:gap-1 shrink-0'>
                        <img className='w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 object-contain' src={Downloads} alt="downloads" />
                        <span className='font-semibold'>{downloads}M</span>
                    </div>
                    <div className='flex items-center gap-0.5 sm:gap-1 shrink-0'>
                        <img className='w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 object-contain' src={Ratings} alt="ratings" />
                        <span className='font-semibold'>{ratingAvg}</span>
                    </div>
                </div>
            </div>
        </NavLink>
    );
};

export default Cart;
