//code.test.js

const fs = require("fs");
const assert = require("assert");
eval(fs.readFileSync("code.js") + "");
const { fib_tail_recursive } = require("./code");


// Test 1
assert.strictEqual(fib_tail_recursive(1), 1);

// Test 2
assert.strictEqual(fib_tail_recursive(2), 1);

// Test 3
assert.strictEqual(fib_tail_recursive(3), 2);

// Test 4
assert.strictEqual(fib_tail_recursive(4), 3);

// Test 5
assert.strictEqual(fib_tail_recursive(0), 0);

// Test 6
assert.strictEqual(fib_tail_recursive(10), 55);

// Test 7
assert.strictEqual(fib_tail_recursive(20), 6765);

// Test 8
assert.strictEqual(fib_tail_recursive(30), 832040);

console.log("All tests passed!");



