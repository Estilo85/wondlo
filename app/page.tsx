import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import AdventurePlanning from '@/components/sections/AdventurePlanning';
import HowItWorks from '@/components/sections/HowItWorks';
import WhatYouReceive from '@/components/sections/WhatYouReceive';
import Testimonials from '@/components/sections/Testimonials';
import Footer from '@/components/sections/Footer';

export default function Home() {
    return (
        <>
            <Navbar />                 {/* #FFFFFF */}
            <Hero />                   {/* #F6F4FE */}
            <Stats />                  {/* #F9F7FF */}
            <AdventurePlanning />      {/* #FBFAFF */}
            <HowItWorks />             {/* #F9F7FF */}
            <WhatYouReceive />         {/* #F9F7FF */}
            <Testimonials />           {/* #EDE7FB */}
            <Footer />                 {/* #9B88C7 */}
        </>
    );
}