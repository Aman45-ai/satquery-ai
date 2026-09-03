import React from "react";
import {
    Sparkles,
    Sun,
    Bell,
    ChevronDown,
    Play,
    Check,
    FileText,
    Brain,
    Rocket,
    CircleDot,
    ShieldCheck,
    Target,
    Info,
    Clock3
} from "lucide-react";

const ProcessingState = () => {
    const steps = [
        {
            number: "1",
            title: "Input Validation",
            description: "Checking file formats, metadata and compatibility...",
            status: "Completed",
            time: "00:08",
            icon: Check,
            style: "border-emerald-500/40 bg-emerald-500/5",
            iconStyle: "bg-emerald-500/10 text-emerald-400"
        },
        {
            number: "2",
            title: "Metadata Extraction",
            description: "Extracting metadata, CRS, resolution and temporal info...",
            status: "Completed",
            time: "00:12",
            icon: FileText,
            style: "border-emerald-500/40 bg-emerald-500/5",
            iconStyle: "bg-emerald-500/10 text-emerald-400"
        },
        {
            number: "3",
            title: "Query Understanding",
            description: "Understanding your question and identifying the task...",
            status: "Completed",
            time: "00:06",
            icon: Brain,
            style: "border-blue-500/40 bg-blue-500/5",
            iconStyle: "bg-blue-500/10 text-blue-400"
        },
        {
            number: "4",
            title: "Model Selection",
            description: "Selecting the most suitable model(s) and tools...",
            status: "In Progress",
            time: "00:10",
            icon: CircleDot,
            style: "border-purple-500/70 bg-purple-500/5 shadow-lg shadow-purple-500/10",
            iconStyle: "bg-purple-500/10 text-purple-400"
        },
        {
            number: "5",
            title: "Model Execution",
            description: "Running specialist model(s) to generate results...",
            status: "Pending",
            time: "--:--",
            icon: Rocket,
            style: "border-white/10 bg-white/2",
            iconStyle: "bg-white/3 text-slate-600"
        }
    ];

    const executionTrace = [
        {
            time: "10:24:15 AM",
            title: "Analysis started",
            description: "Received 2 images and query",
            status: "active",
            icon: Play
        },
        {
            time: "10:24:18 AM",
            title: "Input validation",
            description: "File formats and integrity verified",
            status: "completed",
            icon: Check
        },
        {
            time: "10:24:26 AM",
            title: "Metadata extraction",
            description: "Extracted CRS, resolution, sensor info",
            status: "completed",
            icon: Check
        },
        {
            time: "10:24:38 AM",
            title: "Query understanding",
            description: "Task identified: Change VQA",
            status: "completed",
            icon: Check
        },
        {
            time: "10:24:44 AM",
            title: "Model selection",
            description: "Evaluating candidate models...",
            status: "active",
            icon: CircleDot
        },
        {
            time: "",
            title: "Model execution",
            description: "Waiting to start",
            status: "pending",
            icon: CircleDot
        },
        {
            time: "",
            title: "Result generation",
            description: "Waiting to start",
            status: "pending",
            icon: CircleDot
        },
        {
            time: "",
            title: "Analysis complete",
            description: "Waiting to start",
            status: "pending",
            icon: CircleDot
        }
    ];

    const models = [
        {
            number: "1",
            title: "Change Detection Model",
            version: "CDNet v2.1",
            description: "Change map generation",
            type: "Primary"
        },
        {
            number: "2",
            title: "Change VQA Model",
            version: "GeoVLM v1.3",
            description: "Natural language description",
            type: "Primary"
        },
        {
            number: "3",
            title: "Fusion Encoder",
            version: "Optical + SAR",
            description: "Feature fusion and enhancement",
            type: "Support"
        }
    ];

    return (
        <div className="min-h-screen bg-[#020611] text-white">
            <div className="px-6 py-4">
                <header className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-sm text-slate-400">
                        <span>Dashboard</span>
                        <span>›</span>
                        <span>New Analysis</span>
                        <span>›</span>
                        <span className="text-white">Analysis in Progress</span>
                    </div>

                    <div className="flex items-center gap-5">
                        <Sun className="h-5 w-5 text-slate-300" />
                        <Bell className="h-5 w-5 text-slate-300" />

                        <div className="flex items-center gap-2">
                            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-slate-800 text-xs">
                                AP
                            </div>
                            <ChevronDown className="h-4 w-4 text-slate-400" />
                        </div>
                    </div>
                </header>

                <div className="mt-5 flex items-center justify-between">
                    <div>
                        <div className="flex items-center gap-3">
                            <h1 className="text-3xl font-semibold">Analysis in Progress</h1>
                            <Sparkles className="h-5 w-5 text-purple-400" />
                        </div>

                        <p className="mt-2 text-sm text-slate-400">
                            Our AI agent is analyzing your satellite data. This may take a few minutes.
                        </p>
                    </div>

                    <div className="flex w-97.5 items-center">
                        <div className="flex flex-1 flex-col items-center">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-purple-500/70 text-sm text-purple-300">
                                1
                            </div>
                            <span className="mt-2 text-xs text-slate-400">Input</span>
                        </div>

                        <div className="h-px flex-1 bg-purple-500/50" />

                        <div className="flex flex-1 flex-col items-center">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-purple-400 bg-purple-500/20 text-sm text-purple-300 shadow-lg shadow-purple-500/20">
                                2
                            </div>
                            <span className="mt-2 text-xs text-purple-300">Analysis</span>
                        </div>

                        <div className="h-px flex-1 bg-white/10" />

                        <div className="flex flex-1 flex-col items-center">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-sm text-slate-500">
                                3
                            </div>
                            <span className="mt-2 text-xs text-slate-400">Results</span>
                        </div>
                    </div>
                </div>

                <div className="mt-5 grid grid-cols-[minmax(0,1fr)_360px] gap-5">
                    <main>
                        <section className="rounded-xl border border-white/10 bg-white/2 p-5">
                            <h2 className="text-base font-medium">Input Summary</h2>

                            <div className="mt-4 grid grid-cols-[350px_180px_1fr] gap-6">
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="overflow-hidden rounded-lg border border-white/10 bg-black/20">
                                        <div className="relative h-28">
                                            <img
                                                src="/earth-satellite.jpg"
                                                alt="Optical satellite"
                                                className="h-full w-full object-cover"
                                            />
                                            <span className="absolute left-2 top-2 rounded bg-emerald-500/20 px-2 py-1 text-[10px] text-emerald-300">
                                                OPTICAL
                                            </span>
                                        </div>
                                        <p className="px-2 py-2 text-xs text-white">
                                            optical_2024_05_12.tif
                                        </p>
                                    </div>

                                    <div className="overflow-hidden rounded-lg border border-white/10 bg-black/20">
                                        <div className="relative h-28">
                                            <img
                                                src="/earth-satellite.jpg"
                                                alt="SAR satellite"
                                                className="h-full w-full object-cover grayscale"
                                            />
                                            <span className="absolute left-2 top-2 rounded bg-purple-500/20 px-2 py-1 text-[10px] text-purple-300">
                                                SAR
                                            </span>
                                        </div>
                                        <p className="px-2 py-2 text-xs text-white">
                                            sar_2024_05_12.tif
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-5">
                                    <div>
                                        <p className="text-xs text-slate-500">Configuration</p>
                                        <p className="mt-2 text-sm">Optical + SAR Pair</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500">Spatial Resolution</p>
                                        <p className="mt-2 text-sm">10 m / pixel</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500">Area of Interest</p>
                                        <p className="mt-2 text-sm">12.45 km²</p>
                                    </div>
                                </div>

                                <div>
                                    <p className="text-xs text-slate-500">Your Question</p>
                                    <p className="mt-3 text-sm leading-6 text-slate-300">
                                        What are the significant changes between these two images?
                                        Describe the changes.
                                    </p>

                                    <button className="mt-4 rounded-lg border border-purple-500/30 bg-purple-500/5 px-4 py-2 text-xs text-purple-300">
                                        View Full Query ↗
                                    </button>
                                </div>
                            </div>
                        </section>

                        <section className="mt-4 rounded-xl border border-white/10 bg-white/2 p-5">
                            <div className="flex items-center justify-between">
                                <h2 className="text-base font-medium">Agent Activity</h2>

                                <span className="rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300">
                                    ● Thinking...
                                </span>
                            </div>

                            <div className="mt-5 grid grid-cols-5 gap-5">
                                {steps.map((step, index) => {
                                    const Icon = step.icon;

                                    return (
                                        <div key={step.number} className={`relative rounded-xl border p-4 ${step.style}`}>
                                            {index !== steps.length - 1 && (
                                                <div className="absolute -right-5 top-1/2 w-5 border-t border-dashed border-purple-500/60" />
                                            )}

                                            <div className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full ${step.iconStyle}`}>
                                                <Icon className="h-7 w-7" />
                                            </div>

                                            <h3 className="mt-4 text-center text-xs font-medium">
                                                {step.number}. {step.title}
                                            </h3>

                                            <p className="mt-3 text-center text-[11px] leading-5 text-slate-400">
                                                {step.description}
                                            </p>

                                            <div className="mt-4 flex items-center justify-between">
                                                <span className={`rounded-full px-2 py-1 text-[9px] ${
                                                    step.status === "Completed"
                                                        ? "bg-emerald-500/10 text-emerald-400"
                                                        : step.status === "In Progress"
                                                        ? "bg-purple-500/10 text-purple-300"
                                                        : "bg-white/5 text-slate-500"
                                                }`}>
                                                    {step.status}
                                                </span>

                                                <span className="text-[10px] text-slate-500">
                                                    {step.time}
                                                </span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="mt-5 grid grid-cols-2 gap-4">
                                <div className="rounded-xl border border-white/10 bg-[#030a17] p-5">
                                    <p className="text-xs text-slate-400">Current Step Details</p>

                                    <div className="mt-4 flex items-center gap-3">
                                        <div className="rounded-lg bg-purple-500/10 p-2 text-purple-300">
                                            <Brain className="h-4 w-4" />
                                        </div>
                                        <h3 className="text-sm font-medium">Model Selection</h3>
                                    </div>

                                    <p className="mt-4 text-xs leading-5 text-slate-400">
                                        The agent is selecting the best combination of models
                                        based on input data and your query.
                                    </p>

                                    <div className="mt-5 flex items-center gap-3">
                                        <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
                                            <div className="h-full w-[60%] rounded-full bg-purple-500" />
                                        </div>
                                        <span className="text-xs font-medium">60%</span>
                                    </div>
                                </div>

                                <div className="rounded-xl border border-white/10 bg-[#030a17] p-5">
                                    <p className="text-xs text-slate-400">Why this step?</p>

                                    <p className="mt-4 text-xs leading-5 text-slate-400">
                                        We analyze your data modality, number of images, and query
                                        intent to select the most accurate models for your task.
                                    </p>

                                    <div className="mt-5 space-y-3">
                                        <div className="flex items-center gap-2 text-xs text-slate-300">
                                            <Check className="h-4 w-4 text-blue-400" />
                                            Evaluating 5+ candidate models
                                        </div>

                                        <div className="flex items-center gap-2 text-xs text-slate-300">
                                            <Check className="h-4 w-4 text-blue-400" />
                                            Considering data compatibility and performance
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 rounded-xl border border-white/10 bg-[#030a17] p-4">
                                <div className="flex items-center gap-4">
                                    <div className="rounded-xl bg-blue-500/10 p-3 text-blue-400">
                                        <Target className="h-5 w-5" />
                                    </div>

                                    <div className="flex-1">
                                        <p className="text-xs text-slate-500">Selected Task</p>
                                        <h3 className="mt-1 text-sm font-medium">
                                            Change VQA
                                            <span className="text-slate-400"> (Change Analysis + Description)</span>
                                        </h3>
                                        <p className="mt-1 text-xs text-slate-500">
                                            The agent identified that your query requires change detection and natural language description.
                                        </p>
                                    </div>

                                    <div className="rounded-lg border border-white/10 px-4 py-3 text-xs text-slate-400">
                                        Confidence in Task
                                        <span className="ml-3 rounded-full bg-emerald-500/10 px-2 py-1 text-emerald-400">
                                            92%
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 rounded-xl border border-white/10 bg-[#030a17] p-4">
                                <div className="flex items-center gap-4">
                                    <div className="rounded-xl bg-blue-500/10 p-3 text-blue-400">
                                        <ShieldCheck className="h-5 w-5" />
                                    </div>

                                    <div className="flex-1">
                                        <p className="text-xs text-slate-500">Data Compatibility</p>

                                        <div className="mt-1 flex items-center gap-3">
                                            <h3 className="text-sm font-medium">Optical + SAR Pair</h3>
                                            <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-[10px] text-emerald-400">
                                                Compatible
                                            </span>
                                        </div>

                                        <p className="mt-1 text-xs text-slate-500">
                                            Spatial alignment, resolution and metadata are compatible for analysis.
                                        </p>
                                    </div>

                                    <button className="rounded-lg border border-purple-500/30 bg-purple-500/5 px-4 py-2 text-xs text-purple-300">
                                        View Compatibility Report
                                    </button>
                                </div>
                            </div>
                        </section>
                    </main>

                    <aside className="space-y-4">
                        <section className="rounded-xl border border-white/10 bg-white/2 p-5">
                            <div className="flex items-center justify-between">
                                <h2 className="text-sm font-medium">Execution Trace</h2>
                                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-[10px] text-emerald-400">
                                    ● Live
                                </span>
                            </div>

                            <div className="mt-5">
                                {executionTrace.map((trace, index) => {
                                    const Icon = trace.icon;

                                    return (
                                        <div key={`${trace.title}-${index}`} className="relative flex gap-4 pb-5">
                                            {index !== executionTrace.length - 1 && (
                                                <div className="absolute left-3 top-7 h-full border-l border-dashed border-white/20" />
                                            )}

                                            <div className={`relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border ${
                                                trace.status === "completed"
                                                    ? "border-emerald-500/40 bg-emerald-500/20 text-emerald-400"
                                                    : trace.status === "active"
                                                    ? "border-purple-500/60 bg-purple-500/20 text-purple-300"
                                                    : "border-white/20 bg-[#030a17] text-slate-600"
                                            }`}>
                                                <Icon className="h-3.5 w-3.5" />
                                            </div>

                                            <div>
                                                {trace.time && (
                                                    <p className="text-[10px] text-slate-500">
                                                        {trace.time}
                                                    </p>
                                                )}

                                                <p className={`mt-1 text-xs ${
                                                    trace.status === "pending"
                                                        ? "text-slate-500"
                                                        : "text-white"
                                                }`}>
                                                    {trace.title}
                                                </p>

                                                <p className="mt-1 text-[10px] leading-4 text-slate-500">
                                                    {trace.description}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </section>

                        <section className="rounded-xl border border-white/10 bg-white/2 p-5">
                            <h2 className="text-sm font-medium">
                                Selected Models <span className="text-slate-500">(Preview)</span>
                            </h2>

                            <div className="mt-5 space-y-5">
                                {models.map((model) => (
                                    <div key={model.number} className="flex gap-3">
                                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-purple-500/30 bg-purple-500/5 text-xs text-purple-300">
                                            {model.number}
                                        </div>

                                        <div className="flex-1">
                                            <div className="flex items-center justify-between gap-2">
                                                <p className="text-xs font-medium">
                                                    {model.title} <span className="text-slate-500">({model.version})</span>
                                                </p>

                                                <span className="rounded bg-purple-500/10 px-2 py-1 text-[9px] text-purple-300">
                                                    {model.type}
                                                </span>
                                            </div>

                                            <p className="mt-1 text-[10px] text-slate-500">
                                                {model.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-5 rounded-lg border border-white/5 bg-white/2 p-3 text-[10px] text-slate-600">
                                Final model(s) will be confirmed after selection.
                            </div>
                        </section>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default ProcessingState;