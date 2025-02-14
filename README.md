# JavaScript Function: Null Handling and Undefined Values

This repository demonstrates a common JavaScript error involving the improper handling of null and undefined values within a function.

The `bug.js` file contains a function that checks for null values but omits handling undefined values. The `bugSolution.js` file provides a corrected version of the function that gracefully handles both null and undefined values, providing more robust error handling.

## Bug Description:

The original function correctly handles null values, returning null if either input `a` or `b` is null. However, it doesn't handle the case where either input is `undefined`.  This could lead to unexpected behavior or errors, particularly when the function receives data from an external source or API that might return `undefined` values.

## Solution:

The solution involves modifying the function to explicitly check for both `null` and `undefined` values using a combination of loose and strict equality checks.