import {Point} from './Point.js';
import {Segment} from './Segment.js';

// BEGIN (write your solution here)
function solution (segment) {
    let beginPoint = segment.beginPoint;
    let endPoint =  segment.endPoint;
    return {
        endPoint, beginPoint
    }

}
let seg = new Segment(new Point(1,2), new Point(6,7));

console.log(seg);
// console.log(solution(seg))
