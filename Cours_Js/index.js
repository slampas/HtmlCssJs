var tab = [0,1,2,5,4,8,10,11,12,13]

var pair= tab.filter ( (nbr) => {
    return (nbr%2) == 0
})

var impair= tab.filter ( (nbr) => {
    return (nbr%2) != 0
})

console.log(tab)
console.log("Pair : "+ pair)
console.log("impair : "+ impair)