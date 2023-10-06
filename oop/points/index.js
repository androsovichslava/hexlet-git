import {Point} from './Point.js'
import {Segment} from './Segment.js'

let p = new Point(4,5);
// console.log(p)
// console.log(p.getX())

let seg = new Segment(new Point(1,2), new Point(6,7));
console.log(seg)
console.log(seg.getEndPoint())