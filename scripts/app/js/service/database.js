const fs = require('fs');
const exec = require('util').promisify(require('child_process').exec);

module.exports = {
    downloadBot: function(path) {
        return new Promise(async function (resolve,reject) {
            if (fs.existsSync(`${path}/bin/bot`)) {
                resolve();
            } else {
                const url = "http://github.com/swimauger/rasmore/blob/master/bin/bot?raw=true";
                if (!fs.existsSync(`${path}/bin/`)) {
                    fs.mkdirSync(`${path}/bin/`);
                }
                const file = fs.createWriteStream(`${path}/bin/bot`);
                path = path.replace(/(\s+)/g, '\\$1');
                await exec(`curl -L ${url} -o ${path}/bin/bot`);
                await exec(`chmod +x ${path}/bin/bot`);
                resolve();
            }
        });
    }
}
