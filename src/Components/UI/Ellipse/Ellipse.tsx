import Image from 'next/image';
import React from 'react';
import image  from '../../../../public/images/Ellipse 11.png'

const Ellipse = ({ className, width }: { className: string, width: number }) => {
    return (
        <div className={className}>
            <Image width={width} className='' src={image} alt='Ellipse'></Image>
        </div>
    );
};

export default Ellipse;