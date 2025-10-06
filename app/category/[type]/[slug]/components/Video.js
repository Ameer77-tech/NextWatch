"use client";

import React from "react";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const TrailerPlayer = ({ ytKey }) => {
  if (!ytKey) return null;

  return (
    <div className="aspect-video w-full max-w-4xl mx-auto rounded-xl overflow-hidden">
      <ReactPlayer
        src={`https://www.youtube.com/watch?v=${ytKey}`}
        controls={true}
        playing={true}
        playIcon={false}
        width="100%"
        height="100%"
        autoPlay={true}
        config={{
          youtube: {
            playerVars: {
              modestbranding: 1,
              rel: 0,
              showinfo: 0,
            },
          },
        }}
        light={false}
        loop={false}
        muted={false}
        volume={0.8}
        playbackRate={1.0}
        pip={false}
        stopOnUnmount={true}
        progressInterval={1000}
        playsinline={true}
        onReady={() => {}}
        onStart={() => {}}
        onPlay={() => {}}
        onPause={() => {}}
        onBuffer={() => {}}
        onBufferEnd={() => {}}
        onSeek={() => {}}
        onEnded={() => {}}
        onError={() => {}}
        onProgress={() => {}}
        onDuration={() => {}}
      />
    </div>
  );
};

export default TrailerPlayer;
