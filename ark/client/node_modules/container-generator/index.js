module.exports = generate;

const oneof = require('oneof');

const standardWindow = require('./variations/standard-window');
const imageWindow = require('./variations/standard-window');

function generate({}={}){
  return oneof([standardWindow,imageWindow])();
}
