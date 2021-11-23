<p align="center"><img src="/art/header.png?1" alt="spruce header"></p>

> ✨ Soporte de ayuda para este paquete [sponsoring me](https://github.com/sponsors/ryangjchandler).

# Plugin 🌲 Spruce


Una capa de gestión de estado global ligera para Alpine.js

![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/ryangjchandler/spruce?label=version&style=flat-square)
![Build size Brotli](https://img.badgesize.io/ryangjchandler/spruce/master/dist/spruce.umd.js.svg?compression=gzip&style=flat-square&color=green)
[![Monthly downloads via CDN](https://data.jsdelivr.com/v1/package/gh/ryangjchandler/spruce/badge)](https://www.jsdelivr.com/package/gh/ryangjchandler/spruce)

> Con el lanzamiento de [Alpine 3.x](https://github.com/alpinejs/alpine-next), Spruce ha sido reemplazado por un asistente de [`$store`](https://alpinejs.dev/magics/store) ayuda,asi mismo [`Alpine.store`](https://alpinejs.dev/magics/store).
 Este paquete seguirá siendo compatible con Alpine 2.x, pero solo con las versiones de seguridad ❤️

## Documentacion

Para aprender mas de Spruce y como usarlo, por favor ir a [official documentation](https://spruce.ryangjchandler.co.uk).



## Versionado

El projecto sigue las versiones [Semantic Versioning](https://semver.org/) .

## Seguridad

Please refer to [SECURITY.md](SECURITY.md) for more information.



# Plugin Alpine.js devtools

![Screenshot of Alpine.js devtools](docs/devtools-only.png)

Alpine.js devtools es una simple extension para permitirte debuguear [Alpine.js](https://github.com/alpinejs/alpine) componentes facilmente.

> Esta extension esta inspirada en  [Vue devtools](https://github.com/vuejs/vue-devtools),pero customizada para  Alpine.js .

## Instalacion

-   [Get the Chrome Extension](https://chrome.google.com/webstore/detail/alpinejs-devtools/fopaemeedckajflibkpifppcankfmbhk)
-   [Get the Firefox Extension](https://addons.mozilla.org/firefox/addon/alpinejs-devtools/)


## Identificacion de componentes

A diferencia de otros frameworks, Alpine no incluye  named components.Por eso by default, Alpine.js devtools intentara identificar component names 
de los atributos, in order: `id`, `name`, `aria-label`, `x-data` (the function name), `role`, and finally the `tagName`.



## Desarollo

### Pre requisitos

-   Node ^14.x
-   npm ^6.x

### Chrome

1. Clone this repo
2. Run `npm install`
3. Run `npm run build:dev` (or `npm run build` to test a production build)
4. Load unpacked extension inside [dist/chrome](./dist/chrome) directory
5. Open any HTML file that imports Alpine.js then inspect with Chrome DevTools. You should now have an Alpine.js panel available.

### Firefox

1. Follow the [Development](#development) instructions to get a development build.
2. Go to [about:debugging#/runtime/this-firefox](about:debugging#/runtime/this-firefox) in Firefox
3. Ensure you are on the "This Firefox" tab (see the left side nav)
4. Click "Load Temporary Add-on..."
5. Open any of the files in the built extension folder ([./dist/chrome](./dist/chrome))
6. Open any HTML file that imports Alpine.js then inspect with Firefox DevTools. You should now have an Alpine.js panel available.

### Correr el Alpine.js devtools simulator

A devtools simulator se puede utilizar para correr test y tener un flujo de trabajo.


###  Testing

Tenemos 2 niveles de testing en el projecto:

-   Testing unitario en [./tests](./tests), written and run con [uvu](https://github.com/lukeed/uvu)
    -   El comando para correrlo es  `npm test`.
-   E2E tests corre con el devtools simulator, en [./cypress](./cypress), usando [Cypress](https://cypress.io).
    -   El comando para correr Cypress tests es `npm run cy:run`
    -   El comando para correr Cypress UI es `npm run cy:open`
 

# Plugin Magic Helpers

Una coleccion de magic properties and helper functions para usar con [Alpine.js](https://github.com/alpinejs/alpine) version 2



## Prestaciones

Agregar los siguientes magic helpers para usar con Alpine JS.
| Magic Helpers | Descripcion |
| --- | --- |
| [`$component/$parent`](#component) | Nativo acceso y actualizaciion de data de otro componente o padre del componente. |
| [`$fetch/$get/$post`](#fetch) | Usando Axios, fetch JSON desde una fuente externa.  |
| [`$interval`](#interval) | Correr una funcionm cada n milliseconds.  |
| [`$range`](#range) | Iterar sobre un rango de valores. |
| [`$refresh`](#refresh) | Manualmente refrescar un componente. |
| [`$scroll`](#scroll) | Scroll la pagina verticalmente a una posicion especifica |
| [`$truncate`](#truncate) | Limitae un texto Stringa un numero espeficfico de carracterres. |
| [`$undo`](#undo) |  Detectar cambios de estado dentro de tus componentes. |


 ***Mas por venir!***




# Plugin Alpine.js Test Utils

Utilidades para testing de componentes Alpine.js .

**Esta libreria te permite escribir rapido y facil test para Alpine.js applications via Node.js using _any testing library_.**

Esto quiere decir que puedes usar AVA, Tape, Mocha, Jest o cualquier otra libreria de testing que quieras.

Este projecto no esta oficialmente en Alpine.js, es mantenido por miembros de la comunidad. Por feedback, preguntas, por favor crear [issues](https://github.com/HugoDF/alpine-test-utils/issues) y [pull requests](https://github.com/HugoDF/alpine-test-utils/blob/master/README.md#contributing) .


#Plugin  Pinecone Router

La extencion client-side router para Alpine.js.

## Compatibilidad

[Currently works with Alpine.js v2 only](https://github.com/pinecone-router/router/issues/12)

## Funcionalidad

Un enrutador del lado del cliente fácil de usar pero repleto de funciones para usar con Alpine.js.

Puede ser usado con:

-   Handle routes & process route variables.
-   Usa magic helper `$router` ayuda a mostrar elementos dinamicaente  etc. dentro de Alpine.js Components.
-   muchos mas usos [middlewares](#middlewares)!.



## Comunidad

* [Alpine.js Weekly - Newsletter](https://alpinejs.codewithhugo.com/newsletter)
* [Alpine.js Discord Community](https://discord.gg/CGmj5nq)
* [Alpine.js Matrix Community](https://matrix.to/#/#AlpineJS:matrix.org)
* [Alpine.js Persian Matrix Community](https://matrix.to/#/#AlpineJS-fa:matrix.org)
