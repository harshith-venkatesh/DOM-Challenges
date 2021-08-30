function PixelArt(el,rows=5,cols=5){
    this.element = document.querySelector(el);
    this.rows = rows;
    this.cols = cols;
    this.hover = false;
    this.activeColor = '#000';
    this.generateBoard();
    this.generateColorPicker();
    this.bindEvents()
    this.fillCell.bind(this);
}

PixelArt.prototype.generateBoard = function() {
    const fragment = document.createDocumentFragment();
    for(let i=1;i<=this.rows;i++){
        const row = document.createElement('div');
        row.classList.add('row');
        for(let j=1;j<=this.cols;j++){
            const iElem = document.createElement('div');
            iElem.classList.add('col');
            iElem.dataset['cell'] = `${i}:${j}`
            row.appendChild(iElem)
        }
        fragment.appendChild(row)
    }
    this.element.appendChild(fragment)
}

PixelArt.prototype.generateColorPicker = function() {
    const row = document.createElement('div');
    row.classList.add('row')
    for(let i=1;i<=this.cols;i++){
        const iElem = document.createElement('div');
        const color = generateRandomColor();
        console.log(color)
        iElem.classList.add('col')
        iElem.style.background = color;
        iElem.dataset['color'] = color;
        row.appendChild(iElem)
    }
    this.element.appendChild(row)
}

PixelArt.prototype.fillCell = function(e) {
    const color = e.target.dataset['color']
    const cell = e.target.dataset['cell']
    color && (this.activeColor = color)
    cell && (e.target.style.background = this.activeColor)
}

PixelArt.prototype.onMouseDown = function() {
    this.hover = true;
}

PixelArt.prototype.onMouseUp = function(e) {
    this.hover = false;
}

PixelArt.prototype.onMouseOver = function(e) {
    this.hover && this.fillCell(e)
}
PixelArt.prototype.onClick = function(e) {
    this.fillCell(e)
}

PixelArt.prototype.bindEvents = function() {
    this.element.addEventListener('click',this.onClick.bind(this));
    this.element.addEventListener('mouseover',this.onMouseOver.bind(this));
    this.element.addEventListener('mousedown',this.onMouseDown.bind(this));
    this.element.addEventListener('mouseup',this.onMouseUp.bind(this));
}

function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for(let i=0;i<6;i++){
        color += letters[Math.floor(Math.random()*16)]
    }
    return color;
}