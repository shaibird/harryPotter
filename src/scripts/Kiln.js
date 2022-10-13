// add a true value to fired, and an if else statement determining if the pot is cracked boolean

export const firePottery = (potteryObject, tempInt) => {
    potteryObject.fired = true
    if (tempInt > 2200) { potteryObject.cracked = true 
    } else { potteryObject.cracked = false}

    return potteryObject
}