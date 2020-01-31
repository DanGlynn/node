

let dateParameter = 1580169729839;
let regex = /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))/;
var regexUnix = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))(@|%2540|%40)((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
var isTimestamp = require( 'validate.io-timestamp' );   
let result = regexUnix.test(dateParameter);
let result2 = Date.parse(dateParameter);
let result3 = Date.now(dateParameter);
let result4 = isTimestamp(dateParameter);
let result5 = new Date(dateParameter).toUTCString();
console.log(result4);

