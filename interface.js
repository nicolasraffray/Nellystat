$(document).ready(function (){
  
  var thermostat = new Thermostat();
  var x = document.getElementById("myAudio")
  var y = document.getElementById("Shack")
  var image = document.getElementById("myDIV");

  
  // function playShack(){
  //   y.play();
  // }

  // function pauseShack(){
  //   y.pause()
  // }

  function playNelly() {
    x.play();
  }
  
  function pauseNelly() {
    x.pause();
  }
 
  $("#thermodisplay").text(thermostat.temperature);

  $("#increase").click(function() {
    thermostat.increase()
    $("#thermodisplay").text(thermostat.temperature);
    if(thermostat.temperature >= 30){
      playNelly()
      image.style.display = "block"
    }
  });

  $("#decrease").click(function() {
    thermostat.decrease()
    $("#thermodisplay").text(thermostat.temperature)
    if(thermostat.temperature <= 30){
      pauseNelly()
      image.style.display = "none"
    } else if(thermostat.temperature < 15){
      playShack()
    };
  });

  $("#reset").click(function() {
    thermostat.reset()
    $("#thermodisplay").text(thermostat.temperature)
    image.style.display = "none"
    pauseNelly()
    ;
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

  $.get("http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=1c91a074559e143366b0cc4f23ff3082&units=metric",function(data){
      $('#current-temp').text(data.main.temp);
  });

   
});