# Body Slam
This is my take on a Snorlax abilities app that can list Snorlax's abilities.
## Features
- Home page listing Snorlax's possible moves/abilities
- Each ability page will give a breakdown of damage, power points and potential damage
- The individual ability page also will displayed in the move type's colour scheme
- Individual ability pages also displays an image or gif of Snorlax using that move, otherwise it will show a default image of snorlax

## Tech

In this task I used a mix of technologies I was familiar with. This was my first time using Next.js in a project and I quickly saw its advantages.

- [React] - The library for web and native user interfaces
- [Next.js] - The React Framework for the Web
- [node.js] - free, open-source, cross-platform environment that lets developers create servers, web apps, command line tools and scripts
- [Tailwind CSS] - build modern websites without ever leaving your HTML

## Installation

Install the dependencies and devDependencies and start the server.

```sh
npm i
npm run dev
```

Open [localhost:3000]

## Testing

Unfortunately I was not able to write any tests, but I would have gone with [Vitest].

Tests I would have liked to write would be:
- Checking if the home screen was loading the abilities correctly
- Calculating damage potential with missing damage or pp
- Trying to access a non-existent move
- Loading ability page when there is no image of Snorlax provided
- Checking if the colours for the ability type is loading correctly or if the type doesn't exist

## Wrap Up
I this app were to be scaled up to include all Pokemon and abilities this is how I would approach the task.

- Start using the Pokemon API to get relevant Pokemon and abilities information
    - Pokemon API is pretty slow so will need to use Pagination when loading Pokemon
    - Rate limiting has been removed by the Pokemon API so we don’t need to worry that our users will crash it
    - Non-MVP task but having a search bar to find Pokemon will be very useful considering there are 1025 Pokemon
- Images of the Pokemon using all the abilities likely won't make it to the MVP
    - There are 1025 Pokemon and 934 abilities, which is too much for an MVP
    - Will likely end up being a separate project to get all of the images and deploy it as a rolling update
- Probably will forego making a separate individual ability page since the images won't be included anyway
    - The new individual Pokemon page will include damage potential in the table
    - Maybe the type text can be formatted to the associate type colour
- Host the website using AWS services so we can scale up or down depending on the amount of users that use the app

### Stories and Timeboxing
1. Home page with all the Pokemon
    - Front end: make home page - 2 days with testing
    - Back end: create API calls using the Pokemon API to return a list of all Pokemon - 1 day with testing
2. Clicking a Pokemon to send them an individual Pokemon page listing their moves and information
    - Front end: make a dynamic individual Pokemon page - 1 day with testing
    - Back end: create API call to get individual Pokemon details - 1 day with testing
    - Back end: create API call to get ability details - 1 day with testing

Total time allocation : 6 days

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)
   [node.js]: <http://nodejs.org>
   [Next.js]: <https://nextjs.org/>
   [React]: <https://react.dev/>
   [Tailwind CSS]: <https://tailwindcss.com/>
   [localhost:3000]: <http://localhost:3000/>
   [Vitest]: <https://nextjs.org/docs/app/building-your-application/testing/vitest/>