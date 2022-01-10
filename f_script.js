
let cells = 1;
let isOver = false;

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

function appendColumn(){
    
    let rows = document.getElementsByClassName('row'),
         i;

    //console.log( "row length " + rows.length)
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



function deleteRows(){
       let rows = document.getElementsByClassName('row');
       let  len = rows.length-1;
        console.log(len);
       if(len === -1){
           return;
       }       
       // console.log(lastRow)
       // console.log(len)       
      //rows[0].parentNode.removeChild(rows[0]);
        rows[len].parentNode.removeChild(rows[len]);  
        if(len === 0 ){
            cells = 1;
        }
   
}



// when there is only one column left, need to use deleteRows function
//to delete the rest of the cells.
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

    console.log("lastCol" + lastCol)
    if(lastCol <= -1){
        reset(); 
    }

     console.log("lastCol" + lastCol)
    
}

//Not working function//
function reset(){
    let myNode = document.getElementsByTagName('table');
    while (myNode.firstChild){
        console.log(test)
       // myNode.removeChild(myNode.lastChild);
       myNode.firstChild.remove();
    }
    console.log(rows)
    cells =1;
}




//save color value
function selectColor(){
    return document.getElementById('colors').value;    
}

function changeColor(){
    this.style.backgroundColor = selectColor();
    this.setAttribute('class', 'colored')
}



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


function clearCells(){
    let cellSet = document.getElementsByTagName('td');
    let cellSpread = Array.from(cellSet, elem => elem );
    cellSpread.forEach((cell) => {
        cell.style.backgroundColor = 'white';
        cell.setAttribute('class', 'empty');
    }); 
}


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


