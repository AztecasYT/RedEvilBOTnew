const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = 'r.'
const fs = require('fs');
bot.on('ready', () => {
    console.log(`Бот запущен`);
    bot.user.setActivity(bot.users.size + ' users | ' + bot.guilds.size + ' servers | r.help')
  });

bot.on('message', message => {
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const member = message.mentions.members.first() || message.member;
if (command === 'help') {
    const helpembed = new Discord.RichEmbed()
.setColor("RANDOM")
.setTitle('Помощь по коммандам')
.setDescription('Модули комманд бота')
.addField('r.help-utility','Утилита')
.addField('r.help-info','Информация')
.addField('r.help-pictures','Картинки')
.addField('r.help-say','Сэй')
.setAuthor(message.author.username, message.author.avatarURL)
.setFooter('Помощь по коммандам.')
    message.channel.send(helpembed);
}
});

bot.on('message', message => {
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const member = message.mentions.members.first() || message.member;
if (command === 'help-utility') {
    const help1embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setTitle('Помощь по коммандам')
.setDescription('Модуль "Утилита"')
.addField('r.user-info <@Пользователь>','Информация о пользователе')
.addField('r.server-info','Информация о сервере')
.addField('r.avatar <@Пользователь>','Аватарка пользователя')
.addField('r.poll <Вопрос>','Создать голосование')
.setAuthor(message.author.username, message.author.avatarURL)
.setFooter('Помощь по коммандам.')
    message.channel.send(help1embed);
}
});

bot.on('message', message => {
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const member = message.mentions.members.first() || message.member;
if (command === 'help-info') {
    const help2embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setTitle('Помощь по коммандам')
.setDescription('Модуль "Информация"')
.addField('r.creators','Создатели бота')
.addField('r.version','Версия бота')
.addField('r.server','Количество серверов на которых находиться бот')
.addField('r.ping','Пинг бота')
.addField('r.donate','Задонатить')
.addField('r.donate-top','Топ донатеров')
.addField('r.invite','Ссылка на приглашение бота')
.setAuthor(message.author.username, message.author.avatarURL)
.setFooter('Помощь по коммандам.')
    message.channel.send(help2embed);
}
});

bot.on('message', message => {
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const member = message.mentions.members.first() || message.member;
if (command === 'help-say') {
    const help3embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setTitle('Помощь по коммандам')
.setDescription('Модуль "Сэй"')
.addField('r.say','Сказать что-то от лица бота')
.addField('r.say-embed','Сказать что-то от лица бота в стиле "Embed"')
.setAuthor(message.author.username, message.author.avatarURL)
.setFooter('Помощь по коммандам.')
    message.channel.send(help3embed);
}
});

bot.on('message', message => {
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const member = message.mentions.members.first() || message.member;
if (command === 'help-pictures') {
    const help4embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setTitle('Помощь по коммандам')
.setDescription('Модуль "Картинки"')
.addField('r.meme','Показывает картинку с мемом')
.addField('r.cat','Показывает картинку с котом')
.addField('r.dog','Показывает картинку с собакой')
.addField('r.fox','Показывает картинку с лисой')
.addField('r.bear','Показывает картинку с медведем')
.setAuthor(message.author.username, message.author.avatarURL)
.setFooter('Помощь по коммандам.')
    message.channel.send(help4embed);
}
});


bot.on('message', message => {
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const member = message.mentions.members.first() || message.member;
if (command === 'user-info') {
    const userinfoembed = new Discord.RichEmbed()
.setColor("RANDOM")
.setTitle('Информация про человека')
.setDescription('Информация про ' + member.user.username)
.addField('Никнейм -' , member.user.username)           
.addField('Дискриминатор (Тэг) ', member.user.discriminator)
.addField('Зарегистрировался в дискорде ', member.user.createdAt)   
.addField('Статус ', message.member.user.presence.status)   
.addField('Айди в дискорде ', member.user.id)
.setThumbnail(member.user.avatarURL)
.setAuthor(message.author.username, message.author.avatarURL)
.setFooter('Информация про человека')
    message.channel.send(userinfoembed);
}
});

bot.on('message', message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
if (command === 'server-info') {
 const serverinfoembed = new Discord.RichEmbed()
    .setTitle('Инфо про сервер')
    .setColor('RANDOM')
    .addField('Название сервера ',message.guild.name) 
    .addField('Всего тут каналов ',message.channel.guild.channels.size)     
    .addField('Всего тут участников ', message.channel.guild.members.size) 
    .addField('Всего тут емодзи ', message.channel.guild.emojis.size)
    .addField('Всего тут ролей ', message.channel.guild.roles.size)
    .addField('Сервер создан ', message.guild.createdAt)
    .setFooter('Информация про сервер.')
    .setAuthor(message.author.username, message.author.avatarURL)
    message.channel.send(serverinfoembed);
}});

bot.on('message', message => {
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    let member =  message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]) || message.author)
  if (command === 'avatar') {
    const avatarembed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setAuthor(message.author.username, message.author.avatarURL)
    .setTitle('Аватар пользователя')
    .setImage(`${member.user.avatarURL}`)
    .setFooter('Аватар пользователя.');
    message.channel.send(avatarembed);
  }});

bot.on('message', message => {
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    let member =  message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]) || message.author)
  if (command === 'creators') {
    const creatorsembed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setAuthor(message.author.username, message.author.avatarURL)
    .setTitle('Создатель бота')
    .setDescription('<@489509948896837653>')
    .setFooter('Создатель бота.')
    message.channel.send(creatorsembed);
  }});
  
  bot.on('message', message => {
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    let member =  message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]) || message.author)
  if (command === 'version') {
    const versionembed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setAuthor(message.author.username, message.author.avatarURL)
    .setTitle('Версия бота')
    .setDescription('Данная версия бота - 1.0.0 добавлен первый функционал')
    .setFooter('Версия бота.')
    message.channel.send(versionembed);
  }});

  bot.on('message', message => {
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    let member =  message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]) || message.author)
  if (command === 'servers') {
    const serversembed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setAuthor(message.author.username, message.author.avatarURL)
    .setTitle('Сервера бота')
    .setDescription('Бот на ' + bot.guilds.size + ' серверах')
    .setFooter('Количество серверов бота.')
    message.channel.send(serversembed);
  }});

bot.on('message', message => {
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  if (command === 'ping')
    var pingembed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle('Текущий пинг бота',true)
    .addField('Пинг API:', `\`${Math.round(bot.ping)} MS\``, true)
    .addField('Пинг бота:', `\`${new Date().getTime() - message.createdTimestamp + " MS"}\``, true)
    .setAuthor(message.author.username, message.author.avatarURL)
    .setFooter('Пинг бота')
    .setTimestamp();
    message.channel.send(pingembed);
  });

bot.on('message', message => {
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    let member =  message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]) || message.author)
  if (command === 'donate') {
    const donateembed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setAuthor(message.author.username, message.author.avatarURL)
    .setTitle('Донат')
    .setDescription('Есле хотите задонатить огромное спасибо это мотивирует делать новые обновления бота!\nСсылка на донат - https://www.donationalerts.com/r/redevilbot')
    .setFooter('Донат.')
    message.channel.send(donateembed);
  }});

bot.on('message', message => {
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    let member =  message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]) || message.author)
  if (command === 'donate-top') {
    const donateembed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setAuthor(message.author.username, message.author.avatarURL)
    .setTitle('Топ донатеров')
    .setDescription('Тут еще никого нету <:cryCat:_710554411465834507>')
    .setFooter('Топ донатеров.')
    message.channel.send(donateembed);
  }});

bot.on('message', message => {
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  if (command === 'say') {
    message.delete()
    message.channel.send(args.join(' '))
  }});

  bot.on('message', message => {
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  if (command === 'say-embed') {
    message.delete()
    let sayembed = new Discord.RichEmbed()
    .setDescription(args.join('  '))
    message.channel.send(sayembed)
  }});

  var memes = [
    "https://cdn.discordapp.com/attachments/710564267350425631/710564295217381454/1.jpg",
    "https://cdn.discordapp.com/attachments/710564267350425631/710564300330369034/2.jpg",
    "https://cdn.discordapp.com/attachments/710564267350425631/710564307846299688/4.jpg",
    "https://cdn.discordapp.com/attachments/710564267350425631/710564312661491712/5.jpg",
    "https://cdn.discordapp.com/attachments/710564267350425631/710564314611974216/6.jpg",
    "https://cdn.discordapp.com/attachments/710564267350425631/710564330403528786/11.png",
    "https://cdn.discordapp.com/attachments/710564267350425631/710564330738810910/10.png",
    "https://cdn.discordapp.com/attachments/710564267350425631/710564331103715399/8.png",
    "https://cdn.discordapp.com/attachments/710564267350425631/710564331300847736/7.png",
    "https://cdn.discordapp.com/attachments/710564267350425631/710564331044995082/9.png",
    "https://cdn.discordapp.com/attachments/710564267350425631/710564354176581742/3.jpg",
  ];
  
bot.on('message', message => {
      if(message.author.bot) return;
      if(!message.content.startsWith(prefix)) return;
      const args = message.content.slice(prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();
      let member =  message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]) || message.author)
    if (command === 'meme') {
      const memeembed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setAuthor(message.author.username, message.author.avatarURL)
      .setTitle('Мем')
      .setImage(memes[Math.floor(Math.random() * memes.length)])
      .setFooter('Мем.')
      message.channel.send(memeembed);
    }});

var cats = [
  "https://cdn.discordapp.com/attachments/710573075091030097/710573127976878190/1.jpg",
  "https://cdn.discordapp.com/attachments/710573075091030097/710573138521358477/2.jpg",
  "https://cdn.discordapp.com/attachments/710573075091030097/710573140673036288/3.jpg",
  "https://cdn.discordapp.com/attachments/710573075091030097/710573148994797688/4.jpg",
  "https://cdn.discordapp.com/attachments/710573075091030097/710573149229547520/5.jpg",
  "https://cdn.discordapp.com/attachments/710573075091030097/710573149439393852/6.jpg",
  "https://cdn.discordapp.com/attachments/710573075091030097/710573149996974130/7.jpg",
  "https://cdn.discordapp.com/attachments/710573075091030097/710573154065449042/8.jpg",
  "https://cdn.discordapp.com/attachments/710573075091030097/710573176958091314/9.jpg",
  "https://cdn.discordapp.com/attachments/710573075091030097/710573209556353041/10.jpg",
  "https://cdn.discordapp.com/attachments/710573075091030097/710573217601028166/11.jpg",
];

bot.on('message', message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  let member =  message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]) || message.author)
if (command === 'cat') {
  const catembed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setAuthor(message.author.username, message.author.avatarURL)
  .setTitle('Кот')
  .setImage(cats[Math.floor(Math.random() * cats.length)])
  .setFooter('Кот.')
  message.channel.send(catembed);
}});

var dogs = [
  "https://cdn.discordapp.com/attachments/710768416063225878/710768460405276682/1.jpg",
  "https://cdn.discordapp.com/attachments/710768416063225878/710768459570610256/11.jpg",
  "https://cdn.discordapp.com/attachments/710768416063225878/710768461642727434/2.jpg",
  "https://cdn.discordapp.com/attachments/710768416063225878/710768463106277376/3.jpg",
  "https://cdn.discordapp.com/attachments/710768416063225878/710768464888856627/4.jpg",
  "https://cdn.discordapp.com/attachments/710768416063225878/710768467640451072/6.jpg",
  "https://cdn.discordapp.com/attachments/710768416063225878/710768466130501723/5.jpg",
  "https://cdn.discordapp.com/attachments/710768416063225878/710768469339013150/7.jpg",
  "https://cdn.discordapp.com/attachments/710768416063225878/710768471020929116/8.jpg",
  "https://cdn.discordapp.com/attachments/710768416063225878/710768472090607616/9.jpg",
  "https://cdn.discordapp.com/attachments/710768416063225878/710768503417995304/10.jpg",
];

bot.on('message', message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  let member =  message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]) || message.author)
if (command === 'dog') {
  const dogembed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setAuthor(message.author.username, message.author.avatarURL)
  .setTitle('Пес')
  .setImage(dogs[Math.floor(Math.random() * dogs.length)])
  .setFooter('Пес.')
  message.channel.send(dogembed);
}});

var foxes = [
  "https://cdn.discordapp.com/attachments/710770796020367360/710770832217079858/1.jpg",
  "https://cdn.discordapp.com/attachments/710770796020367360/710770837657092176/2.jpg",
  "https://cdn.discordapp.com/attachments/710770796020367360/710770843109818419/3.jpg",
  "https://cdn.discordapp.com/attachments/710770796020367360/710770847513837578/4.jpg",
  "https://cdn.discordapp.com/attachments/710770796020367360/710770851363946496/5.jpg",
  "https://cdn.discordapp.com/attachments/710770796020367360/710770855529021450/6.jpg",
  "https://cdn.discordapp.com/attachments/710770796020367360/710770859983503440/7.jpg",
  "https://cdn.discordapp.com/attachments/710770796020367360/710770865008017479/8.jpg",
  "https://cdn.discordapp.com/attachments/710770796020367360/710770868673970276/9.jpg",
  "https://cdn.discordapp.com/attachments/710770796020367360/710770872763416596/10.jpg",
  "https://cdn.discordapp.com/attachments/710770796020367360/710770876479569960/11.jpg",
  "https://cdn.discordapp.com/attachments/710770796020367360/710770880476872784/12.jpg",
];

bot.on('message', message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  let member =  message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]) || message.author)
if (command === 'fox') {
  const foxembed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setAuthor(message.author.username, message.author.avatarURL)
  .setTitle('Лисичка')
  .setImage(foxes[Math.floor(Math.random() * foxes.length)])
  .setFooter('Лиса.')
  message.channel.send(foxembed);
}});

var bears = [
  "https://cdn.discordapp.com/attachments/711190757649940511/711190801454989362/1.jpg",
  "https://cdn.discordapp.com/attachments/711190757649940511/711190801887002684/3.jpg",
  "https://cdn.discordapp.com/attachments/711190757649940511/711190801887133746/2.jpg",
  "https://cdn.discordapp.com/attachments/711190757649940511/711190802352701490/4.jpg",
  "https://cdn.discordapp.com/attachments/711190757649940511/711190807843045436/6.jpg",
  "https://cdn.discordapp.com/attachments/711190757649940511/711190809722093628/7.jpg",
  "https://cdn.discordapp.com/attachments/711190757649940511/711190812058320936/8.jpg",
  "https://cdn.discordapp.com/attachments/711190757649940511/711190814516052008/9.jpg",
  "https://cdn.discordapp.com/attachments/711190757649940511/711190817053605888/10.jpg",
  "https://cdn.discordapp.com/attachments/711190757649940511/711190847462572032/11.jpg",
];

bot.on('message', message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  let member =  message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]) || message.author)
if (command === 'bear') {
  const bearembed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setAuthor(message.author.username, message.author.avatarURL)
  .setTitle('Мишка')
  .setImage(bears[Math.floor(Math.random() * bears.length)])
  .setFooter('Медведь.')
  message.channel.send(bearembed);
}});

bot.on('message', message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  let member =  message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]) || message.author)
if (command === 'invite') {
  const inviteembed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setAuthor(message.author.username, message.author.avatarURL)
  .setTitle('Ссылка на приглашение бота')
  .addField('Ссылка для того чтобы пригласить бота на свой сервер','https://discord.com/oauth2/authorize?client_id=711244822291152957&scope=bot&permissions=8')
  .setFooter('Ссылка на приглашение бота.')
  message.channel.send(inviteembed);
}});


function rand(min, max) {
  return Math.floor(Math.random() * (max-min) + min)
};

bot.on('message', message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  let member =  message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]) || message.author)
if (command === 'changename') {
  if(message.author.id !== '489509948896837653') return message.reply('Ты не создатель бота и не можешь использовать эту комманду.');
  bot.user.setUsername(args.join('  '))
}});
    
bot.on('message', message => {
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if(command === 'eval') {if(message.author.id !== '489509948896837653') return message.reply('Ты не создатель бота и не можешь использовать эту комманду.');
    try{let evaled = eval(args.join(' ')); let eevaled = typeof evaled; if(typeof evaled!== 'string') evaled = require('util').inspect(evaled); message.react(":smile:"); message.channel.send(`//Успешно ✅\n//Тип: ${eevaled}\n${evaled}`, {code: 'js', split: '\n'})}catch(err){message.channel.send(`//Ошибка ❎\n${err}`, {code: 'js'})}} 
  });
  
bot.login("NzExMjQ0ODIyMjkxMTUyOTU3.XsAMgQ.Xx3BzJt59E1uvBGSbsPlA_5HkvE");
