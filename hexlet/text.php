<?php

namespace text;

function mult($a, $b)
{
    $result = "";
    for ($i = 0; $i < $b; $i++) {
        $result .= $a;
    }
    print_r($result);
}
