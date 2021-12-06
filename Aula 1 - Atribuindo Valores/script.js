 let nome = 'luiz gonzaga da costa souza neto'
 let sobrenome = 'gonzaga'

 nome.concat(' ',sobrenome) // concatecar uma string

 //console.log(nome.split(","))

function verificarPalindromo(string){
    if(!string) return 'string inexistente'

    return string.split('').reverse().join('') === string
}

function verificarPalindromo2(string){
    if(!string) return 'string inexistente'

    for(let i=0; i < string.length; i++){
        if(string[i] !== string[string.length -1 -i]) return false; 
    }

    return true;
}

console.log(verificarPalindromo('arara'))

console.log(verificarPalindromo2('omo'))
