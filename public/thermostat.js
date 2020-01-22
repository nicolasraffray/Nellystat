function Thermostat(){
  const defaulttemp = 10
  this.powersavingmode = true
  this.temperature = 20;

  this.increase = function(){
    if (this.temperature < this._maxtemp()){
      this.temperature++;
      }
    };
  this.decrease = function(){
    if (this.temperature > defaulttemp){
      this.temperature--;
    }
  }
  this.toggle = function(){
    this.powersavingmode = !this.powersavingmode
  }

  this.usage = function(){
    if (this.temperature < 18){
      return "low-usage"
    }
    else if (this.temperature < 25){
      return "medium-usage"
    }
    else{
      return "high-usage"
    }
  }
  this._maxtemp = function(){
    return this.powersavingmode ? 25:32;
  }
  
  this.reset = function(){
    this.temperature = 20
  };
};