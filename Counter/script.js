let inp=document.querySelector("#inp");
let addBtn=document.querySelector(".add");
let subBtn=document.querySelector(".sub");
let result=document.querySelector(".result");
let resetBtn=document.querySelector(".resetBtn");
let count=0;

inp.addEventListener("change",(e)=>{
    count=parseInt(e.target.value);
})

addBtn.addEventListener("click",()=>{
    let totle=parseInt(result.textContent)+count;
    result.textContent=totle;
});

subBtn.addEventListener("click",()=>{
    let totle=parseInt(result.textContent)-count;
    if(totle < 0){
        totle=0;
    }
    result.textContent=totle;
});

resetBtn.addEventListener("click",()=>{
    result.textContent=0;
})