# BusinessCardsApp

# TODOs
- CRUD => so far I have completed C and R
- need to clean up how the BusinessCards are presented( using <td> tags right now and its all kind of inline/ugly )
- As part of new BusinessCard i neeed to clear the form after succesful creation(DONE?)
- businessCard list will use the @Input to my businessCard component where it will display each Business Card (DONE)
- Firebase hosting (not set yet)

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
