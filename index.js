
let countEl=document.getElementById("count-el");
let saveEl=document.getElementById("save-el");

let count=0;
let subCount=0;
function increment(){
    
    count+=1;
    countEl.textContent=count;
}

function save(){
    subCount+=count;
    saveEl.textContent+= subCount+ " - ";
    countEl.textContent=0;
    count=0;
}

