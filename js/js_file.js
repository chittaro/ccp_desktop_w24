let dog1 = document.querySelector(".dog1");
let dog2 = document.querySelector(".dog2");
let dog3 = document.querySelector(".dog3");
let tBox = document.querySelector(".dog-text")

dog1.addEventListener("click", function(){

    tBox.innerHTML = "Meatball weighs 20 pounds and is 15 in tall";

});

dog2.addEventListener("click", function(){

    tBox.innerHTML = "Gordon weighs 14 pounds and is 10 in tall";

});

dog3.addEventListener("click", function(){

    tBox.innerHTML = "Ben weighs 10 pounds and is 7 in tall";

});