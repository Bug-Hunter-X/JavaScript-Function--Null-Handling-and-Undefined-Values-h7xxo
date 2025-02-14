function foo(a, b) {
  if (a == null || b == null) {
    return null; // Handle null and undefined values
  }
  return a + b; // Perform the addition
}

console.log(foo(10, 20)); // Output: 30
console.log(foo(null, 20)); // Output: null
console.log(foo(10, null)); // Output: null
console.log(foo(null, null)); // Output: null
console.log(foo(undefined, 20)); // Output: null
console.log(foo(10, undefined)); // Output: null
console.log(foo(undefined, undefined)); // Output: null