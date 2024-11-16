'use client'
import React, { useState } from 'react';
import Button from '../UI/Button/Button';
import Image, { StaticImageData } from 'next/image';
import social from '@/asstes/images/social.png'
import blog from '@/asstes/images/blog.png'
import email from '@/asstes/images/email.png'
import video from '@/asstes/images/video.png'
import website from '@/asstes/images/website.png'
import save from '@/asstes/images/save.png'
import love from '@/asstes/images/love.png'
import comment from '@/asstes/images/comment.png'
import share from '@/asstes/images/share.png'
import Ellipse from '../UI/Ellipse/Ellipse';
// import Ellipse from '../../../public/images/Ellipse 1.png'

const CreativeService = () => {
    const [buttonID, setbuttonID] = useState<number>(1);

    interface Button {
        name: string,
        image: StaticImageData
    }

    type Buttons = Button[];

    const buttons: Buttons = [
        { name: 'Social media post', image: social },
        { name: 'Short form video', image: video },
        { name: 'Email design', image: email },
        { name: 'Website design', image: website },
        { name: 'Blog post', image: blog }
    ]

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
        <section className='bg-gray-100 relative overflow-hidden py-20 px-28'>
            <Ellipse className='absolute -left-20 p-0 -top-1' width={300}></Ellipse>
            <div id='main_content' className='flex justify-between'>
                <h1 className='text-5xl poppins-bold w-2/3'>Creative <span className='text-primary'>Services Made Easy</span> & Affordable</h1>
                <div className='my-auto'>
                    <Button content='Explore all'></Button>
                </div>
            </div>
            <hr className='w-full border border-gray-300 my-10' />
            <div id='creative data'>
                <div className='flex justify-between'>
                    {
                        buttons?.map((e, idx) => {
                            return <div key={idx} className={buttonID == idx + 1 ? "border-2 rounded-xl flex py-3 px-4 gap-3 w-fit border-[#B564F7] text-[#B564F7]" : "border-2 border-[#98A2B3] rounded-xl flex py-3 px-4 gap-3 w-fit"}>
                                <Image width={30} src={e.image} alt={e.name}></Image>
                                <button className='text-lg'>{e.name}</button></div>
                        })
                    }
                </div>
                <div id='cards' className='my-5 border-2 h-full flex flex-wrap justify-center gap-5'>
                    {
                        posts.map((e, idx) =>
                            <div key={idx} id='card' onClick={()=> setbuttonID(idx)} className='bg-white p-3 w-72 rounded-2xl'>
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
            </div>
          
        </section>
    );
};

export default CreativeService;