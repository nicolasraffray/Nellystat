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
    $("html").css({"background-image" : "url('./../farmer.jpg')", 
    "background-size" : "cover", "background-repeat" : "no-repeat", "height" : "100%"})
  }

  function displayNelly(){
    $("html").css({"background-image" : "url('./../nelly.jpg')", 
    "background-size" : "cover", "background-repeat" : "no-repeat", "height" : "100%"})
  }

  function divMove(){
    $(".container").css({"flex-direction": "column"})
    $("h1,h2,h3,h4,h5,h6").css({"color":"rgb(0, 0, 0)"})
  }

  function divReset(){
    $(".container").css({"flex-direction": "row"})
    $("h1,h2,h3,h4,h5,h6").css({"color":"rgb(0, 0, 0)"})

  }
 
  $("#thermodisplay").text(thermostat.temperature + "oC");
  displayHardWork()


  $("#increase").click(function() {
    thermostat.increase()
    $("#thermodisplay").text(thermostat.temperature + "oC");
    if(thermostat.temperature >= 30){
      playNelly()
      displayNelly()
      divMove()
    };
  });

  $("#decrease").click(function() {
    thermostat.decrease()
    $("#thermodisplay").text(thermostat.temperature + "oC")
    if(thermostat.temperature < 30){
      pauseNelly()
      displayHardWork()
      divReset()
    } 
  });

  $("#reset").click(function() {
    thermostat.reset()
    pauseNelly()
    displayHardWork()
    divReset()
    $("#thermodisplay").text(thermostat.temperature + "oC")
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
      $('#current-temp').text(data.main.temp + "oC");
  })})

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#input-city').val();
    $.get("http://api.openweathermap.org/data/2.5/weather?q="+ city +"&appid=1c91a074559e143366b0cc4f23ff3082&units=metric", function(data) {
      $('#current-temperature').text("It is " + data.main.temp  + "oC in " + city);
    })
  })
})