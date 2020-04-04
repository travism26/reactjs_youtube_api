import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  // props.videos <-- contains out videos object...
  const renderedList = videos.map((video) => {
    return <VideoItem />
  });
  return <div>{renderedList}</div>;
};

export default VideoList;
