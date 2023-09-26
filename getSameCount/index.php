<?php
function getSameCount($arr1, $arr2)
{
    $result = [];
    foreach ($arr1 as $elem) {
        if (in_array($elem, $arr2)) {
            $result[] = $elem;
        }
    }
    return $result;
}
print_r(getSameCount([1, 3, 2, 2], [3, 1, 1, 2]));
