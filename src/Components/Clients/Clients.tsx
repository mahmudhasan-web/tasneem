'use client'
import React from 'react';
import company1 from '@/asstes/images/Fictional company logo.png'
import company2 from '@/asstes/images/Fictional company logo (1).png'
import company3 from '@/asstes/images/Fictional company logo (2).png'
import company4 from '@/asstes/images/Fictional company logo (3).png'
import company5 from '@/asstes/images/Fictional company logo (4).png'
import company6 from '@/asstes/images/Fictional company logo (5).png'
import line from '@/asstes/images/Line 1.png'
import Marquee from "react-fast-marquee";
import Image from 'next/image';

const Clients = () => {
    return (
        <section className='bg-white py-5 pl-28'>
            <div id='main_content' className='flex justify-center ml-auto gap-20'>
                <div className='my-auto w-1/6 '>
                    <h1 className='text-3xl font-bold'>50+</h1>
                    <p className='text-lg'>Our clients are featured in</p>
                </div>
                <div className='w-fit'>
                    <Image src={line} height={100} alt='line'></Image>
                </div>
                <div className=' w-5/6 my-auto'>
                    <Marquee className=''>
                        <Image width={200} className='mr-5' src={company1} alt='company1'></Image>
                        <Image width={200} className='mr-5' src={company2} alt='company2'></Image>
                        <Image width={200} className='mr-5' src={company3} alt='company3'></Image>
                        <Image width={200} className='mr-5' src={company4} alt='company4'></Image>
                        <Image width={200} className='mr-5' src={company5} alt='company5'></Image>
                        <Image width={200} className='mr-5' src={company6} alt='company6'></Image>
                    </Marquee>
                </div>
            </div>
        </section>
    );
};

export default Clients;