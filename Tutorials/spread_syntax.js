



function myFunction(x, y, z) {
  let values = [x, y, z];
  values.forEach(function (item){
    console.log(item);
  })
}
let values = [0, 1, 2];
myFunction(...values);