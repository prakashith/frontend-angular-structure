# OshodharaWapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Documentation

Run `npm run compodoc:build-and-serve` to see the documentation of code. The build artifacts will be stored in the `documentation/` directory.
## Write funciton in components
```
/**
   * 
   * @param name Name of user
   * @param email Email of user
   * @param mobile Mobile of user
   */
  addData(name, email, mobile){
    let dataToSave = {
      name:name,
      email:email,
      mobile:mobile
    }
    this.mainService.adduser(dataToSave)
  }
```

## Write funciton in service file 
```
/**
   * 
   * @param data data in key value format
   */
  adduser(data){
    this._http.get("localhost:8000/user/v1/add", data)
  }
```

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
