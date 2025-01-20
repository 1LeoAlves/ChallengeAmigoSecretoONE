//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let AmigosArray = new Array();
let inputName = document.getElementById('amigo');
let listaAmigos = document.querySelector('.name-list');
let resultadoLabel = document.querySelector('.result-list');
let sortearButton = document.querySelector('.button-draw');
let adicionarButton = document.querySelector('.button-add');
let resultWrapper = document.querySelector('.result-wrapper');
inputName.addEventListener("input", () => CheckEmptyness());

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
    console.log(value.length);
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
    if(AmigosArray.length <= 0){
        alert('Adicione pelo menos um nome antes de sortear!');
        return;
    }
    let result = Math.floor(Math.random() * AmigosArray.length)
    resultadoLabel.innerHTML = `O Amigo secreto sorteado é: ${AmigosArray[result]}`;
    resultWrapper.style.visibility = "visible";
}

function CloseModal(){
    resultWrapper.style.visibility = "hidden";
}

function OpenModal(){

}

function CheckEmptyness(){
    if(inputName.value.length !== 0){
        adicionarButton.style.backgroundColor = "#00830f"
        adicionarButton.style.color = "white";
    }
    else{
        adicionarButton.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--color-tertiary');
        adicionarButton.style.color = getComputedStyle(document.documentElement).getPropertyValue('--color-text');
    }
}