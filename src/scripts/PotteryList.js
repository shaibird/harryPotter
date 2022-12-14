export const PotteryList = (potsToSell) => {
    let catalogHTML = '<section class="pottery"'

    for (const toCatalog of potsToSell) {
        catalogHTML += `id="pottery--${toCatalog.id}">
        <h2 class="pottery_shape">${toCatalog.shape}</h2>
        <div class="pottery_properties"> Item weighs ${toCatalog.weight} grams and is ${toCatalog.height} cm in height</div>
        <div class="pottery_price">Price is $${toCatalog.price}</div>`
    }
    catalogHTML += '</section>'

    return catalogHTML
}