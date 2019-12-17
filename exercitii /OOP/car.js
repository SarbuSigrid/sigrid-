var car = {
    make:"mercedesz",
    model:"c 200",
    year:2019,
    color:"white",
    passengers:5,
    mileage:2000,
    engineIson:false,
    fuel:50,
    maxFuell:50,
    mediumConsumption:7.5,
    refill:function(num) {
        if(this.fuel +num>this.maxFuel) {
            this.fuel=this.maxFuel;
            console.log("too much!");
        } else {
            this.fuel +=num;
        }
        
       

    },
    drive:function(distance) {
        if(this.distanceToEmpty() < distance) {
            console.log("too far");
            distance=this.distanceToEmpty();
        }
        consumption = distance* this.mediumConsumption/100;
        this.fuel-= consumption;
        this.mileage += distance;
    },
    distanceToEmpty:function() {
       return Math.round(this.fuel) /this.mediumConsumption*100;
    },

    
    stop:function() {
        if(this.engineIson) {
         console.log("Car stopped");
        }
         else {
        console.log("Car is already stopped");
        }
    },
   
 
   start: function() {
     if(!this.engineIson) {
         this.engineIson=true;
        console.log("Car started");
     } else {
         console.log("Car is already started");
     }
     
        
    }
}



car.mileage=2150
console.log(car.year);
console.log(car.mileage);
car.start();
car.start();

car.drive(100);
console.log(car.fuel);
car.drive(800);
console.log(car.fuel);
car.refill(30);
console.log(car.fuel);