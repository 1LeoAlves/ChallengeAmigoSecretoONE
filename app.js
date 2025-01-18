//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let AmigosArray = new Array();
let inputName = document.getElementById('amigo');
let listaAmigos = document.querySelector('.name-list');
let resultado = document.querySelector('.result-list');

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
    
}