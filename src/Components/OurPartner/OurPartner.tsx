'use client'
import React, { useState } from 'react';
import success from '@/asstes/images/social-success.png';
import Image from 'next/image';
import { FaStar } from "react-icons/fa";
import reviewVideo from '@/asstes/videos/reviewVideo.mp4'
import quotations from '@/asstes/images/quotations 1.png'
import { FaPlay } from "react-icons/fa";
const OurPartner = () => {
    const [condition, setCondition] = useState<boolean>(false);

    const testimonials = [
        {
            name: "Andrei Kasyanau",
            position: "CEO at Glorium Technologies",
            rating: 4.8,
            testimonial: "Our smart developers build innovative, efficient, and high-performance solutions. Efficient, and high-performance solutions."
        },
        {
            name: "Andrei Kasyanau",
            position: "CEO at Glorium Technologies",
            rating: 4.8,
            testimonial: "Our smart developers build innovative, efficient, and high-performance solutions. Efficient, and high-performance solutions."
        }
    ];

    return (
        <section className='py-20 px-28'>
            <h1 className='text-5xl poppins-bold w-fit mx-auto flex gap-5'>Client Stories See <Image className='my-auto' width={160} src={success} alt='page' /> What </h1>
            <h1 className='text-5xl poppins-bold text-center text-primary'>Our Partners Say</h1>
            <div className='flex gap-9 my-10'>
                <div className='relative w-fit'>
                    <video className='border-2 h-80 w-60 object-cover rounded-xl' controls={condition} autoPlay={condition}>
                        <source src={reviewVideo} type="video/mp4" />
                    </video>
                    <button onClick={() => setCondition(true)} hidden={condition} className='backdrop-blur-3xl text-4xl p-8 rounded-full text-white absolute left-1/4 top-[35%]'><FaPlay /></button>
                </div>
                <div className='relative w-fit'>
                    <video className='border-2 h-80 w-60 object-cover rounded-xl' controls={condition} autoPlay={condition}>
                        <source src={reviewVideo} type="video/mp4" />
                    </video>
                    <button onClick={() => setCondition(true)} hidden={condition} className='backdrop-blur-3xl text-4xl p-8 rounded-full text-white absolute left-1/4 top-[35%]'><FaPlay /></button>
                </div>
                <div className='relative w-fit'>
                    <video className='border-2 h-80 w-60 object-cover rounded-xl' controls={condition} autoPlay={condition}>
                        <source src={reviewVideo} type="video/mp4" />
                    </video>
                    <button onClick={() => setCondition(true)} hidden={condition} className='backdrop-blur-3xl text-4xl p-8 rounded-full text-white absolute left-1/4 top-[35%]'><FaPlay /></button>
                </div>
                <div className='relative w-fit'>
                    <video className='border-2 h-80 w-60 object-cover rounded-xl' controls={condition} autoPlay={condition}>
                        <source src={reviewVideo} type="video/mp4" />
                    </video>
                    <button onClick={() => setCondition(true)} hidden={condition} className='backdrop-blur-3xl text-4xl p-8 rounded-full text-white absolute left-1/4 top-[35%]'><FaPlay /></button>
                </div>
                <div className='relative w-fit'>
                    <video className='border-2 h-80 w-60 object-cover rounded-xl' controls={condition} autoPlay={condition}>
                        <source src={reviewVideo} type="video/mp4" />
                    </video>
                    <button onClick={() => setCondition(true)} hidden={condition} className='backdrop-blur-3xl text-4xl p-8 rounded-full text-white absolute left-1/4 top-[35%]'><FaPlay /></button>
                </div>
            </div>

            {/* {
                reviewVideo && <ReactPlayer width={"200px"} light={true} controls={true}  url={reviewVideo ? reviewVideo : ""} />
            } */}
            <div className='flex justify-between my-5'>
                <div className='py-6 bg-white px-9 w-[585px] rounded-2xl'>
                    <div className='flex  justify-between '>
                        <div id='commentnavbarpart1' className='flex gap-3'>
                            <div id='commentnavbarimage' className='relative w-fit'>
                                <Image width={50} height={30} className='rounded-full relative z-50' src={'https://res.cloudinary.com/dmnizbwcl/image/upload/v1731474251/images_gaa5te.jpg'} alt='mahmud'></Image>
                                <div className='border  bottom-0 border-dashed p-2 border-[#DF5929] right-0  rounded-full w-14 h-14 absolute'></div>
                            </div>
                            <div id='commentnavbarname'>
                                <div className='relative '>
                                    <h1 className='poppins-semibold'>{testimonials[0].name}</h1>
                                    <p>{testimonials[0].position}</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <FaStar className='text-xl my-auto' />
                            <h1 className='text-lg text-gray-700 my-auto'>({testimonials[0].rating})</h1>
                        </div>
                    </div>
                    <div>
                        <Image src={quotations} alt='quotations' width={30}></Image>
                        <h1>{testimonials[0].testimonial}</h1>
                        <Image src={quotations} alt='quotations' className='rotate-180 relative  ml-auto' width={30}></Image>
                    </div>
                </div>
                <div className='py-6 bg-white px-9 w-[585px] rounded-2xl'>
                    <div className='flex  justify-between '>
                        <div id='commentnavbarpart1' className='flex gap-3'>
                            <div id='commentnavbarimage' className='relative w-fit'>
                                <Image width={50} height={30} className='rounded-full relative z-50' src={'https://res.cloudinary.com/dmnizbwcl/image/upload/v1731474251/images_gaa5te.jpg'} alt='mahmud'></Image>
                                <div className='border  bottom-0 border-dashed p-2 border-[#DF5929] right-0  rounded-full w-14 h-14 absolute'></div>
                            </div>
                            <div id='commentnavbarname'>
                                <div className='relative '>
                                    <h1 className='poppins-semibold'>{testimonials[0].name}</h1>
                                    <p>{testimonials[0].position}</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <FaStar className='text-xl my-auto' />
                            <h1 className='text-lg text-gray-700 my-auto'>({testimonials[0].rating})</h1>
                        </div>
                    </div>
                    <div>
                        <Image src={quotations} alt='quotations' width={30}></Image>
                        <h1>{testimonials[0].testimonial}</h1>
                        <Image src={quotations} alt='quotations' className='rotate-180 relative  ml-auto' width={30}></Image>
                    </div>
                </div>
            </div>
            <div className='flex justify-between'>
                <div className='py-6 bg-white px-9 w-96 rounded-2xl'>
                    <div className='flex  justify-between '>
                        <div id='commentnavbarpart1' className='flex gap-3'>
                            <div id='commentnavbarimage' className='relative h-fit w-fit'>
                                <Image width={50} height={30} className='rounded-full relative z-50' src={'https://res.cloudinary.com/dmnizbwcl/image/upload/v1731474251/images_gaa5te.jpg'} alt='mahmud'></Image>
                                <div className='border  bottom-0 border-dashed p-2 border-[#DF5929] right-0  rounded-full w-14 h-14 absolute'></div>
                            </div>
                            <div id='commentnavbarname'>
                                <div className='relative '>
                                    <h1 className='poppins-semibold'>{testimonials[0].name}</h1>
                                    <p>{testimonials[0].position}</p>
                                    <div className='flex gap-2'>
                                        <FaStar className='text-xl my-auto' />
                                        <h1 className='text-lg text-gray-700 my-auto'>({testimonials[0].rating})</h1>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div>
                        <Image src={quotations} alt='quotations' width={30}></Image>
                        <h1>{testimonials[0].testimonial}</h1>
                        <Image src={quotations} alt='quotations' className='rotate-180 relative  ml-auto' width={30}></Image>
                    </div>
                </div>
                <div className='py-6 bg-white px-9 w-96 rounded-2xl'>
                    <div className='flex  justify-between '>
                        <div id='commentnavbarpart1' className='flex gap-3'>
                            <div id='commentnavbarimage' className='relative h-fit w-fit'>
                                <Image width={50} height={30} className='rounded-full relative z-50' src={'https://res.cloudinary.com/dmnizbwcl/image/upload/v1731474251/images_gaa5te.jpg'} alt='mahmud'></Image>
                                <div className='border  bottom-0 border-dashed p-2 border-[#DF5929] right-0  rounded-full w-14 h-14 absolute'></div>
                            </div>
                            <div id='commentnavbarname'>
                                <div className='relative '>
                                    <h1 className='poppins-semibold'>{testimonials[0].name}</h1>
                                    <p>{testimonials[0].position}</p>
                                    <div className='flex gap-2'>
                                        <FaStar className='text-xl my-auto' />
                                        <h1 className='text-lg text-gray-700 my-auto'>({testimonials[0].rating})</h1>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div>
                        <Image src={quotations} alt='quotations' width={30}></Image>
                        <h1>{testimonials[0].testimonial}</h1>
                        <Image src={quotations} alt='quotations' className='rotate-180 relative  ml-auto' width={30}></Image>
                    </div>
                </div>
                <div className='py-6 bg-white px-9 w-96 rounded-2xl'>
                    <div className='flex  justify-between '>
                        <div id='commentnavbarpart1' className='flex gap-3'>
                            <div id='commentnavbarimage' className='relative h-fit w-fit'>
                                <Image width={50} height={30} className='rounded-full relative z-50' src={'https://res.cloudinary.com/dmnizbwcl/image/upload/v1731474251/images_gaa5te.jpg'} alt='mahmud'></Image>
                                <div className='border  bottom-0 border-dashed p-2 border-[#DF5929] right-0  rounded-full w-14 h-14 absolute'></div>
                            </div>
                            <div id='commentnavbarname'>
                                <div className='relative '>
                                    <h1 className='poppins-semibold'>{testimonials[0].name}</h1>
                                    <p>{testimonials[0].position}</p>
                                    <div className='flex gap-2'>
                                        <FaStar className='text-xl my-auto' />
                                        <h1 className='text-lg text-gray-700 my-auto'>({testimonials[0].rating})</h1>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div>
                        <Image src={quotations} alt='quotations' width={30}></Image>
                        <h1>{testimonials[0].testimonial}</h1>
                        <Image src={quotations} alt='quotations' className='rotate-180 relative  ml-auto' width={30}></Image>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurPartner;