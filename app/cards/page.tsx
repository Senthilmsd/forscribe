import React from 'react';
import Image from 'next/image';
// import flatfile from '../Assets/flatfile.png'

interface CardProps {
  image: string;   
  title: string;
  subtitle: string;
  description?: string;
}

const Card: React.FC<CardProps> = ({ image, title, subtitle}) => {
  return (
    <div className="rounded-xl shadow-md overflow-hidden bg-white hover:shadow-lg transition h-96 w-74 z-20 hover:-translate-y-2 hover:bg-violet-100">
      <div className="flex flex-col items-center p-5 ">
        <Image src={image} alt={title} width={200} height={300} className="object-contain mb-4 rounded-2xl" />
        <h3 className="text-lg font-semibold mt-20">{title}</h3>
        <p className="text-gray-500 text-sm mb-2">{subtitle}</p>
      </div>
    </div>
  );
};

export default Card;
