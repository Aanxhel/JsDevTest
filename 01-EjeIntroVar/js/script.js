/*
Ahora te pedimos que declares una función llamada  tripleDeLaSuma() que reciba dos parámetros. Luego tiene que sumar ambos y devolvernos el triple del valor del resultado de sumar ambos parámetros . Para ello ya contás (aunque no la veas declarada) con la función triple, que recibe un parámetro y retorna el valor del mismo multiplicado por tres.
*/

function sumar(numero1, numero2) {
    return numero1 + numero2;
}

function tripleDeLaSuma(numero3, numero4) {
    let resultadoDeSuma = sumar(numero3, numero4);
    return resultadoDeSuma * 3;
}

console.log(tripleDeLaSuma(2,2))