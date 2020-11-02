# CodemotionMicro

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

#

# Pasos a Seguir

- Tener instaladas dependencias
  - Git
  - Nodejs
  - Angular Cli
  - Vuestro IDE Favorito => Nosotros usaremos Visual Studio Code

- Creación del proyecto
ng new codemotion-micro

- Instalar dependencias: npm install

- Ejecutar proyecto
ng serve

- Vaciar contenido app

- Instarlar compodoc
npm install --save-dev compodoc

-- Añadir comando compodoc

## Monorepo

### new micro project
Generamos una nueva micro aplicación
ng generate application marvel --routing --prefix=marvel
ng generate application dc --routing --prefix=dc

-- Analizamos estructura
--- projects
--- angular.json

  - Qué pasa si ejecutamos ng serve
  - ¿Cómo ejecutamos una subaplicación?
  - ¿Podemos generarlas todas juntas?
  - Como ejecutar una sola

Levantamos la subaplicación:
- ng serve –-project marvel
- Añadimos en el html los enlaces
- Añadimos en el router las rutas
- -- comparativa con lazy loading y normal
- -- al poner lazy loading, da error, borrar browser module, poner CommonModule
- -- Cambiar en app-routing, forRoot por forChild, añadir ruta al componente

- probar ejectuar el dist, con npx static-server
- -- problemas si usan enlace normal y no routerlink

build las diferentes aplicaciones
==========================


URLS
https://angular.io/cli/generate#application-command
https://medium.com/disney-streaming/combining-multiple-angular-applications-into-a-single-one-e87d530d6527

