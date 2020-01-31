app.get('/api/timestamp/:date_string?', function(req, res, next){
    // naming variables
    var dateParameter = req.params.date_string;
    var currentDate = Date.now();
    var currentUTC = Date();
    var regex = /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))/;
    var regexUnix = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))(@|%2540|%40)((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
    var ISOToUnix = new Date(dateParameter).getTime();
    var ISOToUTC = new Date(dateParameter).toUTCString();
    if (dateParameter > '') {
        if (typeof dateParameter === 'string') {
            if (Date.parse(dateParameter)){
                res.json({unix: ISOToUnix, utc: ISOToUTC});
            } else { res.json({unix: null, utc: "Invalid Date"});
          }
        }
    } else { res.json({ unix: currentDate, utc: currentUTC})
  } next();
}, function(req, res) {
    
    var dateParameter = req.params.date_string;
    var currentDate = Date.now();
    var currentUTC = Date();
    var regex = /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))/;
    var regexUnix = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))(@|%2540|%40)((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
    var ISOToUnix = new Date(dateParameter).getTime();
    var ISOToUTC = new Date(dateParameter).toUTCString();
    
        if(typeof dateParameter !== 'string') {
            dateParameter.toString()
    if ((new Date(dateParameter)).getTime() > 0) {
        //something here to convert integer to string
        res.json({unix: ISOToUnix, utc: ISOToUnix})
    } else { res.json({unix: null, utc: "Invalid Date"});
    }
  }
}
)
// code on 1/30/20
app.get('/api/timestamp/:date_string?', function(req, res, next){
  // naming variables
  var dateParameter = req.params.date_string;
  var currentDate = Date.now();
  var currentUTC = Date();
  var regex = /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))/;
  var regexUnix = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))(@|%2540|%40)((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
  var ISOToUnix = new Date(dateParameter).getTime();
  var ISOToUTC = new Date(dateParameter).toUTCString();
  if (dateParameter > '') {
      if (typeof dateParameter === 'string' && (Date.parse(dateParameter))) {
          
              res.json({unix: ISOToUnix, utc: ISOToUTC});
          } else { res.json({unix: null, utc: "Invalid Date"});
        }
      
  } else { res.json({ unix: currentDate, utc: currentUTC})
} next();
}, function(req, res) {
  
  var dateParameter = req.params.date_string;
  var currentDate = Date.now();
  var currentUTC = Date();
  var regex = /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))/;
  var regexUnix = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))(@|%2540|%40)((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
  var ISOToUnixInt = new Date(parsedUnix).getTime();
  var ISOToUTCInt = new Date(parsedUnix).toUTCString();
  
      if (typeof dateParameter !== 'string' && (new Date(dateParameter))) {
       var parsedUnix = new Date(parseInt(dateParameter))
        const parseTest = (parsedUnix) => {
     
     const pad = (n) => { return n < 10 ? '0'+n : n }
     return parsedUnix.getUTCFullYear()+'-'
      + pad(parsedUnix.getUTCMonth()+1)+'-'
      + pad(parsedUnix.getUTCDate())  
        }
      if (Date.parse(parsedUnix)) {
      res.json({unix: ISOToUnixInt, utc: ISOToUnixInt})
   } else { res.json({unix: null, utc: "Invalid Date"});
  }
}
}

)
// working 11:50am 1/30/20
app.get('/api/timestamp/:date_string?', function(req, res, next){
  // naming variables
  var dateParameter = req.params.date_string;
  var currentDate = Date.now();
  var currentUTC = Date();
  var regex = /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))/;
  var regexUnix = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))(@|%2540|%40)((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
  var ISOToUnix = new Date(dateParameter).getTime();
  var ISOToUTC = new Date(dateParameter).toUTCString();
  if (typeof dateParameter === 'string') {
    // test here whether entry is unix timestamp or ISO string

      if (Date.parse(dateParameter)) {
          
              res.json({unix: ISOToUnix, utc: ISOToUTC});
          } 
        
      
  } else { res.json({ unix: currentDate, utc: currentUTC})
} next();
/*
}, function(req, res) {
  
  var dateParameter = req.params.date_string;
  var currentDate = Date.now();
  var currentUTC = Date();
  var regex = /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))/;
  var regexUnix = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))(@|%2540|%40)((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
  var ISOToUnixInt = new Date(parsedUnix).getTime();
  var ISOToUTCInt = new Date(parsedUnix).toUTCString();
  
      if (typeof dateParameter !== 'string' && (new Date(dateParameter))) {
       var parsedUnix = new Date(parseInt(dateParameter))
        const parseTest = (parsedUnix) => {
     
     const pad = (n) => { return n < 10 ? '0'+n : n }
     return parsedUnix.getUTCFullYear()+'-'
      + pad(parsedUnix.getUTCMonth()+1)+'-'
      + pad(parsedUnix.getUTCDate())  
        }
      if (Date.parse(parsedUnix)) {
      res.json({unix: ISOToUnixInt, utc: ISOToUnixInt})
   } else { res.json({unix: null, utc: "Invalid Date"});
  }
}
}

)
// working code 1/31/20 */
app.get('/api/timestamp/:date_string?', function(req, res, next){
  // dateParameter variable added for readability...
    var dateParameter = req.params.date_string;
  // test whether request parameter is blank or a string ...
  if (typeof dateParameter === 'string') {
    // if not blank - test here whether entry is unix timestamp or ISO string. If ISO - display .json, if unix then next();
      if (Date.parse(dateParameter)) {
              res.json({unix: new Date(dateParameter).getTime(), utc: new Date(dateParameter).toUTCString()});
          } next(); 
        } else { res.json({ unix: Date.now(), utc: Date()}) // if blank - the current date .json is sent
      } 
     }, function(req, res, next) { 
   // naming variables for readability...
     var dateParameter = req.params.date_string;
     var parsedUnix = new Date(parseInt(dateParameter));
     var ISOToUnix2 = new Date(parsedUnix).getTime();
     var ISOToUTC2 = new Date(parsedUnix).toUTCString();
     // converting Unix to Parse-able String Format YYYY-MM-DD
       const parseTest = (parsedUnix) => { 
       const pad = (n) => { return n < 10 ? '0' + n : n }
        return parsedUnix.getUTCFullYear() + '-' + pad(parsedUnix.getUTCMonth()+1) + '-' + pad(parsedUnix.getUTCDate()); 
        // test if newly string-formatted unix is parseable, true returns .json, next() if false
        // below conde needs to be updted to exclude dates that aren't valid.
         };
        if (new Date(parsedUnix)) {
           res.json({unix: ISOToUnix2, utc: ISOToUTC2});
        } next();    
  
    }, function(req, res) {
     //var dateParameter = req.params.date_string;
     //var ISOToUnix3 = new Date(dateParameter).getTime();
     //var ISOToUTC3 = new Date(dateParameter).toUTCString(); 
     //res.json({unix: ISOToUnix3, utc: ISOToUTC3});
      res.json({"unix":null,"utc":"Invalid Date"});
}  
)
//new improved working code 1.31.20 - 2:26pm

app.get("/api/hello", function(req, res) {
  res.json({ greeting: "hello API" });
});
// still need to break up the first middleware function as it is triggering "Error: Can't set headers after they are sent"
app.get('/api/timestamp/:date_string?', function(req, res, next){
  // dateParameter variable added for readability...
    var dateParameter = req.params.date_string;
  // test whether request parameter is blank or a string ...
  if (typeof dateParameter === 'string') {
    // if not blank - test here whether entry is unix timestamp or ISO string using isoDatestringValidator.io. If ISO - display .json, if unix then next();
      if (isoDatestringValidator.isValidDate(dateParameter)) {
              res.json({unix: new Date(dateParameter).getTime(), utc: new Date(dateParameter).toUTCString()});
          } next(); 
        } else { res.json({ unix: Date.now(), utc: Date()}) // if blank - the current date .json is sent
      } 
     }, function(req, res) { 
   // naming variables for readability...
     var dateParameter = req.params.date_string;
     var dateToInt= parseInt(dateParameter);
  // added validate-timestamp.io to check unix timestamp
        if (isTimestamp(dateToInt)){
           res.json({unix: new Date(dateToInt).getTime(), utc: new Date(dateToInt).toUTCString()});
        } else { res.json({unix: new Date(dateToInt).getTime(), utc: new Date(dateToInt).toUTCString()});
               }   
  
    }//, function(req, res) {
     /*var dateParameter = req.params.date_string;
     var ISOToUnix3 = new Date(dateParameter).getTime();
     var ISOToUTC3 = new Date(dateParameter).toUTCString(); 
     res.json({unix: ISOToUnix3, utc: ISOToUTC3}); 
      
  }  */
)
// 1.31.20 coe with console messaging to trace errors
*/
app.get("/api/hello", function(req, res) {
  res.json({ greeting: "hello API" });
});
// still need to break up the first middleware function as it is triggering "Error: Can't set headers after they are sent"
app.get('/api/timestamp/:date_string?', function(req, res, next){
  // dateParameter variable added for readability...
    var dateParameter = req.params.date_string;
  // test whether request parameter is blank or a string ...
  if (typeof dateParameter === 'string') {
    // if not blank - test here whether entry is unix timestamp or ISO string using isoDatestringValidator.io. If ISO - display .json, if unix then next();
      if (isoDatestringValidator.isValidDate(dateParameter)) {
              res.json({unix: new Date(dateParameter).getTime(), utc: new Date(dateParameter).toUTCString()});
        console.log('passed ISO String Validation Test but triggering Error: Cant set headers after they are sent.')
          } next(); 
        } else { 
          console.log('field was blank so current date is displayed')
          res.json({ unix: Date.now(), utc: Date()}) // if blank - the current date .json is sent
      } 
     }, function(req, res) { 
   // naming variables for readability...
     var dateParameter = req.params.date_string;
     var dateToInt= parseInt(dateParameter);
  
  // added validate-timestamp.io to check unix timestamp
        if (isTimestamp(dateToInt)){
           res.json({unix: new Date(dateToInt).getTime(), utc: new Date(dateToInt).toUTCString()});
          console.log('verified legit unix timestamp')
        } else { res.json({unix: new Date(dateToInt).getTime(), utc: new Date(dateToInt).toUTCString()});
                console.log('recognized invalid ISO dateString or Unix Timestamp')
               }   
  
    }//, function(req, res) {
     /*var dateParameter = req.params.date_string;
     var ISOToUnix3 = new Date(dateParameter).getTime();
     var ISOToUTC3 = new Date(dateParameter).toUTCString(); 
     res.json({unix: ISOToUnix3, utc: ISOToUTC3}); 
      
  }  */
)