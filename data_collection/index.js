const SneaksAPI = require('sneaks-api');
const fs = require('fs')

const sneaks = new SneaksAPI();

const terms = ["nike", "jordan", 'adidas', 'reebok', 'new balance', 'yeezy', 'vans', 'converse', 'puma', 'balenciaga', 'fila', 'under armour',
    'gucci', 'asics', 'off-white', 'fear of god', 'golden goose', 'keds', 'shoe']

function getProducts(term) {
    let all_products = ""
    sneaks.getProducts(term, 10000, function (err, products) {
        for (let j in products) {
            all_products += term + " // " + j + " -- " + products[j].thumbnail + '\n'
        }
        fs.appendFile('sneaker_links.txt', all_products, err => {
            if (err) {
                console.error(err)
            }
        })
    })
}

getProducts('shoe')