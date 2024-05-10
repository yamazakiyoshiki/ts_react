import React, { useState, useEffect } from "react";

type IntervalIdType = ReturnType<typeof setInterval> | null;

const UserActivityTracker: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [activeTime, setActiveTime] = useState<number>(0);
  const [intervalId, setIntervalId] = useState<IntervalIdType>(null);

  useEffect(() => {
    const handleActivity = () => {
      if (!isActive) {
        setIsActive(true);
        if (intervalId) clearInterval(intervalId);
        const id = setInterval(() => {
          setActiveTime((prev) => prev + 1);
        }, 1000);
        setIntervalId(id);
      }
    };

    document.addEventListener("mousemove", handleActivity);
    document.addEventListener("keydown", handleActivity);

    return () => {
      document.removeEventListener("mousemove", handleActivity);
      document.removeEventListener("keydown", handleActivity);
      if (intervalId) clearInterval(intervalId);
    };
  }, [isActive, intervalId]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (isActive) {
        setIsActive(false);
        clearInterval(intervalId!);
        setIntervalId(null);
      }
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [isActive, intervalId]);

  return (
    <div>
      <div>ユーザーステータス: {isActive ? "アクティブ" : "非アクティブ"}</div>
      <div>アクティブタイム (秒): {activeTime}</div>
    </div>
  );
};

export default UserActivityTracker;
