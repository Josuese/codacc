
const fs = require('fs'); // Nécessaire pour dire qu'il faut un File System
const c1 = process.argv[2]
const c2 = fs.readFileSync("./" + process.argv[3],"utf8").split("\n");

function nettoyageString(str) {
    return str.toLowerCase().replace(/[^a-z\d]/g, '').split('').sort().join('');
}

function isAnagram(c1, c2) {
    var TabAnnagr = [];
    for(var i=0; i < c2.length; i++)
        if (nettoyageString(c1) == nettoyageString(c2[i])){
            TabAnnagr.push(c2[i]);
        }
        console.log(TabAnnagr)
}

isAnagram(c1,c2);
