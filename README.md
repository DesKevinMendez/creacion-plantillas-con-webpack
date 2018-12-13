## Creacion plantillas con webpack
Este repositorio, contiene las configuraciones necesarias con webpack y babel, para la compilacion de javascsript, css, y sass

## Ejecuta 

npm install

### USO

Importarta los archivos css/sass y javascript a src/index.js

>Es necesario importar ya sea solo css o scss en el archivo src/index.js

>Webpack se encargara de generarte los archivos necesarios en la carpeta de raiz <code>build</code>

---

#### Configuraciones
> En webpack.config.js
  * Desabilita el plugin new ExtractTextPlugin('app.css'), para evitar que webpack te genere la compilacion de los archivos css
  * Desabilita el plugin extractCSS para evitar que webpack compile archivos sass

> Este repositorio solo contiene las configuraciones básicas para la generacion de css mediante scss o css puro y javascript en un solo archivo a la hora de desarrollo de tus plantillas.
  

