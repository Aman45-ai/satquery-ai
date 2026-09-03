import React from "react";
import { Activity, Image, Target, Clock3 } from "lucide-react";

const StatsCard = () => {
    const stats = [
        {
            label: "Total Analyses",
            value: "248",
            change: "12.5%",
            trend: "up",
            icon: Activity,
            iconBg: "bg-blue-500/15 text-blue-400"
        },
        {
            label: "Images Processed",
            value: "1,429",
            change: "8.2%",
            trend: "up",
            icon: Image,
            iconBg: "bg-purple-500/15 text-purple-400"
        },
        {
            label: "Avg. Confidence",
            value: "91.4%",
            change: "3.1%",
            trend: "up",
            icon: Target,
            iconBg: "bg-emerald-500/15 text-emerald-400"
        },
        {
            label: "Processing Time",
            value: "2.4 min",
            change: "5.8%",
            trend: "down",
            icon: Clock3,
            iconBg: "bg-orange-500/15 text-orange-400"
        }
    ];

    return (
        <div className="grid grid-cols-4 gap-5">
            {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                    <div key={stat.label} className="rounded-2xl border border-white/8 bg-white/2.5 p-5">
                        <div className="flex items-center gap-4">
                            <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${stat.iconBg}`}>
                                <Icon className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="text-xs text-slate-400">{stat.label}</p>
                                <p className="mt-1 text-2xl font-semibold text-white">{stat.value}</p>
                            </div>
                        </div>
                        <p className={`mt-3 text-xs ${stat.trend === "up" ? "text-emerald-400" : "text-rose-400"}`}>
                            {stat.trend === "up" ? "↑" : "↓"} {stat.change} from last month
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default StatsCard;