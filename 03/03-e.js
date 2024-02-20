let fs = require('fs');
let arrayInpute = process.argv[3];
function copyFileCallback(err){
    if(err){
        console.log('EROR',err)
    }
    else{
        console.log('Copy success')
    }
}
fs.copyFile(process.argv[2],process.argv[3],copyFileCallback)




