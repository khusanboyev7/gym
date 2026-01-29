import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "../components/layout/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import MemberManagement from "../pages/Dashboard/MemberManagement";
import CreateMember from "../pages/Members/CreateMember/CreateMember";
import Settings from "../pages/Settings/Settings";
import Reports from "../pages/Reports/ReportsMain";

const ManagerRoutes = () => (
  <Routes>
    {/* Root route / ga kirsa /manager/dashboard ga yo'naltiradi */}
    <Route path="/" element={<Navigate to="/manager/dashboard" />} />

    <Route path="/manager" element={<DashboardLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="dashboard" element={<Dashboard />} />

      <Route path="members">
        <Route index element={<MemberManagement />} />
        <Route path="create" element={<CreateMember />} />
        <Route path="details/:email" element={<div>Member Details Page</div>} />
        <Route
          path="payment/:email"
          element={<div>Receive Payment Page</div>}
        />
      </Route>

      <Route path="reports" element={<Reports />} />
      <Route path="settings" element={<Settings />} />

      <Route path="*" element={<div>404 Not Found</div>} />
    </Route>
  </Routes>
);

export default ManagerRoutes;
