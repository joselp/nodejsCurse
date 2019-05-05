const fs = require('fs');

var callback = function(err, files){
    if(err){
        console.log(err);
    } else{
        console.log(`Files: ${files}`);
    }
}

fs.readdir('./', callback);