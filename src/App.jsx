import { Route, Routes } from "react-router-dom";
import MusicCard from "./components/MusicCard";
import Search from "./components/Search";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="relative flex h-full w-full">
      <Sidebar />
      <div className="w-full h-full">
        <Search />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}
