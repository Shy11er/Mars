import React from "react";
import MusicCard from "../components/MusicCard";
import TopCharts from "../components/TopCharts";
import TopArtists from "../components/TopArtists";

const Home = () => {
  return (
    <div className="w-full h-full flex flex-nowrap align-start xl:flex-row flex-col-reverse overflow-auto home-page">
      <div className="flex flex-wrap h-full xl:justify-start xl:content-start justify-center xl:overflow-auto music-cards ">
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
      </div>
      <div className="flex flex-col h-full xl:items-end items-center">
        <TopCharts />
        <TopArtists />
      </div>
    </div>
  );
};

export default Home;
