//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let AmigosArray = new Array();
let inputName = document.getElementById('amigo');
let listaAmigos = document.querySelector('.name-list');
let resultadoLabel = document.querySelector('.result-list');
let sortearButton = document.querySelector('.button-draw');

function AdicionarAmigo(){
    if(FiltrarInput(inputName.value)){
        AmigosArray.push(inputName.value);
        inputName.value = "";
        AtualizarVisualizacao();
    }
    else{
        inputName.value = "";
    }
}

function FiltrarInput(value){
    let regex = /^[a-zA-Z\s]+$/;
    if(value.length === 0){
        alert('Campo Vázio! Por favor insira um nome.');
        return false;
    }
    else if(!regex.test(value)){
        alert('Nome inválido! Não use characteres especiais, emojis ou simbolos.');
        return false;
    }
    else if(!AmigosArray.includes(value)){
        return true;
    }
    return true;
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
    resultadoLabel.innerHTML = `O Amigo secreto sorteado é: ${AmigosArray[result]}`;
}