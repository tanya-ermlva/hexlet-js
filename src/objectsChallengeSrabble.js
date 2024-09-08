const getLettersCountObject = (string) => {
  const result = {};
  for (const char of string) {
    if (Object.hasOwn(result, char)) {
      result[char] += 1;
    } else {
      result[char] = 1;
    }
  } return result;
};

const checkIntersections = (obj1, obj2) => {
  for (const char in obj1) {
    if (Object.hasOwn(obj2, char)) {
      return true;
    }
  } return false;
};

const scrabble = (string, word) => {
  const stringLower = string.toLowerCase();
  const wordLower = word.toLowerCase();
  const lettersInString = getLettersCountObject(stringLower);
  const lettersInWord = getLettersCountObject(wordLower);
  console.log(lettersInString);
  console.log(lettersInWord);
  if (checkIntersections(lettersInString, lettersInWord)) {
    for (const letter in lettersInWord) {
      console.log(letter);
      if (Object.hasOwn(lettersInString, letter)) {
        console.log(letter);
        if (lettersInString[letter] < lettersInWord[letter]) {
          return false;
        }
      } else return false;
    }
    return true;
  } return false;
};

export default scrabble;
