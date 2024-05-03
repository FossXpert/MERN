## Routing In React
    https://hygraph.com/blog/routing-in-react

## How to use Recoil in react

```javascript

// First create a atom 
const tokenExist = atom({
    key: 'tokenExist',
    default: false
})
export {varEmail, varPassword,tokenExist} 
// Then in other pages wherever U want to use it 
// To get the value of tokenExist atom

// One thing to remeber
// 1. It does not mean u can use it as global variable, after page refresh it lost it's value. I think it's main use is to prevent passing down the state variable between the multiple .components. using atoms we can easily create a atom and pass it .
// refer it here  https://blackbox.ai/share/8f3164fc-35f8-4b89-8227-ab61ebd3f6d9

// u have to implemet some kind of localstorage technique
```

## To generate project structure use below command after navigating inside your project

tree /F /A > project_structure.txt

## Why we use fragment <> </>


The <> and </> are shorthand syntax for a React fragment. Fragments allow you to group multiple children elements without adding an extra DOM element.

  Here's how they work:
```javascript
  <>
    <ChildComponent1 />
    <ChildComponent2 />
  </>
```
or

jsx
Copy code
```javascript
  <React.Fragment>
    <ChildComponent1 />
    <ChildComponent2 />
  </React.Fragment>
```
In the above code, <> and </> act as an invisible wrapper around the children components (<ChildComponent1 /> and <ChildComponent2 />). They allow you to return multiple elements from a component's render function without introducing additional nodes into the DOM.

Fragments are particularly useful when you need to return multiple elements from a component, especially when those elements don't need a parent container or when adding a parent container would interfere with the layout or styling. They're also handy when you want to avoid unnecessary wrapper elements in your component tree.

```