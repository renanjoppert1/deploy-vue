var FtpDeploy = require("ftp-deploy");
var ftpDeploy = new FtpDeploy();

var config = {
    user: "usuario",
    password: "senha",
    host: "ftp.dminio.com",
    port: 21,
    localRoot: __dirname + "/dist",
    remoteRoot: "/public_html/",
    include: ["*", "**/*", '.*', '*.*'],
    deleteRemote: true,
    forcePasv: false
};

ftpDeploy
    .deploy(config)
    .then(res => console.log("finished:", res))
    .catch(err => console.log(err));

// use with callback
ftpDeploy.deploy(config, function (err, res) {
    if (err) {
        console.log(err);
    } else {
        console.log("finished:", res);
    }
});
