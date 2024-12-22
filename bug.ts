function greet(name: string | null): string {
  if (name === null) {
    return "Hello, world!";
  }
  return `Hello, ${name}!`;
}

console.log(greet(null)); // Output: Hello, world!
console.log(greet("Alice")); // Output: Hello, Alice!

//Uncommon error: The function may unintentionally return 'undefined' if the parameter is undefined, rather than a default value. 
console.log(greet(undefined)); // Output: TypeError: Cannot read properties of undefined (reading 'length')