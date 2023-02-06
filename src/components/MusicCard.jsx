import React from "react";

const MusicCard = ({
  imageUrl = "https://images.genius.com/d902a0a48c2e7d097f2805c32d782fc9.640x640x1.jpg",
  title = "Пушка",
  gang = "10AGE",
}) => {
  return (
    <div className="w-60 h-72 p-3 rounded-xl bg-gradient-to-tl from-white/10 to-[#483d8b] backdrop-blur-lg m-5">
      <img src={imageUrl} alt="logo" />
      <h1 className="text-lg text-white">{title}</h1>
      <p>{gang}</p>
    </div>
  );
};

export default MusicCard;
