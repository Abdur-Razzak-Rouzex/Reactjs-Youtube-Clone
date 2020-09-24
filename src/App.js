import React from "react";

import Grid from "@material-ui/core/Grid";
import youtube from "./api/youtube";

import SearchBar from "./components/SearchBar";
import VideoDetails from "./components/VideoDetails";
import VideoList from "./components/VideoList";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  componentDidMount(){
      this.handleSubmit('Freshers ICT Night,MBSTU-funny stage performance with bangla subtitle-engineering viva')
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video })
  }

  handleSubmit = async (searchTerm) => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResult: 5,
        key: "the_youtube_api_key_here",
        q: searchTerm,
      },
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  render() {
    const { selectedVideo, videos } = this.state;
    return (
      <Grid justify="center" container spacing={8}>
        <Grid item xs={12}>
          <Grid container spacing={8}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetails video={selectedVideo} />
            </Grid>
            <Grid item xs={3}>
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect} /> {/* this is not state, its a function, thats why only this, not this.state */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
