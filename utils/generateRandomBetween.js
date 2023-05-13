const generateRandomBetween = (min, max, exclude) => {
  const minNumber = Math.ceil(min);
  const maxNumber = Math.floor(max);

  const randomNumber =
    Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;

  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
};

export default generateRandomBetween;
