import React from "react";
import Sidebar from "../layout/Sidebar"
import HeroBanner from "./dashboard/HeroBanner";
import StatsCard from "./dashboard/StatsCard";

import RecentAnalyses from "./dashboard/RecentAnalyses";
import QuickActions from "./dashboard/QuickActions";
import AnalysisTypes from "./dashboard/AnalysisTypes";
import Welcome from "./dashboard/Welcome";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#020611] text-white grid grid-cols-[250px_1fr_250px]">
      <Sidebar />
      <div className="py-3 px-2">
        <div className="py-1">
          <Welcome />
        </div>
        <div className=" py-1">
          <StatsCard />
        </div>
        <div className="py-1 ">
          <HeroBanner />
        </div>
        <div className="py-1 gap-2">
          <RecentAnalyses />
        </div>
      </div>
      <div className="flex flex-col gap-1 py-3 px-1 h-full">
        <div className="py-1 flex-1">
          <AnalysisTypes />
        </div>
        <div className="py-1 flex-1">
          <QuickActions />
        </div>

      </div>
    </div>
  );
};

export default Dashboard;