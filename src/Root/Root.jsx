import { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet, ScrollRestoration } from 'react-router';
import About from '../Footer/About';
import { select_id } from './selectContext';

const Root = () => {
    const [store, setStore] = useState([]);
    const [disabledIds, setDisabledIds] = useState([]);

    return (
        <>
            <div className='min-h-screen flex flex-col'>
                <select_id.Provider value={[store, setStore, disabledIds, setDisabledIds]}>
                    <Navbar />
                    <main className='flex-grow'>
                        <Outlet />
                    </main>
                    <About />
                </select_id.Provider>
            </div>
            <ScrollRestoration />
        </>
    );
};

export default Root;
