import axios from "axios";

const KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
console.log("KEY:"+KEY);

// Some reason my object is not getting picked up ... :thinkingface:
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY
  }
});
