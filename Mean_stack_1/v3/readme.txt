npm i --save-d nodemon
npm run dev

* IMPORTANTE RECORDAR TENER CORRIENDO EL SERVER DE DOCKER CON LA INSTRUCCION
    docker-compose up

Step 1 :
    Creamos un archivo .dockerignore 

    /* En este archivo queremos que no se copien la carpeta: 
    node_modules cuando hagamos la puesta en produccion de la API*/

Step 2 :
    Creamos el archivo Dockerfile

    /* En este archivo le indicamos variables de configuracion, tales como la 
    version del node, la carpeta de trabajo, un SCRIPT de ejecucion
    y el puerto
    */

Step 3:

    Creamos el archivo docker-compose.yml

    Con DOCKER creamos un entorno para la gestion de la BD POSTGRES en ambiente 
    de desarrollo local
     
Step 4: 

    Instalamos los modulos que ocupamos: 
    npm i pg sequelize

    En indexc3.js cargamos los modulos instalados

Step 5: 

    En nuestro package.json cargamos nuestras variables de entorno
    "start": "nodemon indexc2.js" la modificamos de la sigte forma
    "start": "DATABASE_URL=postgres://user:password@:/db nodemon indexc3.js"

Step 6: 

    EN APP.LISTEN validamos con TRY/CATCH la conexion a la BD

Step 7:

        Creamos un squema de los datos: Nombre y temperatura con datos
        obligatorios

Step 8:

    EN app.LISTEN  le indicamos que sincronize los modelos con la BD, tambien
    podemos borrar la linea: const datalist = [];

Step 9:

    en POST-- como ya no ocupamos push para datalist, tenemos que sustituirlo 
    por accion de insertar en la BD.

    Primero hacemos nuestra funcion POST que sea asincrona:
    https://developer.mozilla.org/es/docs/Learn/JavaScript/Asynchronous/Async_await
    para recibir una promesa y no directamente el valor

    despues utilizamos la palabra await :
    para pausar tu codigo en esa linea hasta que se cumpla la promesa, 
    entonces retorna el valor resultante.Mientras tanto, otro código que puede 
    estar esperando una oportunidad para ejecutarse, puede hacerlo.

Step 10 :

    Modificamos nuestro GET para que muestre los datos.

Step 11 :

    Abrimos postman en : POST --localhost:8080/data
    Body--raw---json
    {
    "name": "PGJ",
    "serial": "001",
    "temperature": 77.01
    }

    Observamos el resultado y comprobamos con GET  localhost:8080/data

