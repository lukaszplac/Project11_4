$(function() {
	function Phone(brand, price, color) {
		this.brand = brand;
		this.price = price;
		this.color = color;
		this.isOn = false;

		Phone.prototype.logInfo = function() {
		var log = 'The phoen brand is ' + this.brand + '. Its color is ' + this.color + ' and you can buy it for ' + this.price;
		this.isOn ? log +='\nPhone is currently turned on' : log += '\nPhone is currently turned off';
		return log;
		}

		Phone.prototype.turnOnOff = function() {
		if (this.isOn) {
			console.log(this.brand + " is turning OFF...");
			this.isOn = false;
			}
			else  {
				console.log(this.brand + " is turning ON...");
				this.isOn = true;
			}
		}
	}

	var samsung = new Phone('samsung', '100$', 'silver');
	var iphone5s = new Phone('iphone5s', '150$', 'black');
	var motorola = new Phone('motorola', '80$', 'gold');

	console.log(samsung.logInfo());
	console.log(motorola.logInfo());
	console.log(iphone5s.logInfo())

	motorola.turnOnOff();
	console.log(motorola.logInfo());
})
