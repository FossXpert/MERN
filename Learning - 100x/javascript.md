## FileReader
```javascript
const fileReader = new FileReader();
        fileReader.onload = () => {
            if(fileReader.readyState === 2){
                const avatar =  fileReader.result as string;
                console.log(avatar)
                updateAvatar({
                    avatar
                })
            }
        };
        fileReader.readAsDataURL(e.target.files[0]);
```
- `fileReader.onload`: This sets up an event handler that will be triggered when the file reading operation is successfully completed.

- if (`fileReader.readyState` === `2`): This checks the state of the FileReader. readyState can have the following values:
    `0 (EMPTY): No data has been loaded yet`.
    `1 (LOADING): Data is currently being loaded`.
    `2 (DONE): The entire read operation is complete`.
- When readyState is 2 (DONE), it means the file has been completely read, and the result is now available