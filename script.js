var result = document.getElementById("resultBox");
var userCard = document.getElementById("userCard");
var computerCard = document.getElementById("computerCard");
const items = ["images/stone.png","images/paper.png","images/scissor.png"];
const computerItems = ["stone","paper","scissor"];
function winnerOrLoser(para)
{
    var computerPick = randomItem();
    console.log(computerPick);
    if(para=="stone")
    {
        userCard.setAttribute("src", `${items[0]}`);
        if(computerPick=="stone")
        {
            result.innerText = " Draw 😵 !";
        }
        else if(computerPick=="paper")
        {
            result.innerText = " You lost 🥶 !";
        }
        else{
            result.innerText = " You won 😀 !";
        }
    }
    else if(para=="paper"){
        userCard.setAttribute("src", `${items[1]}`);
        if(computerPick=="stone")
        {
            result.innerText = " You won 😀 !";
        }
        else if(computerPick=="paper")
        {
            result.innerText = " Draw 😵 !";
        }
        else{
            result.innerText = " You lost 🥶 !";
        }
    }
    else{
        userCard.setAttribute("src", `${items[2]}`);
        if(computerPick=="stone")
        {
            result.innerText = " You lost 🥶 !";
        }
        else if(computerPick=="paper")
        {
            result.innerText = " You won 😀 !";
        }
        else{
            result.innerText = " Draw 😵 !";
        }
    }

    //displaying the hidden cards
    userCard.style.display = "block";
    console.log(userCard);
    computerCard.style.display = "block";

}

function randomItem(){
    let x = Math.floor((Math.random() * 3));
    computerCard.setAttribute("src", `${items[x]}`);
    return computerItems[x];
}