
type Pizza = {
    name: string
    price: number
}
type Order = {
    id: number
    pizza: Pizza
    status: String

}
const menu = [
    {name: "morazarella", price: 8 },
    {name: "pepperoni", price: 10},
    {name: "veggie", price: 12},
    {name: "hawaiian", price: 14}
]
let cashInRegister = 100
let nextOrderId: number = 1
const orderQueue: Order[] = []


function addNewPizza(pizzaObj: Pizza){
    menu.push(pizzaObj)
}
function placeOrder(pizzaName: string){
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName);
    if(!selectedPizza){
        console.error(`${pizzaName} does not exist in the menu`)
        return null};
    cashInRegister += selectedPizza.price
    const newOrder = {id:nextOrderId++, pizza: selectedPizza, status : "ordered"};
    orderQueue.push(newOrder);
    return newOrder;  
}
function completeOrder(orderId: number){
    const order = orderQueue.find(order => order.id === orderId)
    if (!order){
        console.error(`${orderId} was not found in the orderQueue`)
        return
    }
    order.status = "completed"
    return order
}

addNewPizza({name:"chicken Bacon ranch", price:12})
addNewPizza({name: "bbq chicken",price:12})
addNewPizza({name: "four in one", price: 15})

placeOrder("four in one")
completeOrder(1)

console.log("menu:", menu)
console.log("cash in register:", cashInRegister)
console.log("order queue:",orderQueue)
