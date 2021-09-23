function MemoryGame(el,rowSize=5){
    this.boxContainerElement = document.querySelector(el)
    console.log(this.boxContainerElement)
    this.rowSize = rowSize;
    this.count = 1;
    this.init()
}

function generateRandomArray(start,end,size) {
    const result = [];
    for(let i=0;i<size;i++){
        result[i] = Math.floor(Math.random() * (end-start)) + start;
    }
    return result;
}

MemoryGame.prototype.init = function(){
    const fragment = document.createDocumentFragment();
    for(let i=1;i<=this.rowSize;i++){
        const memoryBlock = document.createElement('div');
        memoryBlock.setAttribute('id',i);
        memoryBlock.classList.add('memory-block');
        fragment.appendChild(memoryBlock)
    }
    this.boxContainerElement.appendChild(fragment);
    this.boxContainerElement.addEventListener('click',(e)=>{
        this.handleClick(e);
    })
}

const addBackgroundToMemoryBlock = async (item) => {
    document.getElementById(`${item}`).classList.add('blink')
    await new Promise((resolve) => setTimeout(resolve,500))
    document.getElementById(`${item}`).classList.remove('blink')
    await new Promise((resolve)=>setTimeout(resolve,500))
    
    
}

const startGame =  async function() {
    const sequencedNumbers = generateRandomArray(1,5,5);
    console.log(sequencedNumbers);
    console.log(document.getElementById(1))
    for(const value of sequencedNumbers){
        await addBackgroundToMemoryBlock(value)
    }
}

const button = document.querySelector('#start-btn');
button.addEventListener('click',function(){
    button.disabled = true;
    startGame();
})
const memoryGame = new MemoryGame('#box-container')
