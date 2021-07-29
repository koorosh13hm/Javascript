



var theArray = [1, 2, 3, 4, 5];

// Outputting the array in its reverse order
theArray.slice().reverse()
  .forEach(function(item) {
    console.log(item);
  });

// Showing that theArray is intact
console.log(theArray);