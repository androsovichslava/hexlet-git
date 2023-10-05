import getGcd from './utils.js';

function makeRational(x1, y1) {
    let x = x1;
    let y = y1;
    let maxDev = getGcd(x, y);
    x = x / maxDev;
    y = y / maxDev;
    return {x, y};
  
  }
  
  function getNumer(rational) {
    return rational.x;
  }
  // END
  function getDenom(rational) {
    return rational.y;
  }
  function add(rat1, rat2) {
    let x = rat1.x * rat2.y + rat2.x * rat1.y;
    let y = rat1.y * rat2.y;
    return makeRational(x, y);
  }
  
  function sub(rat1, rat2) {
    let x = rat1.x * rat2.y - rat2.x * rat1.y;
    let y = rat1.y * rat2.y;
    return makeRational(x, y);
  }
  
  const ratToString = (rat) => `${getNumer(rat)}/${getDenom(rat)}`;
  
  let rat1 = makeRational(3, 9);
  let rat2 = makeRational(10, 3);
  console.log(rat1);
  console.log(rat2);
  console.log(add(rat1, rat2));