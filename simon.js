let mygamesq = [];
let userseq = [];
let btns = ["red","blue","green","yellow"]


let start = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("click",()=>{
    if(start==false){
        console.log("game started");
        start = true
        levelup();

    }
});
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash")
    },250);
};
function Userflash(btna){
    btna.classList.add("Usflash");
    setTimeout(function (){
        btna.classList.remove("Usflash")
    },250);
};



function levelup(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;
let randon = Math.floor(Math.random()*3);
let randcol = btns[randon];
let randbtn = document.querySelector(`.${randcol}`)
// console.log(randon);
// console.log(randcol);
// console.log(randbtn);
mygamesq.push(randcol)
console.log(mygamesq)


    btnflash(randbtn);
    

}

function checkans(idx){
    console.log(level)
   
    if(userseq[idx]==mygamesq[idx]){
       if(userseq.length==mygamesq.length){
        setTimeout(levelup,1000);
       }
    }else{
        h2.innerHTML = `Game Over! your score was <b>${level}<b> press any key to start`;
     document.querySelector("body").style.backgroundColor = "red";
     setTimeout(function(){
        document.querySelector("body").style.backgroundColor = "";
     },150)
         
        reset();
    }
}


function btnpress(btn){
let btna = this;
Userflash(btna);
usercolor = btna.getAttribute("id");
userseq.push(usercolor)
console.log(mygamesq)
checkans(userseq.length-1);
}


let allbtn = document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",btnpress)
}

function reset(){
    start = false;
    mygamesq=[];
    userseq=[];
    level = 0;
}