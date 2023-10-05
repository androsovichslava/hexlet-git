// BEGIN (write your solution here)
function makeDecartPoint(x, y) {
    return {x, y};
}
function makeRectangle(point, width, height) {
  return {point, width, height};

}
function containsOrigin(rectangle) {
     return rectangle.point.x < 0 &&  rectangle.point.y > 0 && rectangle.point.x +rectangle.width > 0 && rectangle.point.y - rectangle.height < 0;

}
function getStartPoint(rectangle) {
    return rectangle.point;
}
function getWidth(rectangle) {
    return rectangle.width;
}
function getHeight(rectangle) {
    return rectangle.height;
}
// END

const p = makeDecartPoint(0, 1);
console.log(p);
const rect = makeRectangle  (p, 4, 5);
console.log(rect);
const start = getStartPoint(rect);
console.log(start);
const width = getWidth(rect);
console.log(width);
console.log(containsOrigin(rect));