# GUI For Secure AI Graduation Project Class 
![login](https://i.imgur.com/jzSaKoZ.png)
![Main Page](https://i.imgur.com/PwX0vPl.gif)
![Settings](https://i.imgur.com/4zaSb5q.png)
### Features

- Auto login with face-recogonation 
- Heart Rate Monitoring
- Object and Sign Detection with friendly UI
- Car Status Monitoring

## Tech
GUI uses a number of open source projects to work properly:
- [ReactJS] - For the inner Front-End Design and State Mangement 
- [Electron] - Running react smoothly as desktop app
- [nodeJS] - evented I/O for the backend
- [Express] - fast node.js network app framework.

## Installation

GUI requires [Node.js](https://nodejs.org/) v12+ to run.
for installing NodeJs just run in the root dir it will take care of everything
```
sh GUISetup.sh
```
Install the dependencies and devDependencies for the front-end and back-end
```
npm i
cd backend
npm i
cd ..
```
development mode
```
npm start 
npm run electron
cd backend
nodemon
cd ..
```
For production environments...
install PM2 to serve the build files to port 3000
```
npm i -g pm2
```
server node scripts for front-end and back-end to port 3000 and 5000 respectively 
```sh
pm2 start serverFrontEnd.js --name frontEnd
cd backend 
pm2 start index.js --name backEnd
```
now pm2 is running the frontend files on port 3000 and backend on port 5000 
save pm2 process in case of system reboting to avoid redoing the process
```
pm2 save
```
after rebooting we can resurrect the process or just have bashscript do the trick if you want the app to start running after rebooting
```
pm2 resurrect
```
now for electron to run got root dir and 
```
npm run electron 
```
Future development use electron builder to pack the app and export it for the desired env
