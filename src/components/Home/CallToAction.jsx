import { ArrowRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

function CallToAction() {
    return (
        <div id='contact' className="border-y mb-30 border-dashed border-slate-200 w-full max-w-6xl mx-auto px-16">
            <div className="flex flex-col md:flex-row text-center md:text-left items-center justify-between gap-8 px-3 md:px-10 border-x border-dashed border-slate-200 py-20 -mt-10 -mb-10 w-full">
                <p className="text-xl font-medium max-w-lg">Build a <span className='highlightedText'>Professional Resume</span> That Helps You Stand Out and Get Hired
                    Create your resume in minutes with <span className='highlightedText'>smart templates and AI guidance</span>.</p>
                <Link to="/app" className="flex items-center gap-2 rounded-md py-3 px-5 bg-(--primary) hover:bg-(--primary)/90 transition text-white">
                    <span>Get Started</span>
                    <ArrowRight />
                </Link>
            </div>
        </div>
    )
}

export default CallToAction