'use clieny'
import React from 'react';
import './Button.css'

const Button = ({ content }: { content: string }) => {
    return <button id='button' className='rounded-[24px] px-7 py-2 w-fit text-white'>{content}</button>
};

export default Button;