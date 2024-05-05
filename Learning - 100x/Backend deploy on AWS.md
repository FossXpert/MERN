1. Create a t3 micro free tier pc
2. Customize security groups and the inbound rule
![alt text](images/image1.png)


1. Download key-pair and keep it inside Documents Folder
2. Right-click on key and make it read-only
3. Open any cmd Prompt and paste this command
```bat
    ssh -i 'path-to-key'/key-name.pem ubuntu@your-host-name or public ipv4 address
```
```bat
    ssh -i C:/Users/rayra/Documents/key-pair/rahul-pc-stock.pem ubuntu@ec2-51-20-52-210.eu-north-1.compute.amazonaws.com
```

4. voila! you are connected
5. type `sudo apt update`
6. type `mkdir home`
7. `cd home` and then clone git repository