import { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Downloads from '../assets/icon-downloads.png';
import Ratings from '../assets/icon-ratings.png';
import Review from '../assets/icon-review.png';
import { select_id } from '../Root/selectContext';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Details = () => {
    const { id } = useParams();
    const converted_id = parseInt(id);
    const data = useLoaderData();
    const [store, setStore, disabledIds, setDisabledIds] = useContext(select_id);
    const isInstalled = disabledIds.includes(converted_id);

    const Check = () => {
        const x = data.filter(list => list.id === converted_id);
        setStore([...store, ...x]);
        setDisabledIds([...disabledIds, converted_id]);
    };

    const currentItem = data.find(list => list.id === converted_id);

    if (!currentItem) {
        return (
            <div className='max-w-5xl mx-auto px-4 py-28 text-center'>
                <p className='text-xl font-bold text-gray-700'>Application not found</p>
            </div>
        );
    }

    return (
        <div className='max-w-5xl mx-auto px-4 py-20 sm:py-24 select-none'>
            <div className='flex flex-col sm:flex-row items-center sm:items-start gap-6 border-b border-gray-200 pb-8'>
                <img
                    className='w-32 h-32 sm:w-44 sm:h-44 rounded-2xl object-cover shadow-lg shrink-0 bg-amber-100'
                    src={currentItem.image}
                    alt={currentItem.title}
                />
                <div className='flex-1 text-center sm:text-left'>
                    <h1 className='font-bold text-2xl sm:text-3xl text-gray-900'>{currentItem.title}</h1>
                    <p className='text-sm sm:text-base text-gray-500 mt-1'>
                        Developed by <span className='text-purple-600 font-semibold'>{currentItem.companyName}</span>
                    </p>

                    <div className='flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-8 my-6 border-y border-gray-150 py-3'>
                        <div className='text-center sm:text-left'>
                            <div className='flex items-center justify-center sm:justify-start gap-1.5 text-gray-500 text-xs sm:text-sm'>
                                <img className='w-4 h-4' src={Downloads} alt="downloads" />
                                <span>Downloads</span>
                            </div>
                            <p className='font-bold text-base sm:text-lg text-gray-800 mt-0.5'>{currentItem.downloads}M</p>
                        </div>
                        <div className='text-center sm:text-left'>
                            <div className='flex items-center justify-center sm:justify-start gap-1.5 text-gray-500 text-xs sm:text-sm'>
                                <img className='w-4 h-4' src={Ratings} alt="ratings" />
                                <span>Ratings</span>
                            </div>
                            <p className='font-bold text-base sm:text-lg text-gray-800 mt-0.5'>{currentItem.ratingAvg}</p>
                        </div>
                        <div className='text-center sm:text-left'>
                            <div className='flex items-center justify-center sm:justify-start gap-1.5 text-gray-500 text-xs sm:text-sm'>
                                <img className='w-4 h-4' src={Review} alt="reviews" />
                                <span>Total Reviews</span>
                            </div>
                            <p className='font-bold text-base sm:text-lg text-gray-800 mt-0.5'>{currentItem.reviews?.toLocaleString()}</p>
                        </div>
                    </div>

                    <button
                        disabled={isInstalled}
                        onClick={Check}
                        className={`py-2 px-6 rounded-xl font-bold text-white transition-all shadow-md text-sm sm:text-base cursor-pointer
                        ${isInstalled
                            ? 'bg-gray-400 cursor-not-allowed opacity-75'
                            : 'bg-emerald-500 hover:bg-emerald-600 active:scale-95'}`}
                    >
                        {isInstalled ? 'Installed' : `Install Now (${currentItem.size} MB)`}
                    </button>
                </div>
            </div>

            <div className='border-b border-gray-200 py-8'>
                <h2 className='font-bold text-lg sm:text-xl text-gray-900 mb-4'>Ratings Breakdown</h2>
                <div className='w-full h-[280px] sm:h-[350px]'>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={currentItem.ratings}
                            margin={{ top: 20, right: 10, left: -15, bottom: 5 }}
                        >
                            <CartesianGrid stroke="#e2e8f0" strokeDasharray="3 3" />
                            <XAxis dataKey="name" stroke="#64748b" tick={{ fontSize: 12 }} />
                            <YAxis stroke="#64748b" tick={{ fontSize: 12 }} />
                            <Tooltip />
                            <Bar
                                dataKey="count"
                                fill="#8b5cf6"
                                radius={[6, 6, 0, 0]}
                                maxBarSize={40}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className='mt-8'>
                <h2 className='font-bold text-lg sm:text-xl text-gray-900 mb-2'>Description</h2>
                <p className='text-sm sm:text-base text-gray-600 leading-relaxed whitespace-pre-line'>
                    {currentItem.description}
                </p>
            </div>
        </div>
    );
};

export default Details;
