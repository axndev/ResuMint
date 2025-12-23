import { useAuth } from "@clerk/clerk-react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Templates() {
    const navigate = useNavigate();
    const { userId } = useAuth();
    const [userResumes, setUserResumes] = useState([]);
    const [selectedTemplate, setSelectedTemplate] = useState(null);

    const features = [
        {
            title: "Classic",
            desc: "Generate professional resumes in minutes with intelligent suggestions and formatting guidance.",
            image: "/images/classic.png",
        },
        {
            title: "Modern",
            desc: "Use ready-made templates that pass applicant tracking systems and highlight your skills effectively.",
            image: "/images/modern.png",
        },
    ];


    useEffect(() => {
        if (!userId) return;
        const saved = localStorage.getItem(`resumes-${userId}`);
        setUserResumes(saved ? JSON.parse(saved) : []);
    }, [userId]);

    const handleCreate = (template) => {
        const newResume = {
            id: Date.now(),
            title: template.title,
            createdAt: new Date().toISOString(),
            accent: "#3B82F6",
            template: template.title,
        };

        const updatedResumes = [...userResumes, newResume];
        setUserResumes(updatedResumes);
        localStorage.setItem(`resumes-${userId}`, JSON.stringify(updatedResumes));

        navigate(`/app/builder/${newResume.id}`);
    };

    return (
        <div id="templates" className="flex flex-col max-w-6xl m-auto mb-10">
            <div className="text-left mt-10">
                <h2 className="text-5xl font-semibold">Professional Templates</h2>
                <p className="text-gray-700 mt-5 max-w-md">
                    Browse professional templates and start building your resume in minutes.
                </p>
            </div>

            <div className="relative max-w-6xl mt-10 w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-10">
                {features.map((item, i) => (
                    <div
                        key={i}
                        className="hover:-translate-y-1 transition duration-300 cursor-pointer"
                        onClick={() => setSelectedTemplate(item)}
                    >
                        <div className="bg-white/50 h-100 rounded border border-slate-300 overflow-hidden">
                            <img src={item.image} alt="" className="rounded h-full w-full object-cover object-top-left" />
                        </div>
                        <p className="text-gray-700 mt-5">{item.title}</p>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedTemplate && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                    <div className="bg-white rounded-lg max-w-3xl w-full p-6 flex flex-col md:flex-row gap-6 relative">
                        <div className="bg-gray-100/50 max-w-90 rounded border border-gray-300 p-1">
                            <img src={selectedTemplate.image} alt="" className="w-full" />
                        </div>
                        <div className="flex flex-col items-start gap-5 md:w-1/2">
                            <div className="mt-10">
                                <h3 className="text-2xl font-semibold">{selectedTemplate.title}</h3>
                                <p className="text-slate-500 mt-5">{selectedTemplate.desc}</p>
                            </div>
                            <button
                                onClick={() => handleCreate(selectedTemplate)}
                                className="bg-(--primary) flex mt-3 gap-1 hover:gap-2 transition-all duration-100 items-center text-sm text-white w-auto px-4 py-2 rounded hover:bg-(--primary)/90 cursor-pointer transition"
                            >
                                <span>Create</span>
                                <ChevronRight className="w-4" />
                            </button>
                        </div>
                        <button
                            onClick={() => setSelectedTemplate(null)}
                            className="absolute top-6 right-6 text-slate-500 bg-red-500 hover:bg-red-400 transition text-white cursor-pointer p-1 rounded"
                        >
                            <X  />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Templates;
