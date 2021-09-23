function MemoryGame(el,startButton,setHighScoreCallBack,setScoreCallBack) {
    let randomList;
    const size = 6;
    let canPlay = false;
    let level = 0;
    const animationDelay = 500;
    let highscore = window.localStorage.getItem('highscore') || 0;
    
    init();

    function init() {
        const container = document.createDocumentFragment();
        const div = document.createElement('div');
        div.classList.add('memory-block');
        for(let i=0;i<size;i++){
            const node = div.cloneNode();
            node.dataset.value = i;
            container.appendChild(node);
        }
        el.appendChild(container);
        el.addEventListener('mousedown',onClickHandler);
        startButton.addEventListener('click',start);
        setHighScoreCallBack(highscore)
    }

    function start(){
        canPlay = false;
        level += 1;
        startButton.classList.add('disabled')
        setTimeout(play,2*animationDelay)
    }

    async function play() {
        randomList = [...new Array(level)].map(()=> Math.floor(Math.random()*size));
        console.log(randomList);
        for(const value of randomList){
            await fill(el.children[value],'active')
        }
        canPlay = true;
    }
    async function fill(element,className) {
        element.classList.add(className);
        await new Promise(resolve => setTimeout(resolve,animationDelay))
        element.classList.remove(className);
        await new Promise(resolve => setTimeout(resolve,animationDelay));
    }



    async function onClickHandler(e){
        if(!canPlay) {
            return;
        }
        const blockClicked = e.target.dataset.value;
        console.log(blockClicked);
        console.log({randomList});
        const firstNumber = randomList.shift();
        console.log(firstNumber);
        if(firstNumber != blockClicked) {
            e.target.classList.add('wrong');
            el.classList.add('shake');
            setTimeout(()=> {
                level = 0;
                setScore(level);
                e.target.classList.remove('wrong');
                el.classList.remove('shake');
                startButton.classList.remove('disabled');
                
            },animationDelay)
            return;
        }
        if(randomList.length === 0) {
            setScore(level);
            start();
        }
        await fill(e.target,'green')
        
    }

    function setScore(score) {
        setScoreCallBack(score);
        console.log(highscore,score);
        if(highscore<score){
            window.localStorage.setItem('highscore',score);
            setHighScoreCallBack(highscore);
        }
    }

}

function setHighScore(score) {
    document.querySelector('#high-score').innerText = `HighScore : ${score}`
}

function setCurrentScore(score) {
    document.querySelector('#current-score').innerText = `Score: ${score}`;
}

MemoryGame(document.querySelector('#box-container'),document.querySelector('#start-btn'),setHighScore,setCurrentScore)