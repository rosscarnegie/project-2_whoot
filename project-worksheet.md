# Whoot Overview

## Project Links

- [Project 2 Git Repository](https://github.com/rosscarnegie/project-2_whoot.git)
- [Deployment Link (TBD)]()

## Project Description

This website will let users learn about the most common birds in their area. It starts by requesting the users GPS coordinates. 
It then uses these coordinates to submit a request to the ebird API 2.0 which returns a JSON string of all the bird sightings within a 50km range, over the last 30 days.  
It will return thumbnails for these birds which I'll supply. The default value for the pictures at the start will be the five birds I manually set up. The birds that I don't have thumbails for should return a placeholder picture.  Clicking on this picture will take the user to an info page. 
And from there, they'll be able to toggle between the fact sheet and most recent sightings of that same bird. 

I will use react router to navigate between the privacy statement and about page.  


To limit the scope of the project, I will focus on just five birds at the moment:  

Blue Jay (Cyanocitta cristata)  
Carolina Chicadee   (Poecile carolinensis)  
Northern Cardinal   (Cardinalis cardinalis)  
Canada Goose  (Branta canadensis)  
Cedar Waxwing  (Bombycilla cedrorum)  



## API
- [eBird API 2.0](https://documenter.getpostman.com/view/664302/S1ENwy59)  
This is the primary link for the ebird API 2.0 documentation. 

- [ebird.org](https://ebird.org/home)  
This is the link to the ebird website. 


### Test Code For API 

```
const latitude = 33.995670;
const longitude = -84.766370;

const requestOptions = {
    method: 'GET',
    headers: {"X-eBirdApiToken": "3ehbfu8dqaf"},
    redirect: 'follow'};

fetch(`https://api.ebird.org/v2/data/obs/geo/recent?lat=${latitude}&lng=${longitude}&sort=date&dist=50&back=30`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
```

### Output for Test Code 
The full results of that request are located in the results_fetchByCor.json file located in the project_planning folder, but a preview is shown below. 

```
[
    {
        "speciesCode": "easpho",
        "comName": "Eastern Phoebe",
        "sciName": "Sayornis phoebe",
        "locId": "L17019915",
        "locName": "Tech Tower Lawn",
        "obsDt": "2022-02-14 11:26",
        "howMany": 1,
        "lat": 33.772155,
        "lng": -84.39435,
        "obsValid": true,
        "obsReviewed": false,
        "locationPrivate": true,
        "subId": "S102634456"
    },
    {
        "speciesCode": "normoc",
        "comName": "Northern Mockingbird",
        "sciName": "Mimus polyglottos",
        "locId": "L17019915",
        "locName": "Tech Tower Lawn",
        "obsDt": "2022-02-14 11:26",
        "howMany": 1,
        "lat": 33.772155,
        "lng": -84.39435,
        "obsValid": true,
        "obsReviewed": false,
        "locationPrivate": true,
        "subId": "S102634456"
    },

	...Results Truncated
```

 


## Wireframes

- [Wireframes](https://res.cloudinary.com/duyd0k7pq/image/upload/v1644881376/Wireframe_fqdiyl.png)
- [react architecture](https://res.cloudinary.com/duyd0k7pq/image/upload/v1644883695/React_Architecture_p0rms9.png)


### MVP/PostMVP - 5min

#### MVP
- Find and use external API
- plan, set up
- Set Up Divs,  HTML, basic CSS
- Set Up Find Birds Near Me Form 
- Route privacy/about page
- Render found birds data on page  
- Sightings API
- Toggle Facts and Sightings
- Cover 
- Read Me (with Panda Gif)
- Clean up folders, checkvariable and component names 

#### PostMVP
- Find GPS Coordinates Button- 
- Get better color scheme 


### Time Frame

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Find and use external API | H | 8hrs| 8hrs | 8hrs |
| plan, set up | H | 8hrs| 8hrs | 8hrs |
| Set Up Divs,  HTML, basic CSS | H | 4hrs| 0hrs | 0hrs |
| Set Up Find Birds Near Me Form | H | 2hrs| 0hrs | 0hrs |
| Route privacy/about page | H | 2hrs| 0hrs | 0hrs |
| Render found birds data on page | H | 2hrs| 0hrs | 0hrs |
| Sightings API | H | 1hrs| 0hrs | 0hrs |
| Toggle Facts and Sightings | H | 4hrs| 0hrs | 0hrs |
| Cover | M | 3hrs| 0hrs | 0hrs |
| Read Me | H | 2hrs| 0hrs | 0hrs |
| Clean up folders, checkvariable and compnent names  | M | 1hrs| 0hrs | 0hrs |
| Totals |  | 38hrs| 0hrs | 0hrs |

## Additional Libraries


## Code Snippet

