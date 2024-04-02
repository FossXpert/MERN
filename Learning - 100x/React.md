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
    const tokenExists = useRecoilValue(tokenExist);
    // To set the value of tokenExist atom
    const setTokenExist = useSetRecoilState(tokenExist);
```

## 