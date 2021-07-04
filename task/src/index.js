const checkButtons = document.querySelector(".check-buttons").querySelectorAll("input");
const rangeSliders = document.querySelector(".levers").querySelectorAll("input");
const launchButton = document.getElementById("launch-button");
const passwordInput = document.getElementById("password-input").valueOf();
const rocket = document.querySelector(".rocket");

window.onload = function () {
    disableButtons();
    document.getElementById("password-button").addEventListener("click", function () {
        if (checkPassword()) enablebuttons();
        passwordInput.value = "";
    })

    checkButtons.forEach(input => input.onchange = function () {
        if (checkControls()) launchButton.disabled = false;
    });
    rangeSliders.forEach(input => input.onchange = function () {
        if (checkControls()) launchButton.disabled = false;
    });

    launchButton.addEventListener("click", function () {
        alert("3.. 2... 1.. liftoff!");
        setTimeout(launch, 3000);
    })
}

function disableButtons() {
    checkButtons.forEach(input => input.disabled = true);
    rangeSliders.forEach(input => input.disabled = true);
    launchButton.disabled = true;
}

function enablebuttons() {
    checkButtons.forEach(input => input.disabled = false);
    rangeSliders.forEach(input => input.disabled = false);
}

function checkPassword() {
    return passwordInput.value === "TrustNo1";
}

function checkControls() {
    let result = true;
    checkButtons.forEach(input =>  { if (input.checked === false) result = false } );
    rangeSliders.forEach(input => { if (input.value !== "100") result = false } );
    return result;
}

function launch() {
    let posX = 600;
    let posY = window.innerHeight-250;
    let timer = setInterval(function() {
        rocket.style.left = posX++ +"px";
        rocket.style.top = posY-- +"px";
        if( posX >= String(window.innerWidth) || posY <= 0) clearInterval(timer);
    },25);
}