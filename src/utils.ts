const chooseRandom = (
  arr: Array<string>,
  multiply: number = 1
): Array<object> => {
  const result: Array<object> = [];
  for (let i = 0; i < multiply; i++) {
    const randomIndex = Math.round(Math.random() * (arr.length - 1));
    result.push({ card: arr[randomIndex], panjangArray: arr.length });
    arr.splice(randomIndex, 1);
  }
  return result;
};

export { chooseRandom };
