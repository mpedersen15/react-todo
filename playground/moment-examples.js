var moment = require('moment');

console.log(moment().format());

var now = moment();

console.log(now.unix());

var timestamp = 1496107566;
var currentMoment = moment.unix(timestamp)
console.log(currentMoment.format());
console.log(currentMoment.format("MMM D, YYYY @ h:mm a"));
console.log(currentMoment.format("MMMM Do, YYYY @ h:mm A"));
