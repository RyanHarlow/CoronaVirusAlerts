var fs = require('fs');
 
fs.readFile('./notes/countrycodes.txt', 'utf8', function(err, contents) {
    var data = contents.split('\n')
    data = data.join('\t');
    console.log(data)
    data = data.split('\t');
    for(i = 0; i< data.length; i += 3){
        console.log(`<option value="${data[i+1]}">${data[i]}</option>`)
    }
});