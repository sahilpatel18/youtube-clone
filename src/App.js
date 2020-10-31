import React from "react";
import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
// import VideoList from "./components/VideoList";
import { Grid } from "@material-ui/core";
import youtube from "./api/youtube";

class App extends React.Component {
  render() {
    return (
      <Grid justify="center" container spacing={16}>
        <Grid item xs={12}>
          <Grid container spacing={16}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetail />
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
