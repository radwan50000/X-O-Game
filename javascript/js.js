// variables
let container = document.getElementById("container");

let checkBoxes = document.querySelectorAll(".checkBox");

let winO = false;

let winX = false;

//the counter that make the X or O;
let counter = 0;

//functions
/*
    note:
    in the makeX and makeO function
        => the divX / divO is refrence for container that contains the shape
        => the onex / oneo is refrence for the shape of the x / o
    note:
        the done class is to make U stop putting the shape in the same box again
*/

// stop using of checkbox
function stopCheckbox(){
    checkBoxes.forEach((checkbox) => {
        checkbox.addEventListener("click" , function(e){
            e.preventDefault();
        })
    })
}

//make the X
function makeX(place){
    let divX = document.createElement("div");
    divX.classList = "x";
    let onex = document.createElement("div");
    let twox = document.createElement("div");
    onex.classList = "oneX";
    twox.classList = "twoX";
    divX.append(onex);
    divX.appendChild(twox);
    divX.classList.add("done");
    place.classList.add("xWin");
    place.appendChild(divX);
    place.classList.add("done");
    counter++;
    stopCheckbox();
    checkWinX();
    checkWhoWin();
}
// make the O
function makeO(place){
    let divO = document.createElement("div");
    divO.classList = "o";
    let oneO = document.createElement("div");
    oneO.classList = "oneO";
    divO.append(oneO);
    divO.classList.add("done")
    place.appendChild(divO);
    place.classList.add("oWin");
    place.classList.add("done");
    counter++;
    stopCheckbox();
    checkWinO();
    checkWhoWin();
}

//add the boxes to the container
for(let i=1;i<=9;i++){
    let box = document.createElement("div");
    box.classList.add("boxes");
    box.classList.add(`${i}`);
    if((i % 3 === 0)){
        box.style.cssText += "border-right-color: transparent;"
    }
    if(i > 6){
        box.style.cssText += "border-bottom-color: transparent;"
    }
    container.appendChild(box);
}

// check and add the O and the X
document.addEventListener("click",(e) => {
    if(e.target.classList.contains("done")){
        // the done class make you don't put again the box
    }else{
        // if the counter is divisble by two then it will put X and else it will put O
        if(e.target.classList.contains("boxes")){
            if(counter % 2 === 0){
                e.target.addEventListener("click", makeX(e.target));
            }else{
                e.target.addEventListener("click", makeO(e.target));
            }
        }
    }
})


// make the all the checkbox unchecked
function turnOffCheckbox(){
    checkBoxes.forEach((checkbox) =>{
        checkbox.checked = false;   
    })
}
// choose what U will play X or O ?
checkBoxes.forEach((checkbox) =>{
    checkbox.addEventListener("change",function(){
        turnOffCheckbox();
        checkbox.checked = true;
        if(checkbox.id === "checkBox" && checkbox.checked){
            counter = 0;
        }else{
            counter = 1;
        }
    })
});

//make function to check the win
let boxes;

setTimeout(function(){
    boxes = document.querySelectorAll(".boxes");
},1000);

function checkWinX(){
    if(boxes[0].classList.contains("xWin") && 
    boxes[1].classList.contains("xWin") &&
    boxes[2].classList.contains("xWin")){
        winX = true;
    }else if(boxes[3].classList.contains("xWin") && 
    boxes[4].classList.contains("xWin") &&
    boxes[5].classList.contains("xWin")){
        winX = true;
    }else if(boxes[6].classList.contains("xWin") && 
    boxes[7].classList.contains("xWin") &&
    boxes[8].classList.contains("xWin")){
        winX = true;
    }else if(boxes[0].classList.contains("xWin") && 
    boxes[3].classList.contains("xWin") &&
    boxes[6].classList.contains("xWin")){
        winX = true;
    }else if(boxes[1].classList.contains("xWin") && 
    boxes[4].classList.contains("xWin") &&
    boxes[7].classList.contains("xWin")){
        winX = true;
    }else if(boxes[2].classList.contains("xWin") && 
    boxes[5].classList.contains("xWin") &&
    boxes[8].classList.contains("xWin")){
        winX = true;
    }else if(boxes[2].classList.contains("xWin") && 
    boxes[5].classList.contains("xWin") &&
    boxes[8].classList.contains("xWin")){
        winX = true;
    }else if(boxes[0].classList.contains("xWin") && 
    boxes[4].classList.contains("xWin") &&
    boxes[8].classList.contains("xWin")){
        winX = true;
    }else if(boxes[2].classList.contains("xWin") && 
    boxes[4].classList.contains("xWin") &&
    boxes[6].classList.contains("xWin")){
        winX = true;
    }
}
function checkWinO(){
    if(boxes[0].classList.contains("oWin") && 
    boxes[1].classList.contains("oWin") &&
    boxes[2].classList.contains("oWin")){
        winO = true;
    }else if(boxes[3].classList.contains("oWin") && 
    boxes[4].classList.contains("oWin") &&
    boxes[5].classList.contains("oWin")){
        winO = true;
    }else if(boxes[6].classList.contains("oWin") && 
    boxes[7].classList.contains("oWin") &&
    boxes[8].classList.contains("oWin")){
        winO = true;
    }else if(boxes[0].classList.contains("oWin") && 
    boxes[3].classList.contains("oWin") &&
    boxes[6].classList.contains("oWin")){
        winO = true;
    }else if(boxes[1].classList.contains("oWin") && 
    boxes[4].classList.contains("oWin") &&
    boxes[7].classList.contains("oWin")){
        winO = true;
    }else if(boxes[2].classList.contains("xWin") && 
    boxes[5].classList.contains("xWin") &&
    boxes[8].classList.contains("xWin")){
        winO = true;
    }else if(boxes[2].classList.contains("oWin") && 
    boxes[5].classList.contains("oWin") &&
    boxes[8].classList.contains("oWin")){
        winO = true;
    }else if(boxes[0].classList.contains("oWin") && 
    boxes[4].classList.contains("oWin") &&
    boxes[8].classList.contains("oWin")){
        winO = true;
    }else if(boxes[2].classList.contains("oWin") && 
    boxes[4].classList.contains("oWin") &&
    boxes[6].classList.contains("oWin")){
        winO = true;
    }
}


function checkWhoWin(){
    if(winO){
        let winBox = document.createElement("div");
        winBox.classList.add("winEnd");
        let reload = document.createElement("div");
        reload.innerHTML = '<i class="fa-solid fa-arrow-rotate-left"></i>'
        winBox.textContent = "O win";
        winBox.appendChild(reload);
        document.body.appendChild(winBox);
        for(let i=0;i<boxes.length;i++){
            if(!(boxes[i].classList.contains("done"))){
                boxes[i].classList.add("done");
            }
        }
        reload.addEventListener("click",function(){
            window.location.reload();
        })
    }else if(winX){
        let winBox = document.createElement("div");
        winBox.classList.add("winEnd");
        let reload = document.createElement("div");
        reload.innerHTML = '<i class="fa-solid fa-arrow-rotate-left"></i>'
        winBox.textContent = "X win";
        winBox.appendChild(reload);
        document.body.appendChild(winBox);
        for(let i=0;i<boxes.length;i++){
            if(!(boxes[i].classList.contains("done"))){
                boxes[i].classList.add("done");
            }
        }
        reload.addEventListener("click",function(){
            window.location.reload();
        })
    }
}