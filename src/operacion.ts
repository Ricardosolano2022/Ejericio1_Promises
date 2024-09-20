//Implementacion o uso:

import { sumar} from './ejercicio promesav2.ts'

sumar(25, 7)

    .then(resultado =>{
        console.log(`La suma es: ${resultado}`);
        console.log(`Promesa Cumplida!`);
        
        
    })

    .catch(error => {
        console.error(error); // "Error: Uno o ambos números son negativos."
        
 });
  
//Ejemplo con un número negativo
sumar(10, -5)
.then(resultado => {
  console.log(`La suma es: ${resultado}`);
  
})
.catch(error => {
    console.error(error); // "Error: Uno o ambos números son negativos."
    console.log(`Promesa Rechazada!`);
    console.log('Fin de la promesa');
    
})
