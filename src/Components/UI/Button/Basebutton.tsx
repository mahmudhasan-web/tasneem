import Image, { StaticImageData } from 'next/image';
import React from 'react';

const Basebutton = ({ content, borderColor, image }: { content: string, borderColor?: boolean, image?: StaticImageData }) => {
    return <button className={borderColor == true ? `rounded-[24px] px-7 py-2 border border-[#A657E7] text-[#A657E7]` : `rounded-[24px] border px-7 py-2 text-black border-gray-400 `}>{image && (<Image src={image} width={20} alt='image' />)}{content}</button>
};

export default Basebutton;