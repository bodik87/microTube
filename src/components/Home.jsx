import React, { useEffect, useState } from "react";
import VideosGrid from "./VideosGrid";
import { fetchFromAPI } from "../utils/fetchFromAPI";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("Music");
  const [videos, setVideos] = useState(null);
  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);
  return <VideosGrid videos={videos} />;
}
