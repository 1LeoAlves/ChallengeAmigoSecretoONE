//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let AmigosArray = new Array();
let inputName = document.getElementById('amigo');
let listaAmigos = document.querySelector('.name-list');
let resultadoLabel = document.querySelector('.result-list');
let sortearButton = document.querySelector('.button-draw');

function AdicionarAmigo(){
    if(inputName.value.length === 0){
        alert('Campo Vázio! Por favor insira um nome.');
    }
    else if(!AmigosArray.includes(inputName.value)){
        AmigosArray.push(inputName.value);
        inputName.value = "";
        AtualizarVisualizacao();
    }
    else{
        alert();
    }
}

function AtualizarVisualizacao(){
    listaAmigos.innerHTML = ""
    let query = "";
    AmigosArray.forEach((friend)=> {
        query += `<li> ${friend} <li>`;
    });
    listaAmigos.innerHTML = query;
}

function SortearAmigo(){
    let result = Math.floor(Math.random() * AmigosArray.length)
    resultadoLabel.innerHTML = AmigosArray[result];
}