'use client'
import React from 'react';
import Ellipse from '../UI/Ellipse/Ellipse';
import Image from 'next/image';
import social from '@/asstes/images/social.png'
import blog from '@/asstes/images/blog.png'
import email from '@/asstes/images/email.png'
import video from '@/asstes/images/video.png'
import website from '@/asstes/images/website.png'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import reseller from '../../../public/images/reseller.png'
import Button from '../UI/Button/Button';


const services = [
    {
        "category": "Graphic Design",
        "service": "Graphic Posts",
        "description": "Graphic content tailored for social media platforms.",
        "image": "https://res.cloudinary.com/dmnizbwcl/image/upload/v1731647479/Image_rik7iw.png",
        "name": 'Website design',
        "icon": website,
        "basePrice": "$99",
        "options": [
            { "service": "10 posts", "price": "$99" },
            { "service": "20 posts", "price": "$189" },
            { "service": "30 posts", "price": "$279" }
        ]
    },
    {
        "category": "Video Production",
        "service": "Reels/TikToks/Shorts",
        "image": "https://res.cloudinary.com/dmnizbwcl/image/upload/v1731647479/Image_rik7iw.png",
        "description": "Engaging short videos for social media.",
        "name": 'Short form video',
        "icon": video,
        "basePrice": "$99",
        "options": [
            { "service": "5 videos", "price": "$99" },
            { "service": "10 videos", "price": "$189" },
            { "service": "15 videos", "price": "$279" }
        ]
    },
    {
        "category": "Social Media Marketing",
        "service": "Instagram Organic Engagement",
        "description": "Boost your Instagram interaction organically.",
        "image": "https://res.cloudinary.com/dmnizbwcl/image/upload/v1731647479/Image_rik7iw.png",
        "name": 'Social media post',
        "icon": social,
        "basePrice": "$99",
        "options": [
            { "service": "Organic Engagement", "price": "$99" },
            { "service": "Organic Followers Growth & Engagement", "price": "$199" }
        ]
    },
    {
        "category": "Email Marketing",
        "service": "Email Design",
        "image": "https://res.cloudinary.com/dmnizbwcl/image/upload/v1731647479/Image_rik7iw.png",
        "description": "Custom emails for your campaigns & flows. Works with any email platform.",
        "name": 'Email design',
        "icon": email,
        "basePrice": "$149",
        "options": [
            { "service": "2 emails", "price": "$149/mo" },
            { "service": "4 emails", "price": "$289/mo" },
            { "service": "8 emails", "price": "$549/mo" }
        ]
    },
    {
        "category": "SEO",
        "service": "Blog Post",
        "name": 'Blog post',
        "icon": blog,
        "image": "https://res.cloudinary.com/dmnizbwcl/image/upload/v1731647479/Image_rik7iw.png",
        "description": "Fully SEO-optimized blog posts for your website.",
        "basePrice": "$49",
        "options": [
            { "service": "500 words", "price": "$49/mo" },
            { "service": "1000 words", "price": "$79/mo" },
            { "service": "1500 words", "price": "$99/mo" }
        ]
    }
]



const Service = () => {
    return (
        <section className='relative py-14 overflow-hidden'>
            <Ellipse className='absolute left-[18%] -top-4' width={250}></Ellipse>
            <h1 className='text-5xl text-center poppins-bold'>All-Inclusive <span className='text-primary'>Creative Services</span></h1>
            <p className='w-1/2 text-center mx-auto my-5'>Our fixed monthly rate covers all your creative needs, with predictable pricing, no contracts, and unlimited revisions. Explore our services to find the perfect solution for your brand’s growth!</p>
            <div className='pl-28 my-10'>
                <Swiper
                    slidesPerView={3.4}
                    spaceBetween={0}
                    centeredSlides={false}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        services.map((e, idx) =>
                            <SwiperSlide key={idx} className=''>
                                <div className='px-6 py-4 bg-white relative w-[350px] h-[580px] flex flex-col rounded-2xl space-y-3'>
                                    <Image width={350} height={225} src={e.image} alt='h'></Image>
                                    <div className='my-2 bg-[#E0E0E0] flex gap-2 px-3 py-2 w-fit rounded-lg'>
                                        <Image width={20} alt='h' src={e.icon}></Image>
                                        <h2 className=''>{e.name}</h2>
                                    </div>
                                    <h1 className='text-2xl poppins-semibold'>{e.category}</h1>
                                    <div className='flex-1'>
                                        <p className=''>{e.description}</p>
                                    </div>
                                    <h1 className='text-2xl  poppins-semibold'>{e.basePrice}</h1>
                                    <p className=''>Pricing Plan</p>
                                    <select name="" className='border-2 rounded-xl w-full px-4 py-3' id="">
                                        {
                                            e.options.map((e, idx) =>
                                                <option key={idx} className=''>{e.service} {e.price}</option>
                                            )
                                        }
                                    </select>
                                    <Button content='Get start now'></Button>
                                </div>
                            </SwiperSlide>)
                    }
                </Swiper>
            </div>
            <div className='py-12 rounded-2xl px-6 mx-28 my-20 relative z-50 bg-white flex justify-between'>
                <div className='flex relative gap-12'>
                    <Image width={50} height={50} className='my-auto' src={reseller} alt='reseller'></Image>
                    <div className='relative z-50'>
                        <h1 className='text-[28px] poppins-semibold'>Interested in offering our services to your clients?</h1>
                        <p className='text-lg'>Apply to join the Feedbird Reseller Program and expand your business with ease !</p>
                    </div>
                </div>
                <button className='bg-black text-white rounded-2xl px-5 my-auto py-1'>Lets become a reseller</button>
            </div>
            <Ellipse className='absolute -left-10 -bottom-20' width={600}></Ellipse>
        </section>
    );
};

export default Service;