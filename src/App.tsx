import { Routes, Route } from "react-router-dom";
import "./globals.css";

const App = () => {
  return (
    <main className="flex h-screen">
      {/* public routes */}
      <Route path="/sing-in" element={<SingninForm />} />
      {/* private routes */}
      <Route index element={<Home />} />
    </main>
  );
};

export default App;
