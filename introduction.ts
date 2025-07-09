const menu = [
    {name: "morazarella", price: 8 },
    {name: "pepperoni", price: 10},
    {name: "veggie", price: 12},
    {name: "hawaiian", price: 14}
]

const cashInRegister = 100
const orderQueue = []


function addNewPizza(pizzaObj){
    menu.push(pizzaObj)

}
function placeOrder(pizzaName){
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName);

    if(!selectedPizza){return null};

    cashInRegister += selectedPizza.price;

    const NewOrder = {pizza: selectedPizza, status : "ordered"};
    orderQueue.push(newOrder);
    return newOrder;  
}
function completeOrder()