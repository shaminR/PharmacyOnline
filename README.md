# PharmacyOnline

## How to run PharmacyOnline
- First clone the repository using "Git clone https://github.com/shaminR/PharmacyOnline.git"
- Make sure you change directories (cd) to the PharmacyOnline folder
- import SQL database which can be found at "/databaseBackup/schemaData.sql"
- after importing run the following command in mysql:
~~~sql
	ALTER USER ‘root’@’localhost’ identified WITH mysql_native_password BY ‘password’;
	Flush privileges;
~~~
- create a new directory by running the following in the terminal
  1. Mkdir dist
  2. mkdir src/server/config
  3. cat > src/server/config/index.ts

- in index.ts file located at "src/server/config/index.t" write the following:

~~~javscript
export default {

    mysql: {
        host     : 'localhost',
        user     : 'root',
        password : password,
        database : 'pharmacy'
    }

}
~~~

- now run the following in gitbash or any equivalent softwares
  1. npm install
  2. npm audit fix
- lastly to run pharmacyonline
  1. npm run dev
  2. go to localhost:3000 on your favorite web browser




#Extra information 

## Server
The server build process compiles the TypeScript files found in `/src/server` into a single bundled JavaScript file located in the `/dist` directory.

## Client
The client build process compiles the React app located in `/src/client` into a bundled located at `/public/js/app.js`.

The client configuration will also build the Sass files found at `/src/client/scss`. The App component imports the `app.scss` file which already includes an import for Bootstrap.

## Running the project
In order to run the server, use `npm run dev`, and the server will start on port 3000 (http://localhost:3000). 

Webpack will watch the files. Once you save a file, you can refresh your browser to ensure you got the updated client files. If you only change server files, you *shouldn't* need to refresh.
