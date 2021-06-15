//Imports de los módulos
const users = require("./users.json");
const fs = require("fs");

const readFileUsers = () => {
  //Imprimir en consola el arreglo de usuarios
  console.log(users);
};

const writeHelloWorld = () => {
  //Escribir Hello world! en el archivo hello.txt
  fs.writeFile("./hello.txt", "Hello world!", (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("el archivo hello.txt ha sido modificado.");
    }
  });
};

readFileUsers();
writeHelloWorld();
