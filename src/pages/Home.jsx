import React from "react";
import MusicCard from "../components/MusicCard";
import TopCharts from "../components/TopCharts";
import TopArtists from "../components/TopArtists";

const Home = () => {
  return (
    <div className="w-full h-full overflow-auto flex flex-wrap align-start flex-col">
      {/* <MusicCard />
      <MusicCard />
      <MusicCard />
      <MusicCard /> */}
      {/* <TopCharts /> */}
      <TopArtists />
    </div>
  );
};

export default Home;
