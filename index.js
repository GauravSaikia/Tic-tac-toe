let boxes = document.querySelectorAll(".box");
let restart_btn = document.querySelector(".restart"); 
let winMegLine = document.querySelector(".msg-container");
let hidebtn = document.querySelector(".hide");
let newGameBtn = document.querySelector(".newGame");
let clickBtn = "x";

let winingpattern = [
    [0,1,2],    
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

boxes.forEach((box)=>{
    box.addEventListener("click", () =>{
       if(clickBtn == "x"){
        box.innerText = "x";
        clickBtn = "o";
       }else{
        box.innerText = "o";
        clickBtn = "x";
       }
       box.disabled = true;
       winercheck();
    });
});

let disableBtn = () =>{
boxes.forEach(()=>{
    for(box of boxes){
        box.disabled = true;
    };
});
};
let enableBtn = () =>{
    boxes.forEach(()=>{
        for(box of boxes){
            box.disabled = false;
        };
    });
};

let winercheck = () =>{
    for( let pattern of winingpattern){   
     let pos1Val = boxes[pattern[0]].innerText;
     let pos2Val = boxes[pattern[1]].innerText;
     let pos3Val = boxes[pattern[2]].innerText;
    
        if(pos1Val != ""&& pos2Val != ""&& pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
            console.log("win");
            winMeg(pos1Val);
            };

        };
    
    };

};

let winMeg = (winner) =>{
    winMegLine.innerText = `${winner} is winner`;
    hidebtn.classList.remove("hide");
    disableBtn();
    
}

let resgame = ()=>{
    boxes.forEach(()=>{
        for(box of boxes){
            box.innerText = "";
            enableBtn();
            
        }
    })
    hidebtn.classList.add("hide");

}

restart_btn.addEventListener("click", resgame)
newGameBtn.addEventListener("click",resgame)
