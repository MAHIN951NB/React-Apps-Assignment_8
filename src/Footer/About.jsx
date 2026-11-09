import Picture from '../assets/logo.png';
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { VscTwitter } from "react-icons/vsc";

const About = () => {
    return (
        <footer className='mt-auto bg-[#00172E] select-none py-8 sm:py-12'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex flex-col sm:flex-row justify-between items-center gap-6 pb-6 border-b border-gray-700 text-center sm:text-left'>
                    <div className='flex items-center gap-3'>
                        <img width={36} className='h-auto object-contain' src={Picture} alt="Hero logo" />
                        <p className='text-white font-bold text-lg sm:text-xl tracking-tight'>
                            Hero<span className='text-purple-400'>.IO</span>
                        </p>
                    </div>

                    <div className='flex flex-col items-center sm:items-end gap-2'>
                        <p className='text-gray-300 text-sm font-medium'>Connect with us</p>
                        <div className='flex gap-x-3'>
                            <a
                                href='https://facebook.com'
                                target='_blank'
                                rel='noreferrer'
                                className='w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-purple-600 text-white transition-colors text-lg'
                                aria-label="Facebook"
                            >
                                <CiFacebook />
                            </a>
                            <a
                                href='https://linkedin.com'
                                target='_blank'
                                rel='noreferrer'
                                className='w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-purple-600 text-white transition-colors text-lg'
                                aria-label="LinkedIn"
                            >
                                <CiLinkedin />
                            </a>
                            <a
                                href='https://twitter.com'
                                target='_blank'
                                rel='noreferrer'
                                className='w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-purple-600 text-white transition-colors text-base'
                                aria-label="Twitter"
                            >
                                <VscTwitter />
                            </a>
                        </div>
                    </div>
                </div>

                <p className='text-xs sm:text-sm text-gray-400 mt-6 text-center'>
                    Copyright © 2025 - All rights reserved by Hero.IO
                </p>
            </div>
        </footer>
    );
};

export default About;
