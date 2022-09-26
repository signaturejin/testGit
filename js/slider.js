// banner slider

let slider = document.querySelector(".slider");
let prevBtn = document.querySelector(".prevBtn");
let nextBtn = document.querySelector(".nextBtn");
let circleBtn = document.querySelectorAll(".circle");
let sNum = 0;

// nextBtn
nextBtn.addEventListener("click",function(){

    if(sNum == circleBtn.length - 1){
        sNum = 0;
    }
    else{
        sNum++;
    }
    
    for(let i=0; i < circleBtn.length; i++){
        circleBtn[i].style.backgroundColor = "#fff"
        circleBtn[i].style.border = "none";
    }
    circleBtn[sNum].style.backgroundColor = "transparent";
    circleBtn[sNum].style.border = "3px solid #fff";

    slider.style.marginLeft = -100 * sNum + "%";
});

// prevBtn
prevBtn.addEventListener("click",function(){

    if(sNum == 0){
        sNum = circleBtn.length - 1;
    }
    else{
        sNum--;
    }

    for(let i=0; i < circleBtn.length; i++){
        circleBtn[i].style.backgroundColor = "#fff";
        circleBtn[i].style.border = "none";
    }
    circleBtn[sNum].style.backgroundColor = "transparent";
    circleBtn[sNum].style.border = "3px solid #fff";

    slider.style.marginLeft = -100 * sNum + "%";
});

// circleBtn
for(let i=0; i < circleBtn.length; i++){

    circleBtn[i].addEventListener("click",function(){

        for(let j=0; j < circleBtn.length; j++){

            circleBtn[j].style.backgroundColor = "#fff";
            circleBtn[j].style.border = "none";
        }
        circleBtn[i].style.backgroundColor = "transparent";
        circleBtn[i].style.border = "3px solid #fff";

        sNum = i;
        slider.style.marginLeft = -100 * i + "%";
    });
}