const bar = document.getElementById('bar');
const closebar = document.getElementById('close');
const nav = document.getElementById('navbar');
if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('nav-active');
    })
}

if (closebar) {
    closebar.addEventListener('click', () => {
        nav.classList.remove('nav-active');
    })
}

var mainImg = document.getElementById("MainImg");
var smalling = document.getElementsByClassName("small-img")

for (let index = 0; index < smalling.length; index++) {
    var SmallImg = smalling[index];
    SmallImg.onclick = function() {
        mainImg.src = this.src
    };
}