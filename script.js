class  Car{
	constructor(make, model) {
		this.make=make;
		this.model=model;
	}
		getMakeModel()
		{
			return `${this.make} ${this.model}`
		}
}

class SportsCar extends Car {
	constructor(make,model,topSpeed) {
		super(make,model);
		this.topSpeed=topSpeed;
	}
	getTopSpeed()
	{
		return this.topSpeed;
	}
}

// Example Usage:
const car = new SportsCar("Ferrari", "Testarossa", 200);

console.log(car.getMakeModel()); // Ferrari Testarossa
console.log(car.getTopSpeed());  // 200

window.Car = Car;
window.SportsCar = SportsCar;
