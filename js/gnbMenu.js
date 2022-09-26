let gnb = document.querySelectorAll(".gnb > li");
let subMenu = document.querySelectorAll(".sub");

// header gnbMenu 

for(let i=0; i < gnb.length; i++){

    gnb[i].addEventListener("mouseenter",function(){

        subMenu[i].style.display = "block";
    });
}

for(let i=0; i < gnb.length; i++){

    gnb[i].addEventListener("mouseleave",function(){

        subMenu[i].style.display = "none";
    });
}