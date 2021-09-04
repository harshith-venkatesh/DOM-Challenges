

const progressBarContainer = document.querySelector("#progressBar");
const createProgressBar = document.querySelector("#createProgressBar");
const inputValue = document.querySelector('#initialTime');
let index = 0;

function ProgressBarGenerator(element,time,index){
    this.element = element;
    this.time = time;
    this.index = index;
    this.init();
}

function callProgressTimer(progressView,timeSet,totalClicks,button) {
    let counter = 0;
    let numberOfClicks = totalClicks;
    console.log(numberOfClicks)
    let id;
    let width = 0;
    id = setInterval(progressUpdate,timeSet); 
    function progressUpdate(){
        if(width>=100) {
            clearInterval(id);
            button.innerText = numberOfClicks > 0 ? `Run ${numberOfClicks}`:'Run'
        } else {
            width +=1;
            progressView.style.width = width + '%';
            progressView.classList.add('progress');
        }
    }
}

ProgressBarGenerator.prototype.init = function() {
    const container = document.createElement('div');
    container.dataset['progressBar'] = this.index;
    container.classList.add('main-container')
    const progressWrapper = document.createElement('div');
    progressWrapper.classList.add('container');
    const progressView = document.createElement('div');
    progressWrapper.appendChild(progressView);
    const button = document.createElement('button');
    button.innerText = 'Run';
    button.classList.add('btn')
    let countButtonHomeClicks = 0;
    button.addEventListener('click',(e)=> {
        countButtonHomeClicks += 1;
        const timeSet = this.time >10 ? this.time/100 : this.time;
        callProgressTimer(progressView,timeSet,countButtonHomeClicks,button)
    })
    container.appendChild(progressWrapper)
    container.appendChild(button)
    this.element.appendChild(container)
    
}

createProgressBar.addEventListener('click',() => {
    const val = inputValue.value ? inputValue.value*1000 : 3000
    index += 1;
    console.log('index')
    new ProgressBarGenerator(progressBarContainer,val,index);
})