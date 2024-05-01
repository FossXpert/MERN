ssh -t -i C:/Users/rayra/Documents/key-pair/yimmy-rahul-pc.pem ubuntu@ec2-15-207-19-241.ap-south-1.compute.amazonaws.com "sudo bash ~/deploy.sh"

# ubuntu deploy.sh file command is this : 
# --------------------------------------------------------------
# #!/bin/bash
# export PATH=$PATH:/home/ubuntu/.nvm/versions/node/v20.12.2/bin

# cd home/MERN/100x/yimmy/backend/dist/src
#  git pull origin daily-changes
#  pm2 kill
#  pm2 start index.js
# ---------------------------------------------------------------