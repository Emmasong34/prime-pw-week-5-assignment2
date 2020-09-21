console.log('js');


let collection = [];
//create a variable "collection" that is an empty array
function addToCollection( recordTitle, recordArtist, recordYear ){
  //add a function to your script named addToCollection(title, artist, year)
  let record = {
    title: recordTitle,
    artist: recordArtist,
    year: recordYear,
  }
  console.log('add', record );
  collection.push(record);
  //when called, creates a new record object and pushes it into the "collection" array
    return (record);
  }

console.log(addToCollection ( 'Week Five', 'Emma', 2020 ));
console.log(addToCollection ( 'Snacks Plz', 'Dr Chips', 2018 ));
console.log(addToCollection ( 'Full of Snacks', 'Dr Chips', 2021 ));
console.log('array', collection);

//I am commenting out my attempt at the first stretch so that I can check what I started with the solve video

//create the function findRecord(title)
//function findRecord( recordTitle ){
  //if(findRecord.recordTitle( title ) === recordTitle )
    //return indexOf( 'Title' )
  // else return false
//}


//console.log(findRecord( 'Snacks Plz' ));
