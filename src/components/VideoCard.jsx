import React from "react";
import { Link } from "react-router-dom";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  console.log(snippet);
  return (
    <>
      <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
        <img
          className="rounded-2xl w-full"
          src={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title}
        />
      </Link>
      <p className="text-sm font-semibold">
        {snippet?.title.slice(0, 40) || demoVideoTitle.slice(0, 40)}...
      </p>
      <Link
        className="text-sm text-gray-400"
        to={
          snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl
        }
      >
        {snippet?.channelTitle || demoChannelTitle}
      </Link>
    </>
  );
};

export default VideoCard;
