# Docker Examples

## Run with docker

```
docker run -p 80:8888 -v $(pwd):/myapp node:latest node /myapp/webserver.js
```

## Run with docker-compose

Start:
```
docker-compose up -d
```

Stop:
```
docker-compose down
```

## Build and run Docker image:

Build image:
```
docker build -t our_webserver .
```

Run image:
```
docker run -p 80:8888 -t our_webserver
```
