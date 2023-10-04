const assert = require('power-assert');


assert.strictEqual(indexOf([1, 2, 1, 2], 2), 1);
assert.strictEqual(indexOf([1, 2, 1, 2], 2, 2), 3);
assert.strictEqual(indexOf([2, 'one', 'cat', false], 8), -1);
assert.strictEqual(indexOf([]), -1);
assert.strictEqual(indexOf([], 1), -1);
assert.strictEqual(indexOf([], 1, 1), -1);