// var listOfTitleLengths = books.map(function(books){
//      console.log(books.englishTerm);
// });
// this one prints the elements of the array neatly, each on their own line



// var ltt = cars.map(function(cars){
//      console.log(([cars]+2)*2);
// });
//this one prints the elements of the array neatly, each on their own line
//because it's mapped
//good idea to chanvge the variable name to something that works

//
// console.log(cars); //have to drill down into it.. ok for a one-dimensional array
// console.log(books); // have to drill down in to it


// console.table([books]); // have to drill down into it, but gets the job done
//
// var listOfTitleLengths = books.map(function(books){
//      console.log(books);
// }); //ugly


// var listOfTitleLengths = books.map(function(books){
//      console.log(books.englishTerm);
//      console.log(books.chineseTerm + ": " + books.pinyin);
// });
// this one prints them each on their own line, but is an ABAB pattern
//
// console.log("****\n" * 4);

books.forEach(function(book, i){
    console.log([book.chineseTerm] + " " + [book.partOfSpeech]);
});
//this one is great because you just put in 'i' as the callback instead of doing math with it

books.forEach(function(book, i){
    document.write([book.chineseTerm] + " " + [book.partOfSpeech]);
    document.write("\n");
});
//nice variant on the previous one, but uses the deprecated d.w() method and outputs messy html
