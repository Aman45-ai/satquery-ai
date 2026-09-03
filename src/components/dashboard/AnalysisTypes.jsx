import React from "react";

const data = [
    { label: "Change Analysis", value: 45, color: "#3b82f6" },
    { label: "VQA (Single Image)", value: 25, color: "#a855f7" },
    { label: "Optical + SAR", value: 15, color: "#22d3ee" },
    { label: "Captioning", value: 10, color: "#f59e0b" },
    { label: "Grounding", value: 5, color: "#ec4899" }
];

const radius = 60;
const circumference = 2 * Math.PI * radius;

const AnalysisTypes = () => {
    let cumulative = 0;

    return (
        <div className="rounded-2xl border border-white/8 bg-white/2.5 p-5 h-full">
            <div className="mb-4 flex items-center justify-between">
                <h2 className="text-sm font-medium text-white">Analysis Types</h2>
                <button className="text-xs text-slate-400 hover:text-white">View All</button>
            </div>

            <div className="relative flex items-center justify-center">
                <svg viewBox="0 0 160 160" className="h-40 w-40 -rotate-90">
                    {data.map((segment) => {
                        const dash = (segment.value / 100) * circumference;
                        const offset = -(cumulative / 100) * circumference;
                        cumulative += segment.value;

                        return (
                            <circle
                                key={segment.label}
                                cx="80"
                                cy="80"
                                r={radius}
                                fill="none"
                                stroke={segment.color}
                                strokeWidth="16"
                                strokeDasharray={`${dash} ${circumference - dash}`}
                                strokeDashoffset={offset}
                            />
                        );
                    })}
                </svg>

                <div className="absolute flex flex-col items-center">
                    <span className="text-xl font-semibold text-white">128</span>
                    <span className="text-[10px] text-slate-400">Total</span>
                </div>
            </div>

            <div className="mt-5 space-y-2.5">
                {data.map((segment) => (
                    <div key={segment.label} className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: segment.color }} />
                            <span className="text-slate-300">{segment.label}</span>
                        </div>
                        <span className="text-slate-400">{segment.value}%</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AnalysisTypes;