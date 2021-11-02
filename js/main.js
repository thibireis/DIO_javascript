function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar!"
};

function clicou2(){
    // outra aba 
    window.open("https://dio.me/");
    //mesma aba
    //window.location.href("https://dio.me/");
};

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado!";
    elemento.innerHTML = "Obrigado!";
}

function voltar (elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui"
};

function load (){
    alert("Página carregada com sucesso!")
};


function change(elemento){
    alert("Escolheu a opção " + elemento.value)
};
/*function soma(n1, n2) {
    return n1 + n2;
}

function validaIdade(idade){
    var validar;
    if (idade>=18){
        validar = true
    }else {
        validar = false
    }
    return validar;
   }
   
   var idade = prompt ("QUal a sua idade?");
   console.log(validaIdade(idade))
*/

/*function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}
alert(soma (5,10));
alert (setReplace("Vai Japão", "Japão", "Brasil"));*/

/*var lista = ["Alemanha", "Inglaterra", "Escócia"]/
lista.push("Polônia");
lista.pop("Inglaterra");
*/

/*var d = new Date();
alert(d);*/
/*var count;
for(count=1; count <=5; count++){
    alert(count)
}*/


/* var count = 0;
while (count <= 5){
    console.log(count);
    alert(count)
    count++;
}
*/
/*var idade = prompt("Quantos anos você tem?");
if (idade >= 18){
    alert("maior de idade")
} else {
    alert("menor de idade")
};
*/

/*var frutas = [{nome: "maçã", cor:"verde"}, {nome: "pimenta", cor: "vermelho"}];
console.log(frutas);
alert("a cor da fruta é " + frutas[1].cor);
*/
/*var fruta = {nome: "maçã", cor:"verde"};
console.log(fruta);
alert("a cor da frura é " + fruta.cor)*/

//var lista = ["maçã", "pitaya", "tomate"];
//lista.push("morango");
//lista.pop();
//console.log(lista.reverse());
//console.log(lista.toString());
//console.log(lista.join (" | "))


/*var nome="Thiago Reis";
var n1 = 37;
var n2 = 10;
var frase = "Japão é o melhor time do mundo!!";
//alert("Bem vindo "+ nome + " !");
//alert (idade+idade2);
console.log(n1 * n2);
console.log(nome);
console.log(frase.replace("Japão", "Brasil").toUpperCase());
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());
*/