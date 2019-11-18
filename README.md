# BusinessCardsApp

# TODOs
BIGGEST TODO => DISPLAY of entire webApp is UGLY NEED TO CLEAN IT!!!
- As part of the newBusinessCard and Card list component navigation: i used the same formGroup object from my databaseService, which caused some old text persisting on the form after navigation (need to clean it up)
- when editButton is pressed my form popus up underneath the Card, I want it presented horizontally   
(use ui centered column from semantics ui)
- Started to familiarize myself with semantics UI CSS, which cleans up the look of the app. But i need to fully eliminate my older CSS stuff 
- Firebase hosting (not set yet)
- my webCam component and Image is SUPER UGLY and needs to be formatted better on page
- Also need to extract data from Google vision api and place into FormGroup 

 # My Web Dev MOTTO: keep components simple stupid

11-17-2019
- added the Webcam component and ngx-webcam import
- placed the webCam Component into the NewBusinessCardComponent
- its ALL REALLY UGLY right now. But its working
- also finished the http POST to google vision api. Its working, next i need to extract the data and place into FormGroup.

11-13-2019
- businessCard list uses the @Input to my businessCard component where it will display each Business Card
- cleaned up how the BusinessCards are presented( used sematics UI to order BusinessCard properties into a list 
- CRUD => completed all parts(Create, Read, Update, and Delete) when dealing with a database and web app communication
- i added a State to my loginService to help with navigation after realizing i had too much logic in app.Component,
    which cause alot of navigation issues 

11-12-2019
- added components; businessCards and businessCard
- added a read method to my databaseService and called it in businessCards' ngOnInit( )
- use @Input decorator to pass in each document in the collection to the buisnessCard component
- added a route to the businessCardsComponent that is clickable from the appComponent
- data is displayed, but it's not pretty 

11-11-2019
- created the database/businessCard project on firebase
- added a database service that holds the form for a new card as well as adding data to my database
- added a newBusinessCard component that presents a form, all it does is notify the service to send data

11-10-2019
- I added the login component with firebase authentication(using a previous app's environment)
- I also added the notFound component and services for routerGuards and authentication.
- Right not my web app routes to the notFound page when we succesfully login and sends us to the login page when we logout.


# Issues(solved):
- i had to switch up the database rules so that authorized users are able to read and write
- So i downloaded the the semantic files and added them in sort of manually in the angular.json file. I placed it in the scripts and styles arrays. i got an error on the webpage about jquery not being defined, i believe.
- I had to also place jquery BEFORE the semantics.js in the scripts array. It worked, and thats where i'm going to stop

# node-package-manager(primarily for me the web dev Noob)
- installed jquery --save... i think thats technically there already 
- installed semantics-ui-css --save
- installed firebase @angular/fire --save
- installed rxjs --save
- installed ngx-webcam --save
