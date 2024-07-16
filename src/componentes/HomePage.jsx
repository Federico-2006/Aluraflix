import React, { useContext, useState, useEffect } from 'react';
import { VideoContext } from '../componentes/Video/VideoContext';
import './HomePage.css';

const HomePage = () => {
  const { videos, deleteVideo, editVideo } = useContext(VideoContext);
  const [activeVideo, setActiveVideo] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editedVideo, setEditedVideo] = useState(null);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedCategory, setEditedCategory] = useState('');
  const [editedVideoUrl, setEditedVideoUrl] = useState('');
  const [editedDescription, setEditedDescription] = useState('');
  const [editedImageUrl, setEditedImageUrl] = useState('');
  const [forceUpdate, setForceUpdate] = useState(false);

  const categoryOptions = ['Frontend', 'Backend', 'Innovación'];

  useEffect(() => {
    if (editedVideo) {
      setEditedTitle(editedVideo.title);
      setEditedCategory(editedVideo.category);
      setEditedVideoUrl(editedVideo.video);
      setEditedDescription(editedVideo.description);
      setEditedImageUrl(editedVideo.imageUrl);
    }
  }, [editedVideo]);

  const getYouTubeEmbedUrl = (url) => {
    const videoId = url.split('v=')[1];
    const ampersandPosition = videoId?.indexOf('&');
    if (ampersandPosition !== -1) {
      return `https://www.youtube.com/embed/${videoId.substring(0, ampersandPosition)}`;
    }
    return `https://www.youtube.com/embed/${videoId}`;
  };

  const getYouTubeThumbnailUrl = (url) => {
    const videoId = url.split('v=')[1];
    const ampersandPosition = videoId?.indexOf('&');
    if (ampersandPosition !== -1) {
      return `https://img.youtube.com/vi/${videoId.substring(0, ampersandPosition)}/maxresdefault.jpg`;
    }
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  const handleImageClick = (index) => {
    setActiveVideo(index);
  };

  const handleDeleteClick = (index) => {
    deleteVideo(index);
  };

  const openEditModal = (index) => {
    const videoToEdit = videos[index];
    setEditedVideo(videoToEdit);
    setEditedTitle(videoToEdit.title);
    setEditedCategory(videoToEdit.category);
    setEditedVideoUrl(videoToEdit.video);
    setEditedDescription(videoToEdit.description);
    setEditedImageUrl(videoToEdit.imageUrl);
    setEditModalOpen(true);
  };

  const handleReset = () => {
    setEditedTitle('');
    setEditedCategory('');
    setEditedVideoUrl('');
    setEditedDescription('');
    setEditedImageUrl('');
  };

  const handleSaveChanges = () => {
    const updatedVideo = {
      ...editedVideo,
      title: editedTitle,
      category: editedCategory,
      video: editedVideoUrl,
      description: editedDescription,
      imageUrl: editedImageUrl,
    };

    editVideo(videos.indexOf(editedVideo), updatedVideo);

    closeEditModal();
    setForceUpdate(!forceUpdate);
  };

  const closeEditModal = () => {
    setEditedVideo(null);
    setEditModalOpen(false);
  };

  const groupedVideos = videos.reduce((acc, video) => {
    if (!acc[video.category]) {
      acc[video.category] = [];
    }
    acc[video.category].push(video);
    return acc;
  }, {});

  return (
    <div className='container'>
      {Object.keys(groupedVideos).map((category, categoryIndex) => (
        <div key={categoryIndex} className='category-row'>
          {category === 'Frontend' && (
            <img
              src='/img/Frontend.png'
              alt='Frontend'
              className='category-image'
            />
          )}
          {category === 'Backend' && (
            <img
              src='/img/Backend.png'
              alt='Backend'
              className='category-image'
            />
          )}
          {category === 'Innovación' && (
            <img
              src='/img/Innovacion.png'
              alt='Innovación y Gestión'
              className='category-image'
            />
          )}
          <div className="videos-container">
            {groupedVideos[category].map((video, index) => (
              <div key={index} className='video-card'>
                <div className='thumbnail-container'>
                  {activeVideo === index ? (
                    <iframe
                      className='video'
                      src={getYouTubeEmbedUrl(video.video)}
                      title={video.title}
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                      allowFullScreen
                    />
                  ) : (
                    <img
                      src={getYouTubeThumbnailUrl(video.video)}
                      alt={video.title}
                      className='video-thumbnail'
                      onClick={() => handleImageClick(index)}
                    />
                  )}
                  <div className='video-info'>
                    <h3>{video.title}</h3>
                    <p>{video.description}</p>
                  </div>
                </div>
                <div className='video-actions'>
                  <img
                    src='/img/Frame 1.png'
                    alt='Eliminar'
                    className='action-icon'
                    onClick={() => handleDeleteClick(index)}
                  />
                  <img
                    src='/img/Frame 5.png'
                    alt='Editar'
                    className='action-icon'
                    onClick={() => openEditModal(index)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      {editModalOpen && (
         
         
         
        <div className='modal-overlay'>
          
          <div className='modal-dialog'>
          <img src="/img/Cancel.png" className='x' alt="" onClick={closeEditModal} />
            <h2>EDITAR CARD</h2>
           
            <label>
              <p>Título</p>
              <input className='input'
                type='text'
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
              />
            </label>
            <label>
              <p>Categoría</p>
              <select className='input'
                value={editedCategory}
                onChange={(e) => setEditedCategory(e.target.value)}
              >
                {categoryOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
            <label>
              <p>Video</p>
              <input className='input'
                type='text'
                value={editedVideoUrl}
                onChange={(e) => setEditedVideoUrl(e.target.value)}
              />
            </label>
            
            <div className='modal-buttons'>
              <button className='save-button' onClick={handleSaveChanges}></button>
              <button className='cancel-button' onClick={handleReset}>
                
              </button>
            </div>
          </div>
        </div>
      )}
      <footer className='footer'>
        <img src='/img/Footer.png' alt='Footer' className='footer-image' />
      </footer>
    </div>
  );
};

export default HomePage;






