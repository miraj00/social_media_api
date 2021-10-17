# social_media_api

## Description 
The Social_media_api is MongoDB database app that runs with Mongoose and Express. It is built with CRUD functionality that allows to create, read, update and delete Users, their thoughts, friends and reactions.
Insomnia core is used in this application to test all routes.

## The requirement from  the client was as below :
```
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data


GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia Core for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia Core
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [Demo](#demo-video)


## Installation 
Once the GitHub repo is cloned to your local files, in the command line you will install the Node.js packages of Express and Mongoose. MongoDB should already be downloading and running on your operating system. .gitignore the node packages

To install the application in your computer follow the steps below: 

 1. Clone the repository in your computer :
    - Open the command line and go to the directory where you want to clone the repository.
    - Then clone the repo by typing : " git clone git@github.com:miraj00/social_media_api.git "

 2. Install MongoDB by going to : https://www.mongodb.com/try/download/community , then configure MongoDB in your computer

 3. Install Packages needed in order to run this application in your computer with following command :  

- npm init -y
- npm install express
- npm install mongoose


## Usage 
 First of all, start the server in your command line at root directory with " npm start ". Then open the Insomnia Core and test all different routes with the Local Host url and appropriate endpoints.
 

# Insomnia Core Links with JSON ( Examples) for your convenience while testing : 
```
----------------------------------- User Routes -----------------------------------------
 GET all Users :   localhost:3001/api/users

 GET a single User by ID : localhost:3001/api/users/:userId

 POST - Create a new User : localhost:3001/api/users       
      {
     	"username": "Chandra",
	    "email": "Chandra11@gmail.com"
      }
 
 PUT - Update user by ID : localhost:3001/api/users/:userId
      {
	     "username": "Miraj",
	     "email": "miru234@gmail.com"
      }
 DELETE User by ID : localhost:3001/api/users/:userId

---------------------------------- Thought Routes -----------------------------------------

 GET all thoughts :   localhost:3001/api/thoughts

 GET a single thought by ID : localhost:3001/api/thoughts/:thoughtId

 POST - Create a new thought : localhost:3001/api/thoughts/:thoughtId       
      {
          "username": "Ravi",
          "thoughtText": "I feel to go on long drive today"
      }
 
 PUT - Update thought by ID : localhost:3001/api/thoughts/:thoughtId
      {
          "username": "Chandra",
	      "thoughtText": "I am here"
      }

 DELETE thought by ID : localhost:3001/api/thoughts/:thoughtId

------------------------------- Friend Routes ---------------------------------------------

PUT - add a new friend to the list : localhost:3001/users/:userId/friends/:friendId

DELETE - remove friend:   localhost:3001/users/:userId/friends/:friendId

------------------------------- Reaction Routes --------------------------------------------

POST - add reaction by thought ID :  localhost:3001/api/thoughts/<userId>/<thoughtId>

      {
	     "username": "Chandra",
	     "reactionBody": "Smiling"
      }

DELETE - delete reaction by reaction ID :  localhost:3001/api/thoughts/<userId>/<thoughtId>
```

## Demo Video
Demo video is recorded in 2 separate files due to maximum limitation of 5 minutes per video was allowed :

Video 1 :  https://watch.screencastify.com/v/ASERcKXf02aHhIxaGKKM

Video 2 :  https://watch.screencastify.com/v/hTAyQaTI5uSYFxYVaWFV



## Below is the screenshot and Deployed application of the Project as per client request ## 

![Screenshot of insomnia](./public/assets/images/picture.JPEG)


[Please click here to deploy application in Github](https://github.com/miraj00/social_media_api)


   

