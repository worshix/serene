import { createClient } from '@/prismicio';
import Link from 'next/link';
import Gallery from './Gallery';
import dynamic from 'next/dynamic';
import { BsArrowUpRight, BsEnvelope } from 'react-icons/bs';
import { revalidateTag } from "next/cache";

export const metadata = {
  title: 'Serene Safaris | Activity Gallery - Explore Our Adventures',
  description: 'Discover the thrilling adventures and serene experiences offered by Serene Safaris through our activity gallery. Browse images of exciting tours, safaris, and activities in Victoria Falls.',
  keywords: ['Victoria Falls activity gallery', 'Serene Safaris images', 'Zimbabwe adventure photos', 'Victoria Falls tours', 'Victoria Falls safari photos', 'holiday activities gallery'],
  url: 'https://www.serenesafaris.co.zw/gallery',
  canonical: 'https://www.serenesafaris.co.zw/gallery',
  openGraph: {
    title: 'Serene Safaris | Activity Gallery - Explore Our Adventures',
    description: 'Explore the visual journey of Serene Safaris with stunning images of our thrilling activities, tours, and safaris in the majestic Victoria Falls.',
    url: 'https://www.serenesafaris.co.zw/gallery',
    siteName: 'Serene Safaris',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Serene Safaris | Activity Gallery - Explore Our Adventures',
    description: 'Browse through our gallery to explore images of Serene Safaris’ adventure-filled tours and activities in Victoria Falls.',
  },
};

const BasicAnimations = dynamic(() => import('@/components/BasicAnimations'), { ssr: false });

async function Media () {
    const client = createClient();
    const images = await client.getAllByType("ordinary_images");
    revalidateTag("prismic");

return (
  <main>
      <h1 className="text-4xl font-bold my-4 text-center text-main-400 w-full flex-shrink-0">Gallery</h1>
      {/* the gallery Slide here down here */}
      <p className='font-light text-black text-center slide-in-bottom'>Have a look at some of our activities</p>
      <Gallery images={images}/>
      <div className="relative flex bg-main2 flex-col items-center text-center p-4 rounded-md justify-center m-4 text-black">
        <h2 className={`text-4xl font-semibold mb-4`}>Lets get in touch</h2>
        <p className="text-lg mb-6 slide-in-bottom"> You can begin your vacation too, now!</p>
        <Link href="/contact" className="px-6 py-3 bg-black text-white font-semibold rounded-full block hover:bg-opacity-80 active:scale-95 text-lg spin-btn">
          Book right now <BsArrowUpRight className="inline-block"/>
        </Link>
        <Link href="#" className="block font-bold text-lg p-2 my-4 slide-in-bottom">
          <BsEnvelope className="inline-block" /><span className="inline-block">email us</span>
        </Link>
      </div>
      <BasicAnimations />
  </main>
 )
}

export default Media;
