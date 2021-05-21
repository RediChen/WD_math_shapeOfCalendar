var btns = document.querySelectorAll(".r-btn") ;
btns.forEach(elem => {
    elem.onclick = function () {
        // this.classList.toggle("r-btn") ;
        this.classList.toggle("r-btn-active") ;
    }
});
// btns.onclick = function () {
//     this.classList.toggle(".r-btn-active") ;
// }