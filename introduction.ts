
type Pizza = {
    id: number
    name: string
    price: number
}
type Order = {
    id: number
    pizza: Pizza
    status: "ordered" | "completed"

} 
type Indentifier ={

}   


const menu:Pizza[] = [
    {id: 1,name: "morazarella", price: 8 },
    {id: 2,name: "pepperoni", price: 10},
    {id: 3,name: "veggie", price: 12},
    {id: 4,name: "hawaiian", price: 14}
]
let cashInRegister = 100
let nextOrderId: number = 1
const orderQueue: Order[] = []


function addNewPizza(pizzaObj: Pizza): void{
    menu.push(pizzaObj)
}
function placeOrder(pizzaName: string){
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName);
    if(!selectedPizza){
        console.error(`${pizzaName} does not exist in the menu`)
        return null};
    cashInRegister += selectedPizza.price
    const newOrder:Order = {id:nextOrderId++, pizza: selectedPizza, status : "ordered"};
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
function getPizzaDetail(identifier: string | number) : Pizza | undefined{
    if(typeof identifier === "string"){
        return menu.find(pizza => pizza.name.toLowerCase === identifier.toLowerCase)
    }else if(typeof identifier === "number"){
        return menu.find(pizza =>pizza.id === identifier)
    }else{
        throw new TypeError("parameter `indentifier` must be either a string or a number")
    }

}


addNewPizza({id:5,name:"chicken Bacon ranch", price:12})
addNewPizza({id:6,name: "bbq chicken",price:12})
addNewPizza({id:7,name: "four in one", price: 15})

placeOrder("four in one")
completeOrder(1)

console.log("menu:", menu)
console.log("cash in register:", cashInRegister)
console.log("order queue:",orderQueue)
