// funtion to change turn 
const changeTurn=(turn)=>
{
    return turn==='X'? '0':'X';
}
let flag=false;
  
// function to change winning condition
const win=[
    [0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]
]

const  boxes=document.getElementsByClassName("box");
const reset=document.querySelector("#reset");
reset.addEventListener("click",()=>{
    Array.from(boxes).forEach(element => {
        element.innerText="";
        turn="X";
        document.querySelector("#gameinfo").innerText=`${turn}  turn`;
        element.style.backgroundColor="#000099";
        flag=false;
        gamelogic();
        
    })
})
const checkWin=()=>{
    win.forEach(e=>{
        if((boxes[e[0]].innerText===boxes[e[1]].innerText) && (boxes[e[1]].innerText===boxes[e[2]].innerText) &&(boxes[e[0]].innerText!==""))
        {

            flag =true;
            var arr = Array.prototype.slice.call(boxes);
            arr[e[0]].style.backgroundColor="green";
            arr[e[1]].style.backgroundColor="green";
            arr[e[2]].style.backgroundColor="green";
        }
    }) 

}


//  game logic
let turn="X"
function gamelogic()
{
    Array.from(boxes).forEach(element => {
    
        //    if(element.innerHTML===X)
            element.addEventListener('click',()=>{
                console.log("!");
        
                if(element.innerText==="" && !flag)
                {
                    console.log(turn);
                    element.innerText=turn;
                    checkWin();
                    if(flag)
                    {
                        document.querySelector("#gameinfo").innerText=` winner is ${turn}`;
                    }
                    else{
                    turn=changeTurn(turn);
                    document.querySelector("#gameinfo").innerText=`${turn}  turn`;
                    }
                }
            })
        });
}
gamelogic()