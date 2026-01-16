import { Route, Routes } from "react-router-dom";
import DashboardLayout from "../components/layout/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard";

const ManagerRoutes = () => (
  <Routes>
    <Route element={<DashboardLayout />}>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="members" element={<div>Members</div>} />
      <Route path="gyms" element={<div>Gyms</div>} />
      <Route path="revenue" element={<div>Revenue</div>} />
      <Route path="reports" element={<div>Reports</div>} />
      <Route path="settings" element={<div>Settings</div>} />
    </Route>
  </Routes>
);

export default ManagerRoutes;
