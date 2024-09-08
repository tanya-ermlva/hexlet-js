// import str from 'crc-32';
import { str } from 'https://cdn.sheetjs.com/crc-32-latest/package/crc32.mjs';

const make = () => {
  const result = [];
  return result;
};

const set = (map, key, value) => {
  const hashKey = str(key);
  const index = Math.abs(hashKey) % 1000;
  if (map[index] && map[index][0] !== key) {
    return false;
  } map[index] = [key, value];
  return true;
};

const get = (map, key, defaultValue = null) => {
  const hashKey = str(key);
  const index = Math.abs(hashKey) % 1000;

  if (!map[index] || map[index][0] !== key) {
    return defaultValue;
  } return map[index][1];
};

export { make, set, get };
// Коллизии возникают, когда хеш одинаковый, а ключи разные.

// import crc32 from 'crc-32';

// // BEGIN
// const getIndex = (key) => Math.abs(crc32.str(key)) % 1000;

// const make = () => [];

// const hasCollision = (map, key) => {
//   const index = getIndex(key);
//   const [currentKey] = map[index];
//   return currentKey !== key;
// };

// const set = (map, key, value) => {
//   const index = getIndex(key);
//   if (map[index] && hasCollision(map, key)) {
//     return false;
//   }
//   map[index] = [key, value];

//   return true;
// };

// const get = (map, key, defaultValue = null) => {
//   const index = getIndex(key);
//   if (!map[index] || hasCollision(map, key)) {
//     return defaultValue;
//   }
//   const [, value] = map[index];

//   return value;
// };

// export { make, set, get };