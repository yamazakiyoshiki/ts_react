import React, { useEffect, useState } from "react";

const useLocalStorage = (key: string, desc: string) => {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved !== null ? JSON.parse(saved) : desc;
  });

  useEffect(() => {
    const newString = localStorage.setItem(key, JSON.stringify(value));
    console.log(newString);
  }, [key, value]);
  return [value, setValue] as const;
};

export default useLocalStorage;
