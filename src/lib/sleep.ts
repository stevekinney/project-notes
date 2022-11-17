const defaultDuration = 500;

export const simulateNetwork = async <T>(value: T): Promise<T> => {
  await sleep(1000);
  return value;
};

export const sleep = (duration = defaultDuration): Promise<undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(undefined);
    }, duration);
  });
};

export const block = (duration = defaultDuration) => {
  const start = performance.now();
  while (performance.now() < start + duration) {}
};

export const makeExpensive = <T extends (...args: any[]) => any>(
  fn: T,
  duration = defaultDuration,
): ((...args: Parameters<T>) => ReturnType<T>) => {
  return (...args: Parameters<T>): ReturnType<T> => {
    block(duration);
    return fn(...args);
  };
};
