var phrase = process.argv[2];
var result;
var etape = 0;

for (i = 0 ; i <= phrase.length ; i++){
    etape ++;
    if(i == 0){
        result = phrase[i].toLowerCase()

    }
    if(phrase.charAt(i) == ' ') {
        etape -= 1
    }
    if (i !== O) {
        if(etape %2 == "0"){
            result += phrase.charAt(i). toUpperCase()
        }
        else{ result += phrase.charAt(i). toLowerCase()
    }

}

console.log(result)
