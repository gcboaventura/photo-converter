const fs = require('fs');
const Jimp = require("jimp")
const Folder = './before';

fs.readdir(Folder, (err, content) => {
    err ? console.log(err) : content.map(x => convert(x))
})

const convert = async (file) => {
    const name = file.split('.') // if your photo has the format "name.extension" it will be renamed to "name.png"
    Jimp.read(`before/${file}`)
        .then(img => {
            return img.write(`after/${name[0]}.png`)
        })
        .catch(e => console.log(e))
}