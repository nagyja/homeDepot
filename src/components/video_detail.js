import React from "react";


const VideoDetail = ({ video , vidCategory}) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  const videoCat = "blah";

  return (
    <div className="video-detail col-md-6">
      <row>  
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={url} />
        </div>
      </row>
      <row>
        <div className="details">
          <div id="vidCat"></div>
          <h2 id="videoTitle"><strong>{video.snippet.title}</strong></h2>
          <div id="vidDescription">{video.snippet.description}</div>
          <div id="goToStore"></div>
          <div id="vidSocial">Share:<br/>
            <a className="socialIcon" href="https://www.facebook.com/homedepot">
              <img src="../src/public/assets/socIconFB.png" width="40" height="40"/></a>
            <a className="socialIcon" href="https://twitter.com/HomeDepot">
              <img src="../src/public/assets/socIconTW.png" width="40" height="40"/></a>
            <a className="socialIcon" href="http://pinterest.com/homedepot/">
              <img src="../src/public/assets/socIconPN.png" width="40" height="40"/></a>
            <a className="socialIcon" href="http://ext.homedepot.com/community/blog/">
              <img src="../src/public/assets/socIconBL.png" width="40" height="40"/></a>
            <a className="socialIcon" href="http://www.youtube.com/user/homedepot">
              <img src="../src/public/assets/socIconYT.png" width="40" height="40"/></a>
          </div>
        </div>
      </row>  
    </div>  
  );
};

export default VideoDetail;
