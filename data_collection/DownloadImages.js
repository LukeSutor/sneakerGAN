const fs = require('fs');
const download = require('image-downloader');

const data = fs.readFileSync('sneaker_links.txt', err => {
    if (err) {
        console.error(err)
    }
})

const lines = data.toString().split("\n")

// const links = []

// lines.forEach((line, index) => {
//     links[index] = line.split(' -- ')[1]
// });

// async function download() {
//     let downloaded = 0
//     let length = lines.length
//     lines.forEach(async (line) => {
//         let name = line.split(' -- ')[0]
//         name = name.split(' // ').join('-')
//         let url = line.split(' -- ')[1]
//         const options = {
//             url: url,
//             dest: '../images' + name + ".png",
//             extractFilename: false
//         }
//         await download.image(options)
//             .then(({ filename }) => {
//                 console.log('Saved to', filename)  // saved to /path/to/dest/photo
//             })
//             .catch((err) => console.error(err))
//         downloaded++
//         console.log(downloaded + " out of " + length);
//     })
// }

// download()

async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
}

const start = async () => {
    let downloaded = 0
    let length = lines.length
    await asyncForEach(lines, async (line) => {
        let name = line.split(' -- ')[0]
        name = name.split(' // ').join('-')
        let url = line.split(' -- ')[1]
        const options = {
            url: url,
            dest: '../images/' + name + ".png",  // C:\Users\Luke\Desktop\coding\sneakerGAN\data_collection\images
            extractFilename: false
        }
        await download.image(options)
            .then(({ filename }) => {
                console.log('Saved to', filename)  // saved to /path/to/dest/photo
            })
            .catch((err) => console.error(err))
        downloaded++
        console.log(downloaded + " out of " + length);
    });
    console.log('Done');
}


start();
