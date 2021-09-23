// class MemoryGame {
//     constructor(boxContainerEl,currentScoreEl,highScoreEl,startBtn,boxCount = 5){
//         this.boxContainerEl = boxContainerEl;
//         this.currentScoreEl = currentScoreEl;
//         this.highScoreEl = highScoreEl;
//         this.startBtn = startBtn;
//         this.boxCount = boxCount;
//         this.currentScore = 0;
//         this.animatedDelay = 500;
//         this.highScore = localStorage.getItem('highscore') || 0;
//         this.currentIndexes = [];
//         this.init();
//         this.updateScore();
//     }

//     init(){
//         const fragment = document.createDocumentFragment();
//         for(let i=0;i<this.boxCount;i++){
//             const div = document.createElement('div');
//             div.classList.add('memory-block');
//             div.dataset['boxIndex'] = i;
//             fragment.appendChild(div);
//         }
//         this.boxContainerEl.appendChild(fragment);
//         console.log(this.boxContainerEl)
//         this.boxContainerEl.addEventListener('mousedown',()=>{
//             this.handleClickEvent();
//         })
//     }

//     start(){
//         console.log('start');
//         this.startBtn.classList.add('disable');

//     }

//     updateScore(){
//         this.highScore = this.currentScore > this.highScore ? this.currentScore : this.highScore;
//         localStorage.setItem('highscore',this.highScore);
//         this.currentScoreEl.innerText = this.currentScore;
//         this.highScoreEl.innerText = this.highScore;
//     }

// }

// const memoryGame = new MemoryGame(document.querySelector('#box-container'),document.querySelector('#current-score'),document.querySelector('#high-score'),document.querySelector('#start-btn'))
// document.querySelector('#start-btn').addEventListener('click',()=>{
//     memoryGame.start();
// })


