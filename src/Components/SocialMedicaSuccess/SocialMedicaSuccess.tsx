'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import success from '@/asstes/images/social-success.png';
import skin from '@/asstes/images/skin.png'
import beuaty from '@/asstes/images/beauty.png';
import realstate from '@/asstes/images/realstate.png';
import yoga from '@/asstes/images/yoga.png';
import dental from '@/asstes/images/dental.png';
import all from '@/asstes/images/all.png';
import save from '@/asstes/images/save.png'
import love from '@/asstes/images/love.png'
import comment from '@/asstes/images/comment.png'
import share from '@/asstes/images/share.png'

const SocialMedicaSuccess = () => {
    const [focusButton, setfocusButton] = useState<number>(1);
    const categories = [
        { name: "All", icon: all },
        { name: "Beauty", icon: beuaty },
        { name: "Skin care", icon: skin },
        { name: "Real estate", icon: realstate },
        { name: "Dental clinic", icon: dental },
        { name: "Yoga", icon: yoga }
    ];

    const posts = [
        { image: 'https://res.cloudinary.com/dmnizbwcl/image/upload/v1731474251/images_gaa5te.jpg', name: 'John Doe', description: 'Exciting things happening now ❤️ Stay tuned for more updates!' },
        { image: 'https://res.cloudinary.com/dmnizbwcl/image/upload/v1731474251/images_gaa5te.jpg', name: 'Jane Smith', description: 'Check out our new collection! Let us know what you think!' },
        { image: 'https://res.cloudinary.com/dmnizbwcl/image/upload/v1731474251/images_gaa5te.jpg', name: 'Sam Lee', description: 'Working on something cool! More to come soon 😊' },
        { image: 'https://res.cloudinary.com/dmnizbwcl/image/upload/v1731474251/images_gaa5te.jpg', name: 'Alex Green', description: 'The team is growing! Thrilled to announce new developments!' },
        { image: 'https://res.cloudinary.com/dmnizbwcl/image/upload/v1731474251/images_gaa5te.jpg', name: 'Emma Brown', description: 'Just finished a major project milestone! Can’t wait to share it.' },
        { image: 'https://res.cloudinary.com/dmnizbwcl/image/upload/v1731474251/images_gaa5te.jpg', name: 'Chris Johnson', description: 'Another day, another great opportunity to innovate.' },
        { image: 'https://res.cloudinary.com/dmnizbwcl/image/upload/v1731474251/images_gaa5te.jpg', name: 'Taylor White', description: 'So much happening around here, stay updated with us!' },
        { image: 'https://res.cloudinary.com/dmnizbwcl/image/upload/v1731474251/images_gaa5te.jpg', name: 'Jordan Black', description: 'Pushing forward with some new ideas. Stay with us on this journey!' },
    ];

    return (
        <section className='bg-white py-20 px-28'>
            <h1 className='text-5xl poppins-bold w-fit mx-auto flex gap-5'>Showcasing <Image className='my-auto' width={160} src={success} alt='page' /> Our <span className='text-primary'>Social Media</span> Success</h1>
            <hr className='w-full my-5 border bg-gray-200' />
            <div id='buttons' className='flex justify-between'>
                {
                    categories.map((e, idx) => {
                        return <div key={idx} onClick={() => setfocusButton(idx+1)} className={focusButton == idx + 1 ? "border-2 rounded-xl flex py-2 px-8 gap-3 w-fit border-[#B564F7] text-[#B564F7]" : "border-2 cursor-pointer border-[#98A2B3] rounded-xl flex py-2 px-8 gap-3 w-fit"}>
                            <Image width={30} src={e.icon} alt={e.name} className='my-auto'></Image>
                            <button className='text-lg'>{e.name}</button></div>
                    })
                }
            </div>
            <div id='cards' className='my-5 flex flex-wrap justify-center gap-5'>
                {
                    posts.map((e, idx) =>
                        <div key={idx} id='card' className='bg-gray-100 border-2 p-3 w-72 rounded-2xl'>
                            <div id='card_header' className='flex justify-between'>
                                <div id='name&image' className='flex gap-2 '>
                                    <Image width={40} height={20} className='rounded-full' src={e.image} alt='l'></Image>
                                    <h2 className='my-auto text-base font-semibold'>{e.name}</h2>
                                </div>
                                <div className='my-auto'>
                                    <Image width={30} src={save} alt='save'></Image>
                                </div>
                            </div>
                            <div id='card_content' className='my-2'>
                                <p>{e.description}</p>
                            </div>
                            <Image width={260} height={196} src={'https://res.cloudinary.com/dmnizbwcl/image/upload/v1731576953/Card_Image_tm6gha.png'} alt='h'></Image>
                            <hr className='w-full border my-3' />
                            <div id='card_footer' className='flex justify-between px-1'>
                                <Image width={20} src={love} alt='love'></Image>
                                <Image width={20} src={comment} alt='comment'></Image>
                                <Image width={20} src={share} alt='share'></Image>
                            </div>
                        </div>)
                }
            </div>
        </section>
    );
};

export default SocialMedicaSuccess;