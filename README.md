# Composition
 
Website to aid in the management of a chess team over the course of an ECF season. Pulls in data from the ECF LMS and Ratings systems.

## Features (WIP)

- [ ] Admin logins
- [ ] Automatic loading of fixtures for a given season
- [ ] Automatically updated list of players, with current ratings and match history
- [ ] Ability to manage team for each match fixture
- [ ] Email sending to offer players a game, with the ability for them to accept/decline based on availability

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
