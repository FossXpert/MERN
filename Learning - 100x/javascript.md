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
