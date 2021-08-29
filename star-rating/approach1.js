/*
 * Creates star rating functionality
 * @param el DOM Element
 * @param count Number of stars
 * @param callback Returns selected star count to callback
 */
function Star(el, count, callback) {
    let active = -1;
    const element = document.querySelector(el);
    const fragment = document.createDocumentFragment();
    for(let i=1;i<=count;i++){
        const iElem = document.createElement("i");
        iElem.classList.add("fa");
        iElem.classList.add("fa-star-o");
        iElem.dataset["ratingValue"] = i;
        fragment.appendChild(iElem)
    }
    element.appendChild(fragment);
    element.addEventListener('click',onClick);
    element.addEventListener('mouseover',onMouseOver);
    element.addEventListener('mouseout',onMouseOut);
    function fill(limit){
        for(let i=0;i<count;i++){
            if(i<limit){
                element.children[i].classList.add('fa-star')
            } else {
                element.children[i].classList.remove('fa-star')
            }
        }
    }
    function onMouseOver(e) {
        console.log(e.target.dataset)
        const ratingValue = e.target.dataset['ratingValue'];
        console.log(ratingValue);
        fill(ratingValue)
    }
    function onClick(e){
        active = e.target.dataset['ratingValue'];
        if(active>0){
            callback(active)
        }
    }
    function onMouseOut(e){
        fill(active)
    }
}