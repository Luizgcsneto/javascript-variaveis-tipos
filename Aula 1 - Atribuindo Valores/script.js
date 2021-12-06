 let nome = 'luiz gonzaga da costa souza neto'
 let sobrenome = 'gonzaga'

 nome.concat(' ',sobrenome) // concatecar uma string

 console.log(nome.split(","))

function verificarPalindromo(string){
    if(!string) return

    return string.split('').reverse().join('') === string
}

console.log(verificarPalindromo('arara'))
