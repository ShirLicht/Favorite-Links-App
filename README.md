# Favorite-Links-App
One-page favorite links list app in Vue JS , Node JS & MongoDB

Requirements:

      -	VS code.
      - Chrome Web Browser.
      - Internet connection.
      - Github.


Project Introduction:

    A one-page fullstack app that contains and displays a list of a user's favorite links. 
    You can delete an existing link and add a new link at any time. 
    Once a user enters a new url, the link's metadata is being generated, so when the links list is displayed each link appears as follows:
        (*) Image, title and description - generated from the link's metadata.
        (*) The link itself - url.

    - The server side was built using Node.js and mongoDB database server.
    - The client side was built using Vue.js.


Installations: 

    Database -
            1.download&install MongoDB.
            
            2.MongoDB website:
            
                https://www.mongodb.com/
            
            3.MongoDB with node.js:
                
                http://mongodb.github.io/node-mongodb-native/3.1/quick-start/quick-start/

            4.open the folder that the mongoDB is installed in, get into the bin folder and open the mongo.exe file
            (For example - "C:\Program Files\MongoDB\Server\4.0\bin\mongo.exe") 

            5.create a new database called 'favorite-links' by running the command:                   'use favorite-links'.
            
            
            6.create a new collection called 'links' by running the command:
              'db.createCollection("links")'.

     Server - 
            insatll Node.js:
            https://nodejs.org/en/

            
            cd to the project's folder (Favorite-Links-App) -

           1. install express:

                how to install:
                on the cmd run - 'npm i express'

           2. install cors:

                how to install:
                on the cmd run - 'npm i cors'

            3. install body-parser:
                what is it?
                    Node.js body parsing middleware.
                    Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
                    
                more information:
                    https://www.npmjs.com/package/body-parser

                how to install:
                     on the cmd run - 'npm i body-parser'

            4. install mongodb:
                what is it?
                      The official MongoDB driver for Node.js. 

                more information:
                     https://www.npmjs.com/package/mongodb
                
                how to install:
                     on the cmd run - 'npm i mongodb'

            5. install axios:
                    what is it?
                        Promise based HTTP client for the browser and node.js
                
                    more information:
                        https://www.npmjs.com/package/axios

                    how to install:
                        on the cmd run - 'npm i axios'
            
            6. install url-metadata:
                    what is it?
                        Request an http(s) url and scrape its metadata.

                    more information:
                        https://www.npmjs.com/package/url-metadata

                    how to install:
                        on the cmd run -'npm install url-metadata --save`'

            7. install nodemon as a dev dependency:
                    What is it?
                        nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
                    
                    more informtaion: 
                        https://www.npmjs.com/package/nodemon

                    how to install:
                        on the cmd run - 'npm i -D nodemon'


       (*) To run the server : on the cmd run - 'npm run dev'

    Client - 

           1. install Vue.js:
                how to install:
                    on the cmd run - npm install -g @vue/cli

            

       (*) To run the client : on the cmd run -  'npm run serve'	



Operating Instructions:
	 1. Download the project from github.

	 2. Install Node.js, MongoDB and Vue.js - An explanation of how to install is in the Installations section.

	 3. Create a new mongodb database and a new collection - An explanation of how to create is in the Installations section under the MongoDB section.

	 4. Open VS code and then open the project's folder (Favorite-App-Links-App).

	 5. Open new terminal and install all the required packages that were mentioned in the Installations section.

	 6. Open new terminal and run the server by running the comand - 'npm run dev'.

	 7. Open Chrome and enter the url : 'localhost:5000'.

	 8. Open another new terminal, cd to "Favorite-Links-App\client\favorite-links-list-app" and run the vue App by running the comand - 'npm run serve'.

	 9. Open Chrome and enter the url : 'localhost:8080'.

     10. Enjoy!
