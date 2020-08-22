2 Goals:
1. Build something small and user-friendly
2. Practice working in the full stack

DONE Task 1: Create 3 buttons on the screen:
Group By:
- [Domain]
- [Content]
- [Magic]

Task 2: When a user clicks on any of them, reorder the page "cards" to group by these 3. 
DONE 2.a) Identify the cards groupable by provided groupByVariable and re-structure the JSON to include this Grouping. - Practice JSON Fiddle: https://jsfiddle.net/p0gytdsL/25/. //What's Pending on the Fiddle?  //TODO: Check if label already exists in the workingJsonObject. Done!!
DONE 2.b) Create Separate Sections of the Page for each of those groupings - using <ion-toolbar>. Easy Peasy.
2.c) Render the cards as per the grouping provided
DONE 2.c.a) Figure out how to update the cards based on an event
2.c.b) Display cards of similar Domain side by side to each other. 
2.c.d) Find where to move this call to. var feeds = this.getFeed();  I believe what's happening is that on forceUpdate() the feeds are fetched fresh from the JSON file again. 

Task 3: 
- Once done, save this grouping in the backend. - Node/Mongo

Task 5: 
- On Page load, get the data stored in the database to identify the grouping of values. 

Task 6: (Clean Ups)
- Remove unused CSS and Imports: In App.tsx there are multiple CSS files that I can potentially remove.
- getFeed is console logging twice, not sure why, will need to clean this up. 
- I added a "noImplicitAny": false in tsconfig.json, would want to set this to true to enable this back again.
- Change getFeed to read from local file
- Break out Cards after 4 columns
- Fix height of cards to all be the same. Right now they are randomized height. 
- Change feed file back to gvArticleFeed.json
- Change Title back to title={item.Title} instead of title={item.Content} (done currently for testing the groupings)


Setup Tasks:
Done 1: Install & Setup IONIC
2: Represent content.JSON as IONIC Cards on the page 
Done: 2a) Load the JSON File - See Line 60 in Home.tsx:
Done: 2b) Display in Card Format - Image, Content & Buttons
Done: 2c) Display cards using a For Loop / Array Map
Done: 2d) Display cards using live JSON Data


