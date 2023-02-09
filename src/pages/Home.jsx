import React from "react";
import MusicCard from "../components/MusicCard";
import TopCharts from "../components/TopCharts";
import TopArtists from "../components/TopArtists";
import { fetchMusics } from "../redux/slice/Music";
import { useDispatch } from "react-redux";
import SelectType from "../components/SelectType";

const Home = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchMusics());
  }, []);

  return (
    <div className="w-full h-full flex flex-nowrap align-start xl:flex-row flex-col-reverse overflow-auto home-page">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between m-4">
          <h1 className="text-4xl font-bold tracking-widest">Discover</h1>
          <SelectType />
        </div>
        <div className="flex flex-wrap xl:justify-start xl:content-start justify-center xl:overflow-auto music-cards pb-12 ">
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
      </div>
      <div className="flex flex-col h-full xl:items-end items-center xl:mx-10">
        <TopCharts />
        <TopArtists />
      </div>
    </div>
  );
};

export default Home;
