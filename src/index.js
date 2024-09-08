import _ from 'https://cdn.skypack.dev/lodash';

const getHello = () => {
  const text = 'Hello, Hexlet!';
  const array = [1, 2, 3];
  console.log(_.map(array, (n) => n * 2)); // Output: [2, 4, 6]
  console.log(text);
};

export default getHello;
