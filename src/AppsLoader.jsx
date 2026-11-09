import All_Apps from './All_Apps/All_Apps';
import { Suspense } from 'react';
import { useLoaderData } from 'react-router';
import Picture from './assets/logo.png';
import './Rotate.css';

const AppsLoader = () => {
    const { promise } = useLoaderData();

    return (
        <Suspense fallback={
            <div className='select-none min-h-[60vh] flex justify-center items-center gap-2 px-4'>
                <span className='text-3xl sm:text-5xl md:text-6xl font-extrabold text-purple-600'>Loadin</span>
                <img className='w-10 sm:w-16 h-auto rotate object-contain' src={Picture} alt="Loading" />
                <span className='text-3xl sm:text-5xl md:text-6xl font-extrabold text-purple-600'>g</span>
            </div>
        }>
            <All_Apps promise={promise} />
        </Suspense>
    );
};

export default AppsLoader;
