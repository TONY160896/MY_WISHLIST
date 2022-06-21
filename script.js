let inputText = document.getElementById("inputtext");
let btn  = document.getElementById("btn");
let typeText =document.getElementById("typetext");

function addbutton(){
  
    let inputData=inputText.value;
    //create dom 
    let li = document.createElement("li");
    li.innerText=inputData;
    typeText.appendChild(li);
    inputText.value="";
    inputText.focus();
}


btn.addEventListener('click',addbutton)
