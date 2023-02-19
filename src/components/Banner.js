import React from 'react';
import './banner.css';
import img1 from '../assets/thumb_1.png'
import img2 from '../assets/thumb_2.png'
import img3 from '../assets/thumb_3.png'
import img4 from '../assets/thumb_4.png'
import img5 from '../assets/thumb_5.png'
import img6 from '../assets/thumb_6.png'

const Banner = () => {
    return (
        <div
            className='banner mt-2 lg:flex-row md:flex-row flex-col flex justify-around items-center'
        >
            <div
                className='mb-52'
            >
                <div>
                    <ul
                        className='smoke flex text-white text-5xl font-bold gap-3'
                    >
                        <li>An</li>
                        <li>Indian</li>
                    </ul>
                    <ul
                        className='smoke1 flex text-white text-5xl font-bold mt-3 gap-3'
                    >
                        <li>Digital</li>
                        <li>Marketing</li>
                        <li>Agency</li>
                    </ul>
                </div>
                <div className=' bg-yellow-600 mt-10 p-3 border-l-8 border-white'>
                    <p
                        className='normal-txt text-white text-2xl'
                    >
                        With global edge helping businesses grow online
                    </p>
                </div>
                <button
                    className='bg-white text-black text-base font-semibold py-2 px-5 mt-10 rounded-3xl animate-pulse'
                >
                    Discover More
                </button>
            </div>
            <div
                className='relative mb-24'
            >
                <div
                    className='flex gap-20 ml-16 absolute'
                >
                    <img
                        src={img6}
                        alt=""
                        className='img w-10 h-10 -mt-6'
                    />
                    <img
                        src={img5}
                        alt=""
                        className='img2 w-40 h-20 -mt-20'
                    />
                </div>
                <div>
                    <img
                        src={img1} alt=""
                        className='w-80 h-80'
                    />
                </div>
                <div
                    className='flex'>
                    <div
                        className='flex gap-10 absolute -ml-6 -mt-32'>
                        <img
                            src={img2}
                            alt=""
                            className='img h-64 -ml-40'
                        />
                        <img
                            src={img3}
                            alt=""
                            className='img2 h-64'
                        />
                    </div>
                    <img
                        src={img4}
                        alt=""
                        className='img h-20 w-24 -mt-4 ml-60'
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;