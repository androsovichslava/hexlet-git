<?php
function solve($s)
{
    preg_match_all('/\d+/', $s, $matches);

    sort($matches[0]);
    $reversed = array_reverse($matches[0]);
    print_r($reversed);
    return (int)$reversed[0];
}

print_r(solve('gh12cdy695m1'));
