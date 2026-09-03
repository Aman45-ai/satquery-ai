import React from "react";
import {
    Share2,
    Download,
    MoreVertical,
    Sparkles,
    Brain,
    Layers3,
    Crosshair,
    Scan,
    Maximize,
    Hand,
    Plus,
    Minus,
    LocateFixed,
    MousePointer2,
    CheckCircle2,
    Info,
    ArrowRight,
    ShieldCheck,
    Image,
    FileDown
} from "lucide-react";

const ResultState = () => {
    const analysisInfo = [
        {
            label: "Analysis Type",
            value: "Change VQA",
            icon: Brain,
            style: "bg-purple-500/10 text-purple-400"
        },
        {
            label: "Input",
            value: "Bi-temporal (2 Images)",
            icon: Layers3,
            style: "bg-emerald-500/10 text-emerald-400"
        },
        {
            label: "Sensor",
            value: "Optical + SAR Pair",
            icon: Crosshair,
            style: "bg-blue-500/10 text-blue-400"
        },
        {
            label: "Area of Interest",
            value: "12.45 km²",
            icon: Scan,
            style: "bg-orange-500/10 text-orange-400"
        },
        {
            label: "Spatial Resolution",
            value: "10 m / pixel",
            icon: Image,
            style: "bg-cyan-500/10 text-cyan-400"
        }
    ];

    const detectedChanges = [
        {
            label: "Built-up Increase",
            value: "6.23 km² (49.9%)",
            icon: "🏙️",
            style: "text-red-400 bg-red-500/10"
        },
        {
            label: "Vegetation Decrease",
            value: "3.41 km² (27.3%)",
            icon: "🌳",
            style: "text-emerald-400 bg-emerald-500/10"
        },
        {
            label: "No Significant Change",
            value: "2.81 km² (22.8%)",
            icon: "◉",
            style: "text-yellow-400 bg-yellow-500/10"
        },
        {
            label: "Total Area Analyzed",
            value: "12.45 km²",
            icon: "▣",
            style: "text-blue-400 bg-blue-500/10"
        }
    ];

    const observations = [
        "Rapid urban expansion in the east",
        "New infrastructure development visible",
        "Agricultural land converted to built-up",
        "Minimal changes in the western region"
    ];

    return (
        <div className="min-h-screen bg-[#020611] text-white">
            <div className="px-5 py-4">
                <div className="flex items-center justify-between">
                    <div>
                        <div className="flex items-center gap-3 text-sm text-slate-400">
                            <span>Dashboard</span>
                            <span>›</span>
                            <span>History</span>
                            <span>›</span>
                            <span className="text-white">Delhi Urban Change Analysis</span>
                        </div>

                        <div className="mt-5 flex items-center gap-3">
                            <h1 className="text-3xl font-semibold">Analysis Result</h1>
                            <Sparkles className="h-5 w-5 text-purple-400" />
                            <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-400">
                                Completed
                            </span>
                        </div>

                        <p className="mt-2 text-sm text-slate-400">
                            Completed on May 12, 2026 <span className="mx-2">•</span> 08:42 AM <span className="mx-2">•</span> ID: AN-2026-0512-00128
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="flex items-center gap-2 rounded-xl border border-purple-500/30 bg-purple-500/5 px-5 py-3 text-sm text-slate-200 hover:bg-purple-500/10">
                            <Share2 className="h-4 w-4" />
                            Share Result
                        </button>

                        <button className="flex items-center gap-2 rounded-xl bg-purple-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-purple-600/20 hover:bg-purple-500">
                            <Download className="h-4 w-4" />
                            Download Report
                        </button>

                        <button className="rounded-xl border border-white/10 bg-white/3 p-3 text-slate-400 hover:text-white">
                            <MoreVertical className="h-5 w-5" />
                        </button>
                    </div>
                </div>

                <div className="mt-6 flex items-center gap-0 rounded-xl border border-white/10 bg-white/2 p-3">
                    {analysisInfo.map((info, index) => {
                        const Icon = info.icon;

                        return (
                            <div key={info.label} className={`flex flex-1 items-center gap-3 px-4 ${index !== 0 ? "border-l border-white/10" : ""}`}>
                                <div className={`rounded-xl p-3 ${info.style}`}>
                                    <Icon className="h-5 w-5" />
                                </div>

                                <div>
                                    <p className="text-xs text-slate-400">{info.label}</p>
                                    <p className="mt-1 text-sm font-medium text-white">{info.value}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-4 grid grid-cols-[minmax(0,1fr)_315px] gap-4">
                    <div>
                        <div className="overflow-hidden rounded-xl border border-white/10 bg-[#030a17]">
                            <div className="flex items-center justify-between border-b border-white/10 px-4">
                                <div className="flex items-center gap-6">
                                    <button className="border-b-2 border-purple-500 px-4 py-4 text-sm text-white">
                                        Change Map
                                    </button>
                                    <button className="py-4 text-sm text-slate-400 hover:text-white">
                                        Before (May 2022)
                                    </button>
                                    <button className="py-4 text-sm text-slate-400 hover:text-white">
                                        After (May 2025)
                                    </button>
                                    <button className="py-4 text-sm text-slate-400 hover:text-white">
                                        Side by Side
                                    </button>
                                </div>

                                <div className="flex items-center gap-2">
                                    <button className="flex items-center gap-2 rounded-lg border border-purple-500/30 bg-purple-500/10 px-3 py-2 text-xs text-white">
                                        <Scan className="h-4 w-4" />
                                        AOI Boundary
                                    </button>

                                    <button className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/3 px-3 py-2 text-xs text-slate-300">
                                        <Layers3 className="h-4 w-4" />
                                        Layers
                                    </button>

                                    <button className="rounded-lg border border-white/10 bg-white/3 p-2 text-slate-300">
                                        <Maximize className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>

                            <div className="relative h-127.5 overflow-hidden">
                                <img
                                    src="/earth-satellite.jpg"
                                    alt="Satellite change map"
                                    className="h-full w-full object-cover"
                                />

                                <div className="absolute inset-0 bg-red-500/10 mix-blend-screen" />

                                <div className="absolute left-4 top-5 flex flex-col overflow-hidden rounded-lg border border-white/10 bg-[#020611]/80 backdrop-blur">
                                    <button className="border-b border-white/10 bg-purple-500/20 p-3 text-purple-300">
                                        <MousePointer2 className="h-5 w-5" />
                                    </button>
                                    <button className="border-b border-white/10 p-3 text-slate-300">
                                        <Hand className="h-5 w-5" />
                                    </button>
                                    <button className="border-b border-white/10 p-3 text-slate-300">
                                        <Plus className="h-5 w-5" />
                                    </button>
                                    <button className="border-b border-white/10 p-3 text-slate-300">
                                        <Minus className="h-5 w-5" />
                                    </button>
                                    <button className="border-b border-white/10 p-3 text-slate-300">
                                        <Maximize className="h-5 w-5" />
                                    </button>
                                    <button className="p-3 text-slate-300">
                                        <LocateFixed className="h-5 w-5" />
                                    </button>
                                </div>

                                <div className="absolute bottom-4 left-4 rounded-lg border border-white/10 bg-[#020611]/90 p-4 backdrop-blur">
                                    <p className="mb-3 text-xs font-medium text-white">Change Legend</p>

                                    <div className="space-y-2 text-xs text-slate-300">
                                        <div className="flex items-center gap-2">
                                            <span className="h-3 w-3 rounded-sm bg-red-500" />
                                            Increase / New Built-up
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="h-3 w-3 rounded-sm bg-emerald-500" />
                                            Decrease / Vegetation Loss
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="h-3 w-3 rounded-sm bg-yellow-400" />
                                            No Significant Change
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="h-3 w-3 rounded-sm bg-slate-300" />
                                            No Data
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute bottom-5 right-5 flex items-end gap-2 text-xs text-white">
                                    <div className="flex items-end gap-1">
                                        <span className="h-1 w-8 bg-white" />
                                        <span className="h-1 w-8 bg-white" />
                                        <span className="h-1 w-8 bg-white" />
                                    </div>
                                    <span>0&nbsp;&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;&nbsp;&nbsp;2 km</span>
                                </div>

                                <div className="absolute right-6 top-5 text-2xl text-white">
                                    N
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 grid grid-cols-3 gap-4">
                            <div className="rounded-xl border border-white/10 bg-[#030a17] p-5">
                                <h3 className="text-sm font-medium">Detected Changes</h3>

                                <div className="mt-5 space-y-4">
                                    {detectedChanges.map((change) => (
                                        <div key={change.label} className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className={`flex h-8 w-8 items-center justify-center rounded-lg text-sm ${change.style}`}>
                                                    {change.icon}
                                                </div>
                                                <span className="text-xs text-slate-300">{change.label}</span>
                                            </div>

                                            <span className="text-xs font-medium text-white">{change.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl border border-white/10 bg-[#030a17] p-5">
                                <h3 className="text-sm font-medium">Change Statistics</h3>

                                <div className="mt-5 flex items-center gap-5">
                                    <div
                                        className="flex h-32 w-32 items-center justify-center rounded-full"
                                        style={{
                                            background: "conic-gradient(#ef4444 0 49.9%, #22c55e 49.9% 77.2%, #eab308 77.2% 100%)"
                                        }}
                                    >
                                        <div className="flex h-20 w-20 flex-col items-center justify-center rounded-full bg-[#030a17]">
                                            <span className="text-lg font-medium">12.45</span>
                                            <span className="text-[10px] text-slate-400">km²</span>
                                        </div>
                                    </div>

                                    <div className="space-y-4 text-xs">
                                        <div className="flex items-center gap-2">
                                            <span className="h-2 w-2 rounded-full bg-red-500" />
                                            <span className="text-slate-400">Increase</span>
                                            <span className="text-white">49.9%</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="h-2 w-2 rounded-full bg-emerald-500" />
                                            <span className="text-slate-400">Decrease</span>
                                            <span className="text-white">27.3%</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="h-2 w-2 rounded-full bg-slate-400" />
                                            <span className="text-slate-400">No Change</span>
                                            <span className="text-white">22.8%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-xl border border-white/10 bg-[#030a17] p-5">
                                <h3 className="text-sm font-medium">Key Observations</h3>

                                <div className="mt-5 space-y-4">
                                    {observations.map((observation) => (
                                        <div key={observation} className="flex gap-3 text-xs text-slate-300">
                                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                                            <span>{observation}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="rounded-xl border border-white/10 bg-[#030a17] p-5">
                            <div className="flex items-center gap-2">
                                <h3 className="text-sm font-medium">AI Answer</h3>
                                <Sparkles className="h-4 w-4 text-purple-400" />
                            </div>

                            <p className="mt-4 text-sm leading-6 text-slate-300">
                                Between May 2022 and May 2025, there is a significant
                                <span className="font-medium text-emerald-400"> increase in built-up areas</span>,
                                primarily in the eastern and northern parts of the region.
                                Agricultural and vegetated areas have decreased, especially near
                                the river and in the southern zone.
                            </p>

                            <button className="mt-5 flex items-center gap-2 rounded-lg border border-purple-500/30 bg-purple-500/5 px-4 py-2 text-xs text-purple-300">
                                View Full Answer
                                <ArrowRight className="h-4 w-4" />
                            </button>
                        </div>

                        <div className="rounded-xl border border-white/10 bg-[#030a17] p-5">
                            <div className="flex items-center gap-2">
                                <h3 className="text-sm font-medium">Confidence Score</h3>
                                <Info className="h-3.5 w-3.5 text-slate-500" />
                            </div>

                            <div className="mt-5 flex items-end justify-between">
                                <span className="text-4xl font-light">91%</span>
                                <span className="text-xs text-emerald-400">High Confidence</span>
                            </div>

                            <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
                                <div className="h-full w-[91%] rounded-full bg-emerald-400" />
                            </div>

                            <div className="mt-2 flex justify-between text-[10px] text-slate-500">
                                <span>0%</span>
                                <span>50%</span>
                                <span>100%</span>
                            </div>

                            <p className="mt-4 text-xs leading-5 text-slate-400">
                                The model is highly confident in this analysis based on data
                                quality and consistency.
                            </p>
                        </div>

                        <div className="rounded-xl border border-white/10 bg-[#030a17] p-5">
                            <div className="flex items-center gap-2">
                                <h3 className="text-sm font-medium">Visual Evidence</h3>
                                <Info className="h-3.5 w-3.5 text-slate-500" />
                            </div>

                            <div className="mt-5 grid grid-cols-3 gap-2">
                                <div>
                                    <img
                                        src="/earth-satellite.jpg"
                                        alt="Change map"
                                        className="h-20 w-full rounded-lg object-cover"
                                    />
                                    <p className="mt-2 text-[10px] text-slate-400">Change Map</p>
                                </div>

                                <div>
                                    <img
                                        src="/earth-satellite.jpg"
                                        alt="Before"
                                        className="h-20 w-full rounded-lg object-cover grayscale"
                                    />
                                    <p className="mt-2 text-[10px] text-slate-400">Before (2022)</p>
                                </div>

                                <div>
                                    <img
                                        src="/earth-satellite.jpg"
                                        alt="After"
                                        className="h-20 w-full rounded-lg object-cover"
                                    />
                                    <p className="mt-2 text-[10px] text-slate-400">After (2025)</p>
                                </div>
                            </div>

                            <button className="mt-5 flex items-center gap-2 rounded-lg border border-purple-500/30 bg-purple-500/5 px-4 py-2 text-xs text-purple-300">
                                View All Evidence
                                <ArrowRight className="h-4 w-4" />
                            </button>
                        </div>

                        <div className="flex items-center justify-between rounded-xl border border-white/10 bg-[#030a17] p-5">
                            <div>
                                <h3 className="text-sm font-medium">Download Report</h3>
                                <p className="mt-2 text-xs text-slate-400">
                                    Comprehensive report with maps,
                                    analysis, and metadata.
                                </p>
                            </div>

                            <button className="rounded-xl bg-purple-500/10 p-4 text-purple-300">
                                <FileDown className="h-6 w-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResultState