//define a new variable / empty array
//define and export a new function that accepts the pottery object as an argument 
//>=6 add price with a vlue of 40
// <=6 add price with a value of 20
// if potObj cracked, toss.
// if the pottery is not cracked, add to the pot to the empty array.
//return new obj


let potToSell = []
let cracked = []

export const toSellOrNotToSell = (potObj) => {
        if (potObj.weight >= 6 && potObj.cracked === false) {
            potObj.price = 40;
            potToSell.push(potObj)
            
        } else if (potObj.weight <= 6 && potObj.cracked === false) {
            potObj.price = 20;
            potToSell.push(potObj)
           
        } else { cracked.push(potObj) }

        return potToSell
}

export const usePottery = () => {
    return potToSell.map(potToSell => ({...potToSell}))

}