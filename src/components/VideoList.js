import { Grid } from "@material-ui/core";
import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const ListOfVideos = videos.map((video, id) => <VideoItem  onVideoSelect={onVideoSelect} key={id} video={video} />);
  return(
      <Grid container spacing={8}>
          {ListOfVideos}
      </Grid>
  )
};

export default VideoList;
