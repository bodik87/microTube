import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import Videos from "./Videos";

const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <div>
      <p>
        Результати пошуку за запитом
        <span style={{ color: "#FC1503" }}> {searchTerm}</span>
      </p>
      <div className="flex">
        <div style={{ mr: { sm: "100px" } }} />
        {<Videos videos={videos} />}
      </div>
    </div>
  );
};

export default SearchFeed;
