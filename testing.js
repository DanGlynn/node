 const test = (req, res) => {
    
    var dateParameter = 1580169729839;
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

