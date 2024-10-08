// components/HeroSection.js
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowUpRight } from "react-icons/bs";
import { FaBed, FaHiking, FaUtensils } from 'react-icons/fa';
import {GiJourney} from 'react-icons/gi'

const ServicesHeroSection = () => {
  return (
    <section className="relative h-[75vh] bg-gray-900 text-white flex items-center sm:m-4 sm:rounded-md justify-around flex-col md:flex-row overflow-x-hidden">
      {/* Background image */}
      <div className="absolute inset-0 rounded-md">
        <Image
          src="/images/bg-1.jpg" // Use the path to your image in the public folder
          alt="Travel Adventure in Zimbabwe"
          layout="fill"
          objectFit="cover"
          className="opacity-100 sm:rounded-md" // Adjust opacity for the image
        />
      </div>

      {/* Overlay content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center w-[400px] bg-white bg-opacity-5 backdrop-blur-md p-4 rounded-md flex-grow-0 hero-div">
        <span className="bg-white rounded-full p-2 bg-opacity-20 block my-4 w-fit self-start hero-text-1">Welcome to our serivices</span>
        <h1 className='text-4xl font-semibold mb-4 hero-text-2'>Explore The World</h1>
        <p className="text-lg mb-6 punchline">Live the trips exploring the world,discover paradises, mountains, waterfalls, animals and maybe your soulmate</p>
        <Link href="/contact" className="px-6 py-3 bg-white text-black font-semibold rounded-full self-start block hover:bg-opacity-80 active:scale-95" id='call-btn-1'>
          Start Your Journey<BsArrowUpRight className="inline-block"/>
        </Link>
      </div>

      {/* container for links to the services */}
      <article className="z-10 relative flex flex-col gap-2">
        <Link href='#Accommodation' className='bg-white bg-opacity-10 text-white p-2 block text-2xl rounded-md font-semibold backdrop-blur-md hover:bg-opacity-20 hero-text-3'><FaBed className='text-xl inline-block'/> <span>Accomodation</span></Link>
        <Link href='#Tours & Transfers' className='bg-white bg-opacity-10 text-white p-2 block text-2xl rounded-md font-semibold backdrop-blur-md hover:bg-opacity-20 hero-text-4'><GiJourney className='text-xl inline-block'/> <span>Tours & Transfers</span></Link>
        <Link href='#Tours & activities' className='bg-white bg-opacity-10 text-white p-2 block text-2xl rounded-md font-semibold backdrop-blur-md hover:bg-opacity-20 hero-text-5'><FaHiking className='text-xl inline-block'/> <span>Tours & Activities</span></Link>
        <Link href='#Restaurants & cuisine' className='bg-white bg-opacity-10 text-white p-2 block text-2xl rounded-md font-semibold backdrop-blur-md hover:bg-opacity-20 hero-text-6'><FaUtensils className='text-xl inline-block'/> <span>Restaurants & Cuisine</span></Link>
      </article>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-30 z-0 sm:rounded-md"></div>
    </section>
  );
};

export default ServicesHeroSection;
