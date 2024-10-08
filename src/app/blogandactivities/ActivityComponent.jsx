import Image from "next/image";
import Link from 'next/link';
import { PrismicNextImage } from '@prismicio/next';

const ActivityComponent = ({ image, title, description, index }) => {
    return (
      <article key={'activity-' + index} className="flex flex-col md:flex-row items-center md:items-start justify-between bg-gray-300 py-6 md:py-12 px-4 md:px-8 flex-shrink-0 flex-grow-0 w-full h-screen shadow-lg">
      {/* Left side - Image */}
      <div className="w-full md:w-2/3 flex items-center justify-center md:h-full">
        <div className="md:w-[70%] md:h-[500px] w-[90%] mt-16 flex items-center overflow-hidden rounded-lg slide-in-left">
          <PrismicNextImage
            field={image}
            className="object-cover rounded-lg hover:scale-105 transition-transform duration-500 ease-in-out"
          />
        </div>
      </div>

      {/* Right side - Text content */}
      <div className="w-full md:w-1/3 flex flex-col items-center md:items-start justify-center h-full text-center md:text-left space-y-4 md:space-y-6">
            <Link href='/blogandactivities' className="text-main1 font-bold hover:text-white transition-colors duration-300 mb-4 border-2 border-main1 rounded-full w-fit px-3 py-1">
              Contact Us
            </Link>
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-main1 tracking-wide slide-in-bottom">
          {title}
        </h2>

        {/* Paragraph */}
        <p className="text-gray-700 leading-relaxed max-w-md">
          {description}
        </p>
      </div>
    </article>

    );
  };

  export default ActivityComponent;
  
