# pawprint

## Introduction

Welcome!

This is a mock designer fashion website for cats. I created it to practice UI/UX design skills as well as my skills using the [t3 stack](https://create.t3.gg/) (mostly Tailwind CSS, but also Prisma, TRPC, Typescript and Next.js).

## Project aims

This is a work in progress. The primary aims of this project are:

- Develop UX/UI design by conducting research into contemporary fashion websites
- Learn to use Figma to apply these conventions to high-fidelity wireframes
- Employ principles of [Nielsen's usability heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/) throughout (e.g. by following atomic web design principles to create reusable components and ensure consistency)

The key user stories are:

- Allow a user to browse a list of items
- Allow a user to view a single item
- Allow a user to add items to a basket

Eventually I would like to implement the following:

- User authentication using Clerk or NextAuth
- More filtering and variety options
- Persistent order history (after user auth set up)

## Using this repo

The minimum version for this repo is node version 21.

- Clone this repo
- Run `npm i` to install all dependencies
- Set up the `.env` file with a database URL.
    - There is an example of this in the `.env.example` file. You can either use a local url like in the example, or host a database on Supabase or similar.
- Run `./start-database.sh` (you may need to install [Docker](https://docs.docker.com/get-docker/))
- Run the `npm run db:push` to sync the database with the Prisma schema
- Run `npm run dev` to start the project

Have fun!