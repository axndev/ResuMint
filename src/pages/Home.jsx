import React, { useEffect } from 'react'
import HeroSection from '../components/Home/HeroSection'
import Features from '../components/Home/Features'
import Testimonials from '../components/Home/Testimonials'
import CallToAction from '../components/Home/CallToAction'
import { Analytics } from '@vercel/analytics/react';
import Templates from '../components/Home/Templates'

function Home() {
    useEffect(() => {
        document.title = 'Resumi – Professional Resume Builder';
    });
    return (
        <>
            <HeroSection />
            <Analytics />
            <div className='px-3'>
                <Features />
                <Templates />
                <Testimonials />
            </div>
            <CallToAction />
        </>
    )
}

export default Home