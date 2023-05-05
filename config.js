const chalk = require("chalk")
const fs = require("fs")

global.ownerNumber = ["6282228462822@s.whatsapp.net"]
global.nomerOwner = "6282228462822"
global.nomorOwner = ['6282228462822']
global.nameGEDE = "YUISTORE"
global.namaDeveloper = "YuiStore"
global.namaBot = "YuiBotz WhatsApp"
global.thumb = fs.readFileSync("./thumb.png")

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})

/*

Thanks To By KirBotz
Base Ori By KirBotz
Ubah Nomor Owner?
Ganti Di File ./owner.json
Harap Jangan Jual Sc Ini
Karena Sc Ini Free Langsung Dari
Youtube : https://youtube.com/@kangbotwhatsapp

*/