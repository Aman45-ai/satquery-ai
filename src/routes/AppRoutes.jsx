import { Routes, Route } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import NewAnalysis from "../components/NewAnalysis";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/analysis/new" element={<NewAnalysis />} />
        </Routes>
    )
}

export default AppRoutes;