# Rate limiter service
This repo was created as a small exercise for myself to implement simple web service that will help servers to rate limit requests.
## Idea
The configuration of the properties of the Rate Limiter are:
1.requestRate : how many requests can be sent within the interval
2.interval : in ms within which requestRate will be measured

You can also adjust the port on which this server is listenning.

Exposed endpoint to report URL visit in the following format:
```
//example(input):
POST /report
Content-Type: application/json
{
  "url" : "http://www.test.com"
}
```
The response of this API should be “ allow ” boolean flag indicating if the request was allowed or not:
```
//example(output):
{
  "allow" : false
}
```

## Design
I will not use any other library for the rate-limiting itself,
and to make the request handaling I will not use external DBs / persistent storage so we have very little latency.


Node
- I choose Node since it is very fast to create and develop small services with it
- It is also very easy to work with json since it is part of the js langualge
- Typescript is just my style prefrence. I love the benifits of type-safety and strict rules in code
- Node uses a Garbage collector so no need and not possible to manually mark / free objects in memory 
- I did thought about using the async-lock package but as specified there - Nodejs is single threaded,
  and the code execution never gets interrupted inside an event loop,
  so locking is unnecessary ONLY IF our critical section of code can be executed inside a single event loop. 

## Local installation and running

* Please make sure you have the latest Node version install on your machine
* You can change the enviroment variables as needed. They can be found in the .env file 
```
//In the project root folder run via cmd:
- npm i 
- running on dev: 'npm run dev'
- running on prod: 'npm run prod'
```

## Deployment(with docker)
Pull the docker image from docker-hub registry: 
- docker pull danielglazer/rate-limiter-service:latest
Run the image in a container:
- docker run -p 3000:3000 44114677f8c1

### Building the image locally
Alternativlly you can build the image yourself:
- docker build -t danielglazer/rate-limiter-service:latest .             
then run:
- docker run -p 3000:3000 44114677f8c1