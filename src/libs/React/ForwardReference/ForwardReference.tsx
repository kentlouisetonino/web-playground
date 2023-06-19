import { useRef } from 'react';
import VideoPlayer from './VideoPlayer';

/**
 * Reference: https://react.dev/reference/react/forwardRef
 *
 * forwardRef lets your component expose a DOM node to parent component with a ref.
 * This let your component receive a ref annd forward it to a child component.
 */
export default function ForwardReference() {
  const ref = useRef<HTMLVideoElement>(null);

  function handlePlay() {
    if (ref.current) {
      ref.current.play();
    }
  }

  function handlePause() {
    if (ref.current) {
      ref.current.pause();
    }
  }

  return (
    <>
      <div className="space-x-3">
        <button
          className="rounded-md border border-black p-3 hover:bg-black hover:text-white"
          onClick={handlePlay}
        >
          Play
        </button>
        <button
          className="rounded-md  border border-red-500 p-3 hover:bg-red-500 hover:text-white"
          onClick={handlePause}
        >
          Pause
        </button>
      </div>
      <br />
      <VideoPlayer
        ref={ref}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        type="video/mp4"
        width={250}
      />
    </>
  );
}
