import React from "react";
import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";

// import VideoList from "./components/VideoList";
import { Grid } from "@material-ui/core";
import youtube from "./api/youtube";
import VideoList from "./components/VideoList";
const YT_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  componentDidMount(){
    this.handleSubmit()
  }

  onVideoSelect = (video) => {
    this.setState({selectedVideo: video})
  }

  handleSubmit = async (searchTerm) => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: YT_API_KEY,
        q: searchTerm,
      },
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  render() {
    const { videos, selectedVideo } = this.state;
    return (
      <Grid justify="center" container spacing={16}>
        <Grid item xs={12}>
          <Grid container spacing={16}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetail video={selectedVideo} />
            </Grid>
            <Grid item xs={4}>
              <VideoList onVideoSelect={this.onVideoSelect} videos={videos} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
