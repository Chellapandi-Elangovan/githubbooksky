// selecting plus button, overlap, popup-box
var overlap=document.querySelector(".overlap")
var popupbox=document.querySelector(".popup-box")
var plus=document.querySelector(".plus")

plus.addEventListener("click",function(){
    overlap.style.display="block"
    popupbox.style.display="block"
})

// select cancel button
var cancelbutton=document.getElementById("cancel-popup")
cancelbutton.addEventListener("click",function(event){
    event.preventDefault()
    overlap.style.display="none"
    popupbox.style.display="none"
})

// select container,add-book,book-title-input,book-author-input,book-description-input

var container=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var booktitleinput=document.getElementById("book-title-input")
var bookauthorinput=document.getElementById("book-author-input")
var bookdescriptioninput=document.getElementById("book-description-input")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","kidsstory")
    div.innerHTML=`<h2>${booktitleinput.value}</h2>
    <h5>${bookauthorinput.value}</h5>
    <p>${bookdescriptioninput.value}</p>
    <button class="read-button">Read</button>
    <button class="delete-button" onclick="deletebook(event)">Delete</button>`
    container.append(div)
    overlap.style.display="none"
    popupbox.style.display="none"
})

function deletebook(event){
     event.target.parentElement.remove()
}