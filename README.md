# BusinessCardsApp

# TODOs
- WebApp looks alot better, and is sort of satisfactory right now. But, i can do a few more things to improve its appearance. Like more information and notifications when certain interactions occur.

 # My Web Dev MOTTO: keep components simple stupid
 - except for my new-business-card component, it kind of does alot with the webcam and post requests

11-24-2019
- added Firebase hosting

11-22-2019
- made some changes to how i read and parse the data from the OCR.
- added some information to let the user know how to format the business card
- added a button to the edit card portion to close the editMode form.
 
11-21-2019
- extracted data from Google vision api and placed into FormGroup
- extracts and turns data into a string and uses some string manipulation to get the data fields and uses patchValue() to update form
- As part of the newBusinessCard and Card list component navigation: i used the same formGroup object from my databaseService, cleaned up the data that would persist after navigation.
- utilized a subscribe in the http-post request, so I used OnDestory( ) to unsubscribe.
- had to keep my redundant formGroup implementation in both the editMode(businessCardComponent) and newCardComponent, which had some slight differences. FormComponent is not implemented anymore.

11-20-2019
- removed my redundant FormGroup(copy and pasted) in both my businessCard and NewBusinssCard Components, they both use a 
Form Component for accepting input.
- centered the data inside the businessCards when we show the list (simple CSS class)
- i removed some logic when showing my navigation bar in the appComponent. 
Now if canActivate( ) in the authguard returns false, it redirects to the NotFound Component.

11-19-2019
- Mostly working on the UI, html, and CSS stuff
- Fixed when editButton is pressed my form now pops up next to the Card 
- elimintaed all the CSS i used from other sources and implemented my own as well as the semantics ui
- fixed my newCardComponent; now it shows the form, the webcam and the image taken in line

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
- installed firebase-tools -g --save
