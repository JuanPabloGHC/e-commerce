# ECommerce

## Author
Juan Pablo Gómez Haro Cabrera

## Description
MVP e-commerce developed with Angular to practice the creation of components, services, clases, etc.

## Technologies

[TypeScript](https://www.typescriptlang.org/)

[HTML](https://developer.mozilla.org/es/docs/Web/HTML)

[CSS](https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/CSS_basics)

[ANGULAR](https://angular.dev/)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.1.

## Architecture

```plain
└──📁/src
   ├──📁/app
   │   ├──📁cart [cart.component]
   │   ├──📁footer [footer.component]
   │   ├──📁home [home.component]
   │   ├──📁login [login.component]
   │   ├──📁product-details [product-details.component]
   │   ├──📁products [products.component]
   │   ├──📁signup [signup.component]
   │   ├──📁topbar [topbar.component]
   │   ├──📁user [user.component]
   │   ├──📄[app.component]
   │   ├──📄[auth.service]
   │   ├──📄[cart.service]
   │   ├──📄products.ts
   │   ├──📄ranks.ts
   │   └──📄users.ts
   │
   ├──📄index.html
   ├──📄main.ts
   └──📄styles.css
```

* .component
    * Includes the HTML, CSS, TYPESCRIPT and TEST files.
* .service
    * Inlcudes the service file with its test file
* cart
    * The cart has all the products per order
* home
    * Landing page
* signup / login
    * To create and enter your user
    * The input of the photo is that you can select your github photo (https://github.com/<your_username>.png)
* products / product-details
    * The list of all products and each product individually
* user
    * The profile of the user to show its information and its rank

## Data structures

```typescritp
Products {
    id: number
    name: string
    price: number
    description: string
    inStock: boolean
}

Ranks {
    id: number
    name: string
    color: string
    minimum: number
    limit: number
}

Users {
    id: number
    name: string
    password: string
    money: number
    photo: string
    nOrders: number
    rank: number
}

Orders {
    id: number
    product: Product
    cantidad: number
    subTotal: number
}

Cart {
    orders: Orders[]
    total: number
}
```

## Deploy

[E-COMMERCE WITH ANGULAR](https://e-commerce-xtva.onrender.com)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
