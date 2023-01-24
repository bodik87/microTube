import React from "react";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channelDetail }) => (
  <Link
    className="flex gap-2 items-center"
    to={`/channel/${channelDetail?.id?.channelId}`}
  >
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
  </Link>
);

export default ChannelCard;
