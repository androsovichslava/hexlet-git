// BEGIN (write your solution here)
function makeSegment(beginPoint, endPoint) {
    return {
      beginPoint: beginPoint,
      endPoint: endPoint,
    }
  }
  
  function getMidpointOfSegment(segment) {
    return {
      x:(segment.beginPoint.x  + segment.endPoint.x) / 2,
      y:(segment.beginPoint.y + segment.endPoint.y) / 2,
    }
  }
  
  function getBeginPoint(segment) {
    return segment.beginPoint;
  }
  function getEndPoint(segment) {
    return segment.endPoint;
  }
  // END
  const beginPoint = {x:3, y:2}
  const endPoint = {x:2, y:3};
  const segment = makeSegment(beginPoint, endPoint);
  console.log(beginPoint);
  console.log(endPoint);
  console.log(segment);

  console.log(getMidpointOfSegment(segment))