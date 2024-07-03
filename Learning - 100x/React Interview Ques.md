## How react work underhood ?
https://medium.com/@Pratik_Mane_9/how-react-work-behind-the-scene-6d00f6c1e88a#:~:text=React%20creates%20a%20virtual%20DOM,DOM%20and%20the%20previous%20one.

## Understanding the Issue

When you update state in React using setBars([...bars, 1]), React does not immediately update the bars array and provide the updated value in the same render cycle. This is because state updates in React are asynchronous.