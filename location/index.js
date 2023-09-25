const getDistance = ([x1, y1], [x2, y2]) => {
    const xs = x2 - x1;
    const ys = y2 - y1;

    return Math.sqrt(xs ** 2 + ys ** 2);
};

// BEGIN (write your solution here)
function getTheNearestLocation(locations, currentPoint) {
    console.log(locations[0])
    let distance = getDistance(locations[1], currentPoint);
    let name = '';
    for (let i = 0; i < locations.length; i += 1) {
        let currDistance = getDistance(locations[i][1], currentPoint);
        if (currDistance < distance) {
            distance = currDistance;
            name = locations[i][0];
        }
    }
    return name;
}

const locations = [
    ['Park', [10, 5]],
    ['Sea', [1, 3]],
    ['Museum', [8, 4]],
];

const currentPoint = [5, 5];

// Если мест нет, то возвращается null
getTheNearestLocation([], currentPoint); // null

getTheNearestLocation(locations, currentPoint); // ['Museum', [8, 4]]
