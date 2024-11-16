'use client'
import Image from 'next/image';
import React from 'react';

import logo from '../../../../public/images/raaya_logo.png'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Basebutton from '@/Components/UI/Button/Basebutton';

const NavBar = () => {

    const path = usePathname()


    const navigation = [
        { label: 'Home', route: '/' },
        { label: 'Services', route: '/services' },
        { label: 'Portfolio', route: '/portfolio' },
        { label: 'Reviews', route: '/reviews' },
        { label: 'Pricing', route: '/pricing' },
        { label: 'White level', route: '/white-level' }
    ];


    return (
        <section className='py-4 '>
            <div className='container px-28 flex justify-between'>
                <div id="image">
                    <Image height={80} width={85} src={logo} alt='logo_image'></Image>
                </div>
                <div id='routes' className='flex gap-8 my-auto'>
                    {
                        navigation.map((item, index) => {
                            return <Link key={index} className={path == item.route ? "poppins-semibold text-lg" : "text-lg"} href={item.route}>{item.label}</Link>
                        })
                    }
                </div>
                <div className='space-x-3 my-auto'>
                    <Basebutton content='Log in' ></Basebutton>
                    <Basebutton content='Book a demo' borderColor={true}></Basebutton>
                </div>
            </div>
        </section>
    );
};

export default NavBar;