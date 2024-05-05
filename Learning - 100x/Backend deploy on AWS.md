1. Create a t3 micro free tier pc in europe stockholm region(why? not mumbai) because, in stockholm t3 micro (2v cpu) available under free tier instead of t2 micro(1v cpu) in Mumbai 
2. Customize security groups and the inbound rule
![alt text](images/image1.png)


3. Download key-pair and keep it inside Documents Folder
4. Right-click on key and make it read-only
5. Open any cmd Prompt and paste this command
```bat
    ssh -i 'path-to-key'/key-name.pem ubuntu@your-host-name or public ipv4 address
```
```bat
    ssh -i C:/Users/rayra/Documents/key-pair/rahul-pc-stock.pem ubuntu@ec2-51-20-52-210.eu-north-1.compute.amazonaws.com
```

6. voila! you are connected
7. type `sudo apt update`
8. type `mkdir home`
9. `cd home` and then clone git repository
10. Now the challenge is to bring npm in this machine, which can only be done using nvm(node version manager)

## Installing NPM in ubuntu-Aws

11. Go to this website `https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-22-04`
12. OR, Do what I am writing here - 
13. Paste this command in terminal :-: `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash`
14. Now paste these three line cmd :-: 