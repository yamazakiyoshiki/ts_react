const asyncCount = (count = 1): Promise<{ data: number }> => {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: count }), Math.random() * 1000)
  );
};

export { asyncCount };
