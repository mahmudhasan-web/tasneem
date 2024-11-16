import React from 'react';
import WorkingWithBusiness from '../common/WorkingWithBusiness/WorkingWithBusiness';
import provide from '@/asstes/images/provide.png'
import warning from '@/asstes/images/warning.png'
import right from '@/asstes/images/right.png'
import close from '@/asstes/images/close.png'
import Image from 'next/image';

const WhyChoice = () => {
    return (
        <section className='bg-white py-20 px-28 '>
            <div className='bg-gray-100 w-fit px-4 py-1 rounded-xl my-2'>
                <WorkingWithBusiness></WorkingWithBusiness>
            </div>
            <h1 className='text-5xl font-bold'>Why Choose <span className='text-primary'>RAAYA SOCIAL</span></h1>
            <div className='mt-12 flex justify-center gap-8'>
                <div id='provide' className='px-7 py-2 w-1/2 border-2 rounded-xl'>
                    <div className='flex gap-2 my-6'>
                        <Image width={40} src={provide} alt='provide' />
                        <h1 className='text-2xl my-auto'>What We provide ?</h1>
                    </div>
                    <div className='space-y-2'>
                        <div id='provide_content' className='flex gap-3'>
                            <Image width={20} src={right} className='mb-auto mt-1' alt='right' />
                            <div>
                                <h1 className='text-lg'>Low-cost, high quality</h1>
                                <p>Most agencies charge way too much. We are a lean team with streamlined workflows and a platform built from the ground up that allows us to charge much less.</p>
                            </div>
                        </div>
                        <div id='provide_content' className='flex gap-3'>
                            <Image width={20} src={right} className='mb-auto mt-1' alt='right' />
                            <div>
                                <h1 className='text-lg'>Full transparency</h1>
                                <p>Most agencies charge way too much. We are a lean team with streamlined workflows and a platform built from the ground up that allows us to charge much less.</p>
                            </div>
                        </div>
                        <div id='provide_content' className='flex gap-3'>
                            <Image width={20} src={right} className='mb-auto mt-1' alt='right' />
                            <div>
                                <h1 className='text-lg'>Cancel anytime</h1>
                                <p>Most agencies charge way too much. We are a lean team with streamlined workflows and a platform built from the ground up that allows us to charge much less.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='warning' className='px-7 py-2 w-1/2 border-2 rounded-xl'>
                    <div className='flex gap-2 my-6'>
                        <Image width={40} src={warning} alt='provide' />
                        <h1 className='text-2xl my-auto'>Another are not !</h1>
                    </div>
                    <div className='space-y-2'>
                        <div id='provide_content' className='flex gap-3'>
                            <Image width={20} src={close} className='mb-auto mt-1' alt='close' />
                            <div>
                                <h1 className='text-lg'>Low-cost, high quality</h1>
                                <p>Most agencies charge way too much. We are a lean team with streamlined workflows and a platform built from the ground up that allows us to charge much less.</p>
                            </div>
                        </div>
                        <div id='provide_content' className='flex gap-3'>
                            <Image width={20} src={close} className='mb-auto mt-1' alt='close' />
                            <div>
                                <h1 className='text-lg'>Full transparency</h1>
                                <p>Most agencies charge way too much. We are a lean team with streamlined workflows and a platform built from the ground up that allows us to charge much less.</p>
                            </div>
                        </div>
                        <div id='provide_content' className='flex gap-3'>
                            <Image width={20} src={close} className='mb-auto mt-1' alt='close' />
                            <div>
                                <h1 className='text-lg'>Cancel anytime</h1>
                                <p>Most agencies charge way too much. We are a lean team with streamlined workflows and a platform built from the ground up that allows us to charge much less.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChoice;