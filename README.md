# Basic REST API nodejs-ts

Basic REST API in TypeScript with NodeJS-express to store items in a list.

Port: 3000

# Dependencies

* Libraries
    - express 
    - body-parser 
    - nodemon

* Types 
    - @types/node 
    - @types/express

# Install dependencies
* Auto
````
$ npm install
````

* Manual
* Libraries
    - express 
    - body-parser 
    - nodemon
````shell script
$ npm install --save-dev express body-parser nodemon
````

* Types 
````shell script
$ npm install --save-dev @types/node @types/express
````
## Compilation
````shell script
~/basic_restapi_nodets$ tsc
````

# Run server
Start nodemon
````shell script
$ npm start
````

# HTTP Requests
The body must be in `json` format
* POST http://localhost:3000/api/items/
````json
{
  "content": "some content"
}
````

* GET (all) http://localhost:3000/api/items/

* GET (by id) http://localhost:3000/api/items/1

* DELETE (by id) http://localhost:3000/api/items/1

* PUT/PATCH http://localhost:3000/api/items/1
````json
{
  "content": "new content for id 1"
}
````

#
Using: WebStorm and Postman.
