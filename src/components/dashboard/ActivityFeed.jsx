import React from "react";
import { CheckCircle2, Cpu, MessageSquare, ShieldCheck, Play } from "lucide-react";

const activities = [
    {
        time: "09:15 AM",
        icon: CheckCircle2,
        iconBg: "bg-emerald-500/15 text-emerald-400",
        title: "Change detection completed",
        subtitle: "Delhi Urban Expansion"
    },
    {
        time: "09:14 AM",
        icon: Cpu,
        iconBg: "bg-blue-500/15 text-blue-400",
        title: "Model selected",
        subtitle: "Change Detection Model v2.1"
    },
    {
        time: "09:14 AM",
        icon: MessageSquare,
        iconBg: "bg-blue-500/15 text-blue-400",
        title: "Query understood",
        subtitle: "Task: Change VQA"
    },
    {
        time: "09:13 AM",
        icon: ShieldCheck,
        iconBg: "bg-emerald-500/15 text-emerald-400",
        title: "Images validated",
        subtitle: "2 images • Compatible"
    },
    {
        time: "09:13 AM",
        icon: Play,
        iconBg: "bg-white/10 text-slate-300",
        title: "Analysis started",
        subtitle: "Processing images..."
    }
];

const ActivityFeed = () => {
    return (
        <div className="rounded-2xl border border-white/8 bg-white/2.5 p-5">
            <h2 className="mb-4 text-sm font-medium text-white">AI Activity Feed</h2>

            <div className="space-y-5">
                {activities.map((activity, index) => {
                    const Icon = activity.icon;

                    return (
                        <div key={index} className="flex gap-3">
                            <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${activity.iconBg}`}>
                                <Icon className="h-4 w-4" />
                            </div>

                            <div>
                                <p className="text-[11px] text-slate-500">{activity.time}</p>
                                <p className="text-sm text-white">{activity.title}</p>
                                <p className="text-xs text-slate-400">{activity.subtitle}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ActivityFeed;