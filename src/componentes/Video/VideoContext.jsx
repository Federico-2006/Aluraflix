import React, { createContext, useState, useEffect } from 'react';

const VideoContext = createContext();

const VideoProvider = ({ children }) => {
  const initialVideos = JSON.parse(localStorage.getItem('videos')) || [];
  const [videos, setVideos] = useState(initialVideos);

  useEffect(() => {
    localStorage.setItem('videos', JSON.stringify(videos));
  }, [videos]);

  const addVideo = (video) => {
    setVideos([...videos, video]);
  };

  const deleteVideo = (index) => {
    const updatedVideos = [...videos];
    updatedVideos.splice(index, 1);
    setVideos(updatedVideos);
  };

  const editVideo = (index, updatedVideo) => {
    const updatedVideos = [...videos];
    updatedVideos[index] = updatedVideo;
    setVideos(updatedVideos);
  };

  return (
    <VideoContext.Provider value={{ videos, addVideo, deleteVideo, editVideo }}>
      {children}
    </VideoContext.Provider>
  );
};

export { VideoContext, VideoProvider };

