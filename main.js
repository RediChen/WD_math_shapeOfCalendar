var btns = document.querySelectorAll(".r-btn") ;
btns.forEach(elem => {
    elem.onclick = function () {
        // this.classList.toggle("r-btn") ;
        this.classList.toggle("r-btn-active") ;
    }
});
function flipCard() {
    document.querySelector(".frame").classList.toggle("frame-active") ;
}