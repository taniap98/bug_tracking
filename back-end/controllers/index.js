const user = require("./user");
const bug = require("./bug");
const proj = require("./project");
const mp = require("./mp");
const tst = require("./tst");
const other = require('./other')

const controllers = {
    user,
    bug,
    proj,
    mp,
    tst,
    other
}
module.exports = controllers;