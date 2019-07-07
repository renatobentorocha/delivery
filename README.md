Este repositório é formado por três aplicações, onde juntas, compôem um aplicativo para gerênciar pedidos de entregas. 


# API

* Deve-se criar uma arquivo .env na raiz do projeto configurando algumas variáveis de ambiente. Pode-se usar o arquivo .example.env como exemplo;
* Deve-se alterar o arquivo src/config/database.js para o uso do sequelize;
* Após as configurações e a criação do banco de dados no postgres, pode-se executar o comando **yarn sequelize db:migrate** para a criação das tabelas no banco;
* Algumas rotas da aplicação só podem ser acessadas por usuários administradores. Tais usuários devem ser cadastrados usando, por exemplo, o insomnia. Os demais usuários, clientes, serão cadastrados pela aplicação mobile;
* As rotas que só podem ser acessadas por administradores estão marcadas abaixo.


## Rotas

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

* As rotas para cadastro devem ser acessadas passando os headers: Authorization, com o token retornado pela rota /signin para um usuário administrador; e device com a strins "**WEB**";

* As rotas para autorizadas para a aplicação mobile deve ser acessadas passando os headers: Authorization, com o token retornado pela rota /signin para um usuário cliente; e device com a strins "**MOBILE**";

# Web app

* Olny admin users can access;
* Um admnistrador deve ser cadastrado usando uma ferramenta REST, por exemplo Insomnia;
* São apresentados os pedidos mais recentes feitos pelo app mobile em tempo real;

![Web login](https://user-images.githubusercontent.com/18239349/60768811-9107df80-a09e-11e9-9522-445c2a04ad72.png)

![Web](https://user-images.githubusercontent.com/18239349/60768823-af6ddb00-a09e-11e9-8903-f90098a76e71.png)


# Mobile app

* Only clients can access;
* Novos usuários cadastrados são entendidos automaticamente como clientes;
* Possui um arquivo .env na raiz para configuração

![login_mobil](https://user-images.githubusercontent.com/18239349/60769180-02499180-a0a3-11e9-90b9-f8b017a5220d.jpg)

![home](https://user-images.githubusercontent.com/18239349/60769186-0f668080-a0a3-11e9-8702-2696f5963173.jpg)
