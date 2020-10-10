If you are coming from a specific video, you can have a look at the commits, they are named like: 'video-01: asd', 'video-02: asd', so you can switch to a commit/merge commit and see what exactly had been done, since this repo is currently evolving and sometimes parts of it are rewritten in newer videos.  

# instructions to run the project 
## 1. Switch to branch develop to get the latest changes
## 2. Add an environment file to the project
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


## Start the Backend in dev Mode after you added the .env file
`cd api`  
`npm install`  
`npm run start:dev`  
  
## Start the Frontend in dev Mode after you added the .env file
`cd frontend`    
`npm install`  
`ng serve`  

## Start the e2e tests
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