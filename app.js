const board = document.querySelector(".board");

function createBoard(size){ 
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for(let i = 0; i < numDivs; i++){
        let div = document.createElement("div"); 
        div.style.backgroundColor = "yellow";
        board.insertAdjacentElement("beforeend", div);
    }
}

function getSize(){
    let input = prompt("Enter the size of the board:");
    const message = document.getElementById("message");
    if (input < 0 || input > 100) message.innerHTML = "Please provide a number between 1 and 100";
    else return input;
}

function main(){
    document.getElementById("select").addEventListener("click", function(){
        let size = getSize();
        createBoard(size);
    })
}

main();