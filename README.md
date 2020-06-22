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


# Youtube Video Links
### Video 1, set up Blog Project (API)
https://www.youtube.com/watch?v=5pFKw5iLL4s&feature=youtu.be

### Video 2, Basic User Crud API
https://www.youtube.com/watch?v=Z6kw_aJHJLU

### Video 3, JWT Authentication and password hashing
https://www.youtube.com/watch?v=bbDDSylRM04

### Video 4, JwtGuard, RolesGuard, custom @hasRoles() annotation, and protecting one endpoint
https://www.youtube.com/watch?v=Wzn1rzqPq_s

### Video 5, Simple Pagination for getting all users
https://www.youtube.com/watch?v=dDQaNnmcR_0

### Video 6: Angular: Set Up Frontend and verify Connection to NestJs BE
https://www.youtube.com/watch?v=YKPegsIAWhY

### Video 7: Angular: Reactive Forms for Login + Register Component Part 1/2
https://www.youtube.com/watch?v=eg4vmsKe9h4

### Video 8: Angular: CustomValidators with Reactive Forms Login + Register Part 2/2
https://www.youtube.com/watch?v=BUMWCx-mmKU

### Video 9: Angular Material: DataTable & Server Side Pagination
https://www.youtube.com/watch?v=SoMQJmMUCpw

### Video 10: NestJS: Real Time Search - Filter By username and Paginate results 
https://www.youtube.com/watch?v=KX8Mynyu9cY

### Video 11: Angular Material: Real Time Server Side User Search with Pagination
https://www.youtube.com/watch?v=5SOIGT9mhAY
