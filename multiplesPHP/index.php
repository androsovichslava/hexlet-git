<?php
function solution($number)
{


    $resultArr = [];
    for ($i = 3; $i < $number; $i++) {
        if ($i % 3 === 0 || $i % 5 === 0) array_push($resultArr, $i);
    }

    return array_reduce($resultArr, function ($carry, $item) {
        return $carry + $item;
    }, 0);
}
