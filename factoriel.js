const [node, script, chiffre] = process.argv;
factoriel(chiffre);

function factoriel(chiffre){
    var result = 1;
    if (chiffre > 0){
        for( i=1; i <= chiffre; i++){
            result = result *i
        }
        console.log(result);
    } else {
        console.log("Ce n'est pas un chiffre")

    }
}
