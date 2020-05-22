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



# Youtube Video Links
### Video 1, set up Blog Project (API)
https://www.youtube.com/watch?v=5pFKw5iLL4s&feature=youtu.be

### Video 2, Basic User Crud API
https://www.youtube.com/watch?v=Z6kw_aJHJLU

### Video 3, JWT Authentication and password hashing
https://www.youtube.com/watch?v=bbDDSylRM04

### Video 4, JwtGuard, RolesGuard, custom @hasRoles() annotation, and protecting one endpoint
https://www.youtube.com/watch?v=Wzn1rzqPq_s

