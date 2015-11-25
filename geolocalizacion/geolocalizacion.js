// function onLocation(position){
//   console.log('Your latitude is ' + position.coords.latitude);
//   console.log('Your longitude is ' + position.coords.longitude);
//   document.getElementById('position').innerHTML = 'Lat: ' + position.coords.latitude + ', lon: ' + position.coords.longitude;
// }

// function onError(error){
//   //Delivers an error object with information about the error
//   console.error(error);
// }

// if ("geolocation" in navigator){
//   console.log("ok!");

//   var options = {
//     enableHighAccuracy: true //retrieve more accurate position, takes longer
//   }

//   //navigator.geolocation.getCurrentPosition(onLocation, onError, options);
//   var watchId = navigator.geolocation.watchPosition(onLocation, onError);
//   //navigator.geolocation.clearWatch(watchId);

// }else{
//   console.log("oooooh!");
// }

if ("geolocation" in navigator) {
  var button = $('#where-am-i');
  button.on('click', getLocation);
} else {
  alert("Geolocation is not available")
}

function getLocation() {
  console.log('Getting location...');
  navigator.geolocation.getCurrentPosition(onLocation, onError, options);
}

var options = {
  enableHighAccuracy: true 
};

function onLocation (position) {
  displayMap(position.coords.latitude, position.coords.longitude);
}

function onError(error) {
  console.log("Getting location failed: " + error);
}

function displayMap(lat, lon) {
  var urlRoot = "https://maps.googleapis.com/maps/api/staticmap?markers=color:blue|label:I|";
  var urlParams = "&zoom=17&size=400x400";
  var url = urlRoot + lat + "," + lon + urlParams;

  $('img').attr('src',url);
}
