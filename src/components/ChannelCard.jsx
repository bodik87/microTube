import React from "react";
import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channelDetail }) => (
  <div className="flex gap-2 items-center py-2">
    <img
      className="rounded-full h-12 w-12"
      src={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
      alt={channelDetail?.snippet?.title}
    />
    <h6>{channelDetail?.snippet?.title}</h6>
    {channelDetail?.statistics?.subscriberCount && (
      <p className="text-base text-gray-500">
        {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString(
          "en-US"
        )}{" "}
        Subscribers
      </p>
    )}
  </div>
);

export default ChannelCard;
