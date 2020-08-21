App Link: https://gvn6-13a2f.web.app/home

WIP. 

2 Goals:
1. Build something small and user-friendly
2. Practice working in the full stack

Task 1: Create 3 buttons on the screen:
Group By:
- [Domain]
- [Content]
- [Magic]

Task 2: When a user clicks on any of them, reorder the page "cards" to group by these 3. 
- Maybe use Accordions?

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
- Add rows (currently everything is in a single row, bad design, looks terrible on mobile)
