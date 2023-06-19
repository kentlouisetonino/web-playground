import { forwardRef } from 'react';

interface VideoProps {
  src: string;
  type: string;
  width: number;
}

const VideoPlayer = forwardRef<HTMLVideoElement, VideoProps>(
  ({ src, type, width }, forwardedRef) => {
    return (
      <video width={width} ref={forwardedRef}>
        <source src={src} type={type} />
      </video>
    );
  }
);

VideoPlayer.displayName = 'VideoPlayer';

export default VideoPlayer;
