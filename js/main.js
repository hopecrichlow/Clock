//IIFE
(function () {

window.setInterval(function(){

//Create variable for starting time, make a new date object
var now = new Date();
console.log(clock)


//Format Hours
function formatHours (dateObj){
  var hours = dateObj.getHours();
  return (hours < 10) ? '0' + hours : hours;
};
var formattedHours = formatHours(now);
// console.log('aaaa', formattedHours);

var hexHours = formattedHours.toString(16);
// console.log(hexHours);


//Format Minutes
function formatMinutes (dateObj){
  var minutes = dateObj.getMinutes();
  return (minutes < 10) ? '0' + minutes : minutes;
};
var formattedMinutes = formatMinutes(now);
// console.log('bbbb', formattedMinutes);

var hexMinutes = formattedMinutes.toString(16);
// console.log(hexMinutes);


//Format Seconds
function formatSeconds (dateObj){
  var seconds = dateObj.getSeconds();
  return (seconds < 10) ? '0' + seconds : seconds;
};
var formattedSeconds = formatSeconds(now);
// console.log('ccc', formattedSeconds);

var hexSeconds = formattedSeconds.toString(16);

// function secs (){
//   return (hexSeconds <= 9 || hexSeconds === 'a' || hexSeconds === 'b' || hexSeconds === 'c' || hexSeconds === 'd' || hexSeconds === 'e' || hexSeconds === 'f' || hexSeconds === 'g') ? hexSeconds + '0' : hexSeconds;
// };

//   if (a <= hexSeconds <= f ) {
//     return hexSeconds + '0';
// } else {
//     return hexSeconds; };
console.log(hexHours);
console.log(hexMinutes);
console.log(hexSeconds);

// function 

//Display
var currentTime = '#' + hexHours + hexMinutes + hexSeconds;
  console.log(currentTime);

//var textNode= document.createTextNode(currentTime);
  $('#clock').text(currentTime).css('background-color',currentTime);
}, 1000);

} ());