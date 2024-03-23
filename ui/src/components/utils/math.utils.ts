const getRandomNumber = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min) + min);

const getRandomNumberBySize = (n: number): number => {
  const min = parseInt(
    Array.from({ length: n }, (_, i) => (i ? 0 : 1)).join("")
  );
  const max = parseInt(Array.from({ length: n }, () => 9).join(""));

  return getRandomNumber(min, max);
};

const MathUtils = {
  getRandomNumber,
  getRandomNumberBySize
};

export default MathUtils;
