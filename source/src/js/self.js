window.onload=function(){
    var linkEl = document.getElementsByTagName("link")[2];
    var toggleBtn = document.getElementsByClassName("nav-toggle-bgcolor")[0];
    var coverBackground = document.getElementsByTagName("section")[0];
    var bgCollor = coverBackground.style.background;
    var sunEl = document.createElement("div");
    sunEl.className = "nav-toggle-bgcolor-sun";
    for (let i = 1; i <= 8; i++) {
        var sunSon = document.createElement("div");
        sunSon.className = "nav-toggle-bgcolor-sun-" + i;
        sunEl.appendChild(sunSon);
    }
    var moonEl = document.createElement("div");
    moonEl.className = "nav-toggle-bgcolor-moon";
    var moonSonEl = document.createElement("div");
    moonSonEl.className = "nav-toggle-bgcolor-moon-1";
    moonSonEl.style.backgroundColor = "#fff";
    moonEl.appendChild(moonSonEl);
    function white(once) {
        if (!once) {
            toggleBtn.replaceChild(sunEl, moonEl);
        }
        toggleBtn.appendChild(sunEl);
        linkEl.href = "./libs/docsify/themes/vue.css";
        moonSonEl.style.backgroundColor = "#fff";
        toggleBtn.style.backgroundColor = "#fff";
        toggleBtn.style.boxShadow = "0px 0px 15px rgba(0, 0, 0, 0.685)";
        toggleBtn.style.animation = "sunRotate 5s linear infinite both";
        coverBackground.style.background = bgCollor;
    }
    function dark() {
        toggleBtn.replaceChild(moonEl, sunEl);
        linkEl.href = "./libs/docsify/themes/dark.css";
        setTimeout(() => {
            moonSonEl.style.backgroundColor = "#3f3f3f";
        });
        coverBackground.style.background = "#5c5c5c";
        toggleBtn.style.animation = "";
        toggleBtn.style.backgroundColor = "#3f3f3f";
        toggleBtn.style.boxShadow = "0px 0px 15px rgba(255, 255, 255, 0.685)";
    }
    white(true);
    toggleBtn.addEventListener("click", function () {
        if (toggleBtn.contains(sunEl)) {
            dark();
        } else {
            white();
        }
    });
}