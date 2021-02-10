npm i --save-d nodemon
npm run dev

* IMPORTANTE RECORDAR TENER CORRIENDO EL SERVER DE DOCKER CON LA INSTRUCCION
    docker-compose up

** git status
** git add --all
** git commit .m "aqui un mensaje" 
** git branch -M main

Step 1: 
    
    Deploy to GOOGLE CLOUD. 
    -- hacemos cuenta.
    -- creamos recurso  SQL INSTANCE -- Postgres data base
    -- Cloud Run -- create SERVER
            elegimos un servidor cercano
            ponemos un nombre como : data-API
            Crearemos deploy desde un REPOSITORIO
            step 2. SETUP UP WITH CLOUD BUILD

Step 2: 

    -- https://cloud.google.com/sql/docs/postgres/connect-run?hl=en#node.js

Step 3:

        Realizamos la configuracion para GOOGLE CLOUD

Step 4:

        Actualizamos docker file con :
        CMD [ "node", "index.js" ]
