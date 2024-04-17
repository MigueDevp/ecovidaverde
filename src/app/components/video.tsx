import React from "react";

const VideoPlayer = () => {
  return (
    <div className="my-12">
      <div className="aspect-w-16 aspect-h-9">
        <video
          controls 
          className="w-full h-full"
          src="/FUNCIONAMIENTO.mp4"
          title="Video de Funcionamiento"
          width={640} 
          height={360} 
          autoPlay={false} 
        ></video>
      </div>
    </div>
  );
};

export default VideoPlayer;
