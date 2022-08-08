# kicklaunch

## What it contains

- `Packages/kl-config`: A config package shared across whole repo.
- `Packages/kl-tsconfig`: A Typescript config package
- `Packages/kl-core`: Design system / Kicklaunch platform package (Contains all the component - React Based with tsup
  bundler)
- `apps/web`: Web application based on NextJS
- `apps/graphql`: Graphql service (Not included)

## How to

### Run

- `yarn install`: To install all the packages across repo (While doing this step select the latest version 5.3.3
  for `styled-components`.)
- `yarn dev`: This will build the packages and run the apps in `apps` folder. This will run application in staged backend URL.
- `yarn local`: This will run application with local backend URL.
- `yarn clean`: Clean run

### NOTE: Please refer to individual README for each app (if any) for specific commands