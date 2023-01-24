import React from "react";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

const Videos = ({ videos }) => {
  if (!videos?.length) return <div>Loading</div>;

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-2">
      {videos.map((item, i) => (
        <div key={i}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </div>
      ))}
    </div>
  );
};

export default Videos;
