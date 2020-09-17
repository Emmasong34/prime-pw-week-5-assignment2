console.log('js');


let collection = [];
//create a variable "collection" that is an empty array
function addToCollection( recordTitle, recordArtist, recordYear ){
  //add a function to your script named addToCollection(title, artist, year)
  let newRecord = {
    title: recordTitle ,
    artist: recordArtist,
    year: recordYear,
  }
  console.log('add', newRecord );
  collection.push(newRecord);
  //when called, creates a new record object and pushes it into the "collection" array
  return (newRecord);
  //when called, creates a new record object and pushes it into the "collection" array
}

console.log(addToCollection ( 'Week Five', 'Emma', 2020 ));
console.log(addToCollection ( 'Snacks Plz', 'Dr Chips', 2018 ));
console.log('array', collection);
