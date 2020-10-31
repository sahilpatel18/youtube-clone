import React from "react";
import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";

// import VideoList from "./components/VideoList";
import { Grid } from "@material-ui/core";
import youtube from "./api/youtube";
const YT_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

class App extends React.Component {
  state = {
    video: [],
    selectedVideo: null,
  };

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
    return (
      <Grid justify="center" container spacing={16}>
        <Grid item xs={12}>
          <Grid container spacing={16}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetail video={this.state.selectedVideo} />
            </Grid>
            <Grid item xs={4}>
              VideoList
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
