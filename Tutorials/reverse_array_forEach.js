
let myArray = [];

for (let i=1; i<=13; i++){
  myArray.push( i );
}


myArray.reverse().forEach(function(item){
  if (item != 1){
    console.log(item + " Little Indians were remaining");
  } else {
    console.log(item + " Little Indian was remaining");
  }
});