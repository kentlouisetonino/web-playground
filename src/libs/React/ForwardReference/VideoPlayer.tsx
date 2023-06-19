import { ForwardedRef, forwardRef } from 'react';

interface VideoProps {
  src: string;
  type: string;
  width: number;
}

const VideoPlayer = forwardRef(function VideoPlayer(
  { src, type, width }: VideoProps,
  ref: ForwardedRef<HTMLVideoElement>
) {
  return (
    <video width={width} ref={ref}>
      <source src={src} type={type} />
    </video>
  );
});

export default VideoPlayer;
