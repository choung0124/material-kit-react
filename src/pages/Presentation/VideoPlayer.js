function VideoPlayer({ videoSrc }) {
  return (
    <video width="320" height="240" controls autoPlay loop>
      <source src={videoSrc} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

// Usage
<VideoPlayer videoSrc="/path/to/video.mp4" />
