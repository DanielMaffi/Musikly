import React from 'react'
import { faCirclePlay, faBackwardStep, faForwardStep, faCirclePause } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
  const remainingSeconds = Math.floor(seconds % 60).toString().padStart(2, '0');
  return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

const timeInSeconds = (timeString) => {
  const [minutes, seconds] = timeString.split(':').map(Number);
  return (minutes * 60) + seconds;
};

const Player = ({duration, randomIdFromArtist, randomId2FromArtist, audio}) => {
  const audioPlayer = useRef();
  const progressBar = useRef();
  const [isPlaying, setIsPlaying] = useState(false); 
  const [currentTime, setCurrentTime] = useState(formatTime(0));
  const durationInSeconds = timeInSeconds(duration);

  const playPauseAudio = () => {
    isPlaying ? audioPlayer.current.pause() : audioPlayer.current.play();
    setIsPlaying(!isPlaying);
  }
  
  useEffect(() => {
    const intervalId = setInterval(() => {
    if (isPlaying) 
      setCurrentTime(formatTime(audioPlayer.current.currentTime));    

    progressBar.current.style.setProperty('--_progress', ((audioPlayer.current.currentTime / durationInSeconds) * 100) + '%');
    }, 1000);

    return () => {
      clearInterval(intervalId);
    }
  }, [isPlaying]);
  

  return (
    <div className='player'>
      <div className="player__controllers">      
        <Link to={`/song/${randomIdFromArtist}`}>
          <FontAwesomeIcon className='player__icon' icon={faBackwardStep}/>
        </Link>

        <FontAwesomeIcon 
          className='player__icon player__icon--play' 
          icon={isPlaying ? faCirclePause : faCirclePlay}
          onClick={() => playPauseAudio()}
        />

        <Link to={`/song/${randomId2FromArtist}`}>
          <FontAwesomeIcon className='player__icon' icon={faForwardStep}/> 
        </Link>
      </div>

      <div className="player__progress">
        <p>{currentTime}</p>
    
        <div className="player__bar">
          <div ref={progressBar} className="player__bar-progress"></div>
        </div>
        <p>{duration}</p>
      </div>

      <audio ref={audioPlayer} src={audio}></audio>
    </div>
  )
}

export default Player