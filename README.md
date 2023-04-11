# Composition
 
Website to aid in the management of a chess team over the course of an ECF season. Pulls in data from the ECF LMS and Ratings systems.

The assumption should be that there might be more than one administrator per team, per league, per club, per area.

## Features (WIP)

- [ ] Admin logins
- [ ] Automatic loading of fixtures for a given season
- [ ] Automatically updated list of players, with current ratings and match history
- [ ] Ability to manage team for each match fixture
- [ ] Email sending to offer players a game, with the ability for them to accept/decline based on availability

### Structure

Types of objects, using the ECF LMS as a structure:

* Organisations e.g. Bury Area Chess https://ecflms.org.uk/lms/node/3117/home
  * slug for identification on this system
  * ID to reference back to LMS
* Events e.g. "BACL 22-23 Division 3" https://ecflms.org.uk/lms/node/120236/efixtures
  * Can have Types e.g. 
    * Team League https://ecflms.org.uk/lms/node/120236
    * Individual All Play All https://ecflms.org.uk/lms/node/137645
* Clubs e.g. Ely https://ecflms.org.uk/lms/league/club/522/3117/org
    * Can be members of more than one organisation
* Players e.g. Dan Finch https://ecflms.org.uk/lms/league_player/43071
* Fixtures e.g. https://ecflms.org.uk/lms/node/122248
    * Has a date
    * Connects to a Event, has Players

This leads us to have the following URL structure:

/ - Home, some generic information, list of organisations
/organisations/:id - Organisation detail, includes list of events within
/events/:id - Event detail, upcoming fixtures, results etc
/clubs/:id - Club detail, fixtures across events
/players/:id - Player detail, match results etc
/fixtures/:id - Fixture detail, shows the players, can do management here

This may not end up being the exact structure, but it's good enough to get started, specifics can come out in the wash.

## Technical details

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

### Learning notes

* Probably don't want to use "Static Generation with[out] data" via `getStaticProps` - this is all build-time stuff
* Probably want server-side rendering via `getServerSideProps` - https://nextjs.org/learn/basics/data-fetching/request-time
* SWR looks useful - https://swr.vercel.app/
* Need to use filenames like `[id].js` for dynamic routing - https://nextjs.org/learn/basics/dynamic-routes/dynamic-routes-details
* On `getStaticPaths`, `fallback: false` means you get a 404 for unspecified routes
* Make a `pages/404.js` to get a 404 page that's pre-rendered at build time - https://nextjs.org/docs/advanced-features/custom-error-page
* Probably want API routes for backend data processing - https://nextjs.org/learn/basics/api-routes/creating-api-routes
* Auth can be done using https://next-auth.js.org/
* UI can be done using https://mui.com/
