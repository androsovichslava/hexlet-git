<?php

function swap(&$a, &$b)
{
    $temp = $a;
    $a = $b;
    $b = $temp;
}
$a = 5;
$b = 8;
swap($a, $b);

print_r($a); // 8
print_r($b); // 5
