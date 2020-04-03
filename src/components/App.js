import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";

class App extends React.Component {
  onTermSubmit = term => {
    youtube.get("/search", {
      params: {
        q: term
      }
    });
  };

  render() {
    console.log(process.env.REACT_APP_YOUTUBE_API_KEY);

    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
