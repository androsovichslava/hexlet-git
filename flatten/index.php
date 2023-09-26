<?php
function flatten($arr)
{
    $result = [];
    foreach ($arr as $elem) {
        // console.log(elem)
        if (is_array($elem)) {
            array_push($result, ...$elem);
        } else {
            array_push($result, $elem);
        }
    }
    return $result;
}
