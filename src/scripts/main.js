// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"
import { toSellOrNotToSell } from "./PotteryCatalog.js"
import { PotteryList } from "./PotteryList.js"
import { usePottery } from "./PotteryCatalog.js"


// Make 5 pieces of pottery at the wheel
let mug = makePottery("plate", 25, 40)

console.log(mug)

let potteryNewObj = firePottery(mug, 50)

console.log(potteryNewObj)

let sellingPots = toSellOrNotToSell(potteryNewObj)

console.log(sellingPots)
let usingPottery = usePottery()

let finalCatalog  = PotteryList(usingPottery)

console.log(finalCatalog)


// Fire each piece of pottery in the kiln


// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list



