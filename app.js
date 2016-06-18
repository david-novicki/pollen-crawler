var page = require('webpage').create();
var zip = null;
zip = 'zip';//insert zip here or get system.args[1]
var url = 'https://www.pollen.com/forecast/current/pollen/' + zip;
page.open(url, function(status) {
  let pollenToday = page.evaluate(function() {
    let forecastElements = document.getElementsByClassName('forecast-level');
    console.log(forecastElements[1].innerHTML);
    return forecastElements[1].innerHTML;
  });
  console.log('done');
  phantom.exit();
});