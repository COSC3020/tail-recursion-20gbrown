//code.js

"use strict";

function fib_tail_recursive(n, a = 1, b = 1) {
    return fib_tail_recursive_helper(n, a, b);
}

function fib_tail_recursive_helper(n, a, b) {
    if (n === 0) {
        return 0;
    } else if (n <= 2) {
        return b;
    } else {
        return fib_tail_recursive_helper(n - 1, b, a + b);
    }
}

module.exports = { fib_tail_recursive };

