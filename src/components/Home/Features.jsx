import { Bot, MonitorSmartphone, ScrollText } from "lucide-react"
import React, { useState } from "react"




export default function Features() {
  const features = [
    {
      title: "AI-Powered Resume Builder",
      desc: "Generate professional resumes in minutes with intelligent suggestions and formatting guidance.",
      icon: (<Bot className="w-6 " />),
    },
    {
      title: "ATS-Friendly Templates",
      desc: "Use ready-made templates that pass applicant tracking systems and highlight your skills effectively.",
      icon: (<ScrollText className="w-6 " />),
    },
    {
      title: "Mobile & Desktop Ready",
      desc: "Build and download resumes seamlessly on any device, anytime, without compatibility issues.",
      icon: (<MonitorSmartphone className="w-6 " />),
    },
  ]

  return (
    <div id="features" className="flex flex-col max-w-6xl m-auto py-20">
      <div className="text-left mt-6">
        <h2 class="text-5xl font-semibold">Powerful Features</h2>
        <p class="text-gray-700 mt-5 max-w-md">Everything you need to create, customize, and deliver professional resumes, easily and efficiently.</p>
      </div>
      <div class="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {features.map((item, i) => (
          <div class='bg-linear-to-b text-(--primary) from-white to-(--primary)/20 border border-slate-200 rounded-lg p-6 pb-10 space-y-3 hover:-translate-y-1 transition duration-300'>
            <div className="p-2 bg-white/50 max-w-fit rounded border border-slate-300 text-(--primary)/50">
              {item.icon}
            </div>
            <p class='font-medium text-lg text-slate-900'>{item.title}</p>
            <p class='text-sm/5 text-gray-600'> {item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
