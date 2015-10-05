//IIFE
(function () {

window.setInterval(function(){

//Create variable for starting time
var now = new Date();
console.log(clock)


//Format Hours
function formatHours (dateObj){
  var hours = dateObj.getHours();
  return (hours < 10) ? '0' + hours : hours;
};
var formattedHours = formatHours(now);
// console.log('aaaa', formattedHours);

//Format Minutes
function formatMinutes (dateObj){
  var minutes = dateObj.getMinutes();
  return (minutes < 10) ? '0' + minutes : minutes;
};
var formattedMinutes = formatMinutes(now);
// console.log('bbbb', formattedMinutes);

//Format Seconds
function formatSeconds (dateObj){
  var seconds = dateObj.getSeconds();
  return (seconds < 10) ? '0' + seconds : seconds;
};
var formattedSeconds = formatSeconds(now);
// console.log('ccc', formattedSeconds);



//Display
var currentTime = '#' + formattedHours + formattedMinutes + formattedSeconds;
  console.log(currentTime);

//var textNode= document.createTextNode(currentTime);
  $('#clock').text(currentTime).css('background-color', currentTime);
}, 1000);

} ());