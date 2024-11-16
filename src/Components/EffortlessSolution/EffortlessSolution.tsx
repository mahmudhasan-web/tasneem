'use client'
import React, { useState } from 'react';
import service from '@/asstes/images/service.png'
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import demo_reel from '@/asstes/videos/Demo Reel.mp4'
import Ellipse from '../UI/Ellipse/Ellipse';

const EffortlessSolution = () => {

    // const [service, setService] = useState<object>({});

    const [buttonID, setButtonID] = useState<number>(1);

    const buttons = [
        { label: 'Services', route: '/services' },
        { label: 'Onboarding', route: '/onboarding' },
        { label: 'Communication', route: '/communication' },
        { label: 'Collaboration', route: '/collaboration' },
        { label: 'Scheduling', route: '/scheduling' },
        { label: 'Analytics', route: '/analytics' }
    ]

    interface Solutions {
        title: string,
        description: string,
        image: string | StaticImport,
    }

    const solutions: Solutions[] = [
        {
            title: 'Services',
            description: 'Explore the wide range of services we offer to help you achieve your goals.',
            image: service
        },
        {
            title: 'Onboarding',
            description: 'Seamless onboarding experience to get you started quickly and efficiently.',
            image: service
        },
        {
            title: 'Communication',
            description: 'Stay connected with powerful communication tools designed for collaboration.',
            image: service
        },
        {
            title: 'Collaboration',
            description: 'Enhance teamwork with our advanced collaboration features.',
            image: service
        },
        {
            title: 'Scheduling',
            description: 'Simplify scheduling and manage your time with ease.',
            image: service
        },
        {
            title: 'Analytics',
            description: 'Gain insights and make data-driven decisions with robust analytics.',
            image: service
        }
    ]

    const [solution, setSolution] = useState<Solutions>(solutions[0]);


    const handleService = (id: number, label: string) => {
        const data = solutions.find(e => e.title === label);
        if (data) {
            setSolution(data)
            setButtonID(id)
        }
    }


    return (
        <section className='px-28 py-20 relative'>
            <div className='bg-white py-12 rounded-[48px] z-50 relative'>
            <h1 className='text-5xl text-center poppins-bold '>Watch video demo <span className='text-primary'>RAAYA SOCIAL</span></h1>
            <video width={1100} className='mx-auto rounded-2xl mt-8' controls>
                <source src={demo_reel} type="video/mp4" />
            </video>
            </div>
            <Ellipse className='absolute right-24 top-[45%]' width={500}></Ellipse>
            <h1 className='text-5xl text-center poppins-bold mt-24'>Effortless, Scalable <span className='text-primary'>Creative Solutions</span></h1>
            <p className='text-center text-lg my-7 w-9/12 mx-auto'>RAAYA SOCIAL offers a flexible, subscription-based service powered by smart technology to deliver high-quality creative work at scale. Enjoy consistent, engaging content crafted to elevate your brand.</p>
            <hr className='w-full bg-#D0D5DD border' />
            <div className='flex justify-between mt-7'>
                {
                    buttons.map((e, idx) =>
                        <div key={idx} onClick={() => handleService(idx + 1, e?.label)} className={buttonID == idx + 1 ? "border-2 rounded-xl flex py-2 px-8 gap-3 w-fit border-[#B564F7] text-[#B564F7]" : "border-2 cursor-pointer border-[#98A2B3] rounded-xl flex py-2 px-8 gap-3 w-fit"}>
                            <button className='text-lg'>{e.label}</button></div>
                    )}
            </div>
            <div className='bg-white py-7 px-28 mt-12 flex rounded-3xl justify-between'>
                <div className='w-1/2 my-auto'>
                    <h1 className='text-3xl poppins-semibold'>{solution?.title}</h1>
                    <p className='text-lg mt-5'>{solution?.description}</p>
                </div>
                <div>
                    <Image width={400} src={solution?.image || ""} alt={`${solution?.title}`}></Image>
                </div>
            </div>
        </section>
    );
};

export default EffortlessSolution;