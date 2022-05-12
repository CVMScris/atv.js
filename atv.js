//1 Escreva um programa para ler o ano de nascimento de uma pessoa e escrever uma mensagem que diga se ela poderá votar este ano.

let idade = prompt('Coloque seu ano de nascimento')
if( idade <= 2005 ){
alert('Você pode votar')
}else{
    alert('Você não pode votar')
}

//2 Escreva um programa que verifique a validade da sua senha fornecida pelo usuário. A senha válida é o numero 1234. Devem ser impressas as seguintes mensagens:

let senha = ('coloque sua senha')
if( senha == 1234){
    alert('ACESSO PERMITIDO')
}else{
    alert('ACESSO NEGADO')
}

//3

let turno = prompt('qua turno você estuda?')
if(turno == 'matutino'){
    alert('bom dia')
}else if (turno == 'tarde'){ 
    alert('boa tarde')
}else if(turno == 'noite'){
    alert('boa noite')
}else{
    alert('valor inválido')
}


