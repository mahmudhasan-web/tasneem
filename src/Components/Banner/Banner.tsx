'use client'
import React from 'react';
import './Banner.css'
import banner1 from '@/asstes/images/banner_1.png'
import banner2 from '@/asstes/images/banner_2.png'
import banner3 from '@/asstes/images/banner_3.png'
import banner4 from '@/asstes/images/banner_4.png'
import group from '@/asstes/images/Group.png'
import linkedin from '@/asstes/images/linkdin.png'
import youtube from '@/asstes/images/youtube.png'
import facebook from '@/asstes/images/facebook.png'
import twiter from '@/asstes/images/twiter.png'
import instagram from '@/asstes/images/instagram.png'
import Button from '../UI/Button/Button';
import { FaCheck } from "react-icons/fa6";
import Image from 'next/image';
import WorkingWithBusiness from '../common/WorkingWithBusiness/WorkingWithBusiness';
import Ellipse from '../UI/Ellipse/Ellipse';


const Banner = () => {
    return (
        <section className='bg-gray-100  overflow-hidden relative py-20 px-28'>
            <Ellipse className='absolute -left-24 top-60' width={650} ></Ellipse>
            <div className=''>
                <div className='bg-white w-fit relative top-5 rounded-xl text-gray-700 px-4 py-1'>
                    <WorkingWithBusiness></WorkingWithBusiness>
                </div>
                <div id='main_content' className='flex justify-between'>
                    <div id='banner_left' className=' w-[43%] my-auto '>
                        <h1 className='text-5xl poppins-semibold'>Top-tier <span id='social'>social media</span> <span id='management'>management</span> starting at $99/month.</h1>
                        <p className='text-lg my-5'>Tailored social media content of the highest quality, crafted for your business. Shared on your channels only upon your approval.</p>
                        <div className='flex gap-7'>
                            <Button content='Get start now' />
                            <div className='flex gap-3'>
                                <Image width={40} src={group} alt='group'></Image>
                                <p className='my-auto '>See what is RAAYA SOCIAL</p>
                            </div>
                        </div>
                    </div>
                    <div id='banner_right' className='flex gap-5 w-[47%]'>
                        <div className='my-auto space-y-6'>
                            <Image width={250} src={banner1} alt='banner1'></Image>
                            <Image width={250} src={banner2} alt='banner2'></Image>
                        </div>
                        <div>
                            <Image width={250} src={banner3} alt='banner3'></Image>
                        </div>
                        <div className='my-auto space-y-6'>
                            <Image width={250} src={banner4} alt='banner4'></Image>
                            <Image width={250} src={banner2} alt='banner2'></Image>
                        </div>
                    </div>
                </div>

                <div id='banner_footer' className='bg-white px-6 relative z-50 py-4  mt-20 flex justify-between rounded-md mx-auto'>
                    <div className='space-y-3'>
                        <h1 className='text-xl poppins-medium'>Social channel we work with</h1>
                        <div id="social_images" className='flex gap-5'>
                            <Image src={instagram} width={40} alt='instagram'></Image>
                            <Image src={facebook} width={40} alt='facebook'></Image>
                            <Image src={twiter} width={40} alt='twiter'></Image>
                            <Image src={youtube} width={40} alt='youtube'></Image>
                            <Image src={linkedin} width={40} alt='linkedin'></Image>
                        </div>
                    </div>
                    <div className='space-y-3 z-50'>
                        <h1 className='text-xl poppins-medium'>Why we are best for you !!</h1>
                        <div className='grid grid-cols-3 gap-x-10 gap-y-4'>
                            <h1 className='flex gap-2'><FaCheck className='bg-gray-200 rounded-full my-auto p-1 text-xl' />Team Of Professionals</h1>
                            <h1 className='flex gap-2'><FaCheck className='bg-gray-200 rounded-full my-auto p-1 text-xl' />Team Of Professionals</h1>
                            <h1 className='flex gap-2'><FaCheck className='bg-gray-200 rounded-full my-auto p-1 text-xl' />Team Of Professionals</h1>
                            <h1 className='flex gap-2'><FaCheck className='bg-gray-200 rounded-full my-auto p-1 text-xl' />Team Of Professionals</h1>
                            <h1 className='flex gap-2'><FaCheck className='bg-gray-200 rounded-full my-auto p-1 text-xl' />Team Of Professionals</h1>
                            <h1 className='flex gap-2'><FaCheck className='bg-gray-200 rounded-full my-auto p-1 text-xl' />Team Of Professionals</h1>
                        </div>
                    </div>
                </div>
            </div>
            <Ellipse className='absolute -right-24 rotate-180 -bottom-36' width={600}></Ellipse>
        </section>
    );
};

export default Banner;