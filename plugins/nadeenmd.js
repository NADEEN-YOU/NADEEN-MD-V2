const config = require('../config')

const {cmd , commands} = require('../command')



cmd({

    pattern: "nadeen",
    desc: "To get the bot informations.",
    react: "🔰",
    category: "main",
    filename: __filename

},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{



let about = ` *👋 Hello ${pushname}*
                    
 𝐈 𝐀𝐌 𝗡𝗔𝗗𝗘𝗘𝗡-𝗠𝗗 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐎𝐓
 
⚡𝐂𝐑𝐄𝐀𝐓𝐄𝐃 𝐁𝐘 𝗡𝗔𝗗𝗘𝗘𝗡 𝗣𝗢𝗢𝗥𝗡𝗔 (𝗗𝗔𝗥𝗞 𝗖𝗬𝗕𝗘𝗥 𝗠𝗔𝗧𝗥𝗜𝗫)..
           
*☄ɢɪᴛʜᴜʙ :* https://github.com/Nadeenpoorna-max/NADEEN-MD-V2   
             
*🌠ʏᴏᴜᴛᴜʙᴇ :* https://www.youtube.com/@NADEEN-MD
      
*☄ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴɴᴇʟ :* https://whatsapp.com/channel/0029VagN2qW3gvWUBhsjcn3I

*👨‍💻ɴᴀᴅᴇᴇɴ-ᴍᴅ ᴍᴀᴅᴇ ʙʏ ɴᴀᴅᴇᴇɴ ᴘᴏᴏʀɴᴀ👨‍💻*`

return await conn.sendMessage(from,{image: {url:`https://files.catbox.moe/2nmi9q.png`},caption:about},{quoted: mek})

}catch(e){

console.log(e)

reply(`${e}`)

}

})
