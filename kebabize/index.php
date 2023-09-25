<?php
function kebabize($camelString)
{
    $camelCheckUpperCase = str_split($camelString);
    if (array_reduce($camelCheckUpperCase, function ($carry, $elem) {
        return $carry && ctype_upper($elem);
    }, true)) {
        return implode('-', $camelCheckUpperCase);
    }

    $filteredByNumber = preg_replace('/[0-9]/', '', $camelString);
    $camelArray = preg_split('/(?=[A-Z])/', $filteredByNumber);

    return implode('-', array_map(function ($elem) {
        return strtolower($elem);
    }, $camelArray));
}
print_r(kebabize('camelsHaveThreeHumps'));
print_r(kebabize('camelsHave3Humps'));
print_r(kebabize('CAMEL'));
