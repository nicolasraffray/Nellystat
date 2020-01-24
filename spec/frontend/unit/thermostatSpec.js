describe("Thermostat Model", function() {
  
var thermostat

  beforeEach(function() {
    thermostat = new Thermostat;
  });
  
  it("returns a default temperature instance variable", function() {
    expect(thermostat.temperature).toBe(20);
  });

  describe("#increase", function(){
    it("increases temperature by 1 when called", function() {
      thermostat.increase()
      expect(thermostat.temperature).toBe(21);
    })
    it("when power saving mode is on the tempreature will not go beyond 25", function(){
      for (let num = 0; num < 11; num++){
      thermostat.increase()
      };
      expect(thermostat.temperature).toBe(25)
      })
    it("when power saving mode is off the tempreature will not go beyond 32", function(){
      thermostat.toggle()
      for (let num = 0; num < 200; num++){
      thermostat.increase()
      };
      expect(thermostat.temperature).toBe(32)
      })
  });

  describe('#decrease', function(){
    it(" decreases tempreature by 1 when called", function() {
      thermostat.decrease()
      expect(thermostat.temperature).toBe(19);
    })
    it("has a default minimum of 10", function(){
      for (let num = 0; num < 11; num++){
      thermostat.decrease()
      };
      expect(thermostat.temperature).toBe(10)
    });
  });

  describe('powersavingmode', function(){
    it('defaults to true', function(){
      expect(thermostat.powersavingmode).toEqual(true)
    })
    it('changes to false when called', function(){
      thermostat.toggle()
      expect(thermostat.powersavingmode).toEqual(false)
    })
  })

  describe('#usage', function(){
    it('returns low usage when tempreature is below 18', function(){
      for (let num = 0; num < 3; num++){
        thermostat.decrease()
        };
      expect(thermostat.usage()).toBe("low-usage")
    });
    it('returns medium usage when tempreature is between 18 and 24', function(){
      expect(thermostat.usage()).toBe("medium-usage")
    });
    it('returns high usage when tempreature is above 25', function(){
      for (let num = 0; num < 100; num++){
        thermostat.increase()
        };
      expect(thermostat.usage()).toBe("high-usage")
    });
  })

  describe('#reset', function(){
    it('resets the temperature to 20', function(){
      thermostat.increase()
      thermostat.reset()
      expect(thermostat.temperature).toBe(20)
    })
  })

});

