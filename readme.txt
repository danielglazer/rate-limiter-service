
How to run:
* Please make sure you have the latest Node version install on your machine
* You can change the enviroment variables as needed. They can be found in the .env file 

In the project cmd run:
- npm i 
- running on dev: 'npm run dev'
- running on prod: 'npm run prod'



Node
- I choose Node since it is very fast to create and develop small services with it
- It is also very easy to work with json since it is part of the js langualge
- Typescript is just my style prefrence. I love the benifits of type-safety and strict rules in code
- Node uses a Garbage collector so no need and not possible to manually mark / free objects in memory 
- I did thought about using the async-lock package but as specified there - Nodejs is single threaded,
  and the code execution never gets interrupted inside an event loop,
  so locking is unnecessary ONLY IF our critical section of code can be executed inside a single event loop. 