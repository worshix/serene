import HeroSection from "@/components/HeroSection";
import Image from 'next/image';
import { BsArrowUpRight } from 'react-icons/bs';
import Link from "next/link";
import HomeService from "@/components/HomeService";
import services from "@/content/services";
import TestimonialsSection from "@/components/Testimonials";
import BlogSection from "@/components/BlogSection";
import { BsEnvelope } from "react-icons/bs";
import ActivitiesSection from "@/components/LandingGallery";
import dynamic from "next/dynamic";
import { createClient } from "@/prismicio";
import { revalidateTag } from "next/cache";

export const metadata = {
  title: 'Serene Safaris | Explore Victoria Falls - Home Page',
  description: 'Serene Safaris offers tailored holiday packages, luxury accommodations, and thrilling adventures in the heart of Victoria Falls, Zimbabwe. Your gateway to a serene and unforgettable vacation.',
  keywords: ['Victoria Falls tours', 'Zimbabwe safari', 'adventure holidays', 'luxury accommodations', 'Victoria Falls activities', 'Serene Safaris', 'holiday packages'],
  url: 'https://www.serenesafaris.co.zw/',
  canonical: 'https://www.serenesafaris.co.zw/',
  openGraph: {
    title: 'Serene Safaris | Explore Victoria Falls - Home Page',
    description: 'Discover tailored travel experiences with Serene Safaris. From thrilling adventures to luxury stays, explore the best of Victoria Falls with us.',
    url: 'https://www.serenesafaris.co.zw/',
    siteName: 'Serene Safaris',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Serene Safaris | Explore Victoria Falls - Home Page',
    description: 'Tailored holiday packages, tours, and luxury accommodations in Victoria Falls, Zimbabwe. Experience adventure with Serene Safaris.',
  },
};

const BasicAnimations = dynamic(() => import('./../components/BasicAnimations'), { ssr: false });

const heroRatings = [
  {
    number:'500',
    text:'Satisfied clients',
  },
  {
    number:'3000',
    text:'Hours of experience',
  },
  {
    number:'20',
    text:'Activities',
  }
]

const ContactUsBtn = () => (<Link href="/contact" className="px-6 py-3 bg-main1 text-white font-semibold rounded-full self-start block hover:bg-opacity-80 transition ease-linear duration-200 active:scale-95 w-fit my-4">
Contact Us <BsArrowUpRight className="inline-block"/>
</Link>)

export default async function Home() {
  const client = createClient();
  const blogs = await client.getAllByType("blog");
  const activity_images = await client.getAllByType("activity_image", {limit: 4});
  const testimonials = await client.getAllByType("testimonials");
  revalidateTag("prismic");

  return (
    <main className="overflow-x-hidden">
      <div className="h-screen">
      <HeroSection />
      <section className="bg-white flex gap-4 p-2 justify-center">
        {heroRatings.map((item, index)=> (
          <div key={`hero-rating-${index}`} className="sm:w-[200px] text-center">
            <h2 className="font-bold sm:text-3xl text-lg">{item.number}+</h2>
            <p className="font-light text-xs sm:text-lg">{item.text}</p>
          </div>
        ))}
      </section>
      </div>

      {/* about section */}
    <section className="flex flex-col md:flex-row items-center md:items-start justify-between px-8 bg-white py-2">
      {/* Left side - Image */}
      <div className="w-full md:w-1/2 flex items-center justify-center slide-in-left">
        <Image
          src="/images/zebras.jpg" // Replace with your image path
          alt="Serene Destination"
          width={350}
          height={500}
          className="object-cover rounded-lg shadow-lg block"
        />
      </div>

      {/* Right side - Text content */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-12">
        {/* Small link to about page */}
        <Link href="/contact" className="text-black font-semibold text-xl hover:text-main2 mb-4 block border rounded-full w-fit px-3 py-1">
          <h2>
            About
          </h2>
        </Link>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 slide-in-bottom">
          Want to explore your wildest dreams with the best affordable adventure holiday packages?
        </h2>

        {/* Paragraph */}
        <p className="text-gray-600 mb-6 slide-in-right">
          Serene Safaris is an exceptional travel agent in Victoria Falls dedicated in organizing the best suitable holiday packages. We have the most serene destinations.
          We strive to provide a memorable experience of a lifetime and a chance to discover your dream destination in Zimbabwe. We offer:
        </p>

        {/* Values list */}
        <ul className="space-y-3">
          {[
            "Exceptional Customer Service",
            "Affordable Adventure Packages",
            "Tailor-Made Travel Experiences",
            "Local Expertise and Knowledge",
            "Commitment to Sustainable Tourism",
          ].map((value, index) => (
            <li key={index} className="flex items-center slide-in-right">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-main1 text-white mr-3">
                <BsArrowUpRight />
              </div>
              <span>{value}</span>
            </li>
          ))}
        </ul>
          <Link href="tel:+263772563395" className="px-6 py-3 bg-main1 text-white font-semibold rounded-full self-start block hover:bg-opacity-80 transition ease-linear duration-200 active:scale-95 w-fit my-4">
            Call Us <BsArrowUpRight className="inline-block"/>
          </Link>
        </div>
    </section>

    {/* Services Summary */}
    <section className="bg-main1 text-white py-12 px-8">
        {/* Container for flex layout */}
        <div className="flex flex-col md:flex-row justify-between items-start">
          
          {/* Left Side - Title, Link, and Paragraph */}
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <Link href="/services" className="text-wite font-semibold text-xl hover:text-main2 mb-4 block border rounded-full w-fit px-3 py-1">
              <h2>
                Services
              </h2>
            </Link>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-main2 slide-in-left">
              Blow off some steam with our services
            </h2>
            <p className="text-lg mb-6 slide-in-left">
              Here is a summary of our services
            </p>
            <Link href="/contact" className="px-6 py-3 bg-white text-black font-semibold rounded-full self-start block hover:bg-opacity-80 transition ease-linear duration-200 active:scale-95 w-fit my-4 slide-in-bottom">
              Contact Us <BsArrowUpRight className="inline-block"/>
            </Link>
            <div>
              <Image
                src='/images/pool.jpg'
                objectFit='cover'
                width={500}
                height={500}
              />
            </div>
          </div>
          
          {/* Right Side - Services List */}
          <div className="w-full md:w-1/2 flex flex-col gap-2">
            {services.map((item, index)=> <HomeService key={'service'+index} {...item}/>)}
          </div>
        </div>
      </section>

      {/* Activities */}
          <h1 className='text-3xl md:text-4xl font-bold text-center my-8'>Activities</h1>
          <ActivitiesSection activities={activity_images}/>
      {/* Testimonials */}
          <TestimonialsSection testimonials={testimonials}/>
          {/* CTA */}
          <section className="relative h-[75vh] bg-gray-900 text-white flex items-center sm:m-4 sm:rounded-md">
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
      <div className="relative z-10 flex flex-col items-center text-center p-4 rounded-md sm:ml-8 md:ml-16 justify-center w-full">
        <h2 className={`text-5xl font-semibold mb-4 slide-in-top`}>Lets get in touch</h2>
        <p className="text-lg mb-6 contact-text-2 slide-in-bottom">Begin your vacation now!</p>
        <Link href="/contact" className="px-6 py-3 bg-white text-black font-semibold rounded-full block hover:bg-opacity-80 active:scale-95 text-lg spin-btn">
          Book right now <BsArrowUpRight className="inline-block"/>
        </Link>
        <Link href="#" className="block font-bold text-lg p-2 my-4 slide-in-bottom">
          <BsEnvelope className="inline-block" /> <span className="inline-block">email us</span>
        </Link>
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-30 z-0 sm:rounded-md"></div>
    </section>
          <BlogSection blogs={blogs}/>
          <BasicAnimations />
    </main>
  );
}
