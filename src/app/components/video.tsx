import React from "react";

const VideoPlayer = () => {
  return (
    <div className="flex justify-center my-28">

      <div className="aspect-w-8 aspect-h-9">
        <iframe
          className="w-auto h-auto"
          src="FUNCIONAMIENTO.mp4"
          title="Video de Funcionamiento"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};


export default VideoPlayer;
