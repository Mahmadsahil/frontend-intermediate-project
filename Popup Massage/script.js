let msgBtn=document.querySelector("#msgBtn");
let main=document.querySelector(".main");
let msgCont=document.querySelector(".msgCont");
let cancle=document.querySelector("#cancle");

msgBtn.addEventListener("click",()=>{
    main.classList.add("mainColor");
    msgCont.style.visibility="unset";
})

cancle.addEventListener("click",()=>{
    main.classList.remove("mainColor");
    msgCont.style.visibility="hidden";
})

cancle.addEventListener("mouseover",()=>{
    cancle.style.color="red";
})
cancle.addEventListener("mouseleave",()=>{
    cancle.style.color="";
})

