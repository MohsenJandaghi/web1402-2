let fs = require('fs');
let arrayInpute = process.argv[3];
function deleteCallback(err){
    if(err){
        if(err.code === 'EPERM'){
            fs.rmdir(process.argv[2],deleteCallback)
        }
        else{
            console.log('EROR',err)
        }
    }
    
    else{
        console.log('deleted')
    }
}
fs.unlink(process.argv[2],deleteCallback)




