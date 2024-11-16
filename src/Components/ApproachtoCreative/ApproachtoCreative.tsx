'use client'
import React from 'react';
import approach1 from '@/asstes/images/approach1.png'
import approach2 from '@/asstes/images/approach2.png'
import approach3 from '@/asstes/images/approach3.png'
import approach4 from '@/asstes/images/approach4.png'
import Image from 'next/image';
import { GoVerified } from "react-icons/go";
import Ellipse from '../UI/Ellipse/Ellipse';

const ApproachtoCreative = () => {
    return (
        <section className='py-20 px-28 relative overflow-hidden'>
            <Ellipse className='absolute -left-20' width={350}></Ellipse>
            <div className='flex gap-5 px-5 py-1 bg-white w-fit rounded-xl my-6'>
            <GoVerified className='my-auto text-xl' />
            <p className='text-lg text-gray-700'>Creative success</p>
            </div>
            <h1 className='text-5xl poppins-bold'>A New <span className='text-primary'>Approach to Creative</span> Services</h1>
            <Ellipse className='absolute' width={200}></Ellipse>
            <div className='flex flex-wrap justify-between gap-9 my-10'>
                <Image src={approach1} width={585} className='rounded-2xl' alt='approach1'></Image>
                <Image src={approach2} width={585} className='rounded-2xl' alt='approach2'></Image>
                <Image src={approach4} width={585} className='rounded-2xl' alt='approach3'></Image>
                <Image src={approach3} width={585} className='rounded-2xl' alt='approach4'></Image>
            </div>
        </section>
    );
};

export default ApproachtoCreative;