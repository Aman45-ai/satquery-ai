import React from "react";
import { Sparkles } from "lucide-react";
import earthSatellite from "../../assets/earth-satellite.jpg";

const markers = [
    { label: "Vegetation Health", color: "#34d399", top: "42%", left: "36%" },
    { label: "Urban Expansion", color: "#22d3ee", top: "58%", left: "62%" },
    { label: "Water Bodies", color: "#60a5fa", top: "82%", left: "48%" }
];


const HeroBanner = () => {
    return (
        <div
            className="relative overflow-hidden rounded-2xl border border-white/8 bg-contain bg-center p-10 min-h-[45vh] bg-no-repeat"
            style={{ backgroundImage: `url(${earthSatellite})` }}
        >
            <div className="absolute inset-0 bg-linear-to-r from-[#02040a] via-[#02040a]/75 to-transparent" />
            <div className="relative z-10 max-w-sm top-10">
                <h1 className="bg-linear-to-r from-cyan-300 to-purple-400 bg-clip-text text-3xl font-semibold leading-tight text-transparent">Earth. Data, Intelligence.</h1>
                <p className="mt-4 text-sm leading-relaxed text-slate-300"> Upload satellite images, ask questions in natural language, and get AI-powered insights with visual evidence.</p>
                <button className="mt-6 flex items-center gap-2 rounded-xl bg-linear-to-r from-blue-500 to-cyan-400 px-5 py-3 text-sm font-medium text-white transition hover:brightness-110 cursor-pointer">
                    <Sparkles className="h-4 w-4" /> Start New Analysis</button>
            </div>
        </div>
    )
}

export default HeroBanner;