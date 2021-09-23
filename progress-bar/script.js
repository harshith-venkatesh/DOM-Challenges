

const progressBarContainer = document.querySelector("#progressBar");
const createProgressBar = document.querySelector("#createProgressBar");
const inputValue = document.querySelector('#initialTime');
let index = 0;

function ProgressBarGenerator(element,time,index){
    this.element = element;
    this.time = time;
    this.index = index;
    this.count = 0;
    this.width = 0;
    this.startTime = null;
    this.isLoading = false;
    this.init();
}

ProgressBarGenerator.prototype.fill = function(button,progressView){
    if(this.startTime === null){
        this.startTime = Date.now();
    }
    const elapsedTime = Date.now() - this.startTime;
    const width = Math.min((elapsedTime/this.time)*100,100);
    progressView.style.width = width + '%';
    progressView.classList.add('progress');

    if(elapsedTime >=this.time){
        this.count--;
        progressView.style.width = 0;
        this.startTime = null;
        button.innerText = this.count > 0 ? `Run ${this.count}`: `Run`;
        if(this.count<=0){
            button.innerText = `Run`;
            this.isLoading = false;
            return;
        }
    }
    
    setTimeout(this.fill.bind(this,button,progressView),this.time/60) //60fps
}

ProgressBarGenerator.prototype.progressLoad = function(button,progressView) {
    console.log(this)
    this.count++;
    button.innerText = this.count > 0 ? `Run ${this.count}`: `Run`;
    if(!this.isLoading){
        this.isLoading = true;
        
        this.fill.call(this,button,progressView);
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
    
    button.addEventListener('click',(e)=> {
        this.progressLoad.call(this,button,progressView);
    })
    container.appendChild(progressWrapper)
    container.appendChild(button)
    this.element.appendChild(container)
    
}

createProgressBar.addEventListener('click',() => {
    const val = inputValue.value > 0 ? inputValue.value*1000 : 1000
    index += 1;
    new ProgressBarGenerator(progressBarContainer,val,index);
})