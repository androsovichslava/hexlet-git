<?php
function checkIfBalanced($string)
{
    $stack = [];
    $chars = str_split($string);
    if ($chars[0] == ')') {
        return false;
    }
    foreach ($chars as $char) {
        print_r($stack);
        if ($char == '(') {
            array_push($stack, $char);
        } elseif ($char == ')') {
            if (empty($stack)) {
                return false;
            }
            $prev = array_pop($stack);
        }
    }
    if (count($stack) == 0) {
        return true;
    } else {
        return false;
    }
}
print_r(checkIfBalanced('(4 + 3))'));
