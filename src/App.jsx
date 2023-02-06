import Search from "./components/Search";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <div className="relative flex h-full w-full">
      <Sidebar />
      <div className="main_page">
        <Search />
      </div>
    </div>
  );
}
