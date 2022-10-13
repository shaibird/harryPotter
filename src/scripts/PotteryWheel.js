let primaryKey = 1

export const makePottery = (shape, weight, height) => {
    let newPot = 
    {

    id: primaryKey,
    shape: shape,
    weight: weight,
    height: height

    }

    primaryKey ++;

    return newPot
}
