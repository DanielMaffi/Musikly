import { artistArray } from '../../frontend/src/assets/database/artists.js';
import { songsArray } from '../../frontend/src/assets/database/songs.js';
import { db } from './connect.js';

const newArtistsArray = artistArray.map((currentArtistObj) => {
  const newArtistObj = {...currentArtistObj};
  delete newArtistObj.id;

  return newArtistObj
});

const newSongsArray = songsArray.map((currentSongObj) => {
  const newSongObj = {...currentSongObj};
  delete newSongObj.id;

  return newSongObj
});

const responseSongs = await db.collection('songs').insertMany(newSongsArray);
const responseArtists = await db.collection('artists').insertMany(newArtistsArray);

console.log(responseSongs);
console.log(responseArtists);
