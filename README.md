## API de Pedidos e Pagamentos, usando Kafka

Essa API simula um pedido sendo feito (`Orders`), após isso é publicado no Kafka uma mensagem. 
Em seguida `Payments` consome a mensagem no Kafka( pagamento realizado), processa se o pagamento foi ou não realizado, em seguida publica uma nova mensagem atualizando o status do pedido.
Por fim, Orders consome a mensagem no Kafka e altera o status do pedido para `Payed` ou `Cancelled`

## Descrição

Essa aplicação utiliza:
[Nest](https://github.com/nestjs/nest)
[Docker](https://www.docker.com/get-started/)

## Instalação

Primeiro suba o container com o seguinte comando:

```bash
$ docker-compose up
```
Você pode utilizar a entensão `Dev Containers` do VSCode para auxiliar nesse processo.
Após isso o seu Banco de Dados em  MySQL já deve estar de pé, junto com seu container do Kafka

- Adicione os tópicos `orders` e `payments` no `localhost:9021` que é onde está rodando seu Kafka
- Utilize o arquivo `.docker/mysql/init.sql` para criar as tabelas orders e payments no Banco de Dados

- Em seguinda instale as dependências locais da sua aplicação:

```bash
$ npm install
```

## Rodado as API's

Os seguintes comandos sobem o server de sua API:

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```
Para rodar sua API de Payments: 
```bash
$ npm run start:dev payments
```