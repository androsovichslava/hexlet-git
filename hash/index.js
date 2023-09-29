import crc32 from 'crc-32';

// BEGIN (write your solution here)
function make() {
    return {};
}
function get(map, key, defaultValue = null) {
    return map[crc32.str(key)] ?? defaultValue;
}

function set(map, key, val) {
    if (!map.hasOwnProperty(crc32.str(key))) {
        map[crc32.str(key)] = val;
        return true;
    }
    return false;
}

const map = make();
let result = get(map, 'key');
console.log(result); // => null

result = get(map, 'key', 'default_value');
console.log(result); // => "default_value"

set(map, 'key2', 'value2');
result = get(map, 'key2');
console.log(result); // => "value2"