// const values
const { promisify } = require("util");
const { xns } = require("xns");
const youtubedl = require("ytdl-core");
const openPip = require("open-pip");

const getInfo = promisify(youtubedl.getInfo);