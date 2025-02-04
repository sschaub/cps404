# Readme

Curl commands:

## List all posts

```
curl  http://localhost:3000/posts
```

## Retrieve one post

```
curl  http://localhost:3000/posts/1
```

## Create a post

```
curl -X POST -d "{ \"title\": \"Boo\", \"author\": \"foo\" }"  http://localhost:3000/posts
```

## Delete a post

```
curl -X DELETE  http://localhost:3000/posts/5
```

## Update a post

```
curl -X PATCH -d "{ \"title\": \"A new title\" }"  http://localhost:3000/posts/4
```
