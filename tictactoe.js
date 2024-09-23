let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".rebtn");
let newgme = document.querySelector(".newgme");
let msgbox = document.querySelector(".msg-box");
let msg = document.querySelector("#msg");

let playerO = true;
let c = 0;
const winpat = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];

const disable = ()=>{
    for(let box of boxes){
        box.disabled = true;
        reset.disable = true;
    }
};
const enaable = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
        c = 0;
    }
};
let showwinner = (winner) =>{
    msgbox.classList.remove("hide");
    msg.innerText = `Congrats, Our winner is ${winner}`;
    disable();
}

const checkwinner = () =>{
    for(pat of winpat){
        let posval1 = boxes[pat[0]].innerText;
        let posval2 = boxes[pat[1]].innerText;
        let posval3 = boxes[pat[2]].innerText;

        if(posval1 != "" && posval2 != "" && posval3 != "")
        {
            if(posval1 == posval2 && posval2 == posval3)
                showwinner(posval1);
        }
        if(c==9)
            draw();
    }
};
const draw = ()=>{
    msgbox.classList.remove("hide");
    msg.innerText = `oops! Nobody is winner the match is draw`;
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        
        if(playerO)
        {
            box.innerText = "O";
            playerO = false;
            c+=1;
        }else{
            box.innerText = "X";
            playerO = true;
            c+=1;
        }
        box.disabled = true;
        checkwinner();
        
    });
});
const re = ()=>{
    playerO = true;
    msgbox.classList.add("hide");
    enaable();
};

reset.addEventListener("click", re);
newgme.addEventListener("click", re);
