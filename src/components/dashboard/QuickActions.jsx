import React from "react";
import { Upload, Layers, FileText, Brain } from "lucide-react";

const actions = [
    { label: "Upload Image(s)", icon: Upload, style: "border-blue-500/30 bg-blue-500/10 text-blue-300" },
    { label: "Browse Datasets", icon: Layers, style: "border-purple-500/30 bg-purple-500/10 text-purple-300" },
    { label: "View Reports", icon: FileText, style: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300" },
    { label: "Model Hub", icon: Brain, style: "border-rose-500/30 bg-rose-500/10 text-rose-300" }
]

const QuickActions = () => {
    return (
        <div className="rounded-2xl border border-white/8 bg-white/2.5 p-5 h-full">
            <h2 className="mb-4 text-sm font-medium text-white">Quick Actions</h2>

            <div className="grid grid-cols-2 gap-3">
                {actions.map((action) => {
                    const Icon = action.icon;

                    return (
                        <button
                            key={action.label}
                            className={`cursor-pointer flex flex-col items-center justify-center gap-2 rounded-xl border p-4 text-xs transition hover:brightness-110 ${action.style}`}
                        >
                            <Icon className="h-5 w-5" />
                            <span>{action.label}</span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default QuickActions;