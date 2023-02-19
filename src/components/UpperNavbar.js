import React from 'react';
import logo from '../assets/manma_png.png';
import { CiMail } from 'react-icons/ci'
import { BsTelephoneOutbound } from 'react-icons/bs'

const UpperNavbar = () => {
    return (
        <div className='flex justify-between items-center -mb-7 mx-2'>
            <img
                src={logo}
                alt=""
                className='w-36 h-36 -mb-3'
            />
            <div className='lg:flex gap-8 items-center hidden'>
                <div className='flex gap-3'>
                    <CiMail
                        className='mt-1 h-8 w-8' />
                    <div>
                        <h1
                            className='font-semibold text-lg'
                        >
                            Mail Us Today
                        </h1>
                        <p>contact@manmaservices.com</p>
                    </div>
                </div>
                <div
                    className='flex gap-3'
                >
                    <BsTelephoneOutbound
                        className='mt-1 h-7 w-7' />
                    <div>
                        <h1
                            className='font-semibold text-lg'
                        >
                            Call Us For More Details
                        </h1>
                        <p>+91-8929825255</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpperNavbar;