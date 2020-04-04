import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  // props.videos <-- contains out videos object...
  const renderedList = videos.map(video => {
    return <VideoItem video={video} onVideoSelect={onVideoSelect} />;
  });
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
