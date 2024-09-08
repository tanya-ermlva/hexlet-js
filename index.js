// import getHello from './src/index.js';

import { make, set, get } from './src/objects13.js';

const map = make();
set(map, 'aaaaa0.462031558722291', 'vvv');
set(map, 'aaaaa0.0585754039730588', 'boom!');

console.log(map);

const result1 = get(map, 'aaaaa0.462031558722291');
const result2 = get(map, 'aaaaa0.0585754039730588');

console.log(result1);
console.log(result2);
