<?php

// BEGIN (write your solution here)
function getSameParity($arr)
{
    if (empty($arr)) {
        return [];
    }

    $remainder = $arr[0] % 2;
    $result = [];
    $result[] = $arr[0];
    for ($i = 1; $i < count($arr); $i += 1) {
        if ($arr[$i] % 2 === $remainder) {
            $result[] = $arr[$i];
        }
    }
    return $result;
}
print_r(getSameParity([]));        // []
print_r(getSameParity([1, 2, 3])); // [1, 3]
print_r(getSameParity([1, 2, 8])); // [1]
print_r(getSameParity([2, 2, 8])); // [2, 2, 8]
