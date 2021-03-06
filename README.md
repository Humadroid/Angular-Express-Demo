# Angular Express Demo App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Installation

Run `npm install`

## Run on Express Server

Run `ng build` to create the dist folder. Then run `node server.js` to serve from the express server. Navigate to `http://localhost:3000` for the app and `http://localhost:3000/api` for the api.

or 

Run `npm run build` shortcut for dist creation and serving from the express server. Navigate to `http://localhost:3000` for the app and `http://localhost:3000/api` for the api.
(Edit: Added nodemon so now `npm run build` will also watch server.)

(Note: For every change in angular, to run on server `npm run build` is necessary).

Run `json-server --watch db.json`, this is for faking API call with json-server.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
