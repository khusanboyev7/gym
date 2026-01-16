import { Routes, Route, Navigate } from "react-router-dom";
import MemberApp from "./Manager/src/App";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/manager/dashboard" replace />} />
      <Route path="/manager/*" element={<MemberApp />} />
    </Routes>
  );
};

export default App;
