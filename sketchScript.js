const gridDiv = document.querySelector('#grid');
const sizeChoice = document.querySelector('#sizeChoice');
const maxWidth = 360;


// Create grid when submit button is pressed
var gridButton = document.querySelector('#submitGrid');
gridButton.addEventListener('click', () => {

    console.log("Click button function");
    
    let gridChoice = "Empty";
    gridChoice = document.getElementById('gridChoice').value;

    console.log(gridChoice);

    let gridWidth = maxWidth / gridChoice +"px";
    let gridHeight = gridWidth;
    console.log(gridWidth);
    
    for(i=1;i<=gridChoice;i++){

        let gridRow = document.createElement('div');
        gridRow.classList.add("gridRow");
        gridDiv.appendChild(gridRow);

        for(j=1;j<=gridChoice;j++) {

            console.log(i);
            
            let gridCell = document.createElement('div');
            gridCell.style.border = "thin solid black";
            gridCell.style.display="inline-block";
            gridCell.style.width=gridWidth;
            gridCell.style.height=gridHeight;
            gridCell.classList.add("gridCell");
            gridCell.setAttribute('id','cell'+((i-1)*gridChoice+j));
            gridRow.appendChild(gridCell);
        }

    }

    addGridListeners();

});

// Add mouse hover listener to all cells
function addGridListeners() {
    let gridCells = document.getElementsByClassName("gridCell");

    for(i=0;i<gridCells.length;i++) {

        console.log("add listener");

        gridCells[i].addEventListener('mouseover',changeCellColour, false); 
    }
}

//Change colour of cell being hovered over
function changeCellColour(){
    let cellID = this.id;
    console.log(cellID);
    this.style.backgroundColor = "gray";
}