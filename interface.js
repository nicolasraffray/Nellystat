$(document).ready(function (){
  
  var thermostat = new Thermostat();
  var x = document.getElementById("myAudio")
  var y = document.getElementById("Shack")
  var image = document.getElementById("myDIV")

  function playNelly() {
    x.play();
  }
  
  function pauseNelly() {
    x.pause();
  }

  function displayHardWork(){
    $("html").css({"background-image" : "url('./../farmer.jpg')", "background-size" : "cover", "background-repeat" : "no-repeat", "height" : "100%"})
  }

  function displayNelly(){
    $("html").css({"background-image" : "url('./../nelly.jpg')", "background-size" : "cover", "background-repeat" : "no-repeat", "height" : "100%"})
  }
 
  $("#thermodisplay").text(thermostat.temperature + "°C");
  displayHardWork()


  $("#increase").click(function() {
    thermostat.increase()
    $("#thermodisplay").text(thermostat.temperature + "°C");
    if(thermostat.temperature >= 30){
      playNelly()
      displayNelly()
    };
  });

  $("#decrease").click(function() {
    thermostat.decrease()
    $("#thermodisplay").text(thermostat.temperature + "°C")
    if(thermostat.temperature < 30){
      pauseNelly()
      displayHardWork()
    } 
  });

  $("#reset").click(function() {
    thermostat.reset()
    pauseNelly()
    displayHardWork()
    $("#thermodisplay").text(thermostat.temperature + "°C")
  });

  function updateTemperature(){
    $('#temperature').text(thermostat.temperature)
    $('#temperature').attr('class',thermostat.usage())
  }

  $('*:checkbox').click(function() {
    if ($(this).is(":checked")) {
        thermostat.toggle();
    } else if ($(this).is(":not(:checked")){
        thermostat.toggle()}
  });

  $('#text').text(function(){
    var city = "london"
    $.get("http://api.openweathermap.org/data/2.5/weather?q="+ city +"&appid=1c91a074559e143366b0cc4f23ff3082&units=metric",function(data){
      $('#current-temp').text(data.main.temp + "°C");
  })})

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#input-city').val();
    $.get("http://api.openweathermap.org/data/2.5/weather?q="+ city +"&appid=1c91a074559e143366b0cc4f23ff3082&units=metric", function(data) {
      $('#current-temperature').text("It is " + data.main.temp  + "°C in " + city);
    })
  })
})