
let cells = 1;
let isOver = false;

//add rows to the grid
function appendRow(){
    let tbl = document.getElementById('ourtable')
    let row = document.createElement('tr')
    row.setAttribute('class', "row")
    tbl.appendChild(row)
   
    console.log("cells " +cells)

    for(let i= 0; i<cells; i++){
        let cell = document.createElement("td");
        cell.addEventListener('click', changeColor, false);
        mouseAction(cell);
        row.appendChild(cell);
        cell.setAttribute('class', 'empty')
    }

    console.log(tbl.rows.length)
}

//add columns to the grid
function appendColumn(){
    
    let rows = document.getElementsByClassName('row'),
         i;

    if(rows.length === 0){
      return;  
    }

    cells++;

   
    let rowArr = [...rows];    
    for(i =0; i <rowArr.length; i++){
        let cell = document.createElement('td')
        cell.addEventListener('click', changeColor, false);
        mouseAction(cell);
        rowArr[i].appendChild(cell)   
        cell.setAttribute('class', 'empty') 
    }

}


// remove rows from the grid
function deleteRows(){
       let rows = document.getElementsByClassName('row');
       let  len = rows.length-1;
        console.log(len);
       if(len === -1){
           return;
       }       
          rows[len].parentNode.removeChild(rows[len]);  
        if(len === 0 ){
            cells = 1;
        }
   
}



// when there is only one column left, need to use deleteRows function
//to delete the rest of the cells.
//remove columns from the grid
function deleteColumns(){
    cells--;
    var tbl = document.getElementById('ourtable'),
        lastCol = tbl.rows[0].cells.length-1,
        i, j;

     if(lastCol === 0){
            return cells = 1;
     }      
        
    for(i = 0; i < tbl.rows.length; i++){
        
            tbl.rows[i].deleteCell(lastCol);
        
    } 
    
}


//save color value
function selectColor(){
    return document.getElementById('colors').value;    
}

//change the cell's color
function changeColor(){
    this.style.backgroundColor = selectColor();
    this.setAttribute('class', 'colored')
}


//fill all uncolored cells with the currently selected color
function fill(){
    let cellSet = document.getElementsByTagName('td');
    let cellSpread = [...cellSet];
    console.log("clicked")
    cellSpread.forEach((cell) => {
        console.log(cell)
        cell.style.backgroundColor = selectColor();
        cell.setAttribute('class', 'colored');
    }); 
}

// clear all cells/restore all cells to their original/initial color(white)
function clearCells(){
    let cellSet = document.getElementsByTagName('td');
    let cellSpread = Array.from(cellSet, elem => elem );
    cellSpread.forEach((cell) => {
        cell.style.backgroundColor = 'white';
        cell.setAttribute('class', 'empty');
    }); 
}

//click and hold (mouseover) from a single cell (start) to a different cell (end) such 
function mouseAction(cell){
    cell.addEventListener('mousedown', e =>{   
                
        isOver = true;
    });

    cell.addEventListener('mousemove', e =>{
        
        if(isOver === true){
            cell.style.backgroundColor = selectColor();
            cell.setAttribute('class', 'colored')
        }
    });

    cell.addEventListener('mouseup', e => {
        if(isOver === true){
            isOver = false;
        }
    });
}


