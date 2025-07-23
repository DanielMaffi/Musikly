import React from 'react'
import SongItem from './SongItem'
import { useState } from 'react';

const SongList = ({ songsArray }) => {

  const [maxItems, setMaxItems] = useState(5);

  return (
  <div className="song-list"> 

    {songsArray.filter((currentValue, index) => index < maxItems).map((currentSongObj, index) => (
      <SongItem {...currentSongObj} index={index} key={index}  />
    ))}
    <p className="song-list__see-more" 
      onClick={() => {
        setMaxItems(maxItems + 5);
      }}
    >
      Ver Mais
    </p>
  </div>
  )
};

export default SongList