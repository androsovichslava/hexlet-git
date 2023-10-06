import Point from "./Point.js";
import Segment from "./Segment.js";

const point1 = new Point(1, 10);
 
console.log(point1.toString()); // => (1, 10)
// const point1 = new Point(1, 10);
const point2 = new Point(11, -3);
const segment1 = new Segment(point1, point2);
console.log(segment1.toString()); // => [(1, 10), (11, -3)]
 
const segment2 = new Segment(point2, point1);
console.log(segment2.toString()); // => [(11, -3), (1, 10)]
