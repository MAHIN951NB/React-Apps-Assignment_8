import { use, useState } from 'react';
import AppsCart from '../Cart/AppsCart';
import { browse } from './Search.js';
import Error from '../assets/App-Error.png';

const All_Apps = ({ promise }) => {
    const data = use(promise);
    const [value, setValue] = useState('');
    const [isSearched, setIsSearched] = useState(false);

    const handleSearch = (event) => {
        if (event.key === 'Enter') {
            browse((k) => setValue(k));
            setIsSearched(true);
        }
    };

    const handleClear = () => {
        setValue('');
        setIsSearched(false);
        const searchInput = document.getElementById('search');
        if (searchInput) searchInput.value = '';
    };

    const filteredData = isSearched && value.trim() !== ''
        ? data.filter(list =>
            list.title.toLowerCase().includes(value.toLowerCase().trim())
        )
        : data;

    const noResults = isSearched && filteredData.length === 0;

    return (
        <div className='max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 select-none'>
            <div className='text-center my-6 sm:my-10'>
                <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold'>Our All Applications</h1>
                <p className='text-xs sm:text-sm md:text-base text-gray-500 mt-2 max-w-xl mx-auto'>
                    Explore All Apps on the Market developed by us. We code for Millions
                </p>
            </div>

            <div className='flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 mb-6 sm:mb-8'>
                <p className='font-bold text-sm sm:text-base'>
                    ({filteredData.length}) Apps Found {isSearched && value.trim() && `for "${value}"`}
                </p>
                <div className='flex items-center gap-2 w-full sm:w-auto'>
                    <input
                        id='search'
                        onKeyDown={handleSearch}
                        type="text"
                        placeholder="Search apps by title & press Enter..."
                        className="input input-primary input-bordered w-full sm:w-80 bg-white text-gray-800 text-xs sm:text-sm"
                    />
                    {isSearched && (
                        <button
                            onClick={handleClear}
                            className="btn btn-outline btn-sm text-xs"
                        >
                            Reset
                        </button>
                    )}
                </div>
            </div>

            {noResults ? (
                <div className='flex flex-col items-center justify-center my-12 text-center'>
                    <img className='w-48 sm:w-64 max-w-full h-auto' src={Error} alt="No apps found" />
                    <p className='text-lg font-semibold text-gray-600 mt-4'>No Applications Found</p>
                    <p className='text-sm text-gray-400 mt-1'>Try searching for a different keyword or reset search.</p>
                </div>
            ) : (
                <div className='grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4 md:gap-6'>
                    {filteredData.map(list => (
                        <AppsCart key={list.id} list={list} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default All_Apps;
