If you are coming from a specific video, you can have a look at the commits, they are named like: 'video-01: asd', 'video-02: asd', so you can switch to a commit/merge commit and see what exactly had been done, since this repo is currently evolving and sometimes parts of it are rewritten in newer videos.  
Hint: Upon 2022 the new features are not prefixed like this anymore (cause there isn't a video for every step anymore).

# Updated 2022 (Project now dockerized)
1. Angular is updated to v13 and NestJS is updated to v8.
2. This Project is now dockerized.  
We have one Dockerfile for the api (NestJS) and one for the frontend(Angular).  
On the top file level there is a `docker-compose.yml` file that you can start, there is also the database and everything configured.  So you don't need to do anything else than run `docker-compose up`.

(A Video covering these updates will be released within January 2022).

# Instructions to run the Project 

## With Docker
Command:  
`docker-compose up`  
and then visit `localhost:4200`

### Tipps & Tricks for docker
If you need to remove docker images or containers you can use one of the following commands.

Command to remove all images:  
`docker rmi -f $(docker images -a -q)`

Command to remove all containers:  
`docker rm -vf $(docker ps -a -q)`


## Without Docker
### 2. Add an environment file to the project
Add a .env file in the api folder (at the top of your api folder, so nest can find it)  
 - add your own DATABASE_URL in the .env file
 - add your own JWT_SECRET in the .env file

Database:  
Adding the Database Url is explained in the first video - https://www.youtube.com/watch?v=5pFKw5iLL4s  
You can use the free database from www.elephantsql.com (explained in the first video)

JWT Secret:  
Explained in the third video - https://www.youtube.com/watch?v=bbDDSylRM04


Example of file: 

    DATABASE_URL=<your url>  
    JWT_SECRET=jklasjdoij897231na


### Start the Backend in dev Mode after you added the .env file
`cd api`  
`npm install`  
`npm run start:dev`  
  
### Start the Frontend in dev Mode after you added the .env file
`cd frontend`    
`npm install`  
`ng serve`  

# Start the e2e tests
`cd e2e`    
`npm install`  
`npm run cypress:open`
### Generate e2e Report (html)
`npm run cypress:report`


# Youtube Playlist Links
Blog Project only NestJS Videos  
https://www.youtube.com/playlist?list=PLVfq1luIZbSnytbsm2i8Ocf_hyUHTsqbZ  
  
Blog Project only Angular Videos  
https://www.youtube.com/playlist?list=PLVfq1luIZbSmAWiXmsjUsvdYRu7RdxzaM

Blog Project All Videos
https://www.youtube.com/playlist?list=PLVfq1luIZbSmJIuw_EZVP9mFiMED5fGIn

Playlist 2022:
<tbd>

# Other Links & Stuff
Link to Github Profile: https://github.com/ThomasOliver545  
Link to Youtube Channel: https://www.youtube.com/channel/UCTZMwW4pq_B-o_KkpCtotGw  
Link to Twitter: https://twitter.com/Thomas_OliverK  

Since i am doing this in my freetime support via   
- "Github Sponsor"  
- "Github Follow"   
- "Youtube Follow"   

etc. would be great.
