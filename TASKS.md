2 Goals:
1. Build something small and user-friendly
2. Practice working in the full stack

DONE Task 1: Create 3 buttons on the screen:
Group By:
- [Domain]
- [Content]
- [Magic]

Task 2: When a user clicks on any of them, reorder the page "cards" to group by these 3. 
2.a) Identify the cards groupable by provided groupByVariable and re-structure the JSON to include this Grouping. - Practice JSON Fiddle: https://jsfiddle.net/gfktLp73/10/
2.b) Create Separate Sections of the Page for each of those groupings (good place to use a grid inside the parent grid)
2.c) Render the cards as per the grouping provided

Task 3: 
- Once done, show a "schedule by group" popup (fill this with static values for this demo).

Task 4: 
- Store this schedule in a Mongo / Node backend. 

Task 5: 
- Write a cron job to pull out the feeds and email the posts over as they are done. 

Task 6: (Clean Ups)
- Remove unused CSS and Imports: In App.tsx there are multiple CSS files that I can potentially remove.
- getFeed is console logging twice, not sure why, will need to clean this up. 
- I added a "noImplicitAny": false in tsconfig.json, would want to set this to true to enable this back again.
- Change getFeed to read from local file
- Break out Cards after 4 columns
- Fix height of cards to all be the same. Right now they are randomized height. 


Setup Tasks:
Done 1: Install & Setup IONIC
2: Represent content.JSON as IONIC Cards on the page 
Done: 2a) Load the JSON File - See Line 60 in Home.tsx:
Done: 2b) Display in Card Format - Image, Content & Buttons
Done: 2c) Display cards using a For Loop / Array Map
Done: 2d) Display cards using live JSON Data


