# Docker Examples

## Run with docker

Linux/Mac:
```
docker run -p 8000:8888 -v $(pwd):/myapp node:latest node /myapp/webserver.js
```

Windows:
```
docker run -p 8000:8888 -v %CD%:/myapp node:latest node /myapp/webserver.js
```

## Run with docker compose

Start:
```
docker compose up -d
```

Stop:
```
docker compose down
```

## Build and run Docker image:

Build image:
```
docker build -t our_webserver .
```

Run image:
```
docker run -p 8000:8888 -t our_webserver
```
