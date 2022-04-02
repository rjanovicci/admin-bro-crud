# admin-bro-crud
CRUD simples em adminjs

## Para iniciar o projeto localmente:

### Faça o clone do projeto:

    git clone git@github.com:rjanovicci/admin-bro-crud.git

### Instale as dependências:

    npm install

### Rode o código abaixo para iniciar um container rodando mongoDB na porta 27017, user = root, pass = root

  docker run --name mongodb -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=root -e MONGO_INITDB_ROOT_PASSWORD=root mongo
    
#### (Caso não esteja rodando o mongo localmente, altere o endereço na linha 44 do arquivo `admin.js`)

![Screenshot from 2022-04-02 19-41-58](https://user-images.githubusercontent.com/83842945/161403810-b559737a-ba7e-4ace-9fe4-eda796100df2.png)

### Para rodar o projeto, execute:

    npm start

### Acesse: http://localhost:5500/admin

![Screenshot from 2022-04-02 19-27-08](https://user-images.githubusercontent.com/83842945/161403449-f0e24a1b-8a9f-4655-a553-f6785edf0d7d.png)

![Screenshot from 2022-04-02 19-27-28](https://user-images.githubusercontent.com/83842945/161403543-29470f92-535a-4bef-bbd5-3897dc45d241.png)

### E aqui podemos criar, buscar (com ou sem filtros), editar e deletar nossos dados.

![Screenshot from 2022-04-02 19-27-53](https://user-images.githubusercontent.com/83842945/161403864-b47b46b1-b94c-4de3-bc9d-d134e46aaf4f.png)

#### https://adminjs.co/
