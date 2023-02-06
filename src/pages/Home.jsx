import React from "react";
import MusicCard from "../components/MusicCard";
import TopCharts from "../components/TopCharts";

const Home = () => {
  return (
    <div className="w-full h-full overflow-auto flex flex-wrap align-start">
      {/* <MusicCard />
      <MusicCard />
      <MusicCard />
      <MusicCard /> */}
      <TopCharts />
    </div>
  );
};

export default Home;
