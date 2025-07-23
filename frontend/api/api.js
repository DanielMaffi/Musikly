import axios from 'axios';

const URI = "http://localhost:3000"

const responseArtitsts = await axios.get(`${URI}/artists`)
const responseSongs = await axios.get(`${URI}/songs`)

export const artistArray = responseArtitsts.data;
export const songsArray = responseSongs.data;