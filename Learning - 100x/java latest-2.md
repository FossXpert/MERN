## Latest java Interview Question in addition to prev one.

Tips for writing MD FILES
Here's a breakdown of how to write Markdown (md) files:

**1. Basic Formatting:**

- **Headings:** Use `#` symbols for main headings (e.g., `# This is a Main Heading`) and subsequent `#` for subheadings (e.g., ## This is a Subheading).
- **Paragraphs:** Separate paragraphs with a blank line.
- **Bold:** Wrap text in double asterisks (`**bold text**`) for bold formatting.
- **Italic:** Wrap text in underscores (`_italic text_`) for italics.
- **Strikethrough:** Wrap text in two tildes (`~~strikethrough text~~`).
- **Code:** Wrap inline code with backticks (`code example`). Use three backticks for code blocks:

```
This is a code block.
You can write multiple lines of code here.
```

**2. Lists:**

- Ordered lists: Use numbers followed by a period and a space (`. `) before each list item.
- Unordered lists: Use asterisks (`*`), plus signs (`+`), or hyphens (`-`) followed by a space before each item.

**3. Links:**

- Inline links: Use square brackets `[]` for link text and parentheses `()` for the URL and optional title:

  ```
  This is a link to [Wikipedia](https://en.wikipedia.org/ "The free encyclopedia").
  ```

- Reference links: Define a link with a label using curly braces `{}` at the bottom of the document, then reference the label in square brackets `[]` with the link text:

  ```
  Here's an example [reference link][1].

  [1]: https://www.w3schools.com/md/ "Markdown Tutorial"
  ```

**4. Images:**

- Use an exclamation mark (`!`) followed by square brackets `[]` for the image description and parentheses `()` for the image path and optional title:

  ```
  ![Alt text for the image](path/to/image.jpg "Optional title")
  ```

**5. Tables:**

  Use pipes (`|`) to separate columns and hyphens (`-`) to create dividers:

  ```
  | Header 1 | Header 2 | Header 3 |
  |---|---|---|
  | Cell 1, row 1 | Cell 2, row 1 | Cell 3, row 1|
  | Cell 1, row 2 | Cell 2, row 2 | Cell 3, row 2 |
  ```

**6. Comments:**

  Add comments using HTML comments (``). These comments won't be displayed when the Markdown is rendered to HTML.

**Tips:**

- Use a Markdown editor for syntax highlighting and easier writing. Many text editors and online tools support Markdown.
- Preview your Markdown file often to see how it will look when rendered.
- Refer to the official Markdown Guide ([https://www.markdownguide.org/](https://www.markdownguide.org/)) for more details and advanced features.

By following these guidelines, you can create well-formatted and easy-to-read Markdown files.





# Java Interview Part 2 Questions Goes Here

## Explain all the Java SE 8 Features

**1. _Functional Interfaces_:** : 
- Interfaces with a single abstract method.
- Used in conjunction with lambda expressions to define the behavior of that single method.
- Example:
```Java
      @FunctionalInterface
      public interface MathOperation {
          int operation(int a, int b);
      }
```
**2. _Stream API_**

The Stream API in Java 8 is a powerful tool for processing collections of data in a declarative and functional style. It provides a clean and concise way to filter, map, reduce, and perform other operations on elements within collections.

Here's a breakdown of the Stream API and how to use it effectively:

**1. Creating a Stream:**

- Streams are not collections themselves; they represent a sequence of elements from a source like an array, List, Set, or even I/O operations.
- You typically create a stream using methods like `stream()` on existing collections or specific methods for other data sources.

**2. Stream Operations:**

- Streams offer a chainable set of operations that transform or manipulate the data elements. These operations are typically intermediate (don't modify the original collection) and terminal (produce a result or perform an action).
- Some common intermediate operations include:
    - `filter(predicate)`: Filters elements based on a condition.
    - `map(function)`: Transforms each element using a function.
    - `sorted(comparator)`: Sorts elements based on a comparator.
    - `distinct()`: Removes duplicate elements.

- Some common terminal operations include:
    - `forEach(consumer)`: Performs an action on each element.
    - `count()`: Returns the number of elements in the stream.
    - `min(comparator)`: Finds the minimum element based on a comparator.
    - `max(comparator)`: Finds the maximum element based on a comparator.
    - `collect(collector)`: Collects the elements into a new collection or data structure.

**3. Example:**

```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6);

// Filter even numbers and print them
numbers.stream()
  .filter(x -> x % 2 == 0)
  .forEach(System.out::println);  // Output: 2, 4, 6

// Map numbers to their squares and collect them into a new list
List<Integer> squares = numbers.stream()
  .map(x -> x * x)
  .collect(Collectors.toList());  // squares list will contain {1, 4, 9, 16, 25, 36}
```

**Benefits of Stream API:**

- **Declarative Style:** You focus on "what" needs to be done rather than "how" (the implementation details reside in the operations).
- **Immutability:** Stream operations typically don't modify the original collection, promoting functional programming principles.
- **Conciseness:** Stream operations can often be chained together, leading to more concise code compared to traditional loops.
- **Parallelization:** Streams can be parallelized for efficient processing on multicore systems.

**Additional Points:**

- Streams are lazy-evaluated, meaning operations are not executed until a terminal operation is called.
- You can use method references for cleaner code when functions or operations are already defined elsewhere.

**In summary, the Stream API provides a powerful and elegant way to work with collections in Java. By understanding its core concepts and operations, you can write more expressive and efficient code.**

**3. **

