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
- crear vuestro proyecto gitub
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
npx?
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

- añadir ng library
ng generate library anime --prefix=anime
compilar con prod, si no quieres que aparezca un error de IVY
analizar las diferencias
problemas con lazyloading
-- lo añadimos como componente routing

-- lo añadimos como dependencia en el package.json
creamos nuevo github
subimos el dist
añadimos dependencia
npm install --save https://github.com/jesuscuesta/codemotion-2020-ang-library
también con usuario y password
también se puede hacer por ssh

creamos una nueva sección: ng g module pages/anime-dev --route anime-dev --module app.module
mostramos ejemplo con network

- ejemplo varios servidores
  Generamos otra aplicacion
ng generate application doctor-strange --routing --prefix=strange
generamos un nuevo enlace
le añadimos al servidor, podemos ponerlo en un iframe, webcomponent, nueva pestaña, misma pestaña, etc...

Otras aplicaciones no angular en el mismo repositorio
ejemplo con svelte
npx degit sveltejs/template deadpool
cd deadpool
npm install
npm run dev

Extras
- explicar brevement NX
  
-- explicar sistema de plugins

Webpack 5 => module federation

Lerna: https://github.com/lerna/lerna ==> muchos proyectos mono repo

Hablar del sistema de gobierno del repositorio

==========================

- Multirepo
- creamos otro repositorio
- ng new nombre-proyecto --prefix=nombre-proyecto
- ng build --prod
- vamos a dist, npx static-server

  - Iframes => tab virtual ==> crear modulo, y enlazar
  - ng g module pages/iframes --route iframes --module app.module
  - metemos el iframe, compilamos la otra aplicación y la cargamos
  
  - como library: dependencia assets, dependencia package.json o npm => crear modulo y enlazar
-- creamos librería en el otro proyecto, build, y la enlazamos con el package.json, con hardcode, luego probamos subirla a github y la enlazamos
explicar storybook, angular material
explicar luego la publicación
explicar ñapas, metiéndola en assets y cosas así

- añadir con angular elements disney
- ng new codemotion-elements

- añadimos la dependencia de angular elements
ng add @angular/elements
añadimos el compilador: ng add ngx-build-plus
tener cuidado que coincidan las versiones
problema routing
- añade el import en el main.ts
- import 'zone.js/dist/zone';

- Dejar ejemplo más completo angular elements: https://github.com/jesuscuesta/angular-elements
- ++++ MIRAR LO DE ANGULAR ELEMETNS

-con un CDN

  - como webcomponent
igual que en el caso anterior

  - como proyecto con .submodulo
  - crear repositorio a parte
  - crear subaplicación: ng generate application code-externa --routing --prefix=code-externa
  - git submodule add https://github.com/jesuscuesta/code-externa
git clone https://github.com/jesuscuesta/code-externa
Para recuperar los ficheros:
git submodule init
Para actualizarlos:
git submodule update
También podemos ahorrarnos las dos últimas líneas con --recursive:

git clone --recursive https://github.com/GeekyTheory/GeekyBlogs.git

  - Module federation
  - Configuración proxy

Más sobre webcomponents
- angular elements
- webcomponentjs
- stenciljs
- lit-element
- Vaadin 

URLS
https://angular.io/cli/generate#application-command
https://medium.com/disney-streaming/combining-multiple-angular-applications-into-a-single-one-e87d530d6527
https://www.angulararchitects.io/aktuelles/6-steps-to-your-angular-based-microfrontend-shell/
https://micro-frontends.org/
https://www.youtube.com/watch?v=wxnwPLLIJCY
