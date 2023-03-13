# next-ts-components
NextJS Typescript Components

### Commands
- npx tsc --init
- npm install react typescript @types/react --save-dev
- npm install rollup @rollup/plugin-node-resolve @rollup/plugin-typescript @rollup/plugin-commonjs rollup-plugin-dts --save-dev
- npm i @rollup/plugin-typescript@8.3.3 --save-dev

## Publish Private NPM Packages
### https://brianmorrison.me/blog/private-npm-packages-with-github-actions-packages/
### https://www.youtube.com/watch?v=7CNC0QBCY-Y

## Create & Publish a React Component Library: 
- https://dev.to/alexeagleson/how-to-create-and-publish-a-react-component-library-2oe
- fix rollup errors: https://stackoverflow.com/questions/73197460/error-could-not-resolve-entry-module-react-rollup
- How to Bundle JavaScript With Rollup — Step-by-Step Tutorial: https://www.learnwithjason.dev/blog/learn-rollup-js
### must install version 8.3.3 of rollup plugin (npm i @rollup/plugin-typescript@8.3.3 --save-dev) otherwise, you will get the error below when you run npm run rollup
- [!] Error: Could not resolve entry module (dist/esm/types/index.d.ts).
- Error: Could not resolve entry module (dist/esm/types/index.d.ts).
-    at error (A:\Projects\Coding\CMS\nextjs-components\node_modules\rollup\dist\shared\rollup.js:198:30)
-    at ModuleLoader.loadEntryModule (A:\Projects\Coding\CMS\nextjs-components\node_modules\rollup\dist\shared\rollup.js:22306:20)
-    at async Promise.all (index 0)
