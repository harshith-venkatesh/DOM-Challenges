function Star(el,count,callback){
    this.element = document.querySelector(el);
    this.count = count;
    this.active = -1;
    this.callback = callback;
    this.init();
    this.bindEvents();
}

Star.prototype.init = function(){
    const fragment = document.createDocumentFragment();
    for(let i=1;i<=this.count;i++){
        const iElem = document.createElement('i');
        iElem.classList.add('fa');
        iElem.classList.add('fa-star-o');
        iElem.dataset['ratingValue'] = i;
        fragment.appendChild(iElem)
    }
    this.element.appendChild(fragment)
}



Star.prototype.fill = function(limit){
    for(let i=0;i<this.count;i++){
        if(i<limit){
            this.element.children[i].classList.add('fa-star');
        } else {
            this.element.children[i].classList.remove('fa-star');
        }
    }
}

Star.prototype.onClick = function(e) {
    this.active = e.target.dataset['ratingValue'];
    console.log(this.active)
    this.fill(this.active)
    this.callback(this.active)
}

Star.prototype.onMouseOver = function(e) {
    const ratingValue = e.target.dataset['ratingValue']
    console.log(ratingValue)
    this.fill(ratingValue)
}

Star.prototype.onMouseOut = function(e){
    this.fill(this.active)
}

Star.prototype.bindEvents = function(){
    this.element.addEventListener('click',this.onClick.bind(this));
    this.element.addEventListener('mouseover',this.onMouseOver.bind(this));
    this.element.addEventListener('mouseout',this.onMouseOut.bind(this));
}