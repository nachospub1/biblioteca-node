# Library-node

Este es un proyecto creado con fines demostrativos. Se utiliza Node 16 + Sequelize (postgres).

## Installation

npm install

<!--> Variables de entorno<!-->
Crear archivo .env con las siguientes variables:

ENVIRONMENT

PORT

DB_HOST

DB_USER

DB_PASSWORD

DB_NAME

<!--> Opcional: insertar data de prueba <!-->
npm run seed:up

## Folder structure

Los ámbitos están expuestos en el primer nivel, al estilo de clean architecture.
Las rutas y controladores se encuentran en la carpeta infrastructure. Los casos de uso se encuentran en la carpeta application. 

## Data diagram

![alt text](assets/diagram.png?raw=true)

## Usage

npm start 

<!--> Endpoints <!-->
Usar Postman. Importar archivo postman.json. Crear variable de entorno 'url' en Postman.

<!--> Uso de operaciones CRUD. reader, item, copy, loan <!-->
GET {{url}}/reader/all

GET {{url}}/reader/one/<id>

POST {{url}}/reader/

PATCH {{url}}/reader/<id>

DELETE {{url}}/reader/<id>


<!--> Uso de raw queries <!-->
GET {{url}}/reader/history/<readerId>
GET {{url}}/item/field/<patternToSearch>

<!--> Generación de excel <!-->
GET {{url}}/item/inventory

## License

[MIT](https://choosealicense.com/licenses/mit/)