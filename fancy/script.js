document.getElementById("gradient-slider").oninput = function() {
    console.log("Input");
    changegradientNumber()
};
document.getElementById("speed-slider").oninput = function() {
    console.log("Input");
    changespeedNumber()
};
document.getElementById("anim-square").addEventListener('click', function () {
    document.querySelector("html").style.setProperty("--fancy-animation-type", "gradient-fade-" + document.getElementById("anim-square").value);
});
document.getElementById("anim-right").addEventListener('click', function () {
    document.querySelector("html").style.setProperty("--fancy-animation-type", "gradient-fade-" + document.getElementById("anim-right").value);
});
document.getElementById("anim-upwards").addEventListener('click', function () {
    document.querySelector("html").style.setProperty("--fancy-animation-type", "gradient-fade-" + document.getElementById("anim-upwards").value);
});
document.getElementById("anim-right-diag").addEventListener('click', function () {
    document.querySelector("html").style.setProperty("--fancy-animation-type", "gradient-fade-" + document.getElementById("anim-right-diag").value);
});
document.getElementById("anim-left-diag").addEventListener('click', function () {
    console.log (e.value)
    document.querySelector("html").style.setProperty("--fancy-animation-type", "gradient-fade-" + document.getElementById("anim-left-diag").value);
});


function changegradientNumber() {
    let val = document.getElementById("gradient-slider").value;
    document.querySelector("html").style.setProperty("--fancy-gradient", `var(--gradient-${val})`);
    document.getElementById("gradient-number").innerHTML= `<span class="fancy-text">GRADIENT</span> #${val}`;
}

function changespeedNumber() {
    let val = document.getElementById("speed-slider").value;
    document.querySelector("html").style.setProperty("--fancy-animation-speed", `${val}s`);
    document.getElementById("speed-number").innerHTML= `<span class="fancy-text">ANIMATION SPEED</span> ${val}s`;
}