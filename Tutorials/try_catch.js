/**
 * Link I've used to learn error handling in Javascript are:
 *    https://javascript.info/try-catch
 */


// EXAMPLE 1:
// try {
//   alert('Start of try runs');
//   singing();  // No singing function is declared in script
//   alert('End of try runs');
// } catch (err) {
//   alert(`Error has occurred!`);
// }



// EXAMPLE 2:
//    try...catch only works for runtime errors:
// try {
//   {{{{{{{{{{{{
// } catch (err) {
//   alert("The engine can't understand this code, it's invalid"); // The error will only be shown in console
// }



// EXAMPLE 3:
//    try...catch works synchronously
// try {
//   setTimeout(function() {
//     noSuchVariable; // script will die here. That’s because the function itself is executed later,
//                     // when the engine has already left the try...catch construct.
//   }, 1000);
// } catch (err) {
//   alert( "won't work" );
// }
//



// EXAMPLE 4:
//    The error object has 2 properties
// try {
//   singing();
// } catch (err) {
//   alert(err.name);
//   alert(err.message);
//   alert(err.stack);
//
//   alert(err);
// }



