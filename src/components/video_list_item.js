import React from "react";

const VideoListItem = ({ video, onVideoSelect }) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <ul onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <img className="previewPic" src={imageUrl} />
        <div className="media-body">
          <div className="media-heading"><strong>{video.snippet.title}</strong></div>
        </div>
      </div>
    </ul>
  );
};

export default VideoListItem;
