# Nellystat

## Setup and Running
  - Clone or Fork this repo
  - cd into the views directory
  - run open index.html

To see the tests, cd into spec/frontend/unit, then run "open SpecRunner.html"

## About the Project

The main logic of the thermostat is done in the thermostat.js file which can be found in the folder named public. If the power saving mode is on the temperature will not be permitted to go above 25oC. Otherwise, the temperature cannot fall below 10oC or go above 32oC. 

If the temperature goes above 30oC the background changes to Nelly and a Nelly song starts playing. When the temperature goes below 30oC again the song is paused and the thermostat goes back to how it was before. 

The thermostat is also connected to the open weather map api. The current weather outside is the real current tempurature outside in London. If you type in a city into the text box you can get the current tempurature of any major city on the planet.

