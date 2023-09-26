<?php
function getIntersectionOfSortedArray($arr1, $arr2)
{
    $index1 = 0;
    $index2 = 0;
    $result = [];
    if (empty($arr1) || empty($arr2)) {
        return [];
    }
    while ($index1 < count($arr1) && $index2 < count($arr2)) {
        if ($arr1[$index1] == $arr2[$index2]) {
            $result[] = $arr1[$index1];
            $index1++;
            $index2++;
        } elseif ($arr1[$index1] < $arr2[$index2]) {
            $index1++;
        } else {
            $index2++;
        }
    }
    return $result;
}


getIntersectionOfSortedArray([10, 11, 24], [10, 13, 14, 18, 24, 30]); // [10, 24]

getIntersectionOfSortedArray([10, 11, 24], [-2, 3, 4]); // []

getIntersectionOfSortedArray([], [2]); // []