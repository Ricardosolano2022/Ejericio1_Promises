//•Crea una función que reciba dos números como parámetros. Si ambos números son
//positivos, resuelve la promesa con la suma de ellos. Si uno de los números es
//negativo rechaza la promesa con un mensaje de error.

export function sumar(num1:number, num2:number): Promise <number> {
    return new Promise((resolve, reject) => {
        if (num1 >= 0 && num2 >= 0){
            resolve(num1 + num2);
        } else{
            reject('Error!: Alguno de los numeros es negativo') //Rechazo de la promesa

        }
    });

}    






    

