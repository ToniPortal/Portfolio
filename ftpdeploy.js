const FtpDeploy = require("ftp-deploy");
const ftpDeploy = new FtpDeploy();

const config = {
    user: "pastretoni",
    // Password optional, prompted if none given
    password: "totoni13",
    host: "ftp-pastretoni.alwaysdata.net",
    port: 21,
    localRoot: __dirname + "/",
    remoteRoot: "/www/",
    // include: ["*", "**/*"],      // this would upload everything except dot files
    include: ["*.js", "views/*", "src/*", ".*","views/*","src/*/*","index.js","package.json","./partials/*"],
    // e.g. exclude sourcemaps, and ALL files in node_modules (including dot files)
    exclude: [
        "dist/**/*.map",
        "node_modules/**",
        "node_modules/**/.*",
        ".git/**",
        ".gitignore",
        "readme.md",
        "src/people/*",
        "V1/**",
        "ftpdeploy.js"
    ],
    // delete ALL existing files at destination before uploading, if true
    deleteRemote: false,
    // Passive mode is forced (EPSV command is not sent)
    forcePasv: false,
    // use sftp or ftp
    sftp: false,
};

ftpDeploy
    .deploy(config)
    .then((res) => console.log("finished:", res))
    .catch((err) => console.log(err));