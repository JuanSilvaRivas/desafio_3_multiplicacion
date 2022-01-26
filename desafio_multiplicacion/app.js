//pedimos un numero al usuario y lo parseamos
const numUsuario = parseInt(prompt("Ingrese un numero"));

//creamos la constante multiplicar
const multiplicar = (numUsuario) => {
  if (numUsuario > 1 && numUsuario < 20) {
    
      for(let i = 1; i < numUsuario; i++) {
        console.log(`
        ${i} * ${numUsuario} =${i * numUsuario} `);   
      }
    }
    
  }
  //llamamos a la funcion multiplicar y le pasamos el parametro que nos dio el usuario
  console.log(multiplicar(numUsuario));

  //creamos la funcion factorial y validamos que el numero este entre el 1 y el 20
  const factorial = (numUsuario) => {
    if (numUsuario > 1 && numUsuario < 20) {
    for(i = 1; i < numUsuario; i++){
      console.log(`
      El factorial de ${i} es ${factorial*(i)};
      `)
    }
   }
  }
 console.log(factorial(numUsuario));

