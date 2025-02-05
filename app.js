//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let AmigosArray = new Array();
let inputName = document.getElementById('amigo');
let listaAmigos = document.querySelector('.name-list');
let resultadoLabel = document.querySelector('.result-list');
let sortearButton = document.querySelector('.button-draw');
let adicionarButton = document.querySelector('.button-add');
let resultWrapper = document.querySelector('.result-wrapper');
inputName.addEventListener("input", () => CheckInputEmptyness());
resultWrapper.addEventListener("click",()=>{
    resultWrapper.style.visibility = "hidden";
});

function AdicionarAmigo(){
    if(FiltrarInput(inputName.value)){
        AmigosArray.push(inputName.value);
        inputName.value = "";
        AtualizarVisualizacao();
        CheckInputEmptyness();
    }
    else{
        inputName.value = "";
        CheckInputEmptyness();
    }
    CheckListLenght();
}

function FiltrarInput(value){
    let regex = /^[a-zA-Z\s]+$/;
    let trimmedvalue = value.trim();
    if(trimmedvalue.length === 0){
        alert('Campo Vázio! Por favor insira um nome.');
        return false;
    }
    else if(!regex.test(trimmedvalue)){
        alert('Nome inválido! Não use characteres especiais, emojis ou simbolos.');
        return false;
    }
    else if(!AmigosArray.includes(trimmedvalue)){
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
    resultadoLabel.innerHTML = `O Amigo secreto sorteado foi: <b>${AmigosArray[result]}</b>`;
    PlayAudioFX('assets/sound_fx/partyFX.mp3');
    resultWrapper.style.visibility = "visible";
}

function PlayAudioFX(path){
    let audio = new Audio();
    audio.volume = 0.15;
    audio.src = path;
    audio.play();
}

function CheckInputEmptyness(){
    if(inputName.value.length !== 0){
        adicionarButton.style.backgroundColor = "#00830f"
        adicionarButton.style.color = "white";
    }
    else{
        adicionarButton.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--color-tertiary');
        adicionarButton.style.color = getComputedStyle(document.documentElement).getPropertyValue('--color-text');
    }
}

function CheckListLenght(){
    if(AmigosArray.length > 0){
        sortearButton.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--color-button');
        sortearButton.style.color = getComputedStyle(document.documentElement).getPropertyValue('--color-white');
    }
    else{
        sortearButton.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--color-tertiary');
        sortearButton.style.color = getComputedStyle(document.documentElement).getPropertyValue("--color-text");
    }
}
