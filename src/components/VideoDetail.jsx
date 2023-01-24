import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import Loader from "./Loader";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const [speed, setSpeed] = useState(1.75);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  if (!videoDetail?.snippet) return <Loader />;

  const {
    snippet: { title },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <div className="mt-2">
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${id}`}
        controls
        playing={true}
        playbackRate={1.75}
      />
      <p className="text-sm mt-2">{title}</p>
    </div>
  );
};

export default VideoDetail;
