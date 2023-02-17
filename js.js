let table = () => {
  const num1 = parseInt(window.prompt("Ej1. Ingresa un número"));
  const arr1 = [];

  for (let index = 1; index < num1 + 1; index++) {
    arr1.push(index);
  }

  const strArr = [];
  for (let i = 0; i < arr1.length; i++) {
    let string = `<tr>
        <td>${arr1[i]}</td>
        <td>${arr1[i] ** 2}</td>
        <td>${arr1[i] ** 3}</td>
    </tr>`;
    strArr.push(string);
  }

  const table1 = document.write(
    `<table>
    <caption>Cuadrados y Cubos</caption>
    <thead>
        <tr>
            <th>Numero</th>
            <th>Cuadrado</th>
            <th>Cubo</th>
        </tr>
    </thead>
    <tbody>
        ${strArr.toString()}
    </tbody>
   </table>`
  );
};

let sum = () => {
  let x = Math.floor(Math.random() * 10 + 1);
  let y = Math.floor(Math.random() * 10 + 1);
  let suma = `Cual es el resultado de ${x} + ${y}`;
  let res = window.prompt(`${suma}`, "Resultado");

  if (res != x + y) {
    return sum();
  } else {
    window.alert("Correcto!");
  }
};

let contador = () => {
  let numeros = [];
  var numpos = 0;
  var numneg = 0;
  var ceros = 0;

  for (let index = 0; index < 10; index++) {
    var x = Math.floor(Math.random() * 10 - 5);
    numeros.push(x);
  }

  for (let index = 0; index < numeros.length; index++) {
    if (numeros[index] > 0) {
      numpos += 1;
    } else if (numeros[index] < 0) {
      numneg += 1;
    } else {
      ceros += 1;
    }
  }

  document.write(` <h1> Numeros Positivos: ${numpos} </h1>`);
  document.write(`<h1> Numeros Negativos: ${numneg} </h1>`);
  document.write(` <h1>Cantidad de 0: ${ceros} </h1>`);
};

let promedios = () => {
  let suma = 0;
  matriz = [
    [6, 4, 5],
    [2, 8, 4],
    [1, 2, 9],
  ];

  for (let index = 0; index < matriz.length; index++) {
    let row = matriz[index];
    for (let index = 0; index < row.length; index++) {
      suma += row[index];
    }
    suma = suma / matriz.length;
    document.write(
      ` <h2> Promedio de suma de columa ${index + 1}: ${suma} </h2>`
    );
    suma = 0;
  }
};

let inverso = () => {
  let numeros = [];
  for (let index = 0; index < 15; index++) {
    var x = Math.floor(Math.random() * 15);
    numeros.push(x);
  }
  document.write(`<h2>El arreglo es: ${numeros} </h2>`);
  document.write(`<h2>El arreglo es: ${numeros.reverse()} </h2>`);
};

let constructores = () => {
  let personas = [];
  let personiq = [];
  let personage = [];

  function Person(first, age, iq) {
    this.firstName = first;
    this.age = age;
    this.iq = iq;
  }

  const person1 = new Person("Sebastian", 21, 89);
  const person2 = new Person("Frida", 20, 90);
  const person3 = new Person("JP", 21, 90);
  const person4 = new Person("Santir", 20, 91);

  personiq.push(person1.iq, person2.iq, person3.iq, person4.iq);
  personage.push(person1.age, person2.age, person3.age, person4.age);
  personas.push(
    person1.firstName,
    person2.firstName,
    person3.firstName,
    person4.firstName
  );

  document.write(
    `<h2>Sorting de Nombre de las diferentes personas: ${personas} </h2>`
  );
  document.write(
    `<h2>Sorting de iq de las diferentes personas: ${personiq.sort()} </h2>`
  );
  document.write(
    `<h2>Sorting de edad de las diferentes personas: ${personage.sort()} </h2>`
  );
};

table();

contador();

promedios();

inverso();

constructores();
