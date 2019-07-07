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


# Mobile app

* Only clients can access;
* Novos usuários cadastrados são entendidos automaticamente como clientes;
* Possui um arquivo .env na raiz para configuração
