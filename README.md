# GoJournal

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.26.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Adding Firebase Configuration
* Create file named api-keys.ts in /src/app/
* Visit firebase.google.com to set up a firebase account
* Create new project
* Click "Add Firebase to your web app" button
* Include your given credentials with the following format in your api-keys.ts file:

* export var masterFirebaseConfig = {
    * apiKey: "xxxx",
    * authDomain: "xxxx.firebaseapp.com",
    * databaseURL: "https://xxxx.firebaseio.com",
    * storageBucket: "xxxx.appspot.com",
    * messagingSenderId: "xxxx" };
* On the left hand menu navigate to Database and then the tab rules
* Change both read and write rules to the boolean true
* Navigate to the Data tab and click on the three dropdown dots
* Choose import JSON and upload the sample-albums.json file from the project directory to get started using the app

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
