## Create a t3 micro free tier pc
## Cutomize security groups the inbound rule
![alt text](images/image1.png)


1. Download key-pair and keep it inside Documents Folder
2. Right-click on key and make it read-only
3. Open any cmd Prompt and paste this command
```bat
    ssh -i 'path-to-key'/key-name.pem ubuntu@your-host-name or public ipv4 address
    ssh -i C:/Users/rayra/Documents/key-pair/rahul-pc-stock.pem ubuntu@ec2-51-20-52-210.eu-north-1.compute.amazonaws.com
```

4. voila! you are connected
5. type `sudo apt update`
