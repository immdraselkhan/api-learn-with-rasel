# [ExpressJS](https://expressjs.com/en/starter/installing.html)

Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs.

## [CORS](https://expressjs.com/en/resources/middleware/cors.html)

CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

### Initial setup

1. Create a directory, then open it in terminal
2. Initialize the node package manager, run "npm init" then follow the steps or "npm init -y"
3. Install express and cors, run "npm i express cors"
4. Open "index.js" file in code editor and add the following lines
```
  // Require(import) the express
  const express = require('express');
  // Require(import) the cors
  const cors = require('cors');
  // Call the express in a variable
  const app = express();
  // Declare the port in a variable to run the application
  const port = process.env.PORT ||8000;

  // Enable cors
  app.use(cors());

  // Create an API(Get) to make sure application is running perfectly where we used two request(req) & response(res) parameters
  app.get('/', (req, res) => {
    res.send('Server is running :)');
  });

  // Finally listening the app in the port that we declared before
  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
```
5. To start the app, run "node index.js"
6. Install nodemon [Docs](https://www.npmjs.com/package/nodemon), that will help us to automatically restart the node app when file changes in the directory are detected, run "npm install -g nodemon"
7. Start the app, run "nodemon index.js"
8. Then, load http://localhost:8000 in a browser to see the output

### Add data to serve

1. Add the API file in JSON format
2. Add a path on the index.js file
```
  // Import(require) the API file
  const api_data = require('./data/api_file.json');
  // Create the API(Get) to serve
  app.get('/path_name', (req, res) => {
    res.send(api_data);
  });

  // If you need dynamic path
  app.get('/path_name/:id', (req, res) => {
    const id = req.params.id; // If needed to convet id to number, just use "parseInt(req.params.id)"
    // Get the dynamic data, like this
    const data = api_data.find(every_data => every_data.id === id) || {};
    // Serve now
    res.send(data);
  });
```