require("./all/module")

global.owner = "https://wa.me/+2347046363976" 
global.namabot = "Dechris bug" //BOT NAME
global.namaCreator = "*Dechris*" //CREATOR NAME
global.autoJoin = false //DON'T CHANGE  / JANGAN GANTI
global.antilink = false //DON'T CHANGE  / JANGAN GANTI
global.versisc = '1.0.0' //DON'T CHANGE 
global.sessionName = 'session'
global.codeInvite = ""
global.imageurl = 'https://telegra.ph/file/6b841282edd26fa590b6c.jpg' //GANTI PP MU MENGGUNAKAN LINK TELEGRA PH
global.isLink = 'https://wa.me/2347046363976' 
global.thumb = fs.readFileSync("./thumb.png") ///DON'T CHANGE  
global.audionya = fs.readFileSync("./all/sound.mp3") //DON'T CHANGE  
global.packname = "𝐁𝐲 𝕻𝕽𝕰𝖃𝖄 𝕭𝖀𝕾 𝕻𝟐 " 
global.author = "*Dechris👑*" 
global.jumlah = "5" ////DON'T CHANGE

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
