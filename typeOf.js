/*
app.get("/api/timestamp/:date_string?", function(req, res) {
    var dateParameter = req.params.date_string;
    var currentDate = Date.now();
    var currentUTC = Date();
    var regex = /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))/;
    var regexUnix = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))(@|%2540|%40)((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
    var ISOToUnix = new Date(dateParameter).getTime();
    var ISOToUTC = new Date(dateParameter).toUTCString();
  // 
  // not an issue with res.json ending the request/response cycle
  //var UnixInt = Date.parse(dateParameter); replace two system if/then with single Date.parse method for string validation - didn't work
   if (dateParameter > "") {
        if (Date.parse(dateParameter)) {
          res.json({ unix: ISOToUnix, utc: ISOToUTC});
            }  else { res.json({ unix: null, utc: "Invalid Date" });
            };
              } else {
        res.json({ unix: currentDate, utc: currentUTC });
      }
    });
/* app.get("/api/timestamp/:date_string?", function(req, res) {
    var dateParameterInt = req.params.date_string;
    var dateParameter = String(dateParameterInt);
    var currentDate = Date.now();
    var currentUTC = Date();
    var regex = /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))/;
    var regexUnix = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))(@|%2540|%40)((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
    var ISOToUnix = new Date(dateParameter).getTime();
    var ISOToUTC = new Date(dateParameter).toUTCString();
    //var UnixInt = Date.parse(dateParameter); replace two system if/then with single Date.parse method for string validation
   if (dateParameter > "") {
        if (Date.parse(dateParameter)) {
          res.json({ unix: ISOToUnix, utc: ISOToUTC});
            }  else { res.json({ unix: null, utc: "Invalid Date" });
            };
              } else {
        res.json({ unix: currentDate, utc: currentUTC });
      }
    });
// old code

app.get("/api/timestamp/:date_string?", function(req, res) {
    var dateParameterInt = req.params.date_string;
    var dateParameter = String(dateParameterInt);
    var currentDate = Date.now();
    var currentUTC = Date();
    var regex = /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))/;
    var regexUnix = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))(@|%2540|%40)((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
    var ISOToUnix = new Date(dateParameter).getTime();
    var ISOToUTC = new Date(dateParameter).toUTCString();
    //var UnixInt = Date.parse(dateParameter); replace two system if/then with single Date.parse method for string validation
   if (dateParameter > '') {
       if (typeof dateParameter !== 'string') {
       String(dateParameter);
          if (regexUnix.test(dateParameter)) {
              res.json({unix:ISSOToUnix, utc:ISOToUTC});
          }

         }
        else if (typeof dateParameter == 'string'){

        if (Date.parse(dateParameter)) {
          res.json({ unix: ISOToUnix, utc: ISOToUTC});
            }  else { res.json({ unix: null, utc: "Invalid Date" });
            };
              }
              
            } else {
        res.json({ unix: currentDate, utc: currentUTC });
      }
    });
    */
  

    const parseTest = (parsedUnix) => {
       
      const pad = (n) => { return n < 10 ? '0'+n : n }
    return parsedUnix.getUTCFullYear()+'-'
        + pad(parsedUnix.getUTCMonth()+1)+'-'
        + pad(parsedUnix.getUTCDate())
        
}
       
  
      var parsedUnix = new Date(parseInt(1580402123064));
       console.log(parseTest(parsedUnix));
  

