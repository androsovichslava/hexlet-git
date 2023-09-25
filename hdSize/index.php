<?php
function save($sizes, $hd)
{
    // your code here
    // if (empty($sizes)) return 0;
    $sum = 0;
    $index = 0;
    while (true) {
        $sum += $sizes[$index];
        if ($sum <= $hd) {
            $index++;
        } else {
            break;
        }
        // print_r($sum);
        if ($index === count($sizes)) break;
    }
    return $index;
}

print_r(save([], 12));
