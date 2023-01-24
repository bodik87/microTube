import React, { useEffect, useState } from "react";
import Videos from "./Videos";
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
  return <Videos videos={videos} />;
}
