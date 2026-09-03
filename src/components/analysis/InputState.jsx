import React from "react"
import {
    Info,
    UploadCloud,
    FolderOpen,
    Image,
    Layers,
    CalendarDays,
    Trash2,
    Plus,
    ChevronDown,
    ChevronRight,
    SlidersHorizontal,
    Sparkles,
    Send,
    Pencil,
    CheckCircle2,
    BookOpen,
    Sun,
    Bell
} from "lucide-react"

const steps = [
    { number: 1, label: "Input" },
    { number: 2, label: "Analysis" },
    { number: 3, label: "Results" }
]

const uploadTypes = [
    { label: "Single Image (Optical / SAR)", icon: Image },
    { label: "Optical + SAR Pair", icon: Layers },
    { label: "Two Images (Different Dates)", icon: CalendarDays }
]

const uploadedImages = [
    {
        id: 1,
        badgeColor: "bg-blue-500",
        type: "OPTICAL",
        typeColor: "bg-blue-500/15 text-blue-300",
        name: "optical_2024_05_12.tif",
        size: "15.6 MB",
        resolution: "10m/px",
        date: "2024-05-12"
    },
    {
        id: 2,
        badgeColor: "bg-purple-500",
        type: "SAR",
        typeColor: "bg-purple-500/15 text-purple-300",
        name: "sar_2024_05_12.tif",
        size: "23.4 MB",
        resolution: "10m/px",
        date: "2024-05-12"
    }
]

const summaryRows = [
    { label: "Images", value: "2" },
    { label: "Configuration", value: "Optical + SAR Pair" },
    { label: "Spatial Resolution", value: "10 m / pixel" },
    { label: "Area of Interest", value: "Not Set", editable: true },
    { label: "Est. Processing Time", value: "2 - 4 min" }
]

const validationChecks = [
    { label: "File Format", value: "Valid", color: "#34d399" },
    { label: "Number of Images", value: "Valid", color: "#34d399" },
    { label: "Image Dimensions", value: "Valid", color: "#34d399" },
    { label: "Sensor / Modality", value: "Detected", color: "#22d3ee" },
    { label: "Geospatial Metadata", value: "Valid", color: "#34d399" },
    { label: "Spatial Compatibility", value: "Compatible", color: "#22d3ee" },
    { label: "Temporal Metadata", value: "Valid", color: "#34d399" },
    { label: "Task Compatibility", value: "Likely Match", color: "#34d399" }
]

const InputState = () => {
    return (
        <div className="min-h-screen  bg-[#020611] text-white">
            <div>
                <div className="flex items-center justify-between px-8 py-5">
                    <div className="flex items-center gap-2 text-sm">
                        <span className="text-slate-500">Dashboard</span>
                        <ChevronRight className="h-3.5 w-3.5 text-slate-600" />
                        <span className="text-white">New Analysis</span>
                    </div>

                    <div className="flex items-center gap-5">
                        <Sun className="h-4 w-4 text-slate-400" />
                        <Bell className="h-4 w-4 text-slate-400" />
                        <div className="flex items-center gap-1.5">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-blue-400/30 bg-blue-500/10 text-xs text-blue-300">
                                AP
                            </div>
                            <ChevronDown className="h-3.5 w-3.5 text-slate-500" />
                        </div>
                    </div>
                </div>

                <div className="flex items-start justify-between px-8">
                    <div>
                        <h1 className="flex items-center gap-2 text-2xl font-semibold text-white">New Analysis
                            <Sparkles className="h-5 w-5 text-purple-400" />
                        </h1>
                        <p className="mt-1 text-sm text-slate-400">Upload satellite image(s) and ask anything about your Earth.</p>
                    </div>

                    <div className="flex items-center">
                        {steps.map((step, index) => (
                            <div key={step.number} className="flex items-center">
                                <div className="flex flex-col items-center gap-1.5">
                                    <div className={`flex h-9 w-9 items-center justify-center rounded-full border text-sm ${step.number === 1 ? "border-blue-400 bg-blue-500/15 text-blue-300" : "border-white/15 text-slate-500"}`}>
                                        {step.number}
                                    </div>
                                    <span className={`text-xs ${step.number === 1 ? "text-white" : "text-slate-500"}`}>
                                        {step.label}
                                    </span>
                                </div>

                                {index < steps.length - 1 && <div className="mb-5 h-px w-10 bg-white/10" />}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="gap-5 p-8 pt-6">
                    <div className="space-y-5">
                        <div className="rounded-2xl border border-white/8 bg-white/2.5 p-6">
                            <div className="flex items-center justify-between">
                                <h2 className="flex items-center gap-2 text-sm font-medium text-white">
                                    1. Upload Satellite Image(s)
                                    <Info className="h-3.5 w-3.5 text-slate-500" />
                                </h2>

                                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                                    Supported formats: GeoTIFF, TIFF, PNG, JPEG
                                    <Info className="h-3.5 w-3.5" />
                                </div>
                            </div>

                            <div className="mt-5 flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-blue-500/30 bg-blue-500/3 py-12">
                                <UploadCloud className="h-8 w-8 text-blue-400" />
                                <p className="text-sm text-slate-300">Drag & drop your satellite image(s) here</p>
                                <p className="text-xs text-slate-500">or</p>
                                <button className="flex items-center gap-2 rounded-lg bg-linear-to-r from-blue-500 to-cyan-400 px-5 py-2.5 text-sm font-medium cursor-pointer text-white transition hover:brightness-110" onClick={()=>{}}>
                                    <FolderOpen className="h-4 w-4" />
                                    Browse Files
                                </button>
                            </div>

                            <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-white/6 pt-5 text-xs text-slate-400">
                                <span>You can upload:</span>
                                {uploadTypes.map((type) => {
                                    const Icon = type.icon

                                    return (
                                        <span key={type.label} className="flex items-center gap-1.5 rounded-lg border border-white/8 px-3 py-1.5">
                                            <Icon className="h-3.5 w-3.5" />
                                            {type.label}
                                        </span>
                                    )
                                })}
                            </div>
                        </div>

                        <div className="rounded-2xl border border-white/8 bg-white/2.5 p-6">
                            <div className="flex items-center justify-between">
                                <h2 className="text-sm font-medium text-white">Uploaded Images ({uploadedImages.length})</h2>
                                <button className="flex items-center gap-1.5 text-xs text-rose-400 hover:text-rose-300">
                                    <Trash2 className="h-3.5 w-3.5" />
                                    Clear All
                                </button>
                            </div>

                            <div className="mt-4 grid grid-cols-3 gap-4">
                                {uploadedImages.map((image) => (
                                    <div key={image.id} className="overflow-hidden rounded-xl border border-white/8 bg-white/2.5">
                                        <div className="relative h-32 bg-slate-800">
                                            <span className={`absolute left-2 top-2 flex h-5 w-5 items-center justify-center rounded text-[11px] font-medium text-white ${image.badgeColor}`}>
                                                {image.id}
                                            </span>

                                            <button className="absolute bottom-2 right-2 flex h-7 w-7 items-center justify-center rounded-lg bg-black/50 text-white transition hover:bg-black/70">
                                                <Trash2 className="h-3.5 w-3.5" />
                                            </button>

                                            <span className={`absolute bottom-2 left-2 rounded px-2 py-0.5 text-[10px] font-medium ${image.typeColor}`}>
                                                {image.type}
                                            </span>
                                        </div>

                                        <div className="p-3">
                                            <p className="text-sm text-white">{image.name}</p>
                                            <div className="mt-1 flex items-center gap-3 text-[11px] text-slate-500">
                                                <span>{image.size}</span>
                                                <span>{image.resolution}</span>
                                                <span>{image.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                <button className="flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-white/15 py-10 text-xs text-slate-400 transition hover:border-white/30 hover:text-white">
                                    <Plus className="h-5 w-5" />
                                    Add more images
                                </button>
                            </div>

                            <p className="mt-4 text-xs text-slate-500">Maximum 4 images allowed</p>
                        </div>

                        <div className="rounded-2xl border border-white/8 bg-white/2.5 p-6">
                            <div className="flex items-center justify-between">
                                <h2 className="flex items-center gap-2 text-sm font-medium text-white">
                                    2. Ask Your Question
                                    <Info className="h-3.5 w-3.5 text-slate-500" />
                                </h2>

                                <button className="flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300">
                                    Examples
                                    <ChevronDown className="h-3.5 w-3.5" />
                                </button>
                            </div>

                            <div className="relative mt-4">
                                <textarea
                                    rows={4}
                                    placeholder="e.g., What changed between these two images? Is there any new construction? Estimate the extent of change."
                                    className="w-full resize-none rounded-xl border border-white/8 bg-[#02040a] p-4 text-sm text-slate-200 placeholder:text-slate-600 focus:border-blue-500/40 focus:outline-none"
                                />
                                <span className="absolute bottom-3 right-4 text-xs text-slate-600">0 / 1000</span>
                            </div>

                            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                                <div className="flex items-center gap-3">
                                    <button className="flex items-center gap-2 rounded-lg border border-white/8 px-4 py-2.5 text-xs text-slate-300 transition hover:bg-white/5">
                                        <SlidersHorizontal className="h-3.5 w-3.5" />
                                        Advanced Options
                                        <ChevronDown className="h-3.5 w-3.5" />
                                    </button>

                                    <button className="flex items-center gap-2 rounded-lg border border-white/8 px-4 py-2.5 text-xs text-slate-300 transition hover:bg-white/5">
                                        <Sparkles className="h-3.5 w-3.5" />
                                        Auto (Recommended)
                                        <ChevronDown className="h-3.5 w-3.5" />
                                    </button>
                                </div>

                                <button className="flex items-center gap-2 rounded-lg bg-linear-to-r from-blue-500 to-purple-500 px-6 py-2.5 text-sm font-medium text-white transition hover:brightness-110">
                                    <Send className="h-4 w-4" />
                                    Analyze Images
                                </button>
                            </div>

                            <p className="mt-3 text-right text-xs text-slate-500">This may take a few minutes depending on the task.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InputState