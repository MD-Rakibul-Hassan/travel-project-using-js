// function for get Elements 
function getClass (classes) {
    const elems = document.getElementsByClassName(classes);
    return elems
}
// Get all card add to card buttons 
const allAddToCardBtn = getClass("card-btn");
let cardCount = 0;
for (const addBtn of allAddToCardBtn) {
    addBtn.addEventListener("click",function (e) {
        cardCount += 1;
        getText ("productList",cardCount)
    })
}
// function for getInnerText and setInnerText
function getText (id,value) {
    const getID = document.getElementById(id);
    getID.innerText = value;
}