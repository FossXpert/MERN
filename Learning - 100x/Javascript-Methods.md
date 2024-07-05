## String Methods
1. ** .split() ** - 
<!-- Suggested code may be subject to a license. Learn more: ~LicenseLog:1668830811. -->
split strings into an array of substrings

2. ** .join() ** - 
<!-- Suggested code may be subject to a license. Learn more: ~LicenseLog:1668830811. -->
join an array of strings into a single string
example: 
```Javascript
const fruits = ["apple", "banana", "orange"];
const joinedString = fruits.join(", "); 

console.log(joinedString); // Output: "apple, banana, orange"
```
3. ** flatMap() ** - 

How to split array of strings in case u won't be able to use .split() directly?

- Use .flatmap()
`.flatmap()` is particularly useful when you need to transform elements of an array and then flatten the results, such as:

Mapping over an array of arrays and combining the results.
Creating a new array with elements based on multiple properties of the original array's elements.

```javascript
function splitName(input: string | string[]): string[] {
  if (typeof input === 'string') {
    return input.split('.');
  } else {
    // Handle the case when input is an array of strings
    return input.flatMap(str => str.split('.'));
  }
}

const result1 = splitName("Rahul.Ray");
console.log(result1); // Output: ["Rahul", "Ray"]

const result2 = splitName(["Rahul.Ray", "John.Doe"]);
console.log(result2); // Output: ["Rahul", "Ray", "John", "Doe"]
```
4. 