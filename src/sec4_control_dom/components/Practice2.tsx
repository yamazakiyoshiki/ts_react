import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";

type VideoProps = {
  path: string;
};

type RefType = {
  videoPlay: () => void;
  videoPause: () => void;
};

const Video = forwardRef(({ path }: VideoProps, ref: React.Ref<RefType>) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useImperativeHandle(ref, () => ({
    videoPlay: () => {
      videoRef.current?.play();
    },
    videoPause() {
      videoRef.current?.pause();
    },
  }));

  return (
    <video style={{ maxWidth: "100%" }} ref={videoRef}>
      <source src={path}></source>
    </video>
  );
});

const Practice2 = () => {
  const [playing, setPlaying] = useState(false);

  const ref = useRef<RefType>(null);

  return (
    <div>
      <Video ref={ref} path="/sample.mp4" />
      <button
        onClick={() => {
          if (playing) {
            ref.current?.videoPause();
          } else {
            ref.current?.videoPlay();
          }
          setPlaying((prev) => !prev);
        }}
      >
        {playing ? "Stop" : "Play"}
      </button>
    </div>
  );
};

export default Practice2;
