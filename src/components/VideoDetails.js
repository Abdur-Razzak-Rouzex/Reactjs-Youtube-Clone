import React from "react";
import Typegraphy from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const VideoDetails = ({ video }) => {
  if (!video) return <div><h1>Search to see videos</h1></div>;

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <React.Fragment>
      <Paper elevation={6} style={{ height: "60%" }}>
        <iframe
          frameBorder="0"
          height="100%"
          width="100%"
          title="Video Player"
          src={videoSrc}
        />
      </Paper>
      <Paper elevation={6} style={{ padding: "15px" }}>
        <Typegraphy variant="h6">
          {video.snippet.title} - {video.snippet.channelTitle}
        </Typegraphy>
        <Typegraphy variant="subtitle1">
          {video.snippet.channelTitle}
        </Typegraphy>
        <Typegraphy variant="subtitle2">{video.snippet.description}</Typegraphy>
      </Paper>
    </React.Fragment>
  );
};

export default VideoDetails;
