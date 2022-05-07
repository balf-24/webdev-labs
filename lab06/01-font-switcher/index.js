const makeBigger = () => {
   //alert('make bigger!');
   document.querySelectorAll('h1*').style.fontSize = "larger";
   document.querySelectorAll('div.content*').style.fontSize = "larger";
};

const makeSmaller = () => {
   //alert('make smaller!');
   document.querySelector(".header").style.fontSize = "smaller";
   document.querySelector(".content").style.fontSize = "smaller";
};

//document.querySelector(".content").style.fontSize = "small";
document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);