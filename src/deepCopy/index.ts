const deepCopy = <T>(target: T): T => {
  return JSON.parse(JSON.stringify(target));
};

export default deepCopy;
