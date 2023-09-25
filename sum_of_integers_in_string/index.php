<?php

function sum_of_integers_in_string(string $s): int
{
    // Your code here
    $sum = 0;
    preg_match_all('/\d+/', $s, $matches);
    print_r($matches);

    print_r($matches);
    $sum = array_reduce($matches[0], function ($carry, $item) {
        return $carry + $item;
    }, 0);

    return $sum;
}
print_r(sum_of_integers_in_string('123ddd345fffff'));
