import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import HowItWorks from '@/components/sections/HowItWorks';
import WhatYouReceive from '@/components/sections/WhatYouReceive';
import Testimonials from '@/components/sections/Testimonials';
import Footer from '@/components/sections/Footer';

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Stats />
            <HowItWorks />
            <WhatYouReceive />
            <Testimonials />
            <Footer />
        </>
    );
}