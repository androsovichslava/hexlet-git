<?php
function pillars($numPill, $dist, $width)
{
    return ($numPill - 1) * ($dist * 100 + $width) - $width;
}
print_r(pillars(11, 15, 30));
