let stars = document.querySelector(".stars");
let star = document.querySelectorAll(".star");
let ratingCount = document.querySelector(".ratingCount");
let filled = 0;

stars.addEventListener("click", (e) => {
    let Clicked = e.target.dataset.index;

    for (let i = 0; i < filled; i++) {
        star[i].classList.remove("fillStar")
    }

    for (let i = 0; i < Clicked; i++) {
        star[i].classList.add("fillStar");
    }

    ratingCount.textContent=`Rating Count : ${Clicked}`
    
    filled = Clicked;
})

stars.addEventListener("mouseover", (e) => {
    let Clicked = e.target.dataset.index;

    for (let i = 0; i < 5; i++) {
        star[i].classList.remove("fillStar")
    }

    for (let i = 0; i < Clicked; i++) {
        star[i].classList.add("fillStar");
    }
    
})

stars.addEventListener("mouseleave", (e) => {
    
    for (let i = 0; i < 5; i++) {
        star[i].classList.remove("fillStar")
    }
    
    for (let i = 0; i < filled; i++) {
        star[i].classList.add("fillStar");
    }
    })

