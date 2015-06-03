Bronyville is a My Little Pony fan site demo aimed at Bronies (adult male fans of the cartoon series) that I built for a fun MEAN stack bootcamp homework assignment at Coding Campus. The instructions for the assignment can be found here: http://coursework.codingcamp.us/exercise-professional-services/

The site is built using Angular and has one controller (app.js), two model services (modelservice.js and modelmanager.js), and a responsive view (index.html) that uses HTML5, Bootstrap, and my own css styling (app.css).

The modelservice.js file stores the data for the application: a pre-populated list of My Little Ponies images displayed on the horizontal menu at the top of the page and running lists of favorite images and videos submitted by users. The demo application is not set up with a database, so I hard-coded a few favorite images and videos into the file to give an idea of what the final version would look like.

The modelmanager.js links the data in the modelservice.js file to the controller in the app.js file with functions to get the pre-populated list of images, and to get, add and delete images and videos in the favorite lists. It also includes functions that perform simple validation on user input and process Youtube URLs (when the user submits the URL displayed at the top of the YouTube page or the 'Share' URL) so they can be embedded on the page after submission.

The app.js file contains the Angular controller that connects the model files to the view (webpage). It uses the ngSanitize module and $sce service to allow user-submitted video URLS to be bound to the view and embedded on the webpage. It also includes a jQuery library for the scrolling bar in the horizontal menu at the top of the page.

My view (see index.html) uses Angular features like ng-repeat, ng-click and ng-show to bind parts of the webpage to the controller and make it dynamic. Correctly submitted images and videos are displayed right after the user submits them, and an error message is displayed if fields are left blank or submitted data does not pass the validation checks. Bootstrap classes are used for responsive design. 

My app.css file styles the list of pre-populated images at the top of the page with table properties to produce a horizontally scrolling menu, using a CSS demo I found online ( http://www.webdesignerdepot.com/2014/02/how-to-create-horizontal-scrolling-using-display-table-cell/ ). 

I had a fun time building and designing this web application and hope you enjoy it too!