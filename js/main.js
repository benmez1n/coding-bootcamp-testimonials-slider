const items = Array.from(document.querySelectorAll("#slider-container >div")),
    previousBtn = document.getElementById("previous"),
    nextBtn = document.getElementById("next");
let currentItem = 1;

previousBtn.onclick = ()=>{
    if(currentItem==1){
        items[1].classList.add("active");
        items[0].classList.remove("active");
        currentItem++;
    }
    else{
        items[1].classList.remove("active");
        items[0].classList.add("active");
        currentItem--;
    }
}
nextBtn.onclick = ()=>{
    if(currentItem==1){
        items[1].classList.add("active");
        items[0].classList.remove("active");
        currentItem++;
    }
    else{
        items[1].classList.remove("active");
        items[0].classList.add("active");
        currentItem--;
    }
}