<?php
function bubbleSort($arr)
{
    $size = count($arr);
    do {
        $swap = false;
        for ($i = 0; $i < $size - 1; $i++) {
            if ($arr[$i] > $arr[$i + 1]) {
                $temp = $arr[$i];
                $arr[$i] = $arr[$i + 1];
                $arr[$i + 1] = $temp;
                $swap = true;
            }
        }
        $size--;
    } while ($swap);
    return $arr;
}

print_r(bubbleSort([1, 2, 4, 5, 2, 3,]));
