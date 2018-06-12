const PWD = require('./pwd');
const LS = require('./ls');
const CAT = require('./cat');
const CURL = require('./curl');

module.exports = {
  pwd: PWD.pwd,
  ls: LS.ls,
  cat: CAT.cat,
  curl: CURL.curl,
};
