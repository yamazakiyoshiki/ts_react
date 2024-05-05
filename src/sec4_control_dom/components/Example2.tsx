import { useState, useRef } from "react";

const Case1 = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  console.log(inputRef);

  return (
    <div>
      <h3>ユースケース1</h3>
      <input
        type="text"
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => inputRef.current?.focus()}>
        インプット要素をフォーカスする
      </button>
    </div>
  );
};

const Case2 = () => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  return (
    <div>
      <video ref={videoRef}>
        <source src="/sample.mp4"></source>
      </video>
      <button
        onClick={() => {
          if (playing) {
            videoRef.current?.pause();
          } else {
            videoRef.current?.play();
          }
          setPlaying((prev) => !prev);
        }}
      >
        {playing ? "Stop" : "Play"}
      </button>
    </div>
  );
};

const Example2 = () => {
  return (
    <>
      <Case1 />
      <Case2 />
    </>
  );
};

export default Example2;
