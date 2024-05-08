import React, { useEffect, useLayoutEffect, useState } from "react";

const Example5 = () => {
  const [isDisp, setIsDisp] = useState(true);
  return (
    <>
      {isDisp && <Timer />}
      <button onClick={() => setIsDisp((prev) => !prev)}>
        {isDisp ? "非表示" : "表示"}
      </button>
    </>
  );
};

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunnign] = useState(false);

  useEffect(() => {
    console.log("init");
    let intervalId = 0;
    if (isRunning) {
      intervalId = window.setInterval(() => {
        console.log("interval called");
        setTime((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      window.clearInterval(intervalId);
      console.log("end");
    };
  }, [isRunning]);

  useEffect(() => {
    console.log("updated");
    document.title = "counter" + time;
    window.localStorage.setItem("time-key", time.toString());

    return () => {
      console.log("updated ent");
    };
  }, [time]);

  useLayoutEffect(() => {
    const timeStr = window.localStorage.getItem("time-key");
    if (timeStr !== null) {
      let _time = parseInt(timeStr, 10);
      setTime(_time);
    }
  }, []);

  const toggle = () => {
    setIsRunnign((prev) => !prev);
  };

  const reset = () => {
    setTime(0);
    setIsRunnign(false);
  };

  return (
    <>
      <h3>
        <time>{time}</time>
        <span>秒経過</span>
      </h3>
      <div>
        <button onClick={toggle}>{isRunning ? "一時停止" : "スタート"}</button>
        <button onClick={reset}>リセット</button>
      </div>
    </>
  );
};

export default Example5;
