<?php
function makeCensored($sentence, $words)
{
    $arrWords = explode(' ', $sentence);
    $resultArr = [];
    foreach ($arrWords as $word) {
        if (in_array($word, $words)) {
            $resultArr[] = "$#%!";
        } else {
            $resultArr[] = $word;
        }
    }
    return implode(' ', $resultArr);
}

$sentence = 'When you play the game of thrones, you win or you die';
$result = makeCensored($sentence, ['die', 'play']);
print_r($result);
