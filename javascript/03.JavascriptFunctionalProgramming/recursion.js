function printEachLetter(word, position){

    if(position < word.length){
        console.log("Word at position", position+1, "is", word[position]);
        printEachLetter(word, position+1);
    }
}


printEachLetter("dog", 0);