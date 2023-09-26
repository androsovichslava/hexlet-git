<?php
function getDistance(array $point1, array $point2)
{
    [$x1, $y1] = $point1;
    [$x2, $y2] = $point2;

    $xs = $x2 - $x1;
    $ys = $y2 - $y1;

    return sqrt($xs ** 2 + $ys ** 2);
}

// BEGIN (write your solution here)
function getTheNearestLocation($locations, $point)
{
    if (empty($locations)) {
        return [];
    }
    $nearest = getDistance($locations[0][1], $point);
    $name = $locations[0];
    for ($i = 1; $i < count($locations); $i += 1) {
        if ($nearest > getDistance($locations[$i][1], $point)) {
            print_r($nearest);
            print_r('              ');
            print_r(getDistance($locations[$i][1], $point));
            //
            $nearest = getDistance($locations[$i][1], $point);
            $name = $locations[$i];
        }
    }
    return $name;
}
// END

$locations = [
    ['Park', [10, 5]],
    ['Sea', [1, 3]],
    ['Museum', [8, 4]],
];

$point = [5, 5];

// Если точек нет, то возвращается null
getTheNearestLocation([], $point); // null

getTheNearestLocation($locations, $point); // ['Museum', [8, 4]]
