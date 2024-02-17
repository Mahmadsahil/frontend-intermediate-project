let boxCont = document.querySelector(".boxCont");
let box = document.querySelectorAll(".box")
let queue = [];

boxCont.addEventListener("click", (e) => {
    let index = e.target.dataset.index;

    if (index != undefined) {
        queue.push(index);
        box[index].classList.add("greenColor");
    }

    if (queue.length == 7) {
        let count = 0;
        while (queue.length > 0) {
            let ind = queue.shift();
            count++
            setTimeout(() => {
                box[ind].classList.remove("greenColor");
            }, count* 1000)
        }

    }
})
