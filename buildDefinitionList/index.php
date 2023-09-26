<?php
function buildDefinitionList($definitions)
{
    if (empty($definitions)) {
        return '';
    }
    $parts = [];
    foreach ($definitions as $elem) {
        $parts[] = "<dt>{$elem[0]}</dt><dd>{$elem[1]}</dd>";
    }
    return "<dl>" . implode('', $parts) . "</dl>";
}
$definitions = [
    ['definition1', 'description1'],
    ['definition2', 'description2']
];
print_r(buildDefinitionList($definitions));
