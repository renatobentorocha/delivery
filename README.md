This repository consists of three applications, where together, they compose an application to manage delivery orders.


# API

* You must create an .env file at the root of the project to set up some environment variables. You can use the .example.env file as an example;
* You should change the src / config / database.js file to use the sequelize according to your database access settings;
* After the configuration and creation of the database in postgres, you can execute the command **yarn sequelize db: migrate** to create the tables in the database;
* Some application routes can only be accessed by admin users. Such users should be enrolled using, for example, insomnia. The other users, customers, will be registered by the mobile application;
* The application routes are listed below, some are marked for access only by administrators.


## Routes

- [post] /signin
- [post] /signup

- [get] /app/product
- [get] /app/product/:id
- [post] /app/product **admin**

- [delete] /app/product/:id **admin**
- [put] /app/product/:id **admin**

- [get] /app/product/:product_id/type 
- [get] /app/product/:product_id/type/:id 
- [post] /app/product/:product_id/type **admin**
- [put] /app/product/:product_id/type/:id' **admin**
- [delete] app/product/:product_id/type/:id **admin**

- [get] /app/product_type/:product_type_id/size/:id
- [get] /app/product_type/:product_type_id/size

- [post] /app/usuario/:user_id/pedido/:order_id/item 
- [delete] /app/usuario/:user_id/pedido/:order_id/item/:id 

- [get] /app/user/:user_id/order
- [get] /app/order **admin**
- [post] /app/usuario/:user_id/order

- [get] /app/usuario/:user_id/carrinho
- [delete] /app/usuario/:user_id/carrinho

- [post] /app/usuario/:user_id/carrinho
- [delete] /app/usuario/:user_id/carrinho/item/:id

# Rest tools

* The routes for records management should be accessed by passing the headers: Authorization, with the token returned by route / signin to an administrator user; and device with the strings "**WEB**";

* Authorized routes for the mobile application must be accessed by passing the headers: Authorization, with the token returned by route / signin to a client user; and device with a strins "**MOBILE**";

# Web app

* Olny admin users can access;
* An administrator must be registered using a REST tool, for example Insomnia;
* Orders placed through the mobile application are viewed in real time and ordered by the latest;

![login](https://user-images.githubusercontent.com/18239349/60769434-e85d7e00-a0a5-11e9-8fae-85645ecc9d8e.png)

![orders](https://user-images.githubusercontent.com/18239349/60769435-edbac880-a0a5-11e9-9602-8927a5eb987a.png)

# Mobile app

* Only clients can access;
* New registered users are automatically understood as clients;
* There is an .env file in the root for configuration;

![login_mobil](https://user-images.githubusercontent.com/18239349/60769180-02499180-a0a3-11e9-90b9-f8b017a5220d.jpg)

![home](https://user-images.githubusercontent.com/18239349/60769186-0f668080-a0a3-11e9-8702-2696f5963173.jpg)
