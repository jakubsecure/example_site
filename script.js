
NavBtn = document.querySelector(".navi")
nav = document.querySelector(".mainNav")


NavBtn.addEventListener('click',navOpen)


function navOpen(){
    if(nav.classList.contains("showNav")){
        nav.classList.remove("showNav")
        nav.classList.add("hideNav")
        timer = setTimeout(function(){
            nav.classList.remove("hideNav")
        },300)
        timer = 0
    }else{
        nav.classList.remove("hideNav")
        nav.classList.add("showNav")
    }
}