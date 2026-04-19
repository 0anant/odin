const fs = require('fs');

function main(filenname) {
    // console.log(process.argv);
    fs.readFile(filenname, 'utf-8', function(err, data) {
        let ctr = 0;
        for(let i=0; i< data.length; i++){
            if(data[i] === " "){
                ctr++;
            }
        }
        console.log(ctr + 1);
    })
}
main(process.argv[2]);