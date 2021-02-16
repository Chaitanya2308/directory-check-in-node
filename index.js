const fs = require('fs');
fs.readdir(__dirname, 'UTF-8', (err, files) => {

    files.forEach((file) => {
        fs.stat(file, (err, stats) => {
            if (stats.isDirectory()) {
                console.log(file + ' -> Is a Folder');
            } else {
                console.log(file + '=> Is a File');
            }
        });
    });

    if (err) {
        throw Error;
    }

});
