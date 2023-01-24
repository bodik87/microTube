import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Videos from "./Videos";
import ChannelCard from "./ChannelCard";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);

      setChannelDetail(data?.items[0]);

      const videosData = await fetchFromAPI(
        `search?channelId=${id}&part=snippet%2Cid&order=date`
      );

      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);

  return (
    <>
      <div>
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </div>
      <div p={2} display="flex">
        <div sx={{ mr: { sm: "100px" } }} />
        <Videos videos={videos} />
      </div>
    </>
  );
};

export default ChannelDetail;
