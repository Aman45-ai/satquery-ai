import React from "react";
import { Eye } from "lucide-react";

const analyses = [
    {
        name: "Delhi Urban Expansion",
        subtitle: "Bi-temporal Change Analysis",
        type: "Change Analysis",
        typeStyle: "bg-blue-500/15 text-blue-300",
        images: 2,
        confidence: 91,
        date: "Today, 09:15 AM"
    },
    {
        name: "Flood Detection in Assam",
        subtitle: "SAR + Optical Analysis",
        type: "Optical + SAR",
        typeStyle: "bg-cyan-500/15 text-cyan-300",
        images: 2,
        confidence: 94,
        date: "Today, 08:02 AM"
    },
    {
        name: "Agricultural Land Classification",
        subtitle: "Single Image VQA",
        type: "VQA",
        typeStyle: "bg-purple-500/15 text-purple-300",
        images: 1,
        confidence: 87,
        date: "Yesterday"
    },
    {
        name: "Forest Change 2019-2024",
        subtitle: "Change VQA",
        type: "Change VQA",
        typeStyle: "bg-blue-500/15 text-blue-300",
        images: 2,
        confidence: 89,
        date: "Aug 31, 2024"
    },
    {
        name: "Building Extraction",
        subtitle: "Grounding",
        type: "Grounding",
        typeStyle: "bg-pink-500/15 text-pink-300",
        images: 1,
        confidence: 82,
        date: "Aug 30, 2024"
    }
];

const RecentAnalyses = () => {
    return (
        <div className="rounded-2xl border border-white/8 bg-white/2.5 p-5">
            <div className="mb-4 flex items-center justify-between">
                <h2 className="text-sm font-medium text-white">Recent Analyses</h2>
                <button className="text-xs text-slate-400 hover:text-white">View All</button>
            </div>

            <table className="w-full text-left text-sm">
                <thead>
                    <tr className="text-xs text-slate-500">
                        <th className="pb-3 font-normal">Analysis Name</th>
                        <th className="pb-3 font-normal">Type</th>
                        <th className="pb-3 font-normal">Images</th>
                        <th className="pb-3 font-normal">Confidence</th>
                        <th className="pb-3 font-normal">Date</th>
                        <th className="pb-3 font-normal">Status</th>
                        <th className="pb-3 font-normal">Action</th>
                    </tr>
                </thead>

                <tbody>
                    {analyses.map((analysis) => (
                        <tr key={analysis.name} className="border-t border-white/5">
                            <td className="py-3">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-lg bg-white/5" />
                                    <div>
                                        <p className="text-sm text-white">{analysis.name}</p>
                                        <p className="text-xs text-slate-500">{analysis.subtitle}</p>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <span className={`rounded-md px-2 py-1 text-xs ${analysis.typeStyle}`}>
                                    {analysis.type}
                                </span>
                            </td>

                            <td className="text-slate-300">{analysis.images}</td>

                            <td>
                                <div className="flex items-center gap-2">
                                    <span className="text-slate-300">{analysis.confidence}%</span>
                                    <div className="h-1 w-14 overflow-hidden rounded-full bg-white/10">
                                        <div
                                            className="h-full rounded-full bg-emerald-400"
                                            style={{ width: `${analysis.confidence}%` }}
                                        />
                                    </div>
                                </div>
                            </td>

                            <td className="text-slate-400">{analysis.date}</td>

                            <td>
                                <span className="flex items-center gap-1.5 text-xs text-emerald-400">
                                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                    Completed
                                </span>
                            </td>

                            <td>
                                <button className="text-slate-400 hover:text-white">
                                    <Eye className="h-4 w-4" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RecentAnalyses;