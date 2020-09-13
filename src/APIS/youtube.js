import axios from 'axios';
const KEY='AIzaSyAkq5hVfWL6CV7FZQfZw84WieyyZLuLk7o';
export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part : 'snippet',
        maxResults : 5,
        key : KEY
    }
});