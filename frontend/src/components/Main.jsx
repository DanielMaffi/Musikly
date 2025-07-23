import React from 'react'
import ItemList from './ItemList'
import { artistArray } from '../assets/database/artists'
import { songsArray } from '../assets/database/songs'

const Main = ({ type }) => {
  return (
    <div className='main'> 
      {/*type === 'artists' || type === undefined ? (*/}
      {[undefined, 'artists'].includes(type) ? (  
        <ItemList 
          title="Artista Populares"
          maxItems={10}
          itemsArray={artistArray}
          path="/artists"
          idPath="/artist"
        />
      ) : (
        <></>
      )}
      
      {/* {type === 'songs' || type === undefined ? ( */}
      {[undefined, 'songs'].includes(type) ? (
        <ItemList 
          title="Musicas Populares"
          maxItems={20}
          itemsArray={songsArray}
          path="/songs"
          idPath="/song"
        />
      ) : ( 
        <></>
      )}
    
    </div>
  )
}

export default Main