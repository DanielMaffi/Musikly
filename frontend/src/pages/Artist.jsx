import React from 'react'
import SongList from '../components/SongList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { Link, useParams } from 'react-router-dom'
import { artistArray } from '../assets/database/artists.js'
import { songsArray } from '../assets/database/songs.js'

const Artist = () => {
  const { id } = useParams();

  const {name, banner} = artistArray.filter((currentArtistObj) => currentArtistObj._id === id)[0];
  const songsArrayFromArtistObj = songsArray.filter((currentSongObj) => currentSongObj.artist === name);

  const randomIndex = Math.floor(Math.random() * (songsArrayFromArtistObj.length - 1));
  const randomidFromArtist = songsArrayFromArtistObj[randomIndex]._id;

  return (
    <div className="artist">
      <div 
        className="artist__header" 
        style={{backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)), url(${banner})`}}
      >
        <h2 className="artist__title">{name}</h2>
      </div>

      <div className="artist__body">
        <h2>Populares</h2>
        <SongList songsArray={songsArrayFromArtistObj}/>
      </div>

      <Link to={`/song/${randomidFromArtist}`}>
        <FontAwesomeIcon 
          className='single-item__icon single-item__icon--artist' 
          icon={faCirclePlay} 
        />
      </Link>
    </div>
  )
}

export default Artist