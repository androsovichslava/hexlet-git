<?php
function countUniqChars($text)
{
    // $charsArr = explode('', $text);
    if ($text == '') {
        return 0;
    }
    $charsArr = str_split($text);
    $charsSet = [];
    foreach ($charsArr as $char) {
        if (!in_array($char, $charsSet)) {
            $charsSet[] = $char;
        };
    }
    return count($charsSet);
}
print_r(countUniqChars('asdffff'));
