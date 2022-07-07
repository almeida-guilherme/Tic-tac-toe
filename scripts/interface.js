let squares = document.querySelectorAll(".square");



document.addEventListener('DOMContentLoaded',()=>{
    

    squares.forEach((square)=>{
        square.addEventListener("click", handleClick);
    })
})

function handleClick(event){

    
    if (handleMove(event.target.id)){
        setTimeout(()=>{
    let playerName = nome()
    document.querySelectorAll("h1")[0].innerHTML = `<h1 style="color:rgba(147, 221, 147);">O vencedor foi ${playerName}</h1>`
    document.getElementById("divbotao").innerHTML = `<button id="botao" ><a href="">RESTART</a></button>`
        })
    }
    updateSquare(event.target.id);
}

function updateSquare(posicao){
    let square = document.getElementById(posicao);
    let symbol = board[posicao];
    square.innerHTML = `<div class="${symbol}"></div>`
}