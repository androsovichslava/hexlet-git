<?php
function countSheeps($sheep)
{
    $counter = 0;
    for ($i = 0; $i < count($sheep); $i++) {
        if ($sheep[$i]) {
            $counter++;
        }
    }
    return $counter;
}

print_r(countSheeps([
    true,  true,  true,  false,
    true,  true,  true,  true,
    true,  false, true,  false,
    true,  false, false, true,
    true,  true,  true,  true,
    false, false, true,  true
]));
