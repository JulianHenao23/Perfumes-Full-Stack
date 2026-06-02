import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePerfumePage from "./pages/CreatePerfumePage";
import EditPerfumePage from "./pages/EditPerfumePage";

function App() {
  return (
    <div className="w-full max-w-250 mx-auto px-4 py-8">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/createPerfume" element={<CreatePerfumePage />} />
        <Route path="/editPerfume/:id" element={<EditPerfumePage />} />
      </Routes>
    </div>
  );
}

export default App;
