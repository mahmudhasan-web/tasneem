'use client'
import React, { useState } from 'react';
import plus from '@/asstes/images/plus-circle.png'
import minus from '@/asstes/images/minus-circle.png'
import Image, { StaticImageData } from 'next/image';

const Collapse = ({ title, children }: { title: string, children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [icon, seticon] = useState<StaticImageData>(plus);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
        if (icon == plus) {
            seticon(minus)
        }
        else {
            seticon(plus)
        }
    };

    return (
        <div className="mb-4 bg-white rounded-xl">
            <div
                className="p-4 rounded-lg flex justify-between cursor-pointer"
                onClick={toggleCollapse}
            >
                <h2 className="text-xl font-semibold">{title}</h2>
                <Image width={30} height={10} src={icon} alt='icon'></Image>
            </div>
            {isOpen && (
                <div className=" p-4 mt-2 rounded-lg">
                    {children}
                </div>
            )}
        </div>
    );
};

const FreqentlyQus = () => {
    return (
        <section className='py-16 px-28'>
            <h1 className='text-5xl text-center my-5 font-bold'>Frequently asked <span className='text-primary'>questions</span></h1>
            <p className='text-lg text-center my-5'>If you have any questions that aren&#39;t listed below, feel free to schedule a demo to speak with someone from our team.</p>
            <div className="space-y-4">
                <Collapse title=" What cars do you have in your inventory?">
                    <p>
                        A dog is a type of domesticated animal. Known for its loyalty and faithfulness,
                        it can be found as a welcome guest in many households across the world.
                    </p>
                </Collapse>
                <Collapse title=" What cars do you have in your inventory?">
                    <p>
                        Cats purr for various reasons, including to express contentment, communicate with their owners,
                        or as a form of self-healing.
                    </p>
                </Collapse>
                <Collapse title="What cars do you have in your inventory?">
                    <p>
                        Birds can fly because they have strong wings, lightweight bones, and specialized muscles
                        that help them generate lift and thrust.
                    </p>
                </Collapse>
                <Collapse title="What cars do you have in your inventory?">
                    <p>
                        Birds can fly because they have strong wings, lightweight bones, and specialized muscles
                        that help them generate lift and thrust.
                    </p>
                </Collapse>
                <Collapse title="What cars do you have in your inventory?">
                    <p>
                        Birds can fly because they have strong wings, lightweight bones, and specialized muscles
                        that help them generate lift and thrust.
                    </p>
                </Collapse>
            </div>
        </section>
    );
};

export default FreqentlyQus;
