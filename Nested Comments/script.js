let container = document.querySelector(".container");
let allComments = document.querySelector(".allComments");
let card = document.querySelector(".card");

function createInputBox() {
    let div = document.createElement("div");
    div.setAttribute("class", "commentDetail");
    div.innerHTML = `
    <div class="commentDetail">
        <input type="text" name="" placeholder="Comment" id="CommentInp" />
        <button id="submitBtn" class="submitBtn">Submit</button>
      </div>`

    return div
}

function addReply(text) {
    let div = document.createElement("div");
    div.setAttribute("class", "allComments");
    div.innerHTML = `
    <div class="card">
      <span id="text">${text}</span>
      <span id="reply" class="reply">reply</span>
  </div>`

    return div
}

container.addEventListener("click", (e) => {
    let replyClicked = e.target.classList.contains("reply");
    let submitClicked = e.target.classList.contains("submitBtn");
    let closestCard = e.target.closest(".allComments");
    
    if (replyClicked) {
        // add input box
        closestCard.appendChild(createInputBox())
    }
    
    if (submitClicked) {
        // add reply card
        let commentDetail = e.target.closest(".commentDetail");
        if(commentDetail.children[0].value){

            closestCard.appendChild(addReply(commentDetail.children[0].value))
            commentDetail.remove()
        }

    }
})