//IIFE
(function () {

//Create variable for starting time
var now = new Date();
console.log(clock)



function formatHours (dateObj){
  var hours = dateObj.getHours();
  return (hours < 10) ? '0' + hours : hours;
};


var formattedHours = formatHours(now);
console.log('aaaa', formattedHours);

function formatMinutes (dateObj){
  var minutes = dateObj.getMinutes();
  return (minutes < 10) ? '0' + minutes : minutes;
};

var formattedMinutes = formatMinutes(now);
console.log('bbbb', formattedMinutes);

function formatSeconds (dateObj){
  var seconds = dateObj.getSeconds();
  return (seconds < 10) ? '0' + seconds : seconds;
};

var formattedSeconds = formatSeconds(now);
console.log('ccc', formattedSeconds);



// for(var minutes; minutes < 61; minutes++){
//   console.log(minutes);
// };

// for(var seconds; seconds < 61; seconds++){
//   console.log(seconds);
// };


//Display

var display = formattedHours + ':' + formattedMinutes + ':' + formattedSeconds;
  console.log(display)

var clock = document.querySelector('#clock');
   console.log(clock);

var textNode = document.createTextNode(display);

clock.appendChild(textNode);

} ());