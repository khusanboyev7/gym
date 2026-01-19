import { Routes, Route } from "react-router-dom";
import DashboardLayout from "../components/layout/DashboardLayout";

import Dashboard from "../pages/Dashboard/Dashboard";
import MemberManagement from "../pages/Dashboard/MemberManagement";
import CreateMember from "../pages/Members/CreateMember";
import Settings from "../pages/Settings/Settings"; 

const ManagerRoutes = () => (
  <Routes>
    <Route element={<DashboardLayout />}>

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

      <Route path="settings" element={<Settings />} />

      <Route path="*" element={<div>404 Not Found</div>} />
    </Route>
  </Routes>
);

export default ManagerRoutes;
