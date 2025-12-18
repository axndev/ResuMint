import React from 'react'
import HeroSection from '../components/Home/HeroSection'
import Features from '../components/Home/Features'
import Testimonials from '../components/Home/Testimonials'
import CallToAction from '../components/Home/CallToAction'

function Home() {
    return (
        <>
            <HeroSection />
            <Features />
            <Testimonials />
            <CallToAction />
        </>
    )
}

export default Home