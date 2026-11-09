import Picture from '../assets/hero.png';
import { FaGooglePlay, FaApple } from 'react-icons/fa';
import './Style.css';

const Banner = () => {
    return (
        <div className='text-center select-none pt-24 sm:pt-28 pb-12 overflow-hidden'>
            <div className='max-w-4xl mx-auto px-4'>
                <h1 className='text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight'>
                    <span>We Build </span>
                    <span className='bg-gradient-to-r from-purple-600 via-indigo-600 to-violet-500 bg-clip-text text-transparent'>
                        Productive
                    </span>{' '}
                    <span>Apps</span>
                </h1>
                <p className='mt-4 text-xs sm:text-sm md:text-base text-gray-500 max-w-2xl mx-auto font-normal leading-relaxed'>
                    At <span className='font-semibold text-gray-700'>HERO.IO</span>, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.
                </p>

                <div className='flex flex-wrap justify-center items-center gap-3 sm:gap-4 mt-6'>
                    <a
                        href='https://play.google.com'
                        target='_blank'
                        rel='noreferrer'
                        className='flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition-all text-xs sm:text-sm font-semibold shadow-md hover:shadow-lg'
                    >
                        <FaGooglePlay className='text-base sm:text-lg' />
                        <span>Google Play</span>
                    </a>
                    <a
                        href='https://www.apple.com/app-store/'
                        target='_blank'
                        rel='noreferrer'
                        className='flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl border border-gray-300 hover:border-gray-900 text-gray-800 hover:bg-gray-50 transition-all text-xs sm:text-sm font-semibold shadow-sm hover:shadow-md'
                    >
                        <FaApple className='text-base sm:text-lg' />
                        <span>App Store</span>
                    </a>
                </div>

                <div className='mt-8 sm:mt-12 flex justify-center px-2'>
                    <img
                        className='w-full max-w-xs sm:max-w-lg md:max-w-2xl h-auto object-contain drop-shadow-2xl'
                        src={Picture}
                        alt="Hero preview"
                    />
                </div>
            </div>

            {/* Trusted stats section */}
            <div className='linear w-full mt-12 sm:mt-16 py-10 sm:py-14 px-4'>
                <div className='max-w-5xl mx-auto text-center'>
                    <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-white'>
                        Trusted By Billions
                    </h2>
                    <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-10'>
                        <div className='p-4 rounded-xl bg-white/10 backdrop-blur-xs'>
                            <p className='text-amber-200 text-xs sm:text-sm font-medium'>Total Downloads</p>
                            <p className='text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-1'>29.6M</p>
                            <p className='text-purple-200 text-xs sm:text-sm mt-1'>21% more than last month</p>
                        </div>
                        <div className='p-4 rounded-xl bg-white/10 backdrop-blur-xs'>
                            <p className='text-amber-200 text-xs sm:text-sm font-medium'>Active Users</p>
                            <p className='text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-1'>18.2M</p>
                            <p className='text-purple-200 text-xs sm:text-sm mt-1'>15% growth this year</p>
                        </div>
                        <div className='p-4 rounded-xl bg-white/10 backdrop-blur-xs'>
                            <p className='text-amber-200 text-xs sm:text-sm font-medium'>Customer Ratings</p>
                            <p className='text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-1'>4.9 / 5.0</p>
                            <p className='text-purple-200 text-xs sm:text-sm mt-1'>Based on 1.2M+ reviews</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Trending Apps header */}
            <div className='mt-12 sm:mt-16 px-4'>
                <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900'>Trending Apps</h2>
                <p className='text-xs sm:text-sm md:text-base text-gray-500 mt-2'>
                    Explore All Trending Apps on the Market developed by us
                </p>
            </div>
        </div>
    );
};

export default Banner;
