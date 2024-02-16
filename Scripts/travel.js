// function for get Elements 
function getClass (classes) {
    const elems = document.getElementsByClassName(classes);
    return elems
}
// function for getInnerText and setInnerText
function getText (id,value) {
    const getID = document.getElementById(id);
    getID.innerText = value;
}
// function for create dom elements 
function makeElem (elemName) {
    const createElem = document.createElement(elemName);
    return createElem;
}
// Get all  add to card buttons 
const allAddToCardBtn = getClass("card-btn");
let cardCount = 0;
for (const addBtn of allAddToCardBtn) {
    addBtn.addEventListener("click",function (e) {
        const placeName = e.target.parentNode.parentNode.childNodes[1].innerText;
        const price = e.target.parentNode.parentNode.childNodes[3].childNodes[1].innerText;
        cardCount += 1;
        getText ("productList",cardCount);
        // create li 
        const li = makeElem("li");
        li.innerText = `${placeName} ${price}$`;
        // append inside of ol 
        const ol = document.getElementById("placeList");
        ol.appendChild(li);
        const totalCost = document.getElementById("totalCost").innerHTML;
        addTotalCost("totalCost",totalCost,price)  
    })
}
// function for add total cost 
function addTotalCost (id,prevusCost,currentCost) {
    const myBudget = document.getElementById("myBudget");
    const myBudgetNumber = parseInt(myBudget.innerText);
    const totalCostNumber = parseInt(prevusCost);
    const priceNumber = parseInt(currentCost);
    const sumTotalCost = totalCostNumber + priceNumber;
    getText(id,sumTotalCost);
    if (myBudgetNumber > 0) {  
        let costBudget = myBudgetNumber - priceNumber;
        if (costBudget < 0) {
            alert("Your budget is too low!😓")
        }else {
            myBudget.innerText = costBudget;
        }
    }

}