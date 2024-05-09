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



## Custom type making if it not exist specially when attaching payload in request header

```javascript
export interface customRequest extends Request {
  payload: userPayload | JwtPayload;
}

(req as customRequest).payload = decoded;

```

## Zod Type Infernece

It means zod can also be used to infertypes and it act as interfaces , so decalring custom interface is not required.
for example u can see here 

```javascript
import { z } from "zod";

export const signupInput = z.object({
    email : z.string().email(),
    username : z.string().min(3).max(24),
    password : z.string().min(1).max(128)
});

export const signinInput = z.object({
    username : z.string().min(3).max(24),
    password : z.string().min(1).max(128)
});

export type signupUser = z.infer<typeof signupInput>
export type signinUser = z.infer<typeof signinInput>

```

## React Routing 
React does not include built-in routing functionality, but you can use third-party routing libraries such as React Router which comes 
from React-Router-Dom to handle routing in your applications. React Router is a popular choice for implementing routing in React applications.


## (e) => setItem(e.target.value)
- Whenever u see this remember e.target.value return string, soto convert it in number u have to this

```typescript
 onChange={(e: React.ChangeEvent<HTMLInputElement>) => { 
    const newValue = parseFloat(e.target.value); // Convert string to number
    setPrice(newValue);
 }}
```

## Learn about React custom hook on react documenetation page very well explained

## About re-renders in this code

```typescript
  const [price, setPrice]: [number, (price: number) => void] = useRecoilState(atomCoursePrice);
  const courseBody: zodCourseDetail = {
      title, description, price, category, admin_id, courseId, imageLink
    }
  <TextField
          fullWidth
          id="price"
          label="Course Price"
          variant="outlined"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setPrice(parseInt(e.target.value))
          }}
        />

```
- U can see there in a `setPrice(parseInt(e.target.value))`, whenever you put value in textfiled in browser, it parse at the same time as you enter the numbers, that cause an infinite loop of setState. so the browser will crash.
that why what i am doing is taking it as inpout in string and then converting it to parseInt at the time of sending request.

```tsx
  const [price, setPrice]: [string, (price: string) => void] = useRecoilState(atomCoursePrice);
  const intprice = parseInt(price);
  const courseBody: zodCourseDetail = {
      title, description, price:intprice, category, admin_id, courseId, imageLink
    }
  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setPrice(e.target.value)
  }}
```
Then that issue disaapear. but the best way I will update here.


