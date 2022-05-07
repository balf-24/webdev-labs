/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

const makeDefault = () => {
   //alert('make bigger!');
   document.querySelectorAll('body').classList.remove("ocean");
   document.querySelectorAll('body').classList.remove("desert");
   document.querySelectorAll('body').classList.remove("high-contrast");
};

const makeDesert = () => {
   //alert('make bigger!');
   document.querySelectorAll('body').className = "desert";
};

const makeOcean = () => {
   //alert('make bigger!');
   document.querySelectorAll('body').className = "ocean";
};

const makeContrast = () => {
   //alert('make bigger!');
   document.querySelectorAll('body').className = "high-contrast";
};

//document.querySelector(".content").style.fontSize = "small";
document.querySelector("#default").addEventListener('click', makeDefault);
document.querySelector("#desert").addEventListener('click', makeDesert);
document.querySelector("#ocean").addEventListener('click', makeOcean);
document.querySelector("#high-contrast").addEventListener('click', makeContrast);