# admin-bro-crud
CRUD simples em adminjs

## Para iniciar o projeto localmente:

### Rode o código abaixo para iniciar um container rodando mongoDB na porta 27017, user = root, pass = root

  docker run --name mongodb -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=root -e MONGO_INITDB_ROOT_PASSWORD=root mongo

### Faça o clone do projeto no seu computador e execute os comandos abaixo:

    npm install

    npm start
    
#### (Caso não esteja rodando o mongo localmente, altere o endereço na linha 44 do arquivo `admin.js`)

![Screenshot from 2022-04-02 19-41-58](https://user-images.githubusercontent.com/83842945/161403810-b559737a-ba7e-4ace-9fe4-eda796100df2.png)

### Acesse: http://localhost:5500/admin

![Screenshot from 2022-04-02 19-27-08](https://user-images.githubusercontent.com/83842945/161403449-f0e24a1b-8a9f-4655-a553-f6785edf0d7d.png)

![Screenshot from 2022-04-02 19-27-28](https://user-images.githubusercontent.com/83842945/161403543-29470f92-535a-4bef-bbd5-3897dc45d241.png)

#### https://adminjs.co/
