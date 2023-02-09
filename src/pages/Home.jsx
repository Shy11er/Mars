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
      <div className="flex flex-col items-center xl:items-stretch">
        <div className="flex flex-col justify-between items-center xl:m-4 xl:flex-row">
          <h1 className="text-4xl font-bold tracking-widest my-5 xl:m-0">
            Discover
          </h1>
          <SelectType />
        </div>
        <div className="flex flex-wrap xl:justify-start xl:content-start justify-center xl:overflow-auto music-cards pb-12 mt-20 xl:mt-0 ">
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
