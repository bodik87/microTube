import React from "react";
import VideoItem from "./VideoItem";
import ChannelCard from "./ChannelCard";
import Loader from "./Loader";

const VideosGrid = ({ videos }) => {
  if (!videos?.length) return <Loader />;

  return (
    <div className="mt-2 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-2">
      {videos.map((item, i) => (
        <div key={i}>
          {item.id.videoId && <VideoItem video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </div>
      ))}
    </div>
  );
};

export default VideosGrid;
