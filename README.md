# Note Work 

- Demo: [View site](https://weldone-dev.github.io/work-notes)

This app is designed to be used as markdown notes

## Tools used 
- TypeScript
- Vite (React)
- CodeMirror v6 
- Container (Github Action, Docker)
- PWA

## Running Project Locally
### Used npm
```bash
npm i
npm run start
```
### Used yarn
```bash
yarn
yarn start
```

## Running Project in Container
### Used docker
```bash 
sudo docker run  -p 8080:80 $(sudo docker build  . -q)
```
### Used
```bash
podman run  -p 8080:80 $(podman build  . -q)
```

