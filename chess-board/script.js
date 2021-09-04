function ChessBoard(el,rows = 8){
    this.element = document.querySelector(el);
    this.rows = rows;
    this.cols = rows;
    this.activeCell = '';
    this.color = 'red';
    this.generateBoard()
    this.bindEvents()
}

ChessBoard.prototype.generateBoard = function(){
    const fragment = document.createDocumentFragment();
    for(let i=1;i<=this.rows;i++){
        const row = document.createElement('div');
        row.classList.add('row');
        for(let j=1;j<=this.cols;j++){
            const iElem = document.createElement('div');
            iElem.classList.add('col');
            iElem.dataset['cell'] = `${i}:${j}`;
            (i + j) % 2 == 0 ? iElem.classList.add('white') : iElem.classList.add('black');
            row.appendChild(iElem)
        }
        fragment.appendChild(row);
    }
    this.element.appendChild(fragment)
}

ChessBoard.prototype.onClick = function(e) {
    const cell = e.target.dataset['cell'];
    console.log("active",this.activeCell)
    this.activeCell && (this.fillDiagnols(this.activeCell,null))
    this.activeCell = cell;
    cell && (this.fillDiagnols(cell,this.color))
    e.stopPropagation()
}

ChessBoard.prototype.documentClick = function() {
    this.activeCell && (this.fillDiagnols(this.activeCell,null))
}

ChessBoard.prototype.fillDiagnols = function (cell,color) {
    
}

ChessBoard.prototype.fill = function(cell,color) {
    console.log(cell,color)
    document.querySelector(`[data-cell = "${cell}"`).style.background = color;
}

ChessBoard.prototype.bindEvents = function() {
    this.element.addEventListener('click',this.onClick.bind(this));
    document.addEventListener('click',this.documentClick.bind(this));
}