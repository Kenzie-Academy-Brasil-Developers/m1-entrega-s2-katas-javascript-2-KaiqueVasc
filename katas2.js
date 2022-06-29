// comece a criar a sua função add na linha abaixo
function add(num1,num2){
    return num1+num2;
}

 console.log(add(5,10))


// comece a criar a sua função multiply na linha abaixo
    /*i     result
    1       10
    2       20
    3       30
    4       40
    5       50 */

function multiply(num1,num2){
    let result = 0
    for(let i = 1; i <= num2 ; i++){
      result =  add (result, num1)
    }
    return result

}

console.log(multiply(10,5))

// comece a criar a sua função power na linha abaixo

   /* i     result
    1       2
    2       4
    3       8
    4      16
    5      32
    6      64
    7      128
    8      256 */

function power (x,n){
    let result = 1
    for( let i = 1 ; i <= n ; i++){
        result =  multiply (result, x)
}
    return result 
}
console.log(power(2,8))    

// comece a criar a sua função factorial na linha abaixo

  /* i  result
   4   4x3
   3   12x2
   2   24x1
   1     */

function fatorial (x){
    let result = x
    for(i = x-1 ; i >= 1; i--){
      result = multiply( result, i )
    }
     return result
}     
  console.log(fatorial(4))



// crie a função fibonacci

 


// descomente a linha seguinte para testar sua função
// console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
