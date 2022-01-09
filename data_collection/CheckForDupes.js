const fs = require('fs')

const data = fs.readFileSync('sneaker_links.txt', err => {
    if (err) {
        console.error(err)
    }
})

const lines = data.toString().split("\n")

const line_ends = []

lines.forEach((line, index) => {
    line_ends[index] = line.split(' -- ')[1]
});


function count_duplicate(a) {
    let counts = {}
    let count = 0
    let splice_indices = []

    for (let i = 0; i < a.length; i++) {
        if (counts[a[i]]) {
            console.log(i);
            splice_indices.push(i)
            counts[a[i]] += 1
        } else {
            counts[a[i]] = 1
        }
    }
    for (let prop in counts) {
        if (counts[prop] >= 2) {
            count++
            console.log(prop + " counted: " + counts[prop] + " times.")
        }
    }
    // console.log(counts)
    console.log("total: " + count)


    for (let i in splice_indices) {
        lines.splice(splice_indices[splice_indices.length - i - 1], 1);
    }


    // If you want to remove the duplicates, use this code, it'll create a new file that doesn't contain any duplicates
    // newFile = ""
    // for (let i in lines) {
    //     newFile += lines[i] + "\n"
    // }

    // fs.writeFile('sneaker_links_2.txt', newFile, err => {
    //     if (err) {
    //         console.error(err)
    //     }
    // })
}

count_duplicate(line_ends)