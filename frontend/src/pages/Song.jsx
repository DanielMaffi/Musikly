import React from 'react'
import Player from '../components/Player';
import { Link, useParams } from 'react-router-dom';
import { songsArray } from '../assets/database/songs.js'
import { artistArray } from '../assets/database/artists.js'

const Song = () => {
  const { id } = useParams();

  const { image, name, duration, artist, audio } = songsArray.filter((currentSongObj) => currentSongObj._id === id)[0];

  const artistObj = artistArray.filter((currentArtistObj) => currentArtistObj.name === artist)[0];

  const songsArrayFromArtistObj = songsArray.filter((currentSongObj) => currentSongObj.artist === artist);

  const randomIndex = Math.floor(Math.random() * (songsArrayFromArtistObj.length - 1));
  const randomIndex2 = Math.floor(Math.random() * (songsArrayFromArtistObj.length - 1));

  const randomIdFromArtist = songsArrayFromArtistObj[randomIndex]._id;
  const randomId2FromArtist = songsArrayFromArtistObj[randomIndex2]._id;

  return (
    <div className='song'>
      <div className="song__container">
        <div className="song__image-container">
          <img 
            src={image}
            alt={`imagem da musica ${name}`}
          />
        </div>
      </div>

      <div className="song__bar">
        <Link  to={`/artist/${artistObj._id}`} className="song__artist-image">
          <img 
            width={75}
            height={75}
            src={artistObj.image}
            alt={`imagem do artista ${artistObj.name}`}
          />
        </Link>

        <Player 
          duration={duration}
          randomIdFromArtist={randomIdFromArtist}
          randomId2FromArtist={randomId2FromArtist}
          audio={audio}
        />

        <div>
          <p className='song__name'>{name}</p>
          <p>{artistObj.name}</p>
        </div>
      </div>
    </div>
  )
};

export default Song