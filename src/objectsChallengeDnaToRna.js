const dnaToRnaMap = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U',
};

const dnaToRna = (string, obj) => {
  const result = [];
  for (const char of string) {
    if (!Object.hasOwn(obj, char)) {
      return null;
    }
    result.push(dnaToRnaMap[char]);
  }
  const updResult = result.join('');
  return updResult;
};

export default dnaToRna;
