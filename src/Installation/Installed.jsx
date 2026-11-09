import { useContext } from 'react';
import { select_id } from '../Root/selectContext';
import Downloads from '../assets/icon-downloads.png';
import { MdOutlineDeleteOutline } from "react-icons/md";
import Ratings from '../assets/icon-ratings.png';
import { NavLink } from 'react-router';

const Installed = () => {
    const [store, setStore, disabledIds, setDisabledIds] = useContext(select_id);

    const sortby = (type = "") => {
        if (type === "ratings") {
            setStore([...store].sort((a, b) => b.ratingAvg - a.ratingAvg));
        } else {
            setStore([...store].sort((a, b) => b.downloads - a.downloads));
        }
    };

    const deleted = (id) => {
        setDisabledIds(disabledIds.filter(item => item !== id));
        setStore(store.filter(item => item.id !== id));
    };

    return (
        <div className='max-w-4xl mx-auto px-3 sm:px-6 py-20 sm:py-24 select-none'>
            <div className='text-center mb-8'>
                <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900'>Your Installed Apps</h1>
                <p className='text-xs sm:text-sm md:text-base text-gray-500 mt-2'>
                    Explore all trending apps on the market developed by us
                </p>
            </div>

            <div className='flex justify-between items-center mb-6 pb-2 border-b border-gray-200'>
                <p className='font-bold text-sm sm:text-base text-gray-700'>
                    Apps Installed ({store.length})
                </p>
                {store.length > 0 && (
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-sm btn-outline text-xs sm:text-sm">
                            Sort By
                        </div>
                        <ul tabIndex={-1} className="dropdown-content menu bg-white text-gray-800 rounded-box z-10 w-36 p-2 shadow-lg border border-gray-150">
                            <li onClick={() => sortby('downloads')} className='hover:bg-gray-100 rounded-md cursor-pointer'>
                                <a>Downloads</a>
                            </li>
                            <li onClick={() => sortby('ratings')} className='hover:bg-gray-100 rounded-md cursor-pointer'>
                                <a>Ratings</a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>

            {store.length === 0 ? (
                <div className='text-center py-12 px-4 rounded-2xl bg-gray-50 border border-gray-200'>
                    <p className='text-lg font-bold text-gray-700'>No Apps Installed Yet</p>
                    <p className='text-xs sm:text-sm text-gray-500 mt-1 mb-6'>
                        Browse our catalog and install apps to see them here.
                    </p>
                    <NavLink to='/apps'>
                        <button className='load-btn !px-6 !py-2 text-sm'>Explore Apps</button>
                    </NavLink>
                </div>
            ) : (
                <div className='space-y-3 sm:space-y-4'>
                    {store.map(item => (
                        <div
                            key={item.id}
                            className='bg-amber-50/70 border border-amber-200/60 rounded-xl sm:rounded-2xl p-3 sm:p-4 flex items-center justify-between shadow-xs hover:shadow-sm transition-shadow gap-3'
                        >
                            <div className='flex items-center gap-3 sm:gap-4 min-w-0'>
                                <img
                                    className='w-12 h-12 sm:w-16 sm:h-16 rounded-xl object-cover shrink-0 bg-amber-100'
                                    src={item.image}
                                    alt={item.title}
                                />
                                <div className='min-w-0'>
                                    <p className='font-bold text-sm sm:text-base text-gray-900 truncate'>{item.title}</p>
                                    <div className='flex items-center flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600 mt-1'>
                                        <div className='flex items-center gap-1 shrink-0'>
                                            <img className='w-3.5 h-3.5 object-contain' src={Downloads} alt="downloads" />
                                            <span>{item.downloads}M</span>
                                        </div>
                                        <div className='flex items-center gap-1 shrink-0'>
                                            <img className='w-3.5 h-3.5 object-contain' src={Ratings} alt="ratings" />
                                            <span>{item.ratingAvg}</span>
                                        </div>
                                        <span className='text-gray-400'>•</span>
                                        <span className='shrink-0'>{item.size} MB</span>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={() => deleted(item.id)}
                                className='p-2 sm:p-2.5 text-xl sm:text-2xl text-red-500 hover:text-red-700 hover:bg-red-50 rounded-xl transition-colors cursor-pointer shrink-0'
                                title="Uninstall app"
                                aria-label="Delete installed app"
                            >
                                <MdOutlineDeleteOutline />
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Installed;
